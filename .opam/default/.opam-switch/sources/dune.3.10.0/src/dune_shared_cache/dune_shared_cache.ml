open Stdune
open Dune_config
module Digest = Dune_digest
module Console = Dune_console
module Log = Dune_util.Log

include struct
  open Dune_engine
  module Targets = Targets
  module Cached_digest = Cached_digest
  module Execution_parameters = Execution_parameters
  module Result = Dune_engine.Rule_cache.Result
  module Action = Action
  module Action_to_sh = Action_to_sh
  module Scheduler = Scheduler
end

let shared_cache_key_string_for_log ~rule_digest ~head_target =
  sprintf "[%s] (%s)"
    (Digest.to_string rule_digest)
    (Path.Build.to_string head_target)

module Miss_reason = struct
  type t =
    | Cache_disabled
    | Cannot_go_in_shared_cache
    | Rerunning_for_reproducibility_check
    | Not_found_in_cache
    | Error of string

  let report ~rule_digest ~head_target reason =
    let reason =
      match reason with
      | Cache_disabled -> "cache disabled"
      | Cannot_go_in_shared_cache -> "can't go in shared cache"
      | Error exn -> sprintf "error: %s" exn
      | Rerunning_for_reproducibility_check ->
        "rerunning for reproducibility check"
      | Not_found_in_cache -> "not found in cache"
    in
    Console.print_user_message
      (User_message.make
         [ Pp.hbox
             (Pp.textf "Shared cache miss %s: %s"
                (shared_cache_key_string_for_log ~rule_digest ~head_target)
                reason)
         ])
end

module Make (S : sig
  val debug_shared_cache : bool

  val config : Dune_cache.Config.t

  val upload : rule_digest:Dune_digest.t -> unit Fiber.t

  val download : rule_digest:Dune_digest.t -> unit Fiber.t
end) =
struct
  open S

  let try_to_restore_from_shared_cache ~mode ~rule_digest ~head_target
      ~target_dir :
      (Digest.t Targets.Produced.t, Miss_reason.t) Result.t Fiber.t =
    let open Fiber.O in
    let+ () = download ~rule_digest in
    let key () = shared_cache_key_string_for_log ~rule_digest ~head_target in
    match Dune_cache.Local.restore_artifacts ~mode ~rule_digest ~target_dir with
    | Restored res ->
      (* it's a small departure from the general "debug cache" semantics that
         we're also printing successes, but it can be useful to see successes
         too if the goal is to understand when and how the file in the build
         directory appeared *)
      if debug_shared_cache then
        Log.info [ Pp.textf "cache restore success %s" (key ()) ];
      Result.Hit (Targets.Produced.of_file_list_exn res)
    | Not_found_in_cache -> Result.Miss Miss_reason.Not_found_in_cache
    | Error exn -> Miss (Error (Printexc.to_string exn))

  let lookup_impl ~rule_digest ~targets ~target_dir =
    match config with
    | Disabled -> Fiber.return (Result.Miss Miss_reason.Cache_disabled)
    | Enabled { storage_mode = mode; reproducibility_check } -> (
      match
        Dune_cache.Config.Reproducibility_check.sample reproducibility_check
      with
      | true ->
        (* CR-someday amokhov: Here we re-execute the rule, as in Jenga. To make
           [check_probability] more meaningful, we could first make sure that
           the shared cache actually does contain an entry for [rule_digest]. *)
        Fiber.return
          (Result.Miss Miss_reason.Rerunning_for_reproducibility_check)
      | false ->
        try_to_restore_from_shared_cache ~mode
          ~head_target:(Targets.Validated.head targets)
          ~rule_digest ~target_dir)

  let lookup ~can_go_in_shared_cache ~rule_digest ~targets ~target_dir :
      Digest.t Targets.Produced.t option Fiber.t =
    let open Fiber.O in
    let+ result =
      match can_go_in_shared_cache with
      | false ->
        Fiber.return (Result.Miss Miss_reason.Cannot_go_in_shared_cache)
      | true -> lookup_impl ~rule_digest ~targets ~target_dir
    in
    match result with
    | Hit result -> Some result
    | Miss reason ->
      (match (debug_shared_cache, reason) with
      | true, _ | false, Error _ ->
        (* Always log errors because they are not expected as a part of normal
           operation and might indicate a problem. *)
        Miss_reason.report reason ~rule_digest
          ~head_target:(Targets.Validated.head targets)
      | false, _ -> ());
      None

  (* If this function fails to store the rule to the shared cache, it returns
     [None] because we don't want this to be a catastrophic error. We simply log
     this incident and continue without saving the rule to the shared cache. *)
  let try_to_store_to_shared_cache ~mode ~rule_digest ~action ~file_targets :
      Digest.t Targets.Produced.t option Fiber.t =
    let open Fiber.O in
    let hex = Digest.to_string rule_digest in
    let pp_error msg =
      let action = Action.for_shell action |> Action_to_sh.pp in
      Pp.concat
        [ Pp.textf "cache store error [%s]: %s after executing" hex msg
        ; Pp.space
        ; Pp.char '('
        ; action
        ; Pp.char ')'
        ]
    in
    let update_cached_digests ~targets_and_digests =
      List.iter targets_and_digests ~f:(fun (target, digest) ->
          Cached_digest.set target digest);
      Some (Targets.Produced.of_file_list_exn targets_and_digests)
    in
    match
      Path.Build.Map.to_list_map file_targets ~f:(fun target () ->
          Dune_cache.Local.Target.create target)
      |> Option.List.all
    with
    | None -> Fiber.return None
    | Some targets -> (
      let compute_digest ~executable path =
        let digest () = Digest.file_with_executable_bit ~executable path in
        match Config.(get background_digests) with
        | `Disabled -> Fiber.return (Stdune.Result.try_with digest)
        | `Enabled -> (
          Scheduler.async digest >>| function
          | Ok _ as s -> s
          | Error exn -> Error exn.exn)
      in
      Dune_cache.Local.store_artifacts ~mode ~rule_digest ~compute_digest
        targets
      >>= function
      | Stored targets_and_digests ->
        let+ () = upload ~rule_digest in
        Log.info [ Pp.textf "cache store success [%s]" hex ];
        update_cached_digests ~targets_and_digests
      | Already_present targets_and_digests ->
        Log.info [ Pp.textf "cache store skipped [%s]: already present" hex ];
        Fiber.return (update_cached_digests ~targets_and_digests)
      | Error (Unix.Unix_error (Unix.EXDEV, "link", file)) ->
        (* We cannot hardlink across partitions so we kindly let the user know
           that they should use copy cache instead. *)
        Log.info
          [ Pp.concat
              [ Pp.textf "cache store error [%s]:" hex
              ; Pp.space
              ; Pp.textf
                  "cannot link %s between file systems. Use \
                   (cache-storage-mode copy) instead."
                  file
              ]
          ];
        Fiber.return None
      | Error exn ->
        Log.info [ pp_error (Printexc.to_string exn) ];
        Fiber.return None
      | Will_not_store_due_to_non_determinism sexp ->
        (* CR-someday amokhov: We should systematically log all warnings. *)
        Log.info [ pp_error (Sexp.to_string sexp) ];
        User_warning.emit [ pp_error (Sexp.to_string sexp) ];
        Fiber.return None)

  let compute_target_digests_or_raise_error exec_params ~loc ~produced_targets :
      Digest.t Targets.Produced.t =
    let compute_digest =
      (* Remove write permissions on targets. A first theoretical reason is that
         the build process should be a computational graph and targets should
         not change state once built. A very practical reason is that enabling
         the cache will remove write permission because of hardlink sharing
         anyway, so always removing them enables to catch mistakes earlier. *)
      (* FIXME: searching the dune version for each single target seems way
         suboptimal. This information could probably be stored in rules
         directly. *)
      let remove_write_permissions =
        Execution_parameters.should_remove_write_permissions_on_generated_files
          exec_params
      in
      Cached_digest.refresh ~allow_dirs:true ~remove_write_permissions
    in
    match
      Targets.Produced.Option.mapi produced_targets ~f:(fun target () ->
          compute_digest target |> Cached_digest.Digest_result.to_option)
    with
    | Some result -> result
    | None -> (
      let missing, errors =
        let process_target target (missing, errors) =
          match compute_digest target with
          | Ok (_ : Digest.t) -> (missing, errors)
          | No_such_file -> (target :: missing, errors)
          | Broken_symlink ->
            let error = Pp.verbatim "Broken symbolic link" in
            (missing, (target, error) :: errors)
          | Cyclic_symlink ->
            let error = Pp.verbatim "Cyclic symbolic link" in
            (missing, (target, error) :: errors)
          | Unexpected_kind file_kind ->
            let error =
              Pp.verbatim
                (sprintf "Unexpected file kind %S (%s)"
                   (File_kind.to_string file_kind)
                   (File_kind.to_string_hum file_kind))
            in
            (missing, (target, error) :: errors)
          | Unix_error (error, syscall, arg) ->
            let unix_error = Unix_error.Detailed.create error ~syscall ~arg in
            (missing, (target, Unix_error.Detailed.pp unix_error) :: errors)
          | Error exn ->
            let error =
              Pp.verbatim
                (match exn with
                | Sys_error msg ->
                  let prefix =
                    let expected_syscall_path =
                      Path.to_string (Path.build target)
                    in
                    expected_syscall_path ^ ": "
                  in
                  String.drop_prefix_if_exists ~prefix msg
                | exn -> Printexc.to_string exn)
            in
            (missing, (target, error) :: errors)
        in
        Path.Build.Map.foldi (Targets.Produced.all_files produced_targets)
          ~init:([], []) ~f:(fun target () -> process_target target)
      in
      match (missing, errors) with
      | [], [] ->
        Code_error.raise
          "compute_target_digests_or_raise_error: spurious target digest \
           failure"
          [ ("targets", Targets.Produced.to_dyn produced_targets) ]
      | missing, errors ->
        User_error.raise ~loc
          ((match missing with
           | [] -> []
           | _ ->
             [ Pp.textf "Rule failed to generate the following targets:"
             ; Pp.enumerate ~f:Path.pp (List.rev_map ~f:Path.build missing)
             ])
          @
          match errors with
          | [] -> []
          | _ ->
            [ Pp.textf "Error trying to read targets after a rule was run:"
            ; Pp.enumerate (List.rev errors) ~f:(fun (target, error) ->
                  Pp.concat ~sep:(Pp.verbatim ": ")
                    [ Path.pp (Path.build target); error ])
            ]))

  let examine_targets_and_store ~can_go_in_shared_cache ~loc ~rule_digest
      ~execution_parameters ~action
      ~(produced_targets : unit Targets.Produced.t) :
      Digest.t Targets.Produced.t Fiber.t =
    match config with
    | Enabled { storage_mode = mode; reproducibility_check = _ }
      when can_go_in_shared_cache -> (
      let open Fiber.O in
      let+ produced_targets_with_digests =
        try_to_store_to_shared_cache ~mode ~rule_digest
          ~file_targets:produced_targets.files ~action
      in
      match produced_targets_with_digests with
      | Some produced_targets_with_digests -> produced_targets_with_digests
      | None ->
        compute_target_digests_or_raise_error execution_parameters ~loc
          ~produced_targets)
    | _ ->
      Fiber.return
        (compute_target_digests_or_raise_error execution_parameters ~loc
           ~produced_targets)
end

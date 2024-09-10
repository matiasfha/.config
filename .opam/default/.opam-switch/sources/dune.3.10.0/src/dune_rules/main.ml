open Import

let () = Inline_tests.linkme

type build_system =
  { conf : Dune_load.conf
  ; contexts : Context.t list
  ; scontexts : Super_context.t Context_name.Map.t
  }

let implicit_default_alias dir =
  match Path.Build.drop_build_context dir with
  | None -> Memo.return None
  | Some src_dir -> (
    let open Memo.O in
    Source_tree.find_dir src_dir >>| function
    | None -> None
    | Some src_dir ->
      let default_alias =
        let dune_version =
          Source_tree.Dir.project src_dir |> Dune_project.dune_version
        in
        if dune_version >= (2, 0) then Alias.Name.all else Alias.Name.install
      in
      Some
        (Action_builder.ignore (Alias_rec.dep_on_alias_rec default_alias dir)))

let execution_parameters =
  let f path =
    let open Memo.O in
    let+ dir = Source_tree.nearest_dir path
    and+ ep = Execution_parameters.default in
    Dune_project.update_execution_parameters (Source_tree.Dir.project dir) ep
  in
  let memo =
    Memo.create "execution-parameters-of-dir"
      ~input:(module Path.Source)
      ~cutoff:Execution_parameters.equal f
  in
  fun ~dir -> Memo.exec memo dir

let init ?(action_runner = fun _ -> None) ~stats ~sandboxing_preference
    ~cache_config ~(cache_debug_flags : Dune_engine.Cache_debug_flags.t) () :
    unit =
  let promote_source ~chmod ~delete_dst_if_it_is_a_directory ~src ~dst ctx =
    let open Fiber.O in
    let* ctx =
      Memo.run
        (Memo.Option.map ctx ~f:(fun (ctx : Build_context.t) ->
             Context.DB.get ctx.name))
    in
    let conf = Artifact_substitution.conf_of_context ctx in
    let src = Path.build src in
    let dst = Path.source dst in
    Artifact_substitution.copy_file ~chmod ~delete_dst_if_it_is_a_directory ~src
      ~dst ~conf ()
  in
  let module Shared_cache = Dune_shared_cache.Make (struct
    let debug_shared_cache = cache_debug_flags.shared_cache

    let config = cache_config

    let upload ~rule_digest:_ = Fiber.return ()

    let download ~rule_digest:_ = Fiber.return ()
  end) in
  Build_config.set ~stats ~sandboxing_preference ~promote_source
    ~contexts:
      (Memo.lazy_ (fun () ->
           let open Memo.O in
           Workspace.workspace () >>| Workspace.build_contexts))
    ~cache_config ~cache_debug_flags
    ~rule_generator:(module Gen_rules)
    ~implicit_default_alias ~execution_parameters
    ~source_tree:(module Source_tree)
    ~shared_cache:(module Shared_cache)
    ~action_runner

let get () =
  let open Memo.O in
  let* conf = Dune_load.load () in
  let* contexts = Context.DB.all () in
  let* scontexts = Memo.Lazy.force Super_context.all in
  let* () = Super_context.all_init_deferred () in
  Memo.return { conf; contexts; scontexts }

let find_context_exn t ~name =
  match List.find t.contexts ~f:(fun c -> Context_name.equal c.name name) with
  | Some ctx -> ctx
  | None ->
    User_error.raise
      [ Pp.textf "Context %S not found!" (Context_name.to_string name) ]

let find_scontext_exn t ~name =
  match Context_name.Map.find t.scontexts name with
  | Some ctx -> ctx
  | None ->
    User_error.raise
      [ Pp.textf "Context %S not found!" (Context_name.to_string name) ]

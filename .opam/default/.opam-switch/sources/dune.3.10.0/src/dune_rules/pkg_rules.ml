open Import
open Memo.O
open Dune_pkg

(* TODO
   - substitutions
   - post dependencies
   - build dependencies
   - cross compilation
   - filters
   - stage forms: with-test, with-doc, with-dev-setup
   - full support for dune actions
   - initialize context using packages in lock file
   - sandboxing
*)

type sys_poll_vars =
  { os_version : string option
  ; os_distribution : string option
  ; os_family : string option
  }

let sys_poll =
  let path = Env_path.path Stdune.Env.initial in
  let sys_poll_memo key = Memo.of_reproducible_fiber @@ key ~path in
  Memo.lazy_ (fun () ->
      let open Memo.O in
      let* os_version = sys_poll_memo Sys_poll.os_version in
      let* os_distribution = sys_poll_memo Sys_poll.os_distribution in
      let+ os_family = sys_poll_memo Sys_poll.os_family in
      { os_version; os_distribution; os_family })

module Variable = struct
  type value = OpamVariable.variable_contents =
    | B of bool
    | S of string
    | L of string list

  type t = string * value

  let dyn_of_value : value -> Dyn.t =
    let open Dyn in
    function
    | B b -> variant "Bool" [ bool b ]
    | S s -> variant "String" [ string s ]
    | L xs -> variant "Strings" [ list string xs ]

  let dune_value : value -> Value.t list = function
    | B b -> [ String (Bool.to_string b) ]
    | S s -> [ String s ]
    | L s -> List.map s ~f:(fun x -> Value.String x)

  let to_dyn (name, value) = Dyn.(pair string dyn_of_value (name, value))
end

module Pkg_info = struct
  include Dune_pkg.Lock_dir.Pkg_info

  let variables t =
    String.Map.of_list_exn
      [ ("name", Variable.S (Package.Name.to_string t.name))
      ; ("version", S t.version)
      ; ("dev", B t.dev)
      ]
end

module Lock_dir = struct
  include Dune_pkg.Lock_dir

  module Load = Make_load (struct
    include Memo

    let readdir_with_kinds path =
      Fs_memo.dir_contents (In_source_dir path) >>| function
      | Error _ ->
        (* TODO *)
        User_error.raise [ Pp.text "" ]
      | Ok content -> Fs_cache.Dir_contents.to_list content

    let with_lexbuf_from_file path ~f =
      Fs_memo.with_lexbuf_from_file (In_source_dir path) ~f
  end)

  let get_path ctx =
    let+ workspace = Workspace.workspace () in
    match
      List.find_map workspace.contexts ~f:(fun ctx' ->
          match Context_name.equal (Workspace.Context.name ctx') ctx with
          | false -> None
          | true -> Some ctx')
    with
    | None -> default_path
    | Some (Default { lock; _ }) -> Option.value lock ~default:default_path
    | Some (Opam _) -> assert false

  let get (ctx : Context_name.t) : t Memo.t = get_path ctx >>= Load.load
end

module Paths = struct
  type t =
    { source_dir : Path.Build.t
    ; target_dir : Path.Build.t
    ; extra_sources : Path.Build.t
    ; name : Package.Name.t
    ; install_roots : Path.t Install.Roots.t Lazy.t
    ; install_paths : Install.Paths.t Lazy.t
    }

  let install_roots ~target_dir =
    Path.build target_dir |> Install.Roots.opam_from_prefix

  let install_paths roots package = Install.Paths.make ~package ~roots

  let of_root name ~root =
    let source_dir = Path.Build.relative root "source" in
    let target_dir = Path.Build.relative root "target" in
    let extra_sources = Path.Build.relative root "extra_source" in
    let install_roots = lazy (install_roots ~target_dir) in
    let install_paths = lazy (install_paths (Lazy.force install_roots) name) in
    { source_dir
    ; target_dir
    ; extra_sources
    ; name
    ; install_paths
    ; install_roots
    }

  let extra_source t extra_source =
    Path.Build.append_local t.extra_sources extra_source

  let make name (ctx : Context_name.t) =
    let build_dir = Context_name.build_dir ctx in
    let root =
      Path.Build.L.relative build_dir [ ".pkg"; Package.Name.to_string name ]
    in
    of_root name ~root

  let install_cookie' target_dir = Path.Build.relative target_dir "cookie"

  let install_cookie t = install_cookie' t.target_dir

  let install_file t =
    Path.Build.relative t.source_dir
      (sprintf "%s.install" (Package.Name.to_string t.name))

  let config_file t =
    Path.Build.relative t.source_dir
      (sprintf "%s.config" (Package.Name.to_string t.name))

  let install_paths t = Lazy.force t.install_paths

  let install_roots t = Lazy.force t.install_roots
end

module Install_cookie = struct
  (* The install cookie represents a serialized representation of all the
     installed artifacts and variables. *)

  type t =
    { files : Path.t list Section.Map.t
    ; variables : Variable.t list
    }

  let to_dyn { files; variables } =
    let open Dyn in
    record
      [ ("files", Section.Map.to_dyn (list Path.to_dyn) files)
      ; ("variables", list Variable.to_dyn variables)
      ]

  include Dune_util.Persistent.Make (struct
    type nonrec t = t

    let name = "INSTALL-COOKIE"

    let version = 1

    let to_dyn = to_dyn

    let test_example () = { files = Section.Map.empty; variables = [] }
  end)

  let load_exn f =
    match load f with
    | None -> User_error.raise [ Pp.text "unable to load" ]
    | Some f -> f
end

module Env_update = struct
  include Dune_lang.Action.Env_update

  let update kind ~new_v ~old_v ~f =
    if new_v = "" then old_v
    else
      match kind with
      | `Colon ->
        let old_v = Option.value ~default:[] old_v in
        Some (f ~old_v ~new_v)
      | `Plus -> (
        match old_v with
        | None | Some [] -> Some [ Value.String new_v ]
        | Some old_v -> Some (f ~old_v ~new_v))

  let append = update ~f:(fun ~old_v ~new_v -> old_v @ [ Value.String new_v ])

  let prepend = update ~f:(fun ~old_v ~new_v -> Value.String new_v :: old_v)

  let set env { op; var = k; value = new_v } =
    Env.Map.update env k ~f:(fun old_v ->
        let append = append ~new_v ~old_v in
        let prepend = prepend ~new_v ~old_v in
        match op with
        | Eq ->
          if new_v = "" then if Sys.win32 then None else Some [ String "" ]
          else Some [ Value.String new_v ]
        | PlusEq -> prepend `Plus
        | ColonEq -> prepend `Colon
        | EqPlus -> append `Plus
        | EqColon -> append `Colon
        | EqPlusEq ->
          (* TODO nobody uses this AFAIK *)
          assert false)

  let string_of_env_values values =
    List.map values ~f:(function
      | Value.String s -> s
      | Dir s | Path s -> Path.to_absolute_filename s)
    |> Bin.encode_strings
end

module Pkg = struct
  module Id = Id.Make ()

  type t =
    { id : Id.t
    ; build_command : Action_unexpanded.t option
    ; install_command : Action_unexpanded.t option
    ; deps : t list
    ; info : Pkg_info.t
    ; paths : Paths.t
    ; files_dir : Path.Source.t
    ; mutable exported_env : string Env_update.t list
    }

  module Top_closure = Top_closure.Make (Id.Set) (Monad.Id)

  let top_closure deps =
    Top_closure.top_closure deps ~key:(fun t -> t.id) ~deps:(fun t -> t.deps)

  let deps_closure t =
    match top_closure t.deps with
    | Ok s -> s
    | Error _ -> assert false

  let source_files t ~loc =
    let rec loop root acc path =
      let full_path = Path.External.append_local root path in
      let* contents = Fs_memo.dir_contents (External full_path) in
      match contents with
      | Error e ->
        User_error.raise ~loc
          [ Pp.textf "Unable to read %s"
              (Path.External.to_string_maybe_quoted full_path)
          ; Unix_error.Detailed.pp e
          ]
      | Ok contents ->
        let contents = Fs_cache.Dir_contents.to_list contents in
        let files, dirs =
          List.partition_map contents ~f:(fun (name, kind) ->
              (* TODO handle links and cycles correctly *)
              match kind with
              | S_DIR -> Right name
              | _ -> Left name)
        in
        let acc =
          Path.Local.Set.of_list_map files ~f:(Path.Local.relative path)
          |> Path.Local.Set.union acc
        in
        let+ dirs =
          Memo.parallel_map dirs ~f:(fun dir ->
              let dir = Path.Local.relative path dir in
              loop root Path.Local.Set.empty dir)
        in
        Path.Local.Set.union_all (acc :: dirs)
    in
    match t.info.source with
    | None -> Memo.return Path.Local.Set.empty
    | Some (External_copy (_, root)) ->
      loop root Path.Local.Set.empty Path.Local.root
    | Some (Fetch _) -> assert false

  let package_deps t =
    deps_closure t
    |> List.fold_left ~init:Dep.Set.empty ~f:(fun acc t ->
           Path.build t.paths.target_dir |> Dep.file |> Dep.Set.add acc)

  let build_env =
    let add_to_path env var what =
      Env.Map.update env var ~f:(fun paths ->
          let paths = Option.value paths ~default:[] in
          Some (Value.Dir (Path.build what) :: paths))
    in
    fun t ->
      deps_closure t
      |> List.fold_left ~init:Env.Map.empty ~f:(fun env t ->
             let env =
               let roots =
                 Paths.install_roots t.paths
                 |> Install.Roots.map ~f:Path.as_in_build_dir_exn
               in
               let init = add_to_path env Env_path.var roots.bin in
               let vars = Install.Roots.to_env_without_path roots in
               List.fold_left vars ~init ~f:(fun acc (var, path) ->
                   add_to_path acc var path)
             in
             List.fold_left t.exported_env ~init:env ~f:Env_update.set)

  let exported_env t =
    let base =
      Env.Map.of_list_exn
        [ ("OPAM_SWITCH_PREFIX", Path.Build.to_string t.paths.target_dir)
        ; ("CDPATH", "")
        ; ("MAKELEVEL", "")
        ; ("OPAM_PACKAGE_NAME", Package.Name.to_string t.info.name)
        ; ("OPAM_PACKAGE_VERSION", t.info.version)
        ; ("OPAMCLI", "2.0")
        ]
    in
    let env = build_env t |> Env.Map.map ~f:Env_update.string_of_env_values in
    (* TODO: Run actions in a constrained environment. [Env.initial] is the
       environment from which dune was executed, and some of the environment
       variables may affect builds in unintended ways and make builds less
       reproducible. However other environment variables must be set in order
       for build actions to run successfully, such as $PATH on systems where the
       shell's default $PATH variable doesn't include the location of standard
       programs or build tools (e.g. NixOS). *)
    Env.extend Env.initial ~vars:(Env.Map.superpose base env)
end

module Pkg_installed = struct
  type t = { cookie : Install_cookie.t Action_builder.t }

  let of_paths (paths : Paths.t) =
    let cookie =
      let open Action_builder.O in
      let path = Path.build @@ Paths.install_cookie paths in
      let+ () = path |> Dep.file |> Action_builder.dep in
      Install_cookie.load_exn path
    in
    { cookie }
end

module Substitute = struct
  module Spec = struct
    type ('path, 'target) t = 'path * 'target

    let name = "substitute"

    let version = 1

    let bimap (i, o) f g = (f i, g o)

    let is_useful_to ~distribute:_ ~memoize = memoize

    let encode (i, o) input output : Dune_lang.t =
      List [ Dune_lang.atom_or_quoted_string name; input i; output o ]

    let action _ ~ectx:_ ~eenv:_ = assert false
  end

  let action ~input ~output =
    let module M = struct
      type path = Path.t

      type target = Path.Build.t

      module Spec = Spec

      let v = (input, output)
    end in
    Action.Extension (module M)
end

module Action_expander = struct
  module Expander = struct
    type t =
      { paths : Paths.t
      ; artifacts : Path.t Filename.Map.t
      ; deps : (Variable.value String.Map.t * Paths.t) Package.Name.Map.t
      ; context : Context_name.t
      ; version : string
      ; env : Value.t list Env.Map.t
      }

    let map_exe _ x =
      (* TODO *)
      x

    let dune_section_of_pform : Pform.Var.Pkg.Section.t -> Section.t = function
      | Lib -> Lib
      | Libexec -> Libexec
      | Bin -> Bin
      | Sbin -> Sbin
      | Toplevel -> Toplevel
      | Share -> Share
      | Etc -> Etc
      | Doc -> Doc
      | Stublibs -> Stublibs
      | Man -> Man
      | Misc -> Misc

    let section_dir_of_root (roots : _ Install.Roots.t)
        (section : Pform.Var.Pkg.Section.t) =
      match section with
      | Lib -> roots.lib_root
      | Libexec -> roots.libexec_root
      | Bin -> roots.bin
      | Sbin -> roots.sbin
      | Share -> roots.share_root
      | Etc -> roots.etc_root
      | Doc -> roots.doc_root
      | Man -> roots.man
      | Toplevel -> Path.relative roots.lib_root "toplevel"
      | Stublibs -> Path.relative roots.lib_root "stublibs"
      | Misc -> assert false

    let sys_poll_var accessor =
      let+ map = Memo.Lazy.force sys_poll in
      match accessor map with
      | Some v -> [ Value.String v ]
      | None ->
        (* TODO: in OPAM an unset variable evaluates to false, but we
           can't represent that in a string so it evaluates to an empty
           string instead *)
        [ Value.String "" ]

    let expand_pform
        { env = _; paths; artifacts = _; context; deps; version = _ } ~source
        (pform : Pform.t) : Value.t list Memo.t =
      let loc = Dune_sexp.Template.Pform.loc source in
      match pform with
      | Var (Pkg Switch) -> Memo.return [ Value.String "dune" ]
      | Var (Pkg Os_version) ->
        sys_poll_var (fun { os_version; _ } -> os_version)
      | Var (Pkg Os_distribution) ->
        sys_poll_var (fun { os_distribution; _ } -> os_distribution)
      | Var (Pkg Os_family) -> sys_poll_var (fun { os_family; _ } -> os_family)
      | Var (Pkg Build) ->
        Memo.return [ Value.Dir (Path.build paths.source_dir) ]
      | Var (Pkg Prefix) ->
        Memo.return [ Value.Dir (Path.build paths.target_dir) ]
      | Var (Pkg User) -> Memo.return [ Value.String (Unix.getlogin ()) ]
      | Var (Pkg Jobs) -> Memo.return [ Value.String "1" ]
      | Var (Pkg Arch) -> Memo.return [ Value.String (assert false) ]
      | Var Make ->
        (* TODO *)
        assert false
      | Var (Pkg Group) ->
        let group = Unix.getgid () |> Unix.getgrgid in
        Memo.return [ Value.String group.gr_name ]
      | Var (Pkg (Section_dir section)) ->
        let roots = Paths.install_roots paths in
        let dir = section_dir_of_root roots section in
        Memo.return [ Value.Dir dir ]
      | Macro (Pkg, arg) -> (
        match String.split arg ~on:':' with
        | [ "var"; name; var ] -> (
          let variables, paths =
            let name =
              if name = "_" then paths.name else Package.Name.of_string name
            in
            match Package.Name.Map.find deps name with
            | None -> (String.Map.empty, None)
            | Some (var, paths) -> (var, Some paths)
          in
          let present = Option.is_some paths in
          match String.Map.find variables var with
          | Some v -> Memo.return @@ Variable.dune_value v
          | None -> (
            match var with
            | "pinned" -> Memo.return [ Value.String "false" ]
            | "enable" ->
              Memo.return
                [ Value.String (if present then "enable" else "disable") ]
            | "installed" ->
              Memo.return [ Value.String (Bool.to_string present) ]
            | _ -> (
              match paths with
              | None -> assert false
              | Some paths -> (
                match Pform.Var.Pkg.Section.of_string var with
                | None ->
                  User_error.raise ~loc [ Pp.textf "invalid section %S" var ]
                | Some section ->
                  let section = dune_section_of_pform section in
                  let install_paths = Paths.install_paths paths in
                  Memo.return
                    [ Value.Dir (Install.Paths.get install_paths section) ]))))
        | _ -> assert false)
      | Var Context_name ->
        Memo.return [ Value.String (Context_name.to_string context) ]
      | _ -> Expander0.isn't_allowed_in_this_position ~source

    let expand_pform_gen t =
      String_expander.Memo.expand ~f:(expand_pform t)
        ~dir:(Path.build t.paths.source_dir)

    let expand_pform = expand_pform_gen ~mode:Many

    let expand_exe t sw :
        ((Path.t, Action.Prog.Not_found.t) result * Value.t list) Memo.t =
      let dir = Path.build t.paths.source_dir in
      let* prog, args = expand_pform_gen t sw ~mode:At_least_one in
      let+ prog =
        let loc = String_with_vars.loc sw in
        match prog with
        | Value.Dir p ->
          User_error.raise ~loc
            [ Pp.textf "%s is a directory and cannot be used as an executable"
                (Path.to_string_maybe_quoted p)
            ]
        | Path p -> Memo.return @@ Ok p
        | String program -> (
          match Filename.analyze_program_name program with
          | Relative_to_current_dir | Absolute ->
            Memo.return @@ Ok (Path.relative dir program)
          | In_path -> (
            match Filename.Map.find t.artifacts program with
            | Some s -> Memo.return @@ Ok s
            | None -> (
              let+ path =
                let path = Global.env () |> Env_path.path in
                Which.which ~path program
              in
              match path with
              | Some p -> Ok p
              | None ->
                Error
                  (Action.Prog.Not_found.create ~program ~context:t.context
                     ~loc:(Some loc) ()))))
      in
      let prog = Result.map prog ~f:(map_exe t) in
      (prog, args)
  end

  let rec expand (action : Action_unexpanded.t) ~(expander : Expander.t) =
    let dir = Path.build expander.paths.source_dir in
    match action with
    | Run (exe, args) ->
      let* exe, more_args = Expander.expand_exe expander exe in
      let+ args = Memo.parallel_map args ~f:(Expander.expand_pform expander) in
      let args = more_args @ List.concat args |> Value.L.to_strings ~dir in
      Action.Run (exe, Array.Immutable.of_list args)
    | Progn t ->
      let+ args = Memo.parallel_map t ~f:(expand ~expander) in
      Action.Progn args
    | System arg ->
      let+ arg = Expander.expand_pform_gen ~mode:Single expander arg in
      let arg = arg |> Value.to_string ~dir in
      Action.System arg
    | Patch p ->
      let* input = Expander.expand_pform_gen ~mode:Single expander p in
      let input = input |> Value.to_string ~dir in
      let+ patch =
        let path = Global.env () |> Env_path.path in
        let program = "patch" in
        Which.which ~path program >>| function
        | Some p -> Ok p
        | None ->
          let loc = Some (String_with_vars.loc p) in
          Error
            (Action.Prog.Not_found.create ~context:expander.context ~program
               ~loc ())
      in
      (* TODO opam has a preprocessing step that we should probably apply *)
      Action.Run (patch, Array.Immutable.of_array [| "-p1"; "-i"; input |])
    | Substitute (input, output) ->
      let* input = Expander.expand_pform_gen ~mode:Single expander input in
      let input = input |> Value.to_path ~dir in
      let+ output = Expander.expand_pform_gen ~mode:Single expander output in
      let output = output |> Value.to_path ~dir |> Path.as_in_build_dir_exn in
      Substitute.action ~input ~output
    | Withenv (updates, action) ->
      let* action = expand action ~expander in
      let+ _env, updates =
        Memo.List.fold_left ~init:(expander.env, []) updates
          ~f:(fun (env, updates) ({ Env_update.op = _; var; value } as update)
             ->
            let+ value =
              let expander = { expander with env } in
              let+ value =
                Expander.expand_pform_gen expander value ~mode:Single
              in
              Value.to_string ~dir value
            in
            let env = Env_update.set env { update with value } in
            let update =
              let value =
                match Env.Map.find env var with
                | Some v -> Env_update.string_of_env_values v
                | None ->
                  (* TODO *)
                  ""
              in
              (var, value)
            in
            (env, update :: updates))
      in
      List.fold_left updates ~init:action ~f:(fun action (k, v) ->
          Action.Setenv (k, v, action))
    | _ ->
      (* TODO *)
      assert false

  let artifacts_and_deps closure =
    Memo.parallel_map closure ~f:(fun (pkg : Pkg.t) ->
        let cookie = (Pkg_installed.of_paths pkg.paths).cookie in
        Action_builder.run cookie Eager
        |> Memo.map ~f:(fun ((cookie : Install_cookie.t), _) -> (pkg, cookie)))
    |> Memo.map ~f:(fun cookies ->
           List.fold_left cookies
             ~init:(Filename.Map.empty, Package.Name.Map.empty)
             ~f:(fun
                  (bins, dep_info)
                  ((pkg : Pkg.t), (cookie : Install_cookie.t))
                ->
               let bins =
                 Section.Map.Multi.find cookie.files Bin
                 |> List.fold_left ~init:bins ~f:(fun acc bin ->
                        Filename.Map.set acc (Path.basename bin) bin)
               in
               let dep_info =
                 let variables =
                   String.Map.superpose
                     (String.Map.of_list_exn cookie.variables)
                     (Pkg_info.variables pkg.info)
                 in
                 Package.Name.Map.add_exn dep_info pkg.info.name
                   (variables, pkg.paths)
               in
               (bins, dep_info)))

  let expander context (pkg : Pkg.t) =
    let+ artifacts, deps = Pkg.deps_closure pkg |> artifacts_and_deps in
    let env = Pkg.build_env pkg in
    let deps =
      Package.Name.Map.add_exn deps pkg.info.name
        (Pkg_info.variables pkg.info, pkg.paths)
    in
    { Expander.paths = pkg.paths
    ; artifacts
    ; context
    ; deps
    ; version = pkg.info.version
    ; env
    }

  let expand context (pkg : Pkg.t) action =
    let* expander = expander context pkg in
    let+ action =
      expand action ~expander >>| Action.chdir (Path.build pkg.paths.source_dir)
    in
    (* TODO copying is needed because patch/substitute might be present *)
    Action.Full.make ~sandbox:Sandbox_config.needs_sandboxing action
    |> Action_builder.return |> Action_builder.with_no_targets

  let build_command context (pkg : Pkg.t) =
    Option.map pkg.build_command ~f:(expand context pkg)

  let install_command context (pkg : Pkg.t) =
    Option.map pkg.install_command ~f:(expand context pkg)

  let exported_env (expander : Expander.t) (env : _ Env_update.t) =
    let+ value =
      let+ value = Expander.expand_pform_gen expander env.value ~mode:Single in
      value |> Value.to_string ~dir:(Path.build expander.paths.source_dir)
    in
    { env with value }
end

type db = Lock_dir.Pkg.t Package.Name.Map.t

module rec Resolve : sig
  val resolve : db -> Context_name.t -> Loc.t * Package.Name.t -> Pkg.t Memo.t
end = struct
  open Resolve

  let resolve_impl ((db : db), ctx, (name : Package.Name.t)) =
    match Package.Name.Map.find db name with
    | None -> Memo.return None
    | Some
        { Lock_dir.Pkg.build_command
        ; install_command
        ; deps
        ; info
        ; exported_env
        } ->
      assert (Package.Name.equal name info.name);
      let* deps = Memo.parallel_map deps ~f:(resolve db ctx) in
      let id = Pkg.Id.gen () in
      let paths = Paths.make name ctx in
      let* lock_dir = Lock_dir.get_path ctx in
      let files_dir =
        Path.Source.relative lock_dir
          (sprintf "%s.files" (Package.Name.to_string info.name))
      in
      let t =
        { Pkg.id
        ; build_command
        ; install_command
        ; deps
        ; paths
        ; info
        ; files_dir
        ; exported_env = []
        }
      in
      let* expander = Action_expander.expander ctx t in
      let+ exported_env =
        Memo.parallel_map exported_env
          ~f:(Action_expander.exported_env expander)
      in
      t.exported_env <- exported_env;
      Some t

  let resolve =
    let module Input = struct
      type t = db * Context_name.t * Package.Name.t

      let equal = ( == )

      let hash = Tuple.T3.hash Poly.hash Context_name.hash Package.Name.hash

      let to_dyn = Dyn.opaque
    end in
    let memo =
      Memo.create "pkg-resolve"
        ~input:(module Input)
        ~human_readable_description:(fun (_db, _ctx, pkg) ->
          Pp.textf "- package %s" (Package.Name.to_string pkg))
        resolve_impl
    in
    fun db ctx (loc, name) ->
      Memo.exec memo (db, ctx, name) >>| function
      | None -> User_error.raise ~loc [ Pp.text "Unknown package" ]
      | Some s -> s
end

open Resolve

module Install_action = struct
  let installable_sections =
    Section.(Set.diff all (Set.of_list [ Misc; Libexec; Libexec_root ]))
    |> Section.Set.to_list

  module Spec = struct
    type ('path, 'target) t =
      { install_file : 'path
      ; config_file : 'path
      ; target_dir : 'target
      ; install_action : [ `Has_install_action | `No_install_action ]
      ; package : Package.Name.t
      }

    let name = "install-file-run"

    let version = 1

    let bimap
        ({ install_file
         ; config_file
         ; target_dir
         ; install_action = _
         ; package = _
         } as t) f g =
      { t with
        install_file = f install_file
      ; config_file = f config_file
      ; target_dir = g target_dir
      }

    let is_useful_to ~distribute:_ ~memoize = memoize

    let encode
        { install_file; config_file; target_dir; install_action; package } path
        target : Dune_lang.t =
      List
        [ Dune_lang.atom_or_quoted_string name
        ; path install_file
        ; path config_file
        ; target target_dir
        ; Dune_lang.atom_or_quoted_string (Package.Name.to_string package)
        ; Dune_lang.atom
            (match install_action with
            | `Has_install_action -> "has_install_action"
            | `No_install_action -> "no_install_action")
        ]

    let prepare_copy_or_move ~install_file ~target_dir entry =
      let dst =
        let paths =
          let package =
            Path.basename install_file |> Filename.chop_extension
            |> Package.Name.of_string
          in
          let roots = Path.build target_dir |> Install.Roots.opam_from_prefix in
          Install.Paths.make ~package ~roots
        in
        Install.Entry.relative_installed_path entry ~paths
      in
      Path.mkdir_p (Path.parent_exn dst);
      dst

    let readdir path =
      match Path.Untracked.readdir_unsorted_with_kinds path with
      | Error _ -> ([], [])
      | Ok listing ->
        List.partition_map listing ~f:(fun (basename, kind) ->
            let path = Path.relative path basename in
            match kind with
            | S_DIR -> Right path
            | _ -> Left path)

    let rec collect paths acc =
      match paths with
      | [] -> acc
      | path :: paths ->
        let files, dirs = readdir path in
        let acc = List.rev_append files acc in
        collect (List.rev_append dirs paths) acc

    let skip path skip =
      List.iter skip ~f:(fun s -> assert (Path.equal path (Path.parent_exn s)));
      let files, dirs = readdir path in
      let dirs =
        List.filter_map dirs ~f:(fun path ->
            if List.mem skip path ~equal:Path.equal then None else Some path)
      in
      (files, dirs)

    let maybe_drop_sandbox_dir path =
      match Path.extract_build_context_dir_maybe_sandboxed path with
      | None -> path
      | Some (sandbox, source) ->
        let ctx =
          let name = Path.basename sandbox in
          Path.relative (Path.build Path.Build.root) name
        in
        Path.append_source ctx source

    let section_map_of_dir install_paths =
      let get = Install.Paths.get install_paths in
      List.concat_map installable_sections ~f:(fun section ->
          let path = get section in
          let acc, dirs =
            match section with
            | Lib_root -> skip path [ get Toplevel; get Stublibs; get Lib ]
            | Share_root -> skip path [ get Share ]
            | _ -> ([], [ path ])
          in
          collect dirs acc
          |> List.rev_map ~f:(fun file ->
                 let section =
                   match
                     match section with
                     | Lib_root -> Some Section.Libexec_root
                     | Lib -> Some Libexec
                     | _ -> None
                   with
                   | None -> section
                   | Some section' ->
                     let perm = (Path.Untracked.stat_exn file).st_perm in
                     if Path.Permissions.(test execute perm) then section'
                     else section
                 in
                 (section, maybe_drop_sandbox_dir file)))
      |> Section.Map.of_list_multi

    let action
        { package; install_file; config_file; target_dir; install_action }
        ~ectx:_ ~eenv:_ =
      let open Fiber.O in
      let+ () = Fiber.return () in
      let files =
        let from_install_action =
          match install_action with
          | `No_install_action -> Section.Map.empty
          | `Has_install_action ->
            let install_paths =
              Paths.of_root package ~root:(Path.Build.parent_exn target_dir)
              |> Paths.install_paths
            in
            section_map_of_dir install_paths
        in
        let from_install_file =
          match Path.Untracked.exists install_file with
          | false -> Section.Map.empty
          | true ->
            let map =
              let install_dir = Path.parent_exn install_file in
              let install_entries =
                Install.Entry.load_install_file install_file
              in
              let by_src =
                List.rev_map install_entries
                  ~f:(fun (entry : _ Install.Entry.t) ->
                    ( Path.as_in_source_tree_exn entry.src
                      |> Path.append_source install_dir
                    , entry ))
                |> Path.Map.of_list_multi
              in
              let install_entries =
                Path.Map.to_list_map by_src ~f:(fun src entries ->
                    (* TODO set permissions *)
                    let maybe_set_executable section dst =
                      match Section.should_set_executable_bit section with
                      | false -> ()
                      | true ->
                        let permission =
                          let perm = (Path.Untracked.stat_exn dst).st_perm in
                          Path.Permissions.(add execute) perm
                        in
                        Path.chmod dst ~mode:permission
                    in
                    let exists = lazy (Path.Untracked.exists src) in
                    match entries with
                    | [] -> assert false
                    | [ entry ] ->
                      if entry.optional && (not @@ Lazy.force exists) then []
                      else
                        let dst =
                          prepare_copy_or_move ~install_file ~target_dir entry
                        in
                        Path.rename src dst;
                        maybe_set_executable entry.section dst;
                        [ (entry.section, dst) ]
                    | entry :: entries ->
                      let install_entries =
                        List.filter_map entries ~f:(fun entry ->
                            if entry.optional && (not @@ Lazy.force exists) then
                              None
                            else
                              let dst =
                                prepare_copy_or_move ~install_file ~target_dir
                                  entry
                              in
                              (* TODO hard link if possible *)
                              Io.copy_file ~src ~dst ();
                              maybe_set_executable entry.section dst;
                              Some (entry.section, dst))
                      in
                      if entry.optional && (not @@ Lazy.force exists) then
                        install_entries
                      else
                        let dst =
                          prepare_copy_or_move ~install_file ~target_dir entry
                        in
                        Path.rename src dst;
                        maybe_set_executable entry.section dst;
                        (entry.section, dst) :: install_entries)
              in
              List.concat install_entries
              |> List.rev_map ~f:(fun (section, file) ->
                     let file = maybe_drop_sandbox_dir file in
                     (section, file))
              |> Section.Map.of_list_multi
            in
            Path.unlink install_file;
            map
        in
        (* TODO we should make sure that overwrites aren't allowed *)
        Section.Map.union from_install_action from_install_file ~f:(fun _ x y ->
            Some (x @ y))
      in
      let variables =
        match Path.Untracked.exists config_file with
        | false -> []
        | true ->
          let config =
            Path.to_string config_file |> OpamFilename.of_string
            |> OpamFile.make |> OpamFile.Dot_config.read
          in
          OpamFile.Dot_config.bindings config
          |> List.map ~f:(fun (name, value) ->
                 (OpamVariable.to_string name, value))
      in
      let cookies = { Install_cookie.files; variables } in
      let cookie_file = Path.build @@ Paths.install_cookie' target_dir in
      cookie_file |> Path.parent_exn |> Path.mkdir_p;
      Install_cookie.dump cookie_file cookies
  end

  let action (p : Paths.t) install_action =
    let module M = struct
      type path = Path.t

      type target = Path.Build.t

      module Spec = Spec

      let v =
        { Spec.install_file = Path.build @@ Paths.install_file p
        ; config_file = Path.build @@ Paths.config_file p
        ; target_dir = p.target_dir
        ; install_action
        ; package = p.name
        }
    end in
    Action.Extension (module M)
end

module Fetch = struct
  module Spec = struct
    type ('path, 'target) t =
      { target_dir : 'target
      ; url : Loc.t * string
      ; checksum : (Loc.t * Checksum.t) option
      }

    let name = "source-fetch"

    let version = 1

    let bimap t _ g = { t with target_dir = g t.target_dir }

    let is_useful_to ~distribute:_ ~memoize = memoize

    let encode_loc f (loc, x) =
      Dune_lang.List
        (* TODO use something better for locs here *)
        [ Dune_lang.atom_or_quoted_string (Loc.to_file_colon_line loc); f x ]

    let encode { target_dir; url; checksum } _ target : Dune_lang.t =
      List
        ([ Dune_lang.atom_or_quoted_string name
         ; target target_dir
         ; encode_loc Dune_lang.atom_or_quoted_string url
         ]
        @
        match checksum with
        | None -> []
        | Some checksum ->
          [ encode_loc
              (fun x -> Checksum.to_string x |> Dune_lang.atom_or_quoted_string)
              checksum
          ])

    let action { target_dir; url = loc_url, url; checksum } ~ectx:_ ~eenv:_ =
      let open Fiber.O in
      let* () = Fiber.return () in
      let* res =
        let checksum = Option.map checksum ~f:snd in
        Dune_pkg.Fetch.fetch ~unpack:false ~checksum
          ~target:(Path.build target_dir) (OpamUrl.of_string url)
      in
      match res with
      | Ok () -> Fiber.return ()
      | Error (Checksum_mismatch actual_checksum) -> (
        match checksum with
        | None ->
          User_error.raise ~loc:loc_url
            [ Pp.text "No checksum provided. It should be:"
            ; Checksum.pp actual_checksum
            ]
        | Some (loc, _) ->
          User_error.raise ~loc
            [ Pp.text "Invalid checksum, got"
            ; Dune_pkg.Checksum.pp actual_checksum
            ])
      | Error (Unavailable message) -> (
        let loc = loc_url in
        match message with
        | None -> User_error.raise ~loc [ Pp.text "Unknown fetch failure" ]
        | Some msg -> User_error.raise ~loc [ User_message.pp msg ])
  end

  let action ~url ~checksum ~target_dir =
    let module M = struct
      type path = Path.t

      type target = Path.Build.t

      module Spec = Spec

      let v = { Spec.target_dir; checksum; url }
    end in
    Action.Extension (module M)
end

module Copy_tree = struct
  module Spec = struct
    type ('path, 'target) t = 'path * 'target

    let name = "copy-tree"

    let version = 1

    let bimap (src, dst) f g = (f src, g dst)

    let is_useful_to ~distribute:_ ~memoize = memoize

    let encode (src, dst) dep target : Dune_lang.t =
      List [ Dune_lang.atom_or_quoted_string name; dep src; target dst ]

    let action (root, dst) ~ectx:_ ~eenv:_ =
      let open Fiber.O in
      let+ () = Fiber.return () in
      Install_action.Spec.collect [ root ] []
      |> List.iter ~f:(fun src ->
             let dst =
               Path.append_local (Path.build dst)
                 (Path.drop_prefix_exn src ~prefix:root)
             in
             let old_permissions =
               match Path.Untracked.stat dst with
               | Error _ -> None
               | Ok s ->
                 Path.unlink dst;
                 Some s.st_perm
             in
             Io.copy_file
               ~chmod:(fun default -> Option.value old_permissions ~default)
               ~src ~dst ())
  end

  let action ~src ~dst =
    let module M = struct
      type path = Path.t

      type target = Path.Build.t

      module Spec = Spec

      let v = (src, dst)
    end in
    Action.Extension (module M)
end

let add_env env action =
  Action_builder.With_targets.map action ~f:(Action.Full.add_env env)

let rule ?loc { Action_builder.With_targets.build; targets } =
  (* TODO this ignores the workspace file *)
  Rule.make ~info:(Rule.Info.of_loc_opt loc) ~targets build ~context:None
  |> Rules.Produce.rule

let gen_rules context_name (pkg : Pkg.t) =
  let* source_deps, copy_rules =
    match pkg.info.source with
    | None -> Memo.return (Dep.Set.empty, [])
    | Some (Fetch { url = (loc, _) as url; checksum }) ->
      let fetch =
        Fetch.action ~url ~target_dir:pkg.paths.source_dir ~checksum
        |> Action.Full.make |> Action_builder.With_targets.return
        |> Action_builder.With_targets.add_directories
             ~directory_targets:[ pkg.paths.source_dir ]
      in
      Memo.return
        (Dep.Set.of_files [ Path.build pkg.paths.source_dir ], [ (loc, fetch) ])
    | Some (External_copy (loc, source_root)) ->
      let source_root = Path.external_ source_root in
      let+ source_files, rules =
        Pkg.source_files pkg ~loc
        >>| Path.Local.Set.fold ~init:([], [])
              ~f:(fun file (source_files, rules) ->
                let src = Path.append_local source_root file in
                let dst = Path.Build.append_local pkg.paths.source_dir file in
                let copy = (loc, Action_builder.copy ~src ~dst) in
                (Path.build dst :: source_files, copy :: rules))
      in
      (Dep.Set.of_files source_files, rules)
  in
  let extra_source_deps, extra_copy_rules =
    List.map pkg.info.extra_sources ~f:(fun (local, fetch) ->
        let extra_source = Paths.extra_source pkg.paths local in
        let rule =
          match (fetch : Lock_dir.Source.t) with
          | External_copy (loc, src) ->
            ( loc
            , Action_builder.copy ~src:(Path.external_ src) ~dst:extra_source )
          | Fetch { url = (loc, _) as url; checksum } ->
            let rule =
              Fetch.action ~url ~target_dir:pkg.paths.source_dir ~checksum
              |> Action.Full.make |> Action_builder.With_targets.return
              |> Action_builder.With_targets.add_directories
                   ~directory_targets:[ pkg.paths.source_dir ]
            in
            (loc, rule)
        in
        (Path.build extra_source, rule))
    |> List.unzip
  in
  let copy_rules = copy_rules @ extra_copy_rules in
  let source_deps =
    Dep.Set.union source_deps (Dep.Set.of_files extra_source_deps)
  in
  let* () =
    Memo.parallel_iter copy_rules ~f:(fun (loc, copy) -> rule ~loc copy)
  in
  let* build_rule =
    let+ build_action =
      let install_action = Action_expander.install_command context_name pkg in
      let+ build_and_install =
        let* copy_action =
          Fs_memo.dir_exists (In_source_dir pkg.files_dir) >>| function
          | false -> []
          | true ->
            [ Copy_tree.action
                ~src:(Path.source pkg.files_dir)
                ~dst:pkg.paths.source_dir
              |> Action.Full.make |> Action_builder.With_targets.return
            ]
        in
        let copy_action =
          copy_action
          @ List.map pkg.info.extra_sources ~f:(fun (local, _) ->
                let src = Path.build (Paths.extra_source pkg.paths local) in
                let dst = Path.Build.append_local pkg.paths.source_dir local in
                Action.copy src dst |> Action.Full.make
                |> Action_builder.With_targets.return)
        in
        let* build_action =
          match Action_expander.build_command context_name pkg with
          | None -> Memo.return copy_action
          | Some build_command ->
            let+ build_command = build_command in
            copy_action @ [ build_command ]
        in
        match Action_expander.install_command context_name pkg with
        | None -> Memo.return build_action
        | Some install_action ->
          let+ install_action = install_action in
          let mkdir_install_dirs =
            let install_paths = Paths.install_paths pkg.paths in
            Install_action.installable_sections
            |> List.rev_map ~f:(fun section ->
                   Install.Paths.get install_paths section
                   |> Path.as_in_build_dir_exn |> Action.mkdir)
            |> Action.progn |> Action.Full.make
            |> Action_builder.With_targets.return
          in
          build_action @ [ mkdir_install_dirs; install_action ]
      in
      let install_file_action =
        Install_action.action pkg.paths
          (match install_action with
          | None -> `No_install_action
          | Some _ -> `Has_install_action)
        |> Action.Full.make |> Action_builder.return
        |> Action_builder.with_no_targets
      in
      Action_builder.progn (build_and_install @ [ install_file_action ])
    in
    let deps = Dep.Set.union source_deps (Pkg.package_deps pkg) in
    let open Action_builder.With_targets.O in
    Action_builder.deps deps |> Action_builder.with_no_targets
    (* TODO should we add env deps on these? *)
    >>> add_env (Pkg.exported_env pkg) build_action
    |> Action_builder.With_targets.add_directories
         ~directory_targets:[ pkg.paths.target_dir ]
  in
  rule build_rule

let setup_package_rules context ~dir ~pkg_name :
    Build_config.gen_rules_result Memo.t =
  match Package.Name.of_string_user_error (Loc.none, pkg_name) with
  | Error m -> raise (User_error.E m)
  | Ok name ->
    let* db = Lock_dir.get context in
    let+ pkg = resolve db.packages context (Loc.none, name) in
    let paths = Paths.make name context in
    let rules =
      { Build_config.Rules.directory_targets =
          (let target_dir = paths.target_dir in
           let map = Path.Build.Map.singleton target_dir Loc.none in
           match pkg.info.source with
           | Some (Fetch f) ->
             Path.Build.Map.add_exn map paths.source_dir (fst f.url)
           | _ -> map)
      ; build_dir_only_sub_dirs =
          Build_config.Rules.Build_only_sub_dirs.singleton ~dir Subdir_set.empty
      ; rules = Rules.collect_unit (fun () -> gen_rules context pkg)
      }
    in
    Build_config.Rules rules

let ocaml_toolchain context =
  let* db = Lock_dir.get context in
  let+ pkg =
    match db.ocaml with
    | None -> User_error.raise [ Pp.text "no ocaml toolchain defined" ]
    | Some ocaml -> resolve db.packages context ocaml
  in
  let toolchain =
    let cookie = (Pkg_installed.of_paths pkg.paths).cookie in
    let open Action_builder.O in
    let* cookie = cookie in
    let binaries =
      Section.Map.find cookie.files Bin
      |> Option.value ~default:[] |> Path.Set.of_list
    in
    let env = Pkg.exported_env pkg in
    Action_builder.of_memo @@ Ocaml_toolchain.of_binaries context env binaries
  in
  Action_builder.memoize "ocaml_toolchain" toolchain

let which context program =
  let* db = Lock_dir.get context in
  let+ artifacts, _ =
    Package.Name.Map.values db.packages
    |> Memo.parallel_map ~f:(fun (pkg : Lock_dir.Pkg.t) ->
           resolve db.packages context (Loc.none, pkg.info.name))
    >>= Action_expander.artifacts_and_deps
  in
  Filename.Map.find artifacts program

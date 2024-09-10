open Import
module Diagnostic = Dune_rpc.Diagnostic
module Compound_user_error = Dune_engine.Compound_user_error

let absolutize_paths ~dir (loc : Loc.t) =
  let make_path name =
    Path.to_absolute_filename
      (if Filename.is_relative name then
         Path.append_local dir (Path.Local.parse_string_exn ~loc name)
       else Path.of_string name)
  in
  Loc.map_pos loc ~f:(fun (pos : Lexing.position) ->
      { pos with pos_fname = make_path pos.pos_fname })
  |> Loc.to_lexbuf_loc

let diagnostic_of_error : Build_system.Error.t -> Dune_rpc_private.Diagnostic.t
    =
 fun m ->
  let dir =
    let dir = Build_system.Error.dir m in
    Option.map dir ~f:Path.drop_optional_build_context_maybe_sandboxed
  in
  let make_loc loc =
    let dir = Option.value ~default:Path.root dir in
    absolutize_paths ~dir loc
  in
  let message, related =
    match Build_system.Error.description m with
    | `Exn e ->
      (* CR-someday jeremiedimino: Use [Report_error.get_user_message] here. *)
      (User_message.make [ Pp.text (Printexc.to_string e.exn) ], [])
    | `Diagnostic { Compound_user_error.main = message; related } ->
      (message, related)
  in
  let loc = Option.map message.loc ~f:make_loc in
  let make_message pars = Pp.map_tags (Pp.concat pars) ~f:(fun _ -> ()) in
  let id =
    Build_system.Error.id m |> Build_system.Error.Id.to_int
    |> Diagnostic.Id.create
  in
  let promotion =
    match Build_system.Error.promotion m with
    | None -> []
    | Some { in_source; in_build } ->
      [ { Diagnostic.Promotion.in_source =
            Path.to_absolute_filename (Path.source in_source)
        ; in_build = Path.to_absolute_filename (Path.build in_build)
        }
      ]
  in
  let related =
    List.map related ~f:(fun (related : User_message.t) ->
        { Dune_rpc_private.Diagnostic.Related.message =
            make_message related.paragraphs
        ; loc = make_loc (Option.value_exn related.loc)
        })
  in
  { Dune_rpc_private.Diagnostic.severity =
      Some Dune_rpc_private.Diagnostic.Error
  ; id
  ; targets = []
  ; message = make_message message.paragraphs
  ; loc
  ; promotion
  ; related
  ; directory = Option.map dir ~f:Path.to_absolute_filename
  }

let diagnostic_event_of_error_event (e : Build_system.Error.Event.t) :
    Diagnostic.Event.t =
  match e with
  | Remove e -> Remove (diagnostic_of_error e)
  | Add e -> Add (diagnostic_of_error e)

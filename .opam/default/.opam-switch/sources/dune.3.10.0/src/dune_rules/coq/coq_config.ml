open Import
open Memo.O

module Vars : sig
  type t

  val get_opt : t -> string -> string option

  val get_path : t -> string -> Path.t

  val get_path_opt : t -> string -> Path.t option

  val of_lines : string list -> (t, User_message.Style.t Pp.t) result
end = struct
  open Result.O

  type t = string String.Map.t

  let of_lines lines =
    let rec loop acc = function
      | [] -> Ok acc
      | line :: lines -> (
        match String.index line '=' with
        | Some i ->
          let x = (String.take line i, String.drop line (i + 1)) in
          loop (x :: acc) lines
        | None -> Error Pp.(textf "Unrecognized line: %S" line))
    in
    let* vars = loop [] lines in
    Result.map_error (String.Map.of_list vars) ~f:(fun (var, _, _) ->
        Pp.(textf "Variable %S present twice." var))

  let get_opt = String.Map.find

  let get t var =
    match get_opt t var with
    | Some s -> s
    | None -> Code_error.raise "Variable not found." [ ("var", Dyn.string var) ]

  let get_path t var = get t var |> Path.of_string

  let get_path_opt t var = Option.map ~f:Path.of_string (get_opt t var)
end

module Value : sig
  type t = private
    | Int of int
    | Path of Path.t
    | String of string

  val int : int -> t

  val string : string -> t

  val path : Path.t -> t

  val to_dyn : t -> Dyn.t
end = struct
  type t =
    | Int of int
    | Path of Path.t
    | String of string

  let int i = Int i

  let string s = String s

  let path p = Path p

  let to_dyn = function
    | Int i -> Dyn.Int i
    | Path p -> Path.to_dyn p
    | String s -> Dyn.String s
end

module Version = struct
  module Num = struct
    type t =
      { major : int
      ; minor : int
      ; suffix : string
      }

    let make version_string =
      let open Dune_re in
      let regex =
        let open Re in
        seq
          [ rep digit |> group; char '.'; rep digit |> group; rep any |> group ]
        |> compile
      in
      let open Result.O in
      let* groups =
        Re.exec_opt regex version_string |> function
        | Some groups -> Result.Ok groups
        | None -> Result.Error Pp.(textf "Could not parse version string.")
      in
      let* major =
        let major = Group.get groups 1 in
        major |> Int.of_string |> function
        | Some major -> Result.Ok major
        | None -> Result.Error Pp.(textf "Could not parse int: %S." major)
      in
      let* minor =
        let minor = Group.get groups 2 in
        minor |> Int.of_string |> function
        | Some minor -> Result.Ok minor
        | None -> Result.Error Pp.(textf "Could not parse int: %S." minor)
      in
      let suffix = Group.get groups 3 in
      Result.Ok { major; minor; suffix }

    let by_name { major; minor; suffix } name =
      match name with
      | "major" -> Some (Value.int major)
      | "minor" -> Some (Value.int minor)
      | "suffix" -> Some (Value.string suffix)
      | _ -> None
  end

  type t =
    { version_num : Num.t
    ; version_string : string
    ; ocaml_version_string : string
    }

  let impl_version bin =
    let* _ = Build_system.build_file bin in
    Memo.of_reproducible_fiber
    @@ Process.run_capture_line ~display:Quiet Strict bin [ "--print-version" ]

  let version_memo =
    Memo.create "coq-and-ocaml-version" ~input:(module Path) impl_version

  let make ~(coqc : Action.Prog.t) =
    match coqc with
    | Ok coqc_path ->
      let open Memo.O in
      let+ coq_and_ocaml_version = Memo.exec version_memo coqc_path in
      let sbin = Path.to_string coqc_path in
      let open Result.O in
      let* version_string, ocaml_version_string =
        String.lsplit2 ~on:' ' coq_and_ocaml_version |> function
        | Some (version_string, ocaml_version_string) ->
          Result.ok (version_string, ocaml_version_string)
        | None ->
          Result.Error
            Pp.(textf "Unable to parse output of %s --print-version." sbin)
      in
      let* version_num = Num.make version_string in
      Result.ok { version_num; version_string; ocaml_version_string }
    | Error e -> Action.Prog.Not_found.raise e

  let by_name t name =
    match t with
    | Error msg ->
      User_error.raise Pp.[ textf "Could not parse coqc version: "; msg ]
    | Ok { version_num; version_string; ocaml_version_string } -> (
      match name with
      | "version.major" -> Num.by_name version_num "major"
      | "version.minor" -> Num.by_name version_num "minor"
      | "version.revision" -> Num.by_name version_num "revision"
      | "version.suffix" -> Num.by_name version_num "suffix"
      | "version" -> Some (Value.string version_string)
      | "ocaml-version" -> Some (Value.string ocaml_version_string)
      | _ -> None)
end

type t =
  { version_info : (Version.t, User_message.Style.t Pp.t) Result.t
  ; coqlib : Path.t
  ; coqcorelib : Path.t option (* this is not available in Coq < 8.14 *)
  ; coq_native_compiler_default :
      string option (* this is not available in Coq < 8.13 *)
  }

let impl_config bin =
  let* _ = Build_system.build_file bin in
  Memo.of_reproducible_fiber
  @@ Process.run_capture_lines ~display:Quiet Return bin [ "--config" ]

let config_memo = Memo.create "coq-config" ~input:(module Path) impl_config

let version ~coqc =
  let open Memo.O in
  let+ t = Version.make ~coqc in
  let open Result.O in
  let+ t = t in
  t.version_string

let make_res ~(coqc : Action.Prog.t) =
  match coqc with
  | Ok coqc_path -> (
    let open Memo.O in
    let+ config_lines = Memo.exec config_memo coqc_path
    and+ version_info = Version.make ~coqc in
    let config_lines, exit_code = config_lines in
    if exit_code <> 0 then Error (coqc_path, exit_code, config_lines)
    else
      match Vars.of_lines config_lines with
      | Ok vars ->
        let coqlib = Vars.get_path vars "COQLIB" in
        (* this is not available in Coq < 8.14 *)
        let coqcorelib = Vars.get_path_opt vars "COQCORELIB" in
        (* this is not available in Coq < 8.13 *)
        let coq_native_compiler_default =
          Vars.get_opt vars "COQ_NATIVE_COMPILER_DEFAULT"
        in
        Ok { version_info; coqlib; coqcorelib; coq_native_compiler_default }
      | Error msg ->
        User_error.raise
          Pp.
            [ textf "cannot parse output of %s --config:"
                (Path.to_string coqc_path)
            ; msg
            ])
  | Error e -> Action.Prog.Not_found.raise e

let make_opt ~coqc = Memo.map ~f:Result.to_option (make_res ~coqc)

let make ~coqc =
  let open Memo.O in
  let+ result = make_res ~coqc in
  match result with
  | Ok t -> t
  | Error (coqc_path, exit_code, config_lines) ->
    User_error.raise
      Pp.
        [ textf "Error while running %s --config" (Path.to_string coqc_path)
        ; textf "Exit code: %d" exit_code
        ; textf "Output:\n%s" (String.concat ~sep:"\n" config_lines)
        ]

let by_name { version_info; coqlib; coqcorelib; coq_native_compiler_default }
    name =
  match name with
  | "version.major"
  | "version.minor"
  | "version.revision"
  | "version.suffix"
  | "version"
  | "ocaml-version" -> Version.by_name version_info name
  | "coqlib" -> Some (Value.path coqlib)
  | "coqcorelib" -> Option.map ~f:Value.path coqcorelib
  | "coq_native_compiler_default" ->
    Option.map ~f:Value.string coq_native_compiler_default
  | _ ->
    Code_error.raise "Unknown name was requested from coq_config"
      [ ("name", Dyn.string name) ]

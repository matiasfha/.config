(** Findlib database *)

open Import

(** Findlib database *)
type t

val meta_fn : string

val create : paths:Path.t list -> lib_config:Lib_config.t -> t Memo.t

val lib_config : t -> Lib_config.t

(** The builtins packages *)
val builtins : t -> Meta.Simplified.t Package.Name.Map.t

val findlib_predicates_set_by_dune : Variant.Set.t

module Unavailable_reason : sig
  type t =
    | Not_found
        (** The package is hidden because it contains an unsatisfied 'exist_if'
            clause *)
    | Invalid_dune_package of User_message.t

  val to_dyn : t -> Dyn.t
end

(** Lookup a whole package, including sub-packages, in the given database.
    [root_name] must be a library name without dots. *)
val find_root_package :
  t -> Package.Name.t -> (Dune_package.t, Unavailable_reason.t) result Memo.t

val find :
  t -> Lib_name.t -> (Dune_package.Entry.t, Unavailable_reason.t) result Memo.t

(** List all the packages available in this Database *)
val all_packages : t -> Dune_package.Entry.t list Memo.t

(** List all the packages that have broken [dune-package] files *)
val all_broken_packages : t -> (Package.Name.t * User_message.t) list Memo.t

module Config : sig
  type t

  val to_dyn : t -> Dyn.t

  (** Finds the library search paths for this configuration, prepending
      [OCAMLPATH] if set *)
  val path : t -> Path.t list

  (** Finds program [prog] for this configuration, if it exists *)
  val tool : t -> prog:string -> Path.t option Memo.t

  val ocamlpath_sep : char

  (** Read and parse the [OCAMLPATH] environment variable *)
  val ocamlpath : Env.t -> Path.t list option

  (** Interpret [env] findlib predicates in findlib configuration files. *)
  val env : t -> Env.t

  (** Load the findlib configuration for this [findlib_toolchain], if any. *)
  val discover_from_env :
       env:Env.t
    -> which:(Filename.t -> Path.t option Memo.t)
    -> ocamlpath:Path.t list
    -> findlib_toolchain:string option
    -> t option Memo.t
end

(** rules for packages built by dune *)

open Import

(** The package management rules setup two rules for every package:

    - A rule for fetching the source to produce .pkg/$package/source

    - A rule to build the package and produce the artifacts in
      .pkg/$package/target *)

val setup_package_rules :
     Context_name.t
  -> dir:Path.Build.t
  -> pkg_name:string
  -> Build_config.gen_rules_result Memo.t

val ocaml_toolchain :
  Context_name.t -> Ocaml_toolchain.t Action_builder.t Memo.t

val which : Context_name.t -> Filename.t -> Path.t option Memo.t

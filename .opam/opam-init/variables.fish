# Prefix of the current opam switch
set -gx OPAM_SWITCH_PREFIX '/Users/matias/.opam/default';
# Updated by package ocaml-base-compiler
set -gx CAML_LD_LIBRARY_PATH '/Users/matias/.opam/default/lib/stublibs';
# Updated by package ocaml
set -gx CAML_LD_LIBRARY_PATH '/Users/matias/.opam/default/lib/ocaml/stublibs:/Users/matias/.opam/default/lib/ocaml';
# Updated by package ocaml
set -gx CAML_LD_LIBRARY_PATH '/Users/matias/.opam/default/lib/stublibs':"$CAML_LD_LIBRARY_PATH";
# Updated by package ocaml
set -gx OCAML_TOPLEVEL_PATH '/Users/matias/.opam/default/lib/toplevel';
# Binary dir for opam switch default
set -gx PATH '/Users/matias/.opam/default/bin' $PATH;

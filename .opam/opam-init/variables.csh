# Prefix of the current opam switch
if ( ! ${?OPAM_SWITCH_PREFIX} ) setenv OPAM_SWITCH_PREFIX ""
setenv OPAM_SWITCH_PREFIX '/Users/matias/.opam/default'
# Updated by package ocaml-base-compiler
if ( ! ${?CAML_LD_LIBRARY_PATH} ) setenv CAML_LD_LIBRARY_PATH ""
setenv CAML_LD_LIBRARY_PATH '/Users/matias/.opam/default/lib/stublibs'
# Updated by package ocaml
if ( ! ${?CAML_LD_LIBRARY_PATH} ) setenv CAML_LD_LIBRARY_PATH ""
setenv CAML_LD_LIBRARY_PATH '/Users/matias/.opam/default/lib/ocaml/stublibs:/Users/matias/.opam/default/lib/ocaml'
# Updated by package ocaml
if ( ! ${?CAML_LD_LIBRARY_PATH} ) setenv CAML_LD_LIBRARY_PATH ""
setenv CAML_LD_LIBRARY_PATH '/Users/matias/.opam/default/lib/stublibs':"$CAML_LD_LIBRARY_PATH"
# Updated by package ocaml
if ( ! ${?OCAML_TOPLEVEL_PATH} ) setenv OCAML_TOPLEVEL_PATH ""
setenv OCAML_TOPLEVEL_PATH '/Users/matias/.opam/default/lib/toplevel'
# Binary dir for opam switch default
if ( ! ${?PATH} ) setenv PATH ""
setenv PATH '/Users/matias/.opam/default/bin':"$PATH"

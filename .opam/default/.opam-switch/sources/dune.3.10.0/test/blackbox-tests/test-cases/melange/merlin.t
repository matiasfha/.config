 Temporary special merlin support for melange only libs

  $ ocamlc_where="$(ocamlc -where)"
  $ export BUILD_PATH_PREFIX_MAP="/OCAMLC_WHERE=$ocamlc_where:$BUILD_PATH_PREFIX_MAP"
  $ melc_compiler="$(which melc)"
  $ export BUILD_PATH_PREFIX_MAP="$(melc_stdlib_prefix)":$BUILD_PATH_PREFIX_MAP
  $ export BUILD_PATH_PREFIX_MAP="/MELC_COMPILER=$melc_compiler:$BUILD_PATH_PREFIX_MAP"
  $ export BUILD_PATH_PREFIX_MAP="/MELC_STDLIB=$(ocamlfind query melange):$BUILD_PATH_PREFIX_MAP"

  $ cat >dune-project <<EOF
  > (lang dune 3.8)
  > (using melange 0.1)
  > EOF

  $ lib=foo
  $ cat >dune <<EOF
  > (library
  >  (name $lib)
  >  (private_modules bar)
  >  (modes melange))
  > EOF

  $ touch bar.ml $lib.ml
  $ dune build @check
  $ dune ocaml merlin dump-config "$PWD" | grep -i "$lib"
    $TESTCASE_ROOT/_build/default/.foo.objs/melange)
   (FLG (-open Foo__))
  Foo
    $TESTCASE_ROOT/_build/default/.foo.objs/melange)
   (FLG (-open Foo__))
  Foo__
    $TESTCASE_ROOT/_build/default/.foo.objs/melange)

Paths to Melange stdlib appear in B and S entries without melange.emit stanza

  $ dune ocaml dump-dot-merlin $PWD | grep -e "^B " -e "^S "
  B /MELC_STDLIB/melange
  B /MELC_STDLIB/melange
  B /MELC_STDLIB/melange
  B $TESTCASE_ROOT/_build/default/.foo.objs/melange
  S /MELC_STDLIB
  S /MELC_STDLIB
  S /MELC_STDLIB
  S $TESTCASE_ROOT

All 3 modules (Foo, Foo__ and Bar) contain a ppx directive

  $ dune ocaml merlin dump-config $PWD | grep -i "ppx"
   (FLG (-ppx "/MELC_COMPILER -as-ppx"))
   (FLG (-ppx "/MELC_COMPILER -as-ppx"))
   (FLG (-ppx "/MELC_COMPILER -as-ppx"))

  $ target=output
  $ cat >dune <<EOF
  > (melange.emit
  >  (target "$target")
  >  (modules main))
  > EOF

  $ touch main.ml
  $ dune build @check
  $ dune ocaml merlin dump-config $PWD | grep -i "$target"
    $TESTCASE_ROOT/_build/default/.output.mobjs/melange)

The melange.emit entry contains a ppx directive

  $ dune ocaml merlin dump-config $PWD | grep -i "ppx"
   (FLG (-ppx "/MELC_COMPILER -as-ppx"))

Dump-dot-merlin includes the melange flags

  $ dune ocaml dump-dot-merlin $PWD
  EXCLUDE_QUERY_DIR
  STDLIB /MELC_STDLIB/melange
  B /MELC_STDLIB/melange
  B /MELC_STDLIB/melange
  B /MELC_STDLIB/melange
  B $TESTCASE_ROOT/_build/default/.output.mobjs/melange
  S /MELC_STDLIB
  S /MELC_STDLIB
  S /MELC_STDLIB
  S $TESTCASE_ROOT
  # FLG -ppx '/MELC_COMPILER -as-ppx'
  # FLG -w @1..3@5..28@30..39@43@46..47@49..57@61..62@67@69-40 -strict-sequence -strict-formats -short-paths -keep-locs -g
  




Check for flag directives ordering when another preprocessor is defined

  $ cat >fooppx.ml <<EOF
  > open Ppxlib
  > 
  > let rules =
  >   let extension =
  >     Extension.declare "test" Expression Ast_pattern.__ (fun ~loc ~path:_ _ ->
  >       Ast_builder.Default.eint ~loc 42)
  >   in
  >   [ Context_free.Rule.extension extension ]
  > 
  > let () = Ppxlib.Driver.register_transformation "rules" ~rules
  > EOF

  $ cat >dune <<EOF
  > (library
  >  (name $lib)
  >  (private_modules bar)
  >  (modules bar)
  >  (preprocess (pps fooppx))
  >  (modes melange))
  > (library
  >  (name fooppx)
  >  (modules fooppx)
  >  (libraries ppxlib)
  >  (kind ppx_rewriter))
  > EOF

  $ dune build @check

Melange ppx should appear after user ppx, so that Merlin applies the former first
(the flags seem to be applied in reversed order)

  $ dune ocaml merlin dump-config $PWD | grep -v "(B "  | grep -v "(S "
  Bar
  ((STDLIB /MELC_STDLIB/melange)
   (EXCLUDE_QUERY_DIR)
   (B
    $TESTCASE_ROOT/_build/default/.foo.objs/melange)
   (S
    $TESTCASE_ROOT)
   (FLG (-open Foo))
   (FLG
    (-ppx
     "$TESTCASE_ROOT/_build/default/.ppx/4128e43a9cfb141a37f547484cc9bf46/ppx.exe
     --as-ppx
     --cookie
     'library-name="foo"'"))
   (FLG (-ppx "/MELC_COMPILER -as-ppx"))
   (FLG
    (-w
     @1..3@5..28@30..39@43@46..47@49..57@61..62@67@69-40
     -strict-sequence
     -strict-formats
     -short-paths
     -keep-locs
     -g)))
  Foo
  ((STDLIB /MELC_STDLIB/melange)
   (EXCLUDE_QUERY_DIR)
   (B
    $TESTCASE_ROOT/_build/default/.foo.objs/melange)
   (S
    $TESTCASE_ROOT)
   (FLG
    (-ppx
     "$TESTCASE_ROOT/_build/default/.ppx/4128e43a9cfb141a37f547484cc9bf46/ppx.exe
     --as-ppx
     --cookie
     'library-name="foo"'"))
   (FLG (-ppx "/MELC_COMPILER -as-ppx"))
   (FLG
    (-w
     @1..3@5..28@30..39@43@46..47@49..57@61..62@67@69-40
     -strict-sequence
     -strict-formats
     -short-paths
     -keep-locs
     -g)))
  Fooppx
  ((STDLIB /OCAMLC_WHERE)
   (EXCLUDE_QUERY_DIR)
   (B
    $TESTCASE_ROOT/_build/default/.fooppx.objs/byte)
   (S
    $TESTCASE_ROOT)
   (FLG
    (-w
     @1..3@5..28@30..39@43@46..47@49..57@61..62@67@69-40
     -strict-sequence
     -strict-formats
     -short-paths
     -keep-locs
     -g)))

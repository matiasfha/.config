if [ -t 0 ]; then
  test -r /Users/matias/.opam/opam-init/complete.sh && . /Users/matias/.opam/opam-init/complete.sh > /dev/null 2> /dev/null || true

  test -r /Users/matias/.opam/opam-init/env_hook.sh && . /Users/matias/.opam/opam-init/env_hook.sh > /dev/null 2> /dev/null || true
fi

test -r /Users/matias/.opam/opam-init/variables.sh && . /Users/matias/.opam/opam-init/variables.sh > /dev/null 2> /dev/null || true

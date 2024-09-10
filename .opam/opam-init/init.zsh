if [[ -o interactive ]]; then
  [[ ! -r /Users/matias/.opam/opam-init/complete.zsh ]] || source /Users/matias/.opam/opam-init/complete.zsh  > /dev/null 2> /dev/null

  [[ ! -r /Users/matias/.opam/opam-init/env_hook.zsh ]] || source /Users/matias/.opam/opam-init/env_hook.zsh  > /dev/null 2> /dev/null
fi

[[ ! -r /Users/matias/.opam/opam-init/variables.sh ]] || source /Users/matias/.opam/opam-init/variables.sh  > /dev/null 2> /dev/null

open Stdune

(** General dune configuration library for non user facing configuration.

    The configuration available through this module is non user facing and is
    subject to change without warning. *)

(** A configuration value. All configuration values have a name and can be
    configured with the environment variable "DUNE_CONFIG__$name" where [$name]
    is the configuration option's name in uppercase *)
type 'a t

module Toggle : sig
  type t =
    [ `Enabled
    | `Disabled
    ]
end

(** [get t] return the value of the configuration for [t] *)
val get : 'a t -> 'a

(** should dune acquire the global lock before building *)
val global_lock : Toggle.t t

(** whether dune should add cutoff to various memoized functions where it
    reduces concurrency *)
val cutoffs_that_reduce_concurrency_in_watch_mode : Toggle.t t

(** whether dune should optimize file copying on Linux/MacOS *)
val copy_file : [ `Portable | `Best ] t

(** Before any configuration value is accessed, this function must be called
    with all the configuration values from the relevant config file
    ([dune-workspace], or [dune-config]).

    Note that environment variables take precedence over the values passed here
    for easy overriding. *)

(** Execute some actions in background threads. See [Action_exec] for the
    concrete list of actions *)
val background_actions : Toggle.t t

(** Compute digests of files in a background thread *)
val background_digests : Toggle.t t

(** Build and destroy sandboxes in background threads *)
val background_sandboxes : Toggle.t t

(** Run file operations when executing rules in background threads *)
val background_file_system_operations_in_rule_execution : Toggle.t t

val threaded_console : Toggle.t t

val init : (Loc.t * string) String.Map.t -> unit

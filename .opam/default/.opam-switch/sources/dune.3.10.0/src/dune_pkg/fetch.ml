open Stdune
module Process = Dune_engine.Process
module Display = Dune_engine.Display

module Fiber_job = struct
  let run (command : OpamProcess.command) =
    let open Fiber.O in
    let prefix = "dune-source-fetch" in
    let stderr_file = Temp.create File ~prefix ~suffix:"stderr" in
    let stdout_file =
      match command.cmd_stdout with
      | None -> Temp.create File ~prefix ~suffix:"stdout"
      | Some path -> path |> Path.External.of_string |> Path.external_
    in
    let stderr_to = Process.Io.file stderr_file Out in
    let stdout_to = Process.Io.file stdout_file Out in
    let* times =
      let prog = command.cmd |> Path.External.of_string |> Path.external_ in
      let args = command.args in
      let stdin_from =
        match command.cmd_stdin with
        | Some true -> Some Process.Io.stdin
        | None | Some false -> None
      in
      let dir =
        command.cmd_dir
        |> Option.map ~f:(fun path ->
               path |> Path.Outside_build_dir.of_string
               |> Path.outside_build_dir)
      in
      let env = command.cmd_env |> Option.map ~f:Env.of_unix in
      Process.run_with_times ~display:Quiet ?dir ?env ?stdin_from ~stderr_to
        ~stdout_to prog args
    in
    let result : OpamProcess.result =
      let r_stdout = Io.lines_of_file stdout_file in
      let r_stderr = Io.lines_of_file stderr_file in
      Temp.destroy File stderr_file;
      Temp.destroy File stdout_file;
      (* Process.run_with_times forces Strict failure-mode, so the return code is 0 *)
      let r_code = 0 in
      let r_duration = times.elapsed_time in
      { r_code
      ; r_signal = None
      ; r_duration
      ; r_info = []
      ; r_stdout
      ; r_stderr
      ; r_cleanup = []
      }
    in
    Fiber.return result

  let run =
    let open Fiber.O in
    let rec run1 = function
      | OpamProcess.Job.Op.Done x -> Fiber.return x
      | Run (cmd, cont) ->
        let* r = run cmd in
        let k = cont r in
        run1 k
    in
    run1
end

type failure =
  | Checksum_mismatch of Checksum.t
  | Unavailable of User_message.t option

let fetch ~unpack ~checksum ~target (url : OpamUrl.t) =
  let open Fiber.O in
  let path = Path.to_string target in
  let pull =
    (* hashes have to be empty otherwise OPAM deletes the file after
       downloading if the hash does not match *)
    let hashes = [] in
    match (url.backend, unpack) with
    | #OpamUrl.version_control, _ | _, true -> (
      let dirname = OpamFilename.Dir.of_string path in
      fun label url ->
        let open OpamProcess.Job.Op in
        OpamRepository.pull_tree label dirname hashes [ url ] @@| function
        | Up_to_date _ -> OpamTypes.Up_to_date ()
        | Result _ -> Result ()
        | Not_available (a, b) -> Not_available (a, b))
    | _ ->
      let fname = OpamFilename.of_string path in
      fun label url -> OpamRepository.pull_file label fname hashes [ url ]
  in
  let label = "dune-fetch" in
  let event =
    Dune_stats.(
      start (global ()) (fun () ->
          { cat = None
          ; name = label
          ; args =
              (let args =
                 [ ("url", `String (OpamUrl.to_string url))
                 ; ("target", `String path)
                 ]
               in
               Some
                 (match checksum with
                 | None -> args
                 | Some checksum ->
                   ("checksum", `String (Checksum.to_string checksum)) :: args))
          }))
  in
  let+ downloaded = Fiber_job.run (pull label url) in
  Dune_stats.finish event;
  match downloaded with
  | Up_to_date () | Result () -> (
    match checksum with
    | None -> Ok ()
    | Some expected -> (
      let expected = Checksum.to_opam_hash expected in
      match OpamHash.mismatch path expected with
      | None -> Ok ()
      | Some actual ->
        (* the file is invalid, so remove it before returning to the user *)
        Path.unlink target;
        Error (Checksum_mismatch (Checksum.of_opam_hash actual))))
  | Not_available (None, _verbose) -> Error (Unavailable None)
  | Not_available (Some normal, verbose) ->
    let msg = User_message.make [ Pp.text normal; Pp.text verbose ] in
    Error (Unavailable (Some msg))

"use strict";var pn=Object.create;var B=Object.defineProperty;var mn=Object.getOwnPropertyDescriptor;var hn=Object.getOwnPropertyNames;var Sn=Object.getPrototypeOf,gn=Object.prototype.hasOwnProperty;var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),yn=(e,t)=>{for(var r in t)B(e,r,{get:t[r],enumerable:!0})},be=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of hn(t))!gn.call(e,s)&&s!==r&&B(e,s,{get:()=>t[s],enumerable:!(n=mn(t,s))||n.enumerable});return e};var we=(e,t,r)=>(r=e!=null?pn(Sn(e)):{},be(t||!e||!e.__esModule?B(r,"default",{value:e,enumerable:!0}):r,e)),xn=e=>be(B({},"__esModule",{value:!0}),e);var Pe=c((Ss,Te)=>{Te.exports=Ie;Ie.sync=wn;var ve=require("fs");function bn(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var n=0;n<r.length;n++){var s=r[n].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Ee(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:bn(t,r)}function Ie(e,t,r){ve.stat(e,function(n,s){r(n,n?!1:Ee(s,e,t))})}function wn(e,t){return Ee(ve.statSync(e),e,t)}});var Oe=c((gs,Re)=>{Re.exports=Ge;Ge.sync=vn;var Ce=require("fs");function Ge(e,t,r){Ce.stat(e,function(n,s){r(n,n?!1:Ae(s,t))})}function vn(e,t){return Ae(Ce.statSync(e),t)}function Ae(e,t){return e.isFile()&&En(e,t)}function En(e,t){var r=e.mode,n=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),l=parseInt("010",8),d=parseInt("001",8),f=a|l,h=r&d||r&l&&s===i||r&a&&n===o||r&f&&o===0;return h}});var _e=c((xs,qe)=>{var ys=require("fs"),L;process.platform==="win32"||global.TESTING_WINDOWS?L=Pe():L=Oe();qe.exports=Q;Q.sync=In;function Q(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(n,s){Q(e,t||{},function(o,i){o?s(o):n(i)})})}L(e,t||{},function(n,s){n&&(n.code==="EACCES"||t&&t.ignoreErrors)&&(n=null,s=!1),r(n,s)})}function In(e,t){try{return L.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var je=c((bs,Me)=>{var v=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Ne=require("path"),Tn=v?";":":",$e=_e(),ke=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Be=(e,t)=>{let r=t.colon||Tn,n=e.match(/\//)||v&&e.match(/\\/)?[""]:[...v?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],s=v?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=v?s.split(r):[""];return v&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:n,pathExt:o,pathExtExe:s}},Le=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:n,pathExt:s,pathExtExe:o}=Be(e,t),i=[],a=d=>new Promise((f,h)=>{if(d===n.length)return t.all&&i.length?f(i):h(ke(e));let m=n[d],S=/^".*"$/.test(m)?m.slice(1,-1):m,g=Ne.join(S,e),y=!S&&/^\.[\\\/]/.test(e)?e.slice(0,2)+g:g;f(l(y,d,0))}),l=(d,f,h)=>new Promise((m,S)=>{if(h===s.length)return m(a(f+1));let g=s[h];$e(d+g,{pathExt:o},(y,w)=>{if(!y&&w)if(t.all)i.push(d+g);else return m(d+g);return m(l(d,f,h+1))})});return r?a(0).then(d=>r(null,d),r):a(0)},Pn=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:n,pathExtExe:s}=Be(e,t),o=[];for(let i=0;i<r.length;i++){let a=r[i],l=/^".*"$/.test(a)?a.slice(1,-1):a,d=Ne.join(l,e),f=!l&&/^\.[\\\/]/.test(e)?e.slice(0,2)+d:d;for(let h=0;h<n.length;h++){let m=f+n[h];try{if($e.sync(m,{pathExt:s}))if(t.all)o.push(m);else return m}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw ke(e)};Me.exports=Le;Le.sync=Pn});var J=c((ws,Z)=>{"use strict";var Fe=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"};Z.exports=Fe;Z.exports.default=Fe});var He=c((vs,Xe)=>{"use strict";var Ue=require("path"),Cn=je(),Gn=J();function De(e,t){let r=e.options.env||process.env,n=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Cn.sync(e.command,{path:r[Gn({env:r})],pathExt:t?Ue.delimiter:void 0})}catch{}finally{o&&process.chdir(n)}return i&&(i=Ue.resolve(s?e.options.cwd:"",i)),i}function An(e){return De(e)||De(e,!0)}Xe.exports=An});var Ke=c((Es,te)=>{"use strict";var ee=/([()\][%!^"`<>&|;, *?])/g;function Rn(e){return e=e.replace(ee,"^$1"),e}function On(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(ee,"^$1"),t&&(e=e.replace(ee,"^$1")),e}te.exports.command=Rn;te.exports.argument=On});var ze=c((Is,We)=>{"use strict";We.exports=/^#!(.*)/});var Ye=c((Ts,Ve)=>{"use strict";var qn=ze();Ve.exports=(e="")=>{let t=e.match(qn);if(!t)return null;let[r,n]=t[0].replace(/#! ?/,"").split(" "),s=r.split("/").pop();return s==="env"?n:n?`${s} ${n}`:s}});var Ze=c((Ps,Qe)=>{"use strict";var ne=require("fs"),_n=Ye();function Nn(e){let r=Buffer.alloc(150),n;try{n=ne.openSync(e,"r"),ne.readSync(n,r,0,150,0),ne.closeSync(n)}catch{}return _n(r.toString())}Qe.exports=Nn});var nt=c((Cs,tt)=>{"use strict";var $n=require("path"),Je=He(),et=Ke(),kn=Ze(),Bn=process.platform==="win32",Ln=/\.(?:com|exe)$/i,Mn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function jn(e){e.file=Je(e);let t=e.file&&kn(e.file);return t?(e.args.unshift(e.file),e.command=t,Je(e)):e.file}function Fn(e){if(!Bn)return e;let t=jn(e),r=!Ln.test(t);if(e.options.forceShell||r){let n=Mn.test(t);e.command=$n.normalize(e.command),e.command=et.command(e.command),e.args=e.args.map(o=>et.argument(o,n));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Un(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let n={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?n:Fn(n)}tt.exports=Un});var ot=c((Gs,st)=>{"use strict";var re=process.platform==="win32";function se(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Dn(e,t){if(!re)return;let r=e.emit;e.emit=function(n,s){if(n==="exit"){let o=rt(s,t,"spawn");if(o)return r.call(e,"error",o)}return r.apply(e,arguments)}}function rt(e,t){return re&&e===1&&!t.file?se(t.original,"spawn"):null}function Xn(e,t){return re&&e===1&&!t.file?se(t.original,"spawnSync"):null}st.exports={hookChildProcess:Dn,verifyENOENT:rt,verifyENOENTSync:Xn,notFoundError:se}});var ct=c((As,E)=>{"use strict";var it=require("child_process"),oe=nt(),ie=ot();function at(e,t,r){let n=oe(e,t,r),s=it.spawn(n.command,n.args,n.options);return ie.hookChildProcess(s,n),s}function Hn(e,t,r){let n=oe(e,t,r),s=it.spawnSync(n.command,n.args,n.options);return s.error=s.error||ie.verifyENOENTSync(s.status,n),s}E.exports=at;E.exports.spawn=at;E.exports.sync=Hn;E.exports._parse=oe;E.exports._enoent=ie});var lt=c((Rs,ut)=>{"use strict";ut.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),r=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===r&&(e=e.slice(0,e.length-1)),e}});var pt=c((Os,O)=>{"use strict";var R=require("path"),dt=J(),ft=e=>{e={cwd:process.cwd(),path:process.env[dt()],execPath:process.execPath,...e};let t,r=R.resolve(e.cwd),n=[];for(;t!==r;)n.push(R.join(r,"node_modules/.bin")),t=r,r=R.resolve(r,"..");let s=R.resolve(e.cwd,e.execPath,"..");return n.push(s),n.concat(e.path).join(R.delimiter)};O.exports=ft;O.exports.default=ft;O.exports.env=e=>{e={env:process.env,...e};let t={...e.env},r=dt({env:t});return e.path=t[r],t[r]=O.exports(e),t}});var ht=c((qs,ae)=>{"use strict";var mt=(e,t)=>{for(let r of Reflect.ownKeys(t))Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));return e};ae.exports=mt;ae.exports.default=mt});var gt=c((_s,j)=>{"use strict";var Kn=ht(),M=new WeakMap,St=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(M.set(o,++n),n===1)r=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return r};return Kn(o,e),M.set(o,n),o};j.exports=St;j.exports.default=St;j.exports.callCount=e=>{if(!M.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return M.get(e)}});var yt=c(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.SIGNALS=void 0;var Wn=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];F.SIGNALS=Wn});var ce=c(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.SIGRTMAX=I.getRealtimeSignals=void 0;var zn=function(){let e=bt-xt+1;return Array.from({length:e},Vn)};I.getRealtimeSignals=zn;var Vn=function(e,t){return{name:`SIGRT${t+1}`,number:xt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},xt=34,bt=64;I.SIGRTMAX=bt});var wt=c(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.getSignals=void 0;var Yn=require("os"),Qn=yt(),Zn=ce(),Jn=function(){let e=(0,Zn.getRealtimeSignals)();return[...Qn.SIGNALS,...e].map(er)};U.getSignals=Jn;var er=function({name:e,number:t,description:r,action:n,forced:s=!1,standard:o}){let{signals:{[e]:i}}=Yn.constants,a=i!==void 0;return{name:e,number:a?i:t,description:r,supported:a,action:n,forced:s,standard:o}}});var Et=c(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.signalsByNumber=T.signalsByName=void 0;var tr=require("os"),vt=wt(),nr=ce(),rr=function(){return(0,vt.getSignals)().reduce(sr,{})},sr=function(e,{name:t,number:r,description:n,supported:s,action:o,forced:i,standard:a}){return{...e,[t]:{name:t,number:r,description:n,supported:s,action:o,forced:i,standard:a}}},or=rr();T.signalsByName=or;var ir=function(){let e=(0,vt.getSignals)(),t=nr.SIGRTMAX+1,r=Array.from({length:t},(n,s)=>ar(s,e));return Object.assign({},...r)},ar=function(e,t){let r=cr(e,t);if(r===void 0)return{};let{name:n,description:s,supported:o,action:i,forced:a,standard:l}=r;return{[e]:{name:n,number:e,description:s,supported:o,action:i,forced:a,standard:l}}},cr=function(e,t){let r=t.find(({name:n})=>tr.constants.signals[n]===e);return r!==void 0?r:t.find(n=>n.number===e)},ur=ir();T.signalsByNumber=ur});var Tt=c((Ls,It)=>{"use strict";var{signalsByName:lr}=Et(),dr=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":r!==void 0?`failed with ${r}`:n!==void 0?`was killed with ${n} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",fr=({stdout:e,stderr:t,all:r,error:n,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:l,isCanceled:d,killed:f,parsed:{options:{timeout:h}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let m=s===void 0?void 0:lr[s].description,S=n&&n.code,y=`Command ${dr({timedOut:l,timeout:h,errorCode:S,signal:s,signalDescription:m,exitCode:o,isCanceled:d})}: ${i}`,w=Object.prototype.toString.call(n)==="[object Error]",$=w?`${y}
${n.message}`:y,k=[$,t,e].filter(Boolean).join(`
`);return w?(n.originalMessage=n.message,n.message=k):n=new Error(k),n.shortMessage=$,n.command=i,n.escapedCommand=a,n.exitCode=o,n.signal=s,n.signalDescription=m,n.stdout=e,n.stderr=t,r!==void 0&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(l),n.isCanceled=d,n.killed=f&&!l,n};It.exports=fr});var Ct=c((Ms,ue)=>{"use strict";var D=["stdin","stdout","stderr"],pr=e=>D.some(t=>e[t]!==void 0),Pt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return D.map(n=>e[n]);if(pr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${D.map(n=>`\`${n}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let r=Math.max(t.length,D.length);return Array.from({length:r},(n,s)=>t[s])};ue.exports=Pt;ue.exports.node=e=>{let t=Pt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Gt=c((js,X)=>{X.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&X.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&X.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var _t=c((Fs,G)=>{var u=global.process;typeof u!="object"||!u?G.exports=function(){}:(At=require("assert"),P=Gt(),Rt=/^win/i.test(u.platform),q=require("events"),typeof q!="function"&&(q=q.EventEmitter),u.__signal_exit_emitter__?p=u.__signal_exit_emitter__:(p=u.__signal_exit_emitter__=new q,p.count=0,p.emitted={}),p.infinite||(p.setMaxListeners(1/0),p.infinite=!0),G.exports=function(e,t){if(global.process===u){At.equal(typeof e,"function","a callback must be provided for exit handler"),C===!1&&le();var r="exit";t&&t.alwaysLast&&(r="afterexit");var n=function(){p.removeListener(r,e),p.listeners("exit").length===0&&p.listeners("afterexit").length===0&&H()};return p.on(r,e),n}},H=function(){!C||global.process!==u||(C=!1,P.forEach(function(t){try{u.removeListener(t,K[t])}catch{}}),u.emit=W,u.reallyExit=de,p.count-=1)},G.exports.unload=H,b=function(t,r,n){p.emitted[t]||(p.emitted[t]=!0,p.emit(t,r,n))},K={},P.forEach(function(e){K[e]=function(){if(u===global.process){var r=u.listeners(e);r.length===p.count&&(H(),b("exit",null,e),b("afterexit",null,e),Rt&&e==="SIGHUP"&&(e="SIGINT"),u.kill(u.pid,e))}}}),G.exports.signals=function(){return P},C=!1,le=function(){C||u!==global.process||(C=!0,p.count+=1,P=P.filter(function(t){try{return u.on(t,K[t]),!0}catch{return!1}}),u.emit=qt,u.reallyExit=Ot)},G.exports.load=le,de=u.reallyExit,Ot=function(t){u===global.process&&(u.exitCode=t||0,b("exit",u.exitCode,null),b("afterexit",u.exitCode,null),de.call(u,u.exitCode))},W=u.emit,qt=function(t,r){if(t==="exit"&&u===global.process){r!==void 0&&(u.exitCode=r);var n=W.apply(this,arguments);return b("exit",u.exitCode,null),b("afterexit",u.exitCode,null),n}else return W.apply(this,arguments)});var At,P,Rt,q,p,H,b,K,C,le,de,Ot,W,qt});var $t=c((Us,Nt)=>{"use strict";var mr=require("os"),hr=_t(),Sr=1e3*5,gr=(e,t="SIGTERM",r={})=>{let n=e(t);return yr(e,t,r,n),n},yr=(e,t,r,n)=>{if(!xr(t,r,n))return;let s=wr(r),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},xr=(e,{forceKillAfterTimeout:t},r)=>br(e)&&t!==!1&&r,br=e=>e===mr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",wr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Sr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},vr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Er=(e,t,r)=>{e.kill(t),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Ir=(e,{timeout:t,killSignal:r="SIGTERM"},n)=>{if(t===0||t===void 0)return n;let s,o=new Promise((a,l)=>{s=setTimeout(()=>{Er(e,r,l)},t)}),i=n.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},Tr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Pr=async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;let s=hr(()=>{e.kill()});return n.finally(()=>{s()})};Nt.exports={spawnedKill:gr,spawnedCancel:vr,setupTimeout:Ir,validateTimeout:Tr,setExitHandler:Pr}});var Bt=c((Ds,kt)=>{"use strict";var x=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";x.writable=e=>x(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";x.readable=e=>x(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";x.duplex=e=>x.writable(e)&&x.readable(e);x.transform=e=>x.duplex(e)&&typeof e._transform=="function";kt.exports=x});var Mt=c((Xs,Lt)=>{"use strict";var{PassThrough:Cr}=require("stream");Lt.exports=e=>{e={...e};let{array:t}=e,{encoding:r}=e,n=r==="buffer",s=!1;t?s=!(r||n):r=r||"utf8",n&&(r=null);let o=new Cr({objectMode:s});r&&o.setEncoding(r);let i=0,a=[];return o.on("data",l=>{a.push(l),s?i=a.length:i+=l.length}),o.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var jt=c((Hs,_)=>{"use strict";var{constants:Gr}=require("buffer"),Ar=require("stream"),{promisify:Rr}=require("util"),Or=Mt(),qr=Rr(Ar.pipeline),z=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function fe(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:r}=t,n=Or(t);return await new Promise((s,o)=>{let i=a=>{a&&n.getBufferedLength()<=Gr.MAX_LENGTH&&(a.bufferedData=n.getBufferedValue()),o(a)};(async()=>{try{await qr(e,n),s()}catch(a){i(a)}})(),n.on("data",()=>{n.getBufferedLength()>r&&i(new z)})}),n.getBufferedValue()}_.exports=fe;_.exports.buffer=(e,t)=>fe(e,{...t,encoding:"buffer"});_.exports.array=(e,t)=>fe(e,{...t,array:!0});_.exports.MaxBufferError=z});var Ut=c((Ks,Ft)=>{"use strict";var{PassThrough:_r}=require("stream");Ft.exports=function(){var e=[],t=new _r({objectMode:!0});return t.setMaxListeners(0),t.add=r,t.isEmpty=n,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(r),t;function r(o){return Array.isArray(o)?(o.forEach(r),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function n(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var Kt=c((Ws,Ht)=>{"use strict";var Xt=Bt(),Dt=jt(),Nr=Ut(),$r=(e,t)=>{t===void 0||e.stdin===void 0||(Xt(t)?t.pipe(e.stdin):e.stdin.end(t))},kr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let r=Nr();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},pe=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(r){return r.bufferedData}}},me=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(!(!e||!r))return t?Dt(e,{encoding:t,maxBuffer:n}):Dt.buffer(e,{maxBuffer:n})},Br=async({stdout:e,stderr:t,all:r},{encoding:n,buffer:s,maxBuffer:o},i)=>{let a=me(e,{encoding:n,buffer:s,maxBuffer:o}),l=me(t,{encoding:n,buffer:s,maxBuffer:o}),d=me(r,{encoding:n,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,l,d])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},pe(e,a),pe(t,l),pe(r,d)])}},Lr=({input:e})=>{if(Xt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Ht.exports={handleInput:$r,makeAllStream:kr,getSpawnedResult:Br,validateInputSync:Lr}});var zt=c((zs,Wt)=>{"use strict";var Mr=(async()=>{})().constructor.prototype,jr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Mr,e)]),Fr=(e,t)=>{for(let[r,n]of jr){let s=typeof t=="function"?(...o)=>Reflect.apply(n.value,t(),o):n.value.bind(t);Reflect.defineProperty(e,r,{...n,value:s})}return e},Ur=e=>new Promise((t,r)=>{e.on("exit",(n,s)=>{t({exitCode:n,signal:s})}),e.on("error",n=>{r(n)}),e.stdin&&e.stdin.on("error",n=>{r(n)})});Wt.exports={mergePromise:Fr,getSpawnedPromise:Ur}});var Qt=c((Vs,Yt)=>{"use strict";var Vt=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Dr=/^[\w.-]+$/,Xr=/"/g,Hr=e=>typeof e!="string"||Dr.test(e)?e:`"${e.replace(Xr,'\\"')}"`,Kr=(e,t)=>Vt(e,t).join(" "),Wr=(e,t)=>Vt(e,t).map(r=>Hr(r)).join(" "),zr=/ +/g,Vr=e=>{let t=[];for(let r of e.trim().split(zr)){let n=t[t.length-1];n&&n.endsWith("\\")?t[t.length-1]=`${n.slice(0,-1)} ${r}`:t.push(r)}return t};Yt.exports={joinCommand:Kr,getEscapedCommand:Wr,parseCommand:Vr}});var sn=c((Ys,A)=>{"use strict";var Yr=require("path"),he=require("child_process"),Qr=ct(),Zr=lt(),Jr=pt(),es=gt(),V=Tt(),Jt=Ct(),{spawnedKill:ts,spawnedCancel:ns,setupTimeout:rs,validateTimeout:ss,setExitHandler:os}=$t(),{handleInput:is,getSpawnedResult:as,makeAllStream:cs,validateInputSync:us}=Kt(),{mergePromise:Zt,getSpawnedPromise:ls}=zt(),{joinCommand:en,parseCommand:tn,getEscapedCommand:nn}=Qt(),ds=1e3*1e3*100,fs=({env:e,extendEnv:t,preferLocal:r,localDir:n,execPath:s})=>{let o=t?{...process.env,...e}:e;return r?Jr.env({env:o,cwd:n,execPath:s}):o},rn=(e,t,r={})=>{let n=Qr._parse(e,t,r);return e=n.command,t=n.args,r=n.options,r={maxBuffer:ds,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=fs(r),r.stdio=Jt(r),process.platform==="win32"&&Yr.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:r,parsed:n}},N=(e,t,r)=>typeof t!="string"&&!Buffer.isBuffer(t)?r===void 0?void 0:"":e.stripFinalNewline?Zr(t):t,Y=(e,t,r)=>{let n=rn(e,t,r),s=en(e,t),o=nn(e,t);ss(n.options);let i;try{i=he.spawn(n.file,n.args,n.options)}catch(S){let g=new he.ChildProcess,y=Promise.reject(V({error:S,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:n,timedOut:!1,isCanceled:!1,killed:!1}));return Zt(g,y)}let a=ls(i),l=rs(i,n.options,a),d=os(i,n.options,l),f={isCanceled:!1};i.kill=ts.bind(null,i.kill.bind(i)),i.cancel=ns.bind(null,i,f);let m=es(async()=>{let[{error:S,exitCode:g,signal:y,timedOut:w},$,k,fn]=await as(i,n.options,d),Se=N(n.options,$),ge=N(n.options,k),ye=N(n.options,fn);if(S||g!==0||y!==null){let xe=V({error:S,exitCode:g,signal:y,stdout:Se,stderr:ge,all:ye,command:s,escapedCommand:o,parsed:n,timedOut:w,isCanceled:f.isCanceled,killed:i.killed});if(!n.options.reject)return xe;throw xe}return{command:s,escapedCommand:o,exitCode:0,stdout:Se,stderr:ge,all:ye,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return is(i,n.options.input),i.all=cs(i,n.options),Zt(i,m)};A.exports=Y;A.exports.sync=(e,t,r)=>{let n=rn(e,t,r),s=en(e,t),o=nn(e,t);us(n.options);let i;try{i=he.spawnSync(n.file,n.args,n.options)}catch(d){throw V({error:d,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:n,timedOut:!1,isCanceled:!1,killed:!1})}let a=N(n.options,i.stdout,i.error),l=N(n.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let d=V({stdout:a,stderr:l,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:n,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!n.options.reject)return d;throw d}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:l,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};A.exports.command=(e,t)=>{let[r,...n]=tn(e);return Y(r,n,t)};A.exports.commandSync=(e,t)=>{let[r,...n]=tn(e);return Y.sync(r,n,t)};A.exports.node=(e,t,r={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(r=t,t=[]);let n=Jt.node(r),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=r;return Y(o,[...i,e,...Array.isArray(t)?t:[]],{...r,stdin:void 0,stdout:void 0,stderr:void 0,stdio:n,shell:!1})}});var ms={};yn(ms,{default:()=>ps});module.exports=xn(ms);var un=require("@raycast/api");var on=we(require("node:process"),1),an=we(sn(),1);async function cn(e){if(on.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,an.default)("osascript",["-e",e]);return t}function ln(e){return`
    tell application "Spotify"
      if not application "Spotify" is running then
        activate

        set _maxOpenWaitTimeInSeconds to 5
        set _openCounter to 1
        repeat until application "Spotify" is running
          delay 1
          set _openCounter to _openCounter + 1
          if _openCounter > _maxOpenWaitTimeInSeconds then exit repeat
        end repeat
      end if
      ${e}
    end tell`}async function dn(e){await(0,un.closeMainWindow)(),await cn(e)}var ps=async()=>{let e=ln(`
    set shuffling to true
    set spotify_playing to (player state = playing)
    if not spotify_playing then
      play
    end if
  `);await dn(e)};0&&(module.exports={});
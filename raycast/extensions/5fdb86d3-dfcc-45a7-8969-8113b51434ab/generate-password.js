"use strict";var Xr=Object.create;var J=Object.defineProperty;var Jr=Object.getOwnPropertyDescriptor;var Qr=Object.getOwnPropertyNames;var Zr=Object.getPrototypeOf,en=Object.prototype.hasOwnProperty;var m=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),tn=(e,t)=>{for(var r in t)J(e,r,{get:t[r],enumerable:!0})},Ve=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Qr(t))!en.call(e,o)&&o!==r&&J(e,o,{get:()=>t[o],enumerable:!(n=Jr(t,o))||n.enumerable});return e};var x=(e,t,r)=>(r=e!=null?Xr(Zr(e)):{},Ve(t||!e||!e.__esModule?J(r,"default",{value:e,enumerable:!0}):r,e)),rn=e=>Ve(J({},"__esModule",{value:!0}),e);var Qe=m((Ko,Je)=>{Je.exports=Xe;Xe.sync=cn;var qe=require("fs");function an(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var n=0;n<r.length;n++){var o=r[n].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function ze(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:an(t,r)}function Xe(e,t,r){qe.stat(e,function(n,o){r(n,n?!1:ze(o,e,t))})}function cn(e,t){return ze(qe.statSync(e),e,t)}});var nt=m((Yo,rt)=>{rt.exports=et;et.sync=ln;var Ze=require("fs");function et(e,t,r){Ze.stat(e,function(n,o){r(n,n?!1:tt(o,t))})}function ln(e,t){return tt(Ze.statSync(e),t)}function tt(e,t){return e.isFile()&&un(e,t)}function un(e,t){var r=e.mode,n=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),c=parseInt("010",8),l=parseInt("001",8),p=a|c,u=r&l||r&c&&o===i||r&a&&n===s||r&p&&s===0;return u}});var st=m((zo,ot)=>{var qo=require("fs"),Q;process.platform==="win32"||global.TESTING_WINDOWS?Q=Qe():Q=nt();ot.exports=pe;pe.sync=dn;function pe(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(n,o){pe(e,t||{},function(s,i){s?o(s):n(i)})})}Q(e,t||{},function(n,o){n&&(n.code==="EACCES"||t&&t.ignoreErrors)&&(n=null,o=!1),r(n,o)})}function dn(e,t){try{return Q.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var pt=m((Xo,dt)=>{var L=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",it=require("path"),pn=L?";":":",at=st(),ct=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),lt=(e,t)=>{let r=t.colon||pn,n=e.match(/\//)||L&&e.match(/\\/)?[""]:[...L?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],o=L?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=L?o.split(r):[""];return L&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:n,pathExt:s,pathExtExe:o}},ut=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:n,pathExt:o,pathExtExe:s}=lt(e,t),i=[],a=l=>new Promise((p,u)=>{if(l===n.length)return t.all&&i.length?p(i):u(ct(e));let f=n[l],w=/^".*"$/.test(f)?f.slice(1,-1):f,P=it.join(w,e),b=!w&&/^\.[\\\/]/.test(e)?e.slice(0,2)+P:P;p(c(b,l,0))}),c=(l,p,u)=>new Promise((f,w)=>{if(u===o.length)return f(a(p+1));let P=o[u];at(l+P,{pathExt:s},(b,v)=>{if(!b&&v)if(t.all)i.push(l+P);else return f(l+P);return f(c(l,p,u+1))})});return r?a(0).then(l=>r(null,l),r):a(0)},fn=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:n,pathExtExe:o}=lt(e,t),s=[];for(let i=0;i<r.length;i++){let a=r[i],c=/^".*"$/.test(a)?a.slice(1,-1):a,l=it.join(c,e),p=!c&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let u=0;u<n.length;u++){let f=p+n[u];try{if(at.sync(f,{pathExt:o}))if(t.all)s.push(f);else return f}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw ct(e)};dt.exports=ut;ut.sync=fn});var mt=m((Jo,fe)=>{"use strict";var ft=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"};fe.exports=ft;fe.exports.default=ft});var St=m((Qo,wt)=>{"use strict";var ht=require("path"),mn=pt(),hn=mt();function gt(e,t){let r=e.options.env||process.env,n=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=mn.sync(e.command,{path:r[hn({env:r})],pathExt:t?ht.delimiter:void 0})}catch{}finally{s&&process.chdir(n)}return i&&(i=ht.resolve(o?e.options.cwd:"",i)),i}function gn(e){return gt(e)||gt(e,!0)}wt.exports=gn});var yt=m((Zo,he)=>{"use strict";var me=/([()\][%!^"`<>&|;, *?])/g;function wn(e){return e=e.replace(me,"^$1"),e}function Sn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(me,"^$1"),t&&(e=e.replace(me,"^$1")),e}he.exports.command=wn;he.exports.argument=Sn});var Pt=m((es,Et)=>{"use strict";Et.exports=/^#!(.*)/});var xt=m((ts,bt)=>{"use strict";var yn=Pt();bt.exports=(e="")=>{let t=e.match(yn);if(!t)return null;let[r,n]=t[0].replace(/#! ?/,"").split(" "),o=r.split("/").pop();return o==="env"?n:n?`${o} ${n}`:o}});var It=m((rs,Tt)=>{"use strict";var ge=require("fs"),En=xt();function Pn(e){let r=Buffer.alloc(150),n;try{n=ge.openSync(e,"r"),ge.readSync(n,r,0,150,0),ge.closeSync(n)}catch{}return En(r.toString())}Tt.exports=Pn});var Rt=m((ns,Ct)=>{"use strict";var bn=require("path"),Ot=St(),At=yt(),xn=It(),Tn=process.platform==="win32",In=/\.(?:com|exe)$/i,On=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function An(e){e.file=Ot(e);let t=e.file&&xn(e.file);return t?(e.args.unshift(e.file),e.command=t,Ot(e)):e.file}function Cn(e){if(!Tn)return e;let t=An(e),r=!In.test(t);if(e.options.forceShell||r){let n=On.test(t);e.command=bn.normalize(e.command),e.command=At.command(e.command),e.args=e.args.map(s=>At.argument(s,n));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Rn(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let n={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?n:Cn(n)}Ct.exports=Rn});var vt=m((os,Nt)=>{"use strict";var we=process.platform==="win32";function Se(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function _n(e,t){if(!we)return;let r=e.emit;e.emit=function(n,o){if(n==="exit"){let s=_t(o,t,"spawn");if(s)return r.call(e,"error",s)}return r.apply(e,arguments)}}function _t(e,t){return we&&e===1&&!t.file?Se(t.original,"spawn"):null}function Nn(e,t){return we&&e===1&&!t.file?Se(t.original,"spawnSync"):null}Nt.exports={hookChildProcess:_n,verifyENOENT:_t,verifyENOENTSync:Nn,notFoundError:Se}});var kt=m((ss,G)=>{"use strict";var Lt=require("child_process"),ye=Rt(),Ee=vt();function Gt(e,t,r){let n=ye(e,t,r),o=Lt.spawn(n.command,n.args,n.options);return Ee.hookChildProcess(o,n),o}function vn(e,t,r){let n=ye(e,t,r),o=Lt.spawnSync(n.command,n.args,n.options);return o.error=o.error||Ee.verifyENOENTSync(o.status,n),o}G.exports=Gt;G.exports.spawn=Gt;G.exports.sync=vn;G.exports._parse=ye;G.exports._enoent=Ee});var qt=m((Ts,re)=>{re.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&re.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&re.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Zt=m((Is,B)=>{var d=global.process,R=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};R(d)?(zt=require("assert"),D=qt(),Xt=/^win/i.test(d.platform),j=require("events"),typeof j!="function"&&(j=j.EventEmitter),d.__signal_exit_emitter__?h=d.__signal_exit_emitter__:(h=d.__signal_exit_emitter__=new j,h.count=0,h.emitted={}),h.infinite||(h.setMaxListeners(1/0),h.infinite=!0),B.exports=function(e,t){if(!R(global.process))return function(){};zt.equal(typeof e,"function","a callback must be provided for exit handler"),M===!1&&Ie();var r="exit";t&&t.alwaysLast&&(r="afterexit");var n=function(){h.removeListener(r,e),h.listeners("exit").length===0&&h.listeners("afterexit").length===0&&ne()};return h.on(r,e),n},ne=function(){!M||!R(global.process)||(M=!1,D.forEach(function(t){try{d.removeListener(t,oe[t])}catch{}}),d.emit=se,d.reallyExit=Oe,h.count-=1)},B.exports.unload=ne,_=function(t,r,n){h.emitted[t]||(h.emitted[t]=!0,h.emit(t,r,n))},oe={},D.forEach(function(e){oe[e]=function(){if(!!R(global.process)){var r=d.listeners(e);r.length===h.count&&(ne(),_("exit",null,e),_("afterexit",null,e),Xt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),B.exports.signals=function(){return D},M=!1,Ie=function(){M||!R(global.process)||(M=!0,h.count+=1,D=D.filter(function(t){try{return d.on(t,oe[t]),!0}catch{return!1}}),d.emit=Qt,d.reallyExit=Jt)},B.exports.load=Ie,Oe=d.reallyExit,Jt=function(t){!R(global.process)||(d.exitCode=t||0,_("exit",d.exitCode,null),_("afterexit",d.exitCode,null),Oe.call(d,d.exitCode))},se=d.emit,Qt=function(t,r){if(t==="exit"&&R(global.process)){r!==void 0&&(d.exitCode=r);var n=se.apply(this,arguments);return _("exit",d.exitCode,null),_("afterexit",d.exitCode,null),n}else return se.apply(this,arguments)}):B.exports=function(){return function(){}};var zt,D,Xt,j,h,ne,_,oe,M,Ie,Oe,Jt,se,Qt});var lr=m((Cs,cr)=>{"use strict";var{PassThrough:ro}=require("stream");cr.exports=e=>{e={...e};let{array:t}=e,{encoding:r}=e,n=r==="buffer",o=!1;t?o=!(r||n):r=r||"utf8",n&&(r=null);let s=new ro({objectMode:o});r&&s.setEncoding(r);let i=0,a=[];return s.on("data",c=>{a.push(c),o?i=a.length:i+=c.length}),s.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var ur=m((Rs,H)=>{"use strict";var{constants:no}=require("buffer"),oo=require("stream"),{promisify:so}=require("util"),io=lr(),ao=so(oo.pipeline),ie=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function Ae(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:r}=t,n=io(t);return await new Promise((o,s)=>{let i=a=>{a&&n.getBufferedLength()<=no.MAX_LENGTH&&(a.bufferedData=n.getBufferedValue()),s(a)};(async()=>{try{await ao(e,n),o()}catch(a){i(a)}})(),n.on("data",()=>{n.getBufferedLength()>r&&i(new ie)})}),n.getBufferedValue()}H.exports=Ae;H.exports.buffer=(e,t)=>Ae(e,{...t,encoding:"buffer"});H.exports.array=(e,t)=>Ae(e,{...t,array:!0});H.exports.MaxBufferError=ie});var pr=m((_s,dr)=>{"use strict";var{PassThrough:co}=require("stream");dr.exports=function(){var e=[],t=new co({objectMode:!0});return t.setMaxListeners(0),t.add=r,t.isEmpty=n,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(r),t;function r(s){return Array.isArray(s)?(s.forEach(r),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function n(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var ko={};tn(ko,{default:()=>Go});module.exports=rn(ko);var A=require("@raycast/api");var je=(e,t=!1)=>{let r=e.charAt(0).toUpperCase(),n=t?e.slice(1).toLowerCase():e.slice(1);return r+n};var I=require("@raycast/api"),$e=require("react");var F=require("@raycast/api");var He="https://bitwarden.com";var S={PASSWORD_OPTIONS:"bw-generate-password-options",PASSWORD_ONE_TIME_WARNING:"bw-generate-password-warning-accepted",SESSION_TOKEN:"sessionToken",REPROMPT_HASH:"sessionRepromptHash",SERVER_URL:"cliServer",LAST_ACTIVITY_TIME:"lastActivityTime",VAULT_LOCK_REASON:"vaultLockReason"};var Vo={[1]:F.Icon.Globe,[3]:F.Icon.CreditCard,[4]:F.Icon.Person,[2]:F.Icon.Document};var on=()=>{let e=()=>(0,I.popToRoot)({clearSearchBar:!1}),t=()=>I.LocalStorage.setItem(S.PASSWORD_ONE_TIME_WARNING,!0),r=async()=>{await I.LocalStorage.getItem(S.PASSWORD_ONE_TIME_WARNING)||await(0,I.confirmAlert)({title:"Warning",message:"Password history is not available yet, so make sure to store the password after generating it!",icon:I.Icon.ExclamationMark,dismissAction:{title:"Go back",onAction:e},primaryAction:{title:"I understand",onAction:t}})};(0,$e.useEffect)(()=>{r()},[])},We=on;var Br=require("@raycast/api"),de=require("react");var Ke=require("react");function sn(){let e=(0,Ke.useRef)(new AbortController);return{abortControllerRef:e,renew:()=>{!e.current.signal.aborted||(e.current=new AbortController)},abort:()=>{e.current?.abort()}}}var Ye=sn;var Gr=require("@raycast/api"),C=require("react");var g=require("@raycast/api");var Pr=require("node:buffer"),br=x(require("node:path"),1),Le=x(require("node:child_process"),1),$=x(require("node:process"),1),xr=x(kt(),1);function Pe(e){let t=typeof e=="string"?`
`:`
`.charCodeAt(),r=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===r&&(e=e.slice(0,-1)),e}var V=x(require("node:process"),1),k=x(require("node:path"),1),Dt=x(require("node:url"),1);function Z(e={}){let{env:t=process.env,platform:r=process.platform}=e;return r!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"}function Ln(e={}){let{cwd:t=V.default.cwd(),path:r=V.default.env[Z()],execPath:n=V.default.execPath}=e,o,s=t instanceof URL?Dt.default.fileURLToPath(t):t,i=k.default.resolve(s),a=[];for(;o!==i;)a.push(k.default.join(i,"node_modules/.bin")),o=i,i=k.default.resolve(i,"..");return a.push(k.default.resolve(s,n,"..")),[...a,r].join(k.default.delimiter)}function Mt({env:e=V.default.env,...t}={}){e={...e};let r=Z({env:e});return t.path=e[r],e[r]=Ln(t),e}var Gn=(e,t,r,n)=>{if(r==="length"||r==="prototype"||r==="arguments"||r==="caller")return;let o=Object.getOwnPropertyDescriptor(e,r),s=Object.getOwnPropertyDescriptor(t,r);!kn(o,s)&&n||Object.defineProperty(e,r,s)},kn=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},Dn=(e,t)=>{let r=Object.getPrototypeOf(t);r!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,r)},Mn=(e,t)=>`/* Wrapped ${e}*/
${t}`,Bn=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Un=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Fn=(e,t,r)=>{let n=r===""?"":`with ${r.trim()}() `,o=Mn.bind(null,n,t.toString());Object.defineProperty(o,"name",Un),Object.defineProperty(e,"toString",{...Bn,value:o})};function be(e,t,{ignoreNonConfigurable:r=!1}={}){let{name:n}=e;for(let o of Reflect.ownKeys(t))Gn(e,t,o,r);return Dn(e,t),Fn(e,t,n),e}var ee=new WeakMap,Bt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(ee.set(s,++n),n===1)r=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return r};return be(s,e),ee.set(s,n),s};Bt.callCount=e=>{if(!ee.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return ee.get(e)};var Ut=Bt;var Wt=require("node:os");var Ft=function(){let e=jt-Vt+1;return Array.from({length:e},Vn)},Vn=function(e,t){return{name:`SIGRT${t+1}`,number:Vt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Vt=34,jt=64;var $t=require("node:os");var Ht=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];var xe=function(){let e=Ft();return[...Ht,...e].map(jn)},jn=function({name:e,number:t,description:r,action:n,forced:o=!1,standard:s}){let{signals:{[e]:i}}=$t.constants,a=i!==void 0;return{name:e,number:a?i:t,description:r,supported:a,action:n,forced:o,standard:s}};var Hn=function(){let e=xe();return Object.fromEntries(e.map($n))},$n=function({name:e,number:t,description:r,supported:n,action:o,forced:s,standard:i}){return[e,{name:e,number:t,description:r,supported:n,action:o,forced:s,standard:i}]},Kt=Hn(),Wn=function(){let e=xe(),t=64+1,r=Array.from({length:t},(n,o)=>Kn(o,e));return Object.assign({},...r)},Kn=function(e,t){let r=Yn(e,t);if(r===void 0)return{};let{name:n,description:o,supported:s,action:i,forced:a,standard:c}=r;return{[e]:{name:n,number:e,description:o,supported:s,action:i,forced:a,standard:c}}},Yn=function(e,t){let r=t.find(({name:n})=>Wt.constants.signals[n]===e);return r!==void 0?r:t.find(n=>n.number===e)},ys=Wn();var qn=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":r!==void 0?`failed with ${r}`:n!==void 0?`was killed with ${n} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",Te=({stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:c,isCanceled:l,killed:p,parsed:{options:{timeout:u}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let f=o===void 0?void 0:Kt[o].description,w=n&&n.code,b=`Command ${qn({timedOut:c,timeout:u,errorCode:w,signal:o,signalDescription:f,exitCode:s,isCanceled:l})}: ${i}`,v=Object.prototype.toString.call(n)==="[object Error]",z=v?`${b}
${n.message}`:b,X=[z,t,e].filter(Boolean).join(`
`);return v?(n.originalMessage=n.message,n.message=X):n=new Error(X),n.shortMessage=z,n.command=i,n.escapedCommand=a,n.exitCode=s,n.signal=o,n.signalDescription=f,n.stdout=e,n.stderr=t,r!==void 0&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(c),n.isCanceled=l,n.killed=p&&!c,n};var te=["stdin","stdout","stderr"],zn=e=>te.some(t=>e[t]!==void 0),Yt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return te.map(n=>e[n]);if(zn(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${te.map(n=>`\`${n}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let r=Math.max(t.length,te.length);return Array.from({length:r},(n,o)=>t[o])};var er=x(require("node:os"),1),tr=x(Zt(),1),Xn=1e3*5,rr=(e,t="SIGTERM",r={})=>{let n=e(t);return Jn(e,t,r,n),n},Jn=(e,t,r,n)=>{if(!Qn(t,r,n))return;let o=eo(r),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},Qn=(e,{forceKillAfterTimeout:t},r)=>Zn(e)&&t!==!1&&r,Zn=e=>e===er.default.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",eo=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Xn;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},nr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},to=(e,t,r)=>{e.kill(t),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},or=(e,{timeout:t,killSignal:r="SIGTERM"},n)=>{if(t===0||t===void 0)return n;let o,s=new Promise((a,c)=>{o=setTimeout(()=>{to(e,r,c)},t)}),i=n.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},sr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},ir=async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;let o=(0,tr.default)(()=>{e.kill()});return n.finally(()=>{o()})};function ar(e){return e!==null&&typeof e=="object"&&typeof e.pipe=="function"}var _e=x(ur(),1),fr=x(pr(),1),mr=(e,t)=>{t!==void 0&&(ar(t)?t.pipe(e.stdin):e.stdin.end(t))},hr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let r=(0,fr.default)();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},Ce=async(e,t)=>{if(!(!e||t===void 0)){e.destroy();try{return await t}catch(r){return r.bufferedData}}},Re=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(!(!e||!r))return t?(0,_e.default)(e,{encoding:t,maxBuffer:n}):_e.default.buffer(e,{maxBuffer:n})},gr=async({stdout:e,stderr:t,all:r},{encoding:n,buffer:o,maxBuffer:s},i)=>{let a=Re(e,{encoding:n,buffer:o,maxBuffer:s}),c=Re(t,{encoding:n,buffer:o,maxBuffer:s}),l=Re(r,{encoding:n,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,c,l])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},Ce(e,a),Ce(t,c),Ce(r,l)])}};var lo=(async()=>{})().constructor.prototype,uo=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(lo,e)]),Ne=(e,t)=>{for(let[r,n]of uo){let o=typeof t=="function"?(...s)=>Reflect.apply(n.value,t(),s):n.value.bind(t);Reflect.defineProperty(e,r,{...n,value:o})}return e},wr=e=>new Promise((t,r)=>{e.on("exit",(n,o)=>{t({exitCode:n,signal:o})}),e.on("error",n=>{r(n)}),e.stdin&&e.stdin.on("error",n=>{r(n)})});var Sr=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],po=/^[\w.-]+$/,fo=/"/g,mo=e=>typeof e!="string"||po.test(e)?e:`"${e.replace(fo,'\\"')}"`,yr=(e,t)=>Sr(e,t).join(" "),Er=(e,t)=>Sr(e,t).map(r=>mo(r)).join(" ");var ho=1e3*1e3*100,go=({env:e,extendEnv:t,preferLocal:r,localDir:n,execPath:o})=>{let s=t?{...$.default.env,...e}:e;return r?Mt({env:s,cwd:n,execPath:o}):s},wo=(e,t,r={})=>{let n=xr.default._parse(e,t,r);return e=n.command,t=n.args,r=n.options,r={maxBuffer:ho,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||$.default.cwd(),execPath:$.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=go(r),r.stdio=Yt(r),$.default.platform==="win32"&&br.default.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:r,parsed:n}},ve=(e,t,r)=>typeof t!="string"&&!Pr.Buffer.isBuffer(t)?r===void 0?void 0:"":e.stripFinalNewline?Pe(t):t;function Tr(e,t,r){let n=wo(e,t,r),o=yr(e,t),s=Er(e,t);sr(n.options);let i;try{i=Le.default.spawn(n.file,n.args,n.options)}catch(w){let P=new Le.default.ChildProcess,b=Promise.reject(Te({error:w,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1}));return Ne(P,b)}let a=wr(i),c=or(i,n.options,a),l=ir(i,n.options,c),p={isCanceled:!1};i.kill=rr.bind(null,i.kill.bind(i)),i.cancel=nr.bind(null,i,p);let f=Ut(async()=>{let[{error:w,exitCode:P,signal:b,timedOut:v},z,X,zr]=await gr(i,n.options,l),Me=ve(n.options,z),Be=ve(n.options,X),Ue=ve(n.options,zr);if(w||P!==0||b!==null){let Fe=Te({error:w,exitCode:P,signal:b,stdout:Me,stderr:Be,all:Ue,command:o,escapedCommand:s,parsed:n,timedOut:v,isCanceled:p.isCanceled||(n.options.signal?n.options.signal.aborted:!1),killed:i.killed});if(!n.options.reject)return Fe;throw Fe}return{command:o,escapedCommand:s,exitCode:0,stdout:Me,stderr:Be,all:Ue,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return mr(i,n.options.input),i.all=hr(i,n.options),Ne(i,f)}var Nr=require("fs"),vr=require("path/posix");var Or=require("@raycast/api");var Ir={lowercase:!0,uppercase:!0,number:!1,special:!1,passphrase:!1,length:14,words:3,separator:"-",capitalize:!1,includeNumber:!1},Ge={password:{length:{label:"Length of the password",hint:"5 - 128",type:"number",errorMessage:"Number between 5 and 128"},uppercase:{label:"Uppercase characters",hint:"ABCDEFGHIJLMNOPQRSTUVWXYZ",type:"boolean"},lowercase:{label:"Lowercase characters",hint:"abcdefghijklmnopqrstuvwxyz",type:"boolean"},number:{label:"Numeric characters",hint:"0123456789",type:"boolean"},special:{label:"Special characters",hint:"!@#$%^&*()_+-=[]{}|;:,./<>?",type:"boolean"}},passphrase:{words:{label:"Number of words",hint:"3 - 20",type:"number",errorMessage:"Number between 3 and 20"},separator:{label:"Word separator",hint:"this-is-a-passphrase",type:"string",errorMessage:"Must be a single character"},capitalize:{label:"Capitalise",hint:"This-Is-A-Passphrase",type:"boolean"},includeNumber:{label:"Include number",hint:"This2-Is-A-Passphrase",type:"boolean"}}};function Ar(e){return Object.entries(e).flatMap(([t,r])=>r?[`--${t}`,r]:[])}async function Cr(){let e=await Or.LocalStorage.getItem(S.PASSWORD_OPTIONS);return{...Ir,...e?JSON.parse(e):{}}}var W=require("@raycast/api");var T={IMMEDIATELY:0,ONE_MINUTE:6e4,FIVE_MINUTES:3e5,FIFTEEN_MINUTES:9e5,THIRTY_MINUTES:18e5,ONE_HOUR:36e5,FOUR_HOURS:144e5,EIGHT_HOURS:288e5,ONE_DAY:864e5,NEVER:-1};var So={[T.IMMEDIATELY]:"Immediately",[T.ONE_MINUTE]:"1 Minute",[T.FIVE_MINUTES]:"5 Minutes",[T.FIFTEEN_MINUTES]:"15 Minutes",[T.THIRTY_MINUTES]:"30 Minutes",[T.ONE_HOUR]:"1 Hour",[T.FOUR_HOURS]:"4 Hours",[T.EIGHT_HOURS]:"8 Hours",[T.ONE_DAY]:"1 Day"};var oi={[1]:"Login",[3]:"Card",[4]:"Identity",[2]:"Secure Note"};function Rr(){let{serverUrl:e}=(0,W.getPreferenceValues)();return e===""||e==="bitwarden.com"||e==="https://bitwarden.com"?"":e}var yo={search:"transientCopySearch","generate-password":"transientCopyGeneratePassword","generate-password-quick":"transientCopyGeneratePasswordQuick"};function _r(e){let t=yo[W.environment.commandName],r=(0,W.getPreferenceValues)()[t];return r==="never"?!1:r==="always"?!0:r==="passwords"?e==="password":!0}var K=class extends Error{constructor(t){super(t)}},ae=class extends K{constructor(t){super(t)}},ce=class extends ae{constructor(t){super(t??"Bitwarden CLI not found"),this.name="CLINotFoundError"}};var le=class extends ae{constructor(t){super(t??"Vault is locked"),this.name="VaultIsLockedError"}};var ue=class{constructor(){this.callbacks={};let{cliPath:t,clientId:r,clientSecret:n,serverCertsPath:o}=(0,g.getPreferenceValues)(),s=Rr();if(this.cliPath=t||(process.arch=="arm64"?"/opt/homebrew/bin/bw":"/usr/local/bin/bw"),!(0,Nr.existsSync)(this.cliPath))throw new ce(`Bitwarden CLI not found at ${this.cliPath}`);this.env={BITWARDENCLI_APPDATA_DIR:g.environment.supportPath,BW_CLIENTSECRET:n.trim(),BW_CLIENTID:r.trim(),PATH:(0,vr.dirname)(process.execPath),...s&&o?{NODE_EXTRA_CA_CERTS:o}:{}},this.initPromise=(async()=>{await this.checkServerUrl(s),this.lockReason=await g.LocalStorage.getItem(S.VAULT_LOCK_REASON)})()}setActionCallback(t,r){return this.callbacks[t]=r,this}setSessionToken(t){this.env={...this.env,BW_SESSION:t}}clearSessionToken(){delete this.env.BW_SESSION}withSession(t){return this.tempSessionToken=t,this}async initialize(){return await this.initPromise,this}async checkServerUrl(t){if((await g.LocalStorage.getItem(S.SERVER_URL)||"")===t)return;let n=await(0,g.showToast)({style:g.Toast.Style.Animated,title:"Switching server...",message:"Bitwarden server preference changed"});try{try{await this.logout()}catch{}await this.exec(["config","server",t||He]),await g.LocalStorage.setItem(S.SERVER_URL,t),n.style=g.Toast.Style.Success,n.title="Success",n.message="Bitwarden server changed"}catch(o){n.style=g.Toast.Style.Failure,n.title="Failed to switch server",o instanceof Error?n.message=o.message:n.message="Unknown error occurred"}}async setLockReason(t){this.lockReason=t,await g.LocalStorage.setItem(S.VAULT_LOCK_REASON,t)}async clearLockReason(){this.lockReason&&(await g.LocalStorage.removeItem(S.VAULT_LOCK_REASON),this.lockReason=void 0)}async exec(t,r){let{abortController:n,input:o="",skipLastActivityUpdate:s=!1}=r??{},i=this.env;this.tempSessionToken&&(i={...i,BW_SESSION:this.tempSessionToken});let a=await Tr(this.cliPath,t,{env:i,input:o,signal:n?.signal});if(s||await g.LocalStorage.setItem(S.LAST_ACTIVITY_TIME,new Date().toISOString()),this.tempSessionToken&&(this.tempSessionToken=void 0),this.isPromptWaitingForMasterPassword(a))throw await this.lock(),new le;return a}async sync(){await this.exec(["sync"])}async login(){await this.exec(["login","--apikey"]),await this.clearLockReason(),await this.callbacks.login?.()}async logout(){await this.exec(["logout"]),this.clearSessionToken(),await this.callbacks.logout?.()}async lock(t,r){r&&!((await this.status()).status!=="unauthenticated")||(t&&await this.setLockReason(t),await this.exec(["lock"]),await this.callbacks.lock?.(t))}async unlock(t){let{stdout:r}=await this.exec(["unlock",t,"--raw"]);return this.setSessionToken(r),await this.clearLockReason(),await this.callbacks.unlock?.(t,r),r}async listItems(){let{stdout:t}=await this.exec(["list","items"]);return JSON.parse(t).filter(n=>!!n.name)}async listFolders(){let{stdout:t}=await this.exec(["list","folders"]);return JSON.parse(t)}async getTotp(t){let{stdout:r}=await this.exec(["get","totp",t]);return r}async status(){let{stdout:t}=await this.exec(["status"]);return JSON.parse(t)}async checkLockStatus(){try{return await this.exec(["unlock","--check"]),"unlocked"}catch(t){return t.stderr==="Vault is locked."?"locked":"unauthenticated"}}async generatePassword(t,r){let n=t?Ar(t):[],{stdout:o}=await this.exec(["generate",...n],{abortController:r});return o}isPromptWaitingForMasterPassword(t){return!!(t.stderr&&t.stderr.includes("Master password"))}};var Lr=require("react/jsx-runtime"),kr=(0,C.createContext)(null),Dr=e=>{let{children:t}=e,[r,n]=(0,C.useState)();return(0,C.useEffect)(()=>{new ue().initialize().then(n)},[]),r?(0,Lr.jsx)(kr.Provider,{value:r,children:t}):(0,Lr.jsx)(Gr.Detail,{isLoading:!0})},Mr=()=>{let e=(0,C.useContext)(kr);if(e==null)throw new Error("useBitwarden must be used within a BitwardenProvider");return e};var Eo={options:void 0,password:void 0,isGenerating:!0},Po=(e,t)=>{switch(t.type){case"generate":return{...e,isGenerating:!0};case"setPassword":return{...e,password:t.password,isGenerating:!1};case"setOptions":return{...e,options:t.options};case"cancelGenerate":return{...e,isGenerating:!1};case"clearPassword":return{...e,isGenerating:!1,password:void 0}}};function bo(){let e=Mr(),[{options:t,...r},n]=(0,de.useReducer)(Po,Eo),{abortControllerRef:o,renew:s,abort:i}=Ye(),a=async(u=t)=>{try{s(),n({type:"generate"});let f=await e.generatePassword(u,o?.current);n({type:"setPassword",password:f})}catch{o?.current.signal.aborted&&n({type:"cancelGenerate"})}},c=async()=>{r.isGenerating||await a()},l=async(u,f)=>{if(!t||t[u]===f)return;r.isGenerating&&i();let w={...t,[u]:f};n({type:"setOptions",options:w}),await Promise.all([Br.LocalStorage.setItem(S.PASSWORD_OPTIONS,JSON.stringify(w)),a(w)])},p=async()=>{let u=await Cr();n({type:"setOptions",options:u}),await a(u)};return(0,de.useEffect)(()=>{p()},[]),{...r,regeneratePassword:c,options:t,setOption:l}}var Ur=bo;function Fr(e){return Object.entries(e)}var y=require("@raycast/api");var O=require("react/jsx-runtime"),xo=e=>{let{password:t,regeneratePassword:r}=e;return(0,O.jsxs)(y.ActionPanel,{children:[!!t&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(y.Action.CopyToClipboard,{title:"Copy Password",icon:y.Icon.Clipboard,content:t,shortcut:{key:"enter",modifiers:["cmd"]},transient:_r("password")}),(0,O.jsx)(y.Action.Paste,{title:"Paste Password to Active App",icon:y.Icon.Text,content:t,shortcut:{key:"enter",modifiers:["cmd","shift"]}})]}),(0,O.jsx)(y.Action,{title:"Regenerate Password",icon:y.Icon.ArrowClockwise,onAction:r,shortcut:{key:"backspace",modifiers:["cmd"]}}),process.env.NODE_ENV==="development"&&(0,O.jsx)(y.Action,{title:"Clear storage",icon:y.Icon.Trash,onAction:To})]})};async function To(){for(let e of Object.values(S))await y.LocalStorage.removeItem(e)}var Vr=xo;var U=require("@raycast/api"),Wr=require("react");var N=require("@raycast/api"),Y=require("react/jsx-runtime"),jr="```",Hr="https://bitwarden.com/help/cli/#download-and-install",Io="https://formulae.brew.sh/formula/bitwarden-cli",Oo="https://github.com/raycast/extensions/issues/new?assignees=&labels=extension%2Cbug&template=extension_bug_report.yml&title=%5BBitwarden%5D+...",Ao=e=>`# \u{1F6A8} Something went wrong
${e?`${jr}
${e}
${jr}`:`
`}
## Troubleshooting Guide:

1. The [Bitwarden CLI](${Hr}) is correctly installed
2. If you did not install the Bitwarden CLI [using Homebrew](${Io}), please check that the path of the installation matches the \`Bitwarden CLI Installation Path\` extension setting. 
    - \u{1F4A1} Run the \`which bw\` command to check the CLI installation path.

If you are still experiencing issues, please [open an issue on GitHub](${Oo}).
`,Co=e=>(0,Y.jsx)(N.Detail,{markdown:Ao(e.errorInfo),actions:(0,Y.jsxs)(N.ActionPanel,{children:[(0,Y.jsx)(N.Action.CopyToClipboard,{title:"Copy Homebrew Installation Command",content:"brew install bitwarden-cli"}),(0,Y.jsx)(N.Action.OpenInBrowser,{title:"Open Installation Guide",url:Hr})]})}),ke=Co;var $r=require("react/jsx-runtime"),q=class extends Wr.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}async componentDidCatch(t,r){t instanceof K?(this.setState(n=>({...n,hasError:!0,error:t.message})),await(0,U.showToast)(U.Toast.Style.Failure,t.message)):(U.environment.isDevelopment&&this.setState(n=>({...n,hasError:!0,error:t.message})),console.error("Error:",t,r))}render(){try{return this.state.hasError?(0,$r.jsx)(ke,{errorInfo:this.state.error}):this.props.children}catch{return(0,$r.jsx)(ke,{})}}};var De=require("@raycast/api"),Yr=require("react"),Kr=require("react/jsx-runtime");function Ro({option:e,defaultValue:t="",onChange:r,errorMessage:n,field:o}){let{hint:s="",label:i,type:a}=o,[c,l]=(0,Yr.useState)(),p=async u=>{_o(e,u)?(await r(u),l(void 0)):l(n)};return a==="boolean"?(0,Kr.jsx)(De.Form.Checkbox,{id:e,title:i,label:s,defaultValue:Boolean(t),onChange:r},e):(0,Kr.jsx)(De.Form.TextField,{id:e,title:i,placeholder:s,defaultValue:String(t),onChange:p,error:c},e)}function _o(e,t){return e==="length"?!isNaN(Number(t))&&Number(t)>=5&&Number(t)<=128:e==="separator"?t.length===1:e==="words"?!isNaN(Number(t))&&Number(t)>=3&&Number(t)<=20:!0}var qr=Ro;var E=require("react/jsx-runtime"),No=()=>(0,E.jsx)(A.Form.Description,{text:""}),vo=()=>(0,E.jsx)(q,{children:(0,E.jsx)(Dr,{children:(0,E.jsx)(Lo,{})})});function Lo(){let{password:e,regeneratePassword:t,isGenerating:r,options:n,setOption:o}=Ur();if(We(),!n)return(0,E.jsx)(A.Detail,{isLoading:!0});let s=c=>o("passphrase",c==="passphrase"),i=c=>l=>o(c,l),a=n?.passphrase?"passphrase":"password";return(0,E.jsxs)(A.Form,{isLoading:r,actions:(0,E.jsx)(Vr,{password:e,regeneratePassword:t}),children:[(0,E.jsx)(A.Form.Description,{title:"\u{1F511}  Password",text:e??"Generating..."}),(0,E.jsx)(No,{}),(0,E.jsx)(A.Form.Separator,{}),(0,E.jsx)(A.Form.Dropdown,{id:"type",title:"Type",value:a,onChange:s,autoFocus:!0,children:Object.keys(Ge).map(c=>(0,E.jsx)(A.Form.Dropdown.Item,{value:c,title:je(c)},c))}),Fr(Ge[a]).map(([c,l])=>(0,E.jsx)(qr,{option:c,field:l,defaultValue:n[c],errorMessage:l.errorMessage,onChange:i(c)},c))]})}var Go=vo;0&&(module.exports={});
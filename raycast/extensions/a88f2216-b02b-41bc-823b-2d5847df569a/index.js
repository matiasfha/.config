"use strict";var r=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var d=(e,t)=>{for(var i in t)r(e,i,{get:t[i],enumerable:!0})},g=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of p(t))!u.call(e,o)&&o!==i&&r(e,o,{get:()=>t[o],enumerable:!(n=l(t,o))||n.enumerable});return e};var m=e=>g(r({},"__esModule",{value:!0}),e);var w={};d(w,{default:()=>c});module.exports=m(w);var a=require("@raycast/api"),s=e=>e.replace(/[.#@]/g,t=>t+"\u2060");async function c(e){if(e.arguments.text)await a.Clipboard.copy(s(e.arguments.text)),await(0,a.showHUD)("Copied to clipboard!");else try{let t=await(0,a.getSelectedText)();await a.Clipboard.paste(s(t))}catch{await(0,a.showToast)({style:a.Toast.Style.Failure,title:"No text found.",message:"Select text in any app, or provide it as argument, then try again."})}}0&&(module.exports={});
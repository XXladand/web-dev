import{C as o}from"./clipboard-CKs6Xfnk.js";const e=e=>({toClipboard:(e,t)=>new Promise(((n,c)=>{const d=document.createElement("button"),r=new o(d,{text:()=>e,action:()=>"copy",container:void 0!==t?t:document.body});r.on("success",(o=>{r.destroy(),n(o)})),r.on("error",(o=>{r.destroy(),c(o)})),document.body.appendChild(d),d.click(),document.body.removeChild(d)}))});export{e as u};

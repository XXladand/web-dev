import{d as e,k as s,o as t,c as l,O as a,R as i,K as o,a as n,J as r}from"./@vue-CX_mlhJe.js";const u=["src"],p=e({name:"svgIcon"}),v=e({...p,props:{name:{type:String},size:{type:Number,default:()=>14},color:{type:String}},setup(e){const p=e,v=["https","http","/src","/assets","data:image",window.__env__.VITE_PUBLIC_PATH],d=s((()=>null==p?void 0:p.name)),c=s((()=>{var e;return null==(e=null==p?void 0:p.name)?void 0:e.startsWith("ele-")})),h=s((()=>v.find((e=>{var s;return null==(s=p.name)?void 0:s.startsWith(e)})))),m=s((()=>`font-size: ${p.size}px;color: ${p.color};`)),y=s((()=>`width: ${p.size}px;height: ${p.size}px;display: inline-block;overflow: hidden;`)),$=s((()=>{const e=[];return["-webkit","-ms","-o","-moz"].forEach((s=>e.push(`${s}-filter: drop-shadow(${p.color} ${p.size}px 0);`))),`width: ${p.size}px;height: ${p.size}px;position: relative;left: -${p.size}px;${e.join("")}`}));return(e,s)=>c.value?(t(),l("i",{key:0,class:"el-icon",style:o(m.value)},[(t(),a(i(d.value)))],4)):h.value?(t(),l("div",{key:1,style:o(y.value)},[n("img",{src:d.value,style:o($.value)},null,12,u)],4)):(t(),l("i",{key:2,class:r(d.value),style:o(m.value)},null,6))}});export{v as default};

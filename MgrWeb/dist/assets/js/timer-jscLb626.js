import{f as e}from"./formatTime-V_I984Ws.js";import{d as a,r as l,j as t,Z as s,ah as r,o,O as n,P as d,V as i,a as u,U as m,bm as c,bk as v}from"./@vue-CX_mlhJe.js";import{_ as p}from"./_plugin-vue_export-helper-BCo6x5W8.js";const _=(e=>(c("data-v-65fa771d"),e=e(),v(),e))((()=>u("span",{style:{}}," 当前时钟 ",-1))),f={class:"time"},h=p(a({title:"时钟",icon:"ele-Timer",description:"时钟原子组件演示",__name:"timer",setup(a){const c=l(""),v=l(""),p=l(null);t((()=>{h(),p.value=setInterval((()=>{h()}),1e3)})),s((()=>{clearInterval(p.value)}));const h=()=>{c.value=e(new Date,"HH:MM:SS"),v.value=e(new Date,"YYYY年mm月dd日")};return(e,a)=>{const l=r("ele-Clock"),t=r("el-icon"),s=r("el-card");return o(),n(s,{shadow:"hover",header:"当前时钟",class:"item-background"},{header:d((()=>[i(t,{style:{display:"inline","vertical-align":"middle"}},{default:d((()=>[i(l)])),_:1}),_])),default:d((()=>[u("div",f,[u("h2",null,m(c.value),1),u("p",null,m(v.value),1)])])),_:1})}}}),[["__scopeId","data-v-65fa771d"]]),b=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));export{b as _};
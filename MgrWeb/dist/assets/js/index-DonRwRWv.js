import{B as e,j as a,g as t}from"./index-DWGcUZYU.js";import{a as s}from"./axios-CURSphCx.js";import{E as o}from"./element-plus-B9gGnqkL.js";import{d as r,_ as i,j as l,ah as n,ap as p,o as m,c,V as u,P as d,Q as f,O as g,T as h}from"./@vue-CX_mlhJe.js";import{_ as j}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./pinia-CUaEdNPK.js";import"./vue-demi-DMxTsK9-.js";import"./vue-DMOwXDUL.js";import"./@babel-Q_QrznUx.js";import"./jspdf-CH-AZmyM.js";import"./fflate-B3Xb404m.js";import"./vue-router-DCQgfElv.js";import"./vue-i18n-DOLUIXgH.js";import"./@intlify-8Jop7_C0.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-BOmeTCVz.js";import"./nprogress-BXoedg-7.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-DUD0Qdrs.js";import"./vform3-builds-n_pM9nIF.js";import"./vue-signature-pad-lyh4QR3Z.js";import"./signature_pad-edH0THtw.js";import"./merge-images-Cwm9rL5U.js";import"./vue3-tree-org-BzkJto3m.js";/* empty css                    */import"./vue-plugin-hiprint-DZDwPE-S.js";import"./jquery-VSNIoD5U.js";import"./jsbarcode-BgYCXnWS.js";import"./socket.io-client-Czs-wWz3.js";import"./engine.io-client-CYjl6Vq_.js";import"./engine.io-parser-BcOgFIoq.js";import"./@socket.io-mcuM6LAc.js";import"./debug-CmirTkX5.js";import"./ms-CufoL-nS.js";import"./socket.io-parser-CnrqkM7d.js";import"./canvg-FiHv1N34.js";import"./core-js-BJmvCVxN.js";import"./raf-B8RiLMb0.js";import"./performance-now-D4QiMMAM.js";import"./rgbcolor-Cv9DR9SS.js";import"./svg-pathdata-BQypvdxQ.js";import"./stackblur-canvas-WbqePTkn.js";import"./lodash-es-Bx2dc0Qf.js";import"./@vueuse-DXufPiA3.js";import"./@sxzz-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-DCN6noHZ.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DHjS97uh.js";const y=function(e){return{apiSysLogDiffClearPost:async(a={})=>{const t=new URL("/api/sysLogDiff/clear","https://example.com");let s;e&&(s=e.baseOptions);const o={method:"POST",...s,...a},r={},i={};if(e&&e.accessToken){const a="function"==typeof e.accessToken?await e.accessToken():await e.accessToken;r.Authorization="Bearer "+a}const l=new URLSearchParams(t.search);for(const e in i)l.set(e,i[e]);for(const e in a.params)l.set(e,a.params[e]);t.search=new URLSearchParams(l).toString();let n=s&&s.headers?s.headers:{};return o.headers={...r,...n,...a.headers},{url:t.pathname+t.search+t.hash,options:o}},apiSysLogDiffPagePost:async(a,t={})=>{const s=new URL("/api/sysLogDiff/page","https://example.com");let o;e&&(o=e.baseOptions);const r={method:"POST",...o,...t},i={},l={};if(e&&e.accessToken){const a="function"==typeof e.accessToken?await e.accessToken():await e.accessToken;i.Authorization="Bearer "+a}i["Content-Type"]="application/json-patch+json";const n=new URLSearchParams(s.search);for(const e in l)n.set(e,l[e]);for(const e in t.params)n.set(e,t.params[e]);s.search=new URLSearchParams(n).toString();let p=o&&o.headers?o.headers:{};r.headers={...i,...p,...t.headers};const m="string"!=typeof a||"application/json"===r.headers["Content-Type"];return r.data=m?JSON.stringify(void 0!==a?a:{}):a||"",{url:s.pathname+s.search+s.hash,options:r}}}},P=function(e){return{async apiSysLogDiffClearPost(t){const o=await y(e).apiSysLogDiffClearPost(t);return(e=s,t=a)=>{const r={...o.options,url:t+o.url};return e.request(r)}},async apiSysLogDiffPagePost(t,o){const r=await y(e).apiSysLogDiffPagePost(t,o);return(e=s,t=a)=>{const o={...r.options,url:t+r.url};return e.request(o)}}}};class b extends e{async apiSysLogDiffClearPost(e){return P(this.configuration).apiSysLogDiffClearPost(e).then((e=>e(this.axios,this.basePath)))}async apiSysLogDiffPagePost(e,a){return P(this.configuration).apiSysLogDiffPagePost(e,a).then((e=>e(this.axios,this.basePath)))}}const v={class:"sys-difflog-container"},w=r({name:"sysDiffLog"}),D=j(r({...w,setup(e){const a=i({loading:!1,queryParams:{startTime:void 0,endTime:void 0},tableParams:{page:1,pageSize:10,total:0},logData:[]});l((async()=>{s()}));const s=async()=>{var e,s;null==a.queryParams.startTime&&(a.queryParams.startTime=void 0),null==a.queryParams.endTime&&(a.queryParams.endTime=void 0),a.loading=!0;let o=Object.assign(a.queryParams,a.tableParams);var r=await t(b).apiSysLogDiffPagePost(o);a.logData=(null==(e=r.data.result)?void 0:e.items)??[],a.tableParams.total=null==(s=r.data.result)?void 0:s.total,a.loading=!1},r=()=>{a.queryParams.startTime=void 0,a.queryParams.endTime=void 0,s()},j=async()=>{a.loading=!0,await t(b).apiSysLogDiffClearPost(),a.loading=!1,o.success("清空成功"),s()},y=e=>{a.tableParams.pageSize=e,s()},P=e=>{a.tableParams.page=e,s()},w=[{text:"今天",value:new Date},{text:"昨天",value:()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e}},{text:"上周",value:()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e}}];return(e,t)=>{const o=n("el-date-picker"),i=n("el-form-item"),l=n("el-button"),b=n("el-button-group"),D=n("el-form"),T=n("el-card"),S=n("el-table-column"),L=n("el-table"),q=n("el-pagination"),k=p("auth"),_=p("loading");return m(),c("div",v,[u(T,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:d((()=>[u(D,{model:a.queryParams,ref:"queryForm",inline:!0},{default:d((()=>[u(i,{label:"开始时间"},{default:d((()=>[u(o,{modelValue:a.queryParams.startTime,"onUpdate:modelValue":t[0]||(t[0]=e=>a.queryParams.startTime=e),type:"datetime",placeholder:"开始时间","value-format":"YYYY-MM-DD HH:mm:ss",shortcuts:w},null,8,["modelValue"])])),_:1}),u(i,{label:"结束时间"},{default:d((()=>[u(o,{modelValue:a.queryParams.endTime,"onUpdate:modelValue":t[1]||(t[1]=e=>a.queryParams.endTime=e),type:"datetime",placeholder:"结束时间","value-format":"YYYY-MM-DD HH:mm:ss",shortcuts:w},null,8,["modelValue"])])),_:1}),u(i,null,{default:d((()=>[u(b,null,{default:d((()=>[f((m(),g(l,{type:"primary",icon:"ele-Search",onClick:s},{default:d((()=>[h(" 查询 ")])),_:1})),[[k,"sysDifflog:page"]]),u(l,{icon:"ele-Refresh",onClick:r},{default:d((()=>[h(" 重置 ")])),_:1})])),_:1})])),_:1}),u(i,null,{default:d((()=>[f((m(),g(l,{icon:"ele-DeleteFilled",type:"danger",onClick:j},{default:d((()=>[h(" 清空 ")])),_:1})),[[k,"sysDifflog:clear"]])])),_:1})])),_:1},8,["model"])])),_:1}),u(T,{class:"full-table",shadow:"hover",style:{"margin-top":"5px"}},{default:d((()=>[f((m(),g(L,{data:a.logData,style:{width:"100%"},border:""},{default:d((()=>[u(S,{type:"index",label:"序号",width:"55",align:"center"}),u(S,{prop:"diffType",label:"差异操作","header-align":"center","show-overflow-tooltip":""}),u(S,{prop:"sql",label:"Sql语句","header-align":"center","show-overflow-tooltip":""}),u(S,{prop:"parameters",label:"参数","header-align":"center","show-overflow-tooltip":""}),u(S,{prop:"elapsed",label:"耗时(ms)","header-align":"center","show-overflow-tooltip":""}),u(S,{prop:"message",label:"日志消息","header-align":"center","show-overflow-tooltip":""}),u(S,{prop:"beforeData",label:"操作前记录","header-align":"center","show-overflow-tooltip":""}),u(S,{prop:"afterData",label:"操作后记录","header-align":"center","show-overflow-tooltip":""}),u(S,{prop:"businessData",label:"业务对象","header-align":"center","show-overflow-tooltip":""}),u(S,{prop:"createTime",label:"操作时间",align:"center","show-overflow-tooltip":""})])),_:1},8,["data"])),[[_,a.loading]]),u(q,{currentPage:a.tableParams.page,"onUpdate:currentPage":t[2]||(t[2]=e=>a.tableParams.page=e),"page-size":a.tableParams.pageSize,"onUpdate:pageSize":t[3]||(t[3]=e=>a.tableParams.pageSize=e),total:a.tableParams.total,"page-sizes":[10,20,50,100],size:"small",background:"",onSizeChange:y,onCurrentChange:P,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])),_:1})])}}}),[["__scopeId","data-v-bf038bdb"]]);export{D as default};
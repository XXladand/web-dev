import{B as e,j as a,g as t}from"./index-DWGcUZYU.js";import{a as s}from"./axios-CURSphCx.js";import{E as o}from"./element-plus-B9gGnqkL.js";import{d as r,_ as i,j as l,ah as n,ap as p,o as m,c,V as u,P as d,Q as g,O as h,T as y}from"./@vue-CX_mlhJe.js";import"./pinia-CUaEdNPK.js";import"./vue-demi-DMxTsK9-.js";import"./vue-DMOwXDUL.js";import"./@babel-Q_QrznUx.js";import"./jspdf-CH-AZmyM.js";import"./fflate-B3Xb404m.js";import"./vue-router-DCQgfElv.js";import"./vue-i18n-DOLUIXgH.js";import"./@intlify-8Jop7_C0.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-BOmeTCVz.js";import"./nprogress-BXoedg-7.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-DUD0Qdrs.js";import"./vform3-builds-n_pM9nIF.js";import"./vue-signature-pad-lyh4QR3Z.js";import"./signature_pad-edH0THtw.js";import"./merge-images-Cwm9rL5U.js";import"./vue3-tree-org-BzkJto3m.js";/* empty css                    */import"./vue-plugin-hiprint-DZDwPE-S.js";import"./jquery-VSNIoD5U.js";import"./jsbarcode-BgYCXnWS.js";import"./socket.io-client-Czs-wWz3.js";import"./engine.io-client-CYjl6Vq_.js";import"./engine.io-parser-BcOgFIoq.js";import"./@socket.io-mcuM6LAc.js";import"./debug-CmirTkX5.js";import"./ms-CufoL-nS.js";import"./socket.io-parser-CnrqkM7d.js";import"./canvg-FiHv1N34.js";import"./core-js-BJmvCVxN.js";import"./raf-B8RiLMb0.js";import"./performance-now-D4QiMMAM.js";import"./rgbcolor-Cv9DR9SS.js";import"./svg-pathdata-BQypvdxQ.js";import"./stackblur-canvas-WbqePTkn.js";import"./lodash-es-Bx2dc0Qf.js";import"./@vueuse-DXufPiA3.js";import"./@sxzz-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-DCN6noHZ.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DHjS97uh.js";const f=function(e){return{apiSysLogVisClearPost:async(a={})=>{const t=new URL("/api/sysLogVis/clear","https://example.com");let s;e&&(s=e.baseOptions);const o={method:"POST",...s,...a},r={},i={};if(e&&e.accessToken){const a="function"==typeof e.accessToken?await e.accessToken():await e.accessToken;r.Authorization="Bearer "+a}const l=new URLSearchParams(t.search);for(const e in i)l.set(e,i[e]);for(const e in a.params)l.set(e,a.params[e]);t.search=new URLSearchParams(l).toString();let n=s&&s.headers?s.headers:{};return o.headers={...r,...n,...a.headers},{url:t.pathname+t.search+t.hash,options:o}},apiSysLogVisPagePost:async(a,t={})=>{const s=new URL("/api/sysLogVis/page","https://example.com");let o;e&&(o=e.baseOptions);const r={method:"POST",...o,...t},i={},l={};if(e&&e.accessToken){const a="function"==typeof e.accessToken?await e.accessToken():await e.accessToken;i.Authorization="Bearer "+a}i["Content-Type"]="application/json-patch+json";const n=new URLSearchParams(s.search);for(const e in l)n.set(e,l[e]);for(const e in t.params)n.set(e,t.params[e]);s.search=new URLSearchParams(n).toString();let p=o&&o.headers?o.headers:{};r.headers={...i,...p,...t.headers};const m="string"!=typeof a||"application/json"===r.headers["Content-Type"];return r.data=m?JSON.stringify(void 0!==a?a:{}):a||"",{url:s.pathname+s.search+s.hash,options:r}}}},w=function(e){return{async apiSysLogVisClearPost(t){const o=await f(e).apiSysLogVisClearPost(t);return(e=s,t=a)=>{const r={...o.options,url:t+o.url};return e.request(r)}},async apiSysLogVisPagePost(t,o){const r=await f(e).apiSysLogVisPagePost(t,o);return(e=s,t=a)=>{const o={...r.options,url:t+r.url};return e.request(o)}}}};class j extends e{async apiSysLogVisClearPost(e){return w(this.configuration).apiSysLogVisClearPost(e).then((e=>e(this.axios,this.basePath)))}async apiSysLogVisPagePost(e,a){return w(this.configuration).apiSysLogVisPagePost(e,a).then((e=>e(this.axios,this.basePath)))}}const P={class:"sys-vislog-container"},v=r({name:"sysVisLog"}),b=r({...v,setup(e){const a=i({loading:!1,queryParams:{startTime:void 0,endTime:void 0},tableParams:{page:1,pageSize:20,total:0},logData:[]});l((async()=>{s()}));const s=async()=>{var e,s;null==a.queryParams.startTime&&(a.queryParams.startTime=void 0),null==a.queryParams.endTime&&(a.queryParams.endTime=void 0),a.loading=!0;let o=Object.assign(a.queryParams,a.tableParams);var r=await t(j).apiSysLogVisPagePost(o);a.logData=(null==(e=r.data.result)?void 0:e.items)??[],a.tableParams.total=null==(s=r.data.result)?void 0:s.total,a.loading=!1},r=()=>{a.queryParams.startTime=void 0,a.queryParams.endTime=void 0,s()},f=async()=>{a.loading=!0,await t(j).apiSysLogVisClearPost(),a.loading=!1,o.success("清空成功"),s()},w=e=>{a.tableParams.pageSize=e,s()},v=e=>{a.tableParams.page=e,s()},b=[{text:"今天",value:new Date},{text:"昨天",value:()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e}},{text:"上周",value:()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e}}];return(e,t)=>{const o=n("el-date-picker"),i=n("el-form-item"),l=n("el-button"),j=n("el-button-group"),T=n("el-form"),S=n("el-card"),V=n("el-table-column"),L=n("el-tag"),k=n("el-table"),q=n("el-pagination"),x=p("auth"),z=p("loading");return m(),c("div",P,[u(S,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:d((()=>[u(T,{model:a.queryParams,ref:"queryForm",inline:!0},{default:d((()=>[u(i,{label:"开始时间"},{default:d((()=>[u(o,{modelValue:a.queryParams.startTime,"onUpdate:modelValue":t[0]||(t[0]=e=>a.queryParams.startTime=e),type:"datetime",placeholder:"开始时间","value-format":"YYYY-MM-DD HH:mm:ss",shortcuts:b},null,8,["modelValue"])])),_:1}),u(i,{label:"结束时间",prop:"code"},{default:d((()=>[u(o,{modelValue:a.queryParams.endTime,"onUpdate:modelValue":t[1]||(t[1]=e=>a.queryParams.endTime=e),type:"datetime",placeholder:"结束时间","value-format":"YYYY-MM-DD HH:mm:ss",shortcuts:b},null,8,["modelValue"])])),_:1}),u(i,null,{default:d((()=>[u(j,null,{default:d((()=>[g((m(),h(l,{type:"primary",icon:"ele-Search",onClick:s},{default:d((()=>[y(" 查询 ")])),_:1})),[[x,"sysVislog:page"]]),u(l,{icon:"ele-Refresh",onClick:r},{default:d((()=>[y(" 重置 ")])),_:1})])),_:1})])),_:1}),u(i,null,{default:d((()=>[g((m(),h(l,{icon:"ele-DeleteFilled",type:"danger",onClick:f,disabled:""},{default:d((()=>[y(" 清空 ")])),_:1})),[[x,"sysVislog:clear"]])])),_:1})])),_:1},8,["model"])])),_:1}),u(S,{class:"full-table",shadow:"hover",style:{"margin-top":"5px"}},{default:d((()=>[g((m(),h(k,{data:a.logData,style:{width:"100%"},border:""},{default:d((()=>[u(V,{type:"index",label:"序号",width:"55",align:"center"}),u(V,{prop:"displayTitle",label:"显示名称",width:"150",align:"center","show-overflow-tooltip":""}),u(V,{prop:"actionName",label:"方法名称",width:"150","header-align":"center","show-overflow-tooltip":""}),u(V,{prop:"account",label:"账号名称",width:"100",align:"center","show-overflow-tooltip":""}),u(V,{prop:"realName",label:"真实姓名",width:"100",align:"center","show-overflow-tooltip":""}),u(V,{prop:"remoteIp",label:"IP地址","min-width":"120",align:"center","show-overflow-tooltip":""}),u(V,{prop:"location",label:"登录地点","min-width":"150",align:"center","show-overflow-tooltip":""}),u(V,{prop:"longitude",label:"经度","min-width":"100",align:"center","show-overflow-tooltip":""}),u(V,{prop:"latitude",label:"纬度","min-width":"100",align:"center","show-overflow-tooltip":""}),u(V,{prop:"browser",label:"浏览器","min-width":"150",align:"center","show-overflow-tooltip":""}),u(V,{prop:"os",label:"操作系统",width:"120",align:"center","show-overflow-tooltip":""}),u(V,{prop:"status",label:"状态",width:"70",align:"center","show-overflow-tooltip":""},{default:d((e=>["200"===e.row.status?(m(),h(L,{key:0,type:"success"},{default:d((()=>[y("成功")])),_:1})):(m(),h(L,{key:1,type:"danger"},{default:d((()=>[y("失败")])),_:1}))])),_:1}),u(V,{prop:"elapsed",label:"耗时(ms)",width:"90",align:"center","show-overflow-tooltip":""}),u(V,{prop:"logDateTime",label:"日志时间",width:"160",align:"center",fixed:"right","show-overflow-tooltip":""})])),_:1},8,["data"])),[[z,a.loading]]),u(q,{currentPage:a.tableParams.page,"onUpdate:currentPage":t[2]||(t[2]=e=>a.tableParams.page=e),"page-size":a.tableParams.pageSize,"onUpdate:pageSize":t[3]||(t[3]=e=>a.tableParams.pageSize=e),total:a.tableParams.total,"page-sizes":[10,20,50,100],size:"small",background:"",onSizeChange:w,onCurrentChange:v,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])),_:1})])}}});export{b as default};
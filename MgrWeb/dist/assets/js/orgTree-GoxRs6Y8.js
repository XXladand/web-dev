import{s as o}from"./pinia-CUaEdNPK.js";import{a as e,g as r}from"./index-DWGcUZYU.js";import{S as a}from"./sys-org-api-BuTSvnhC.js";import{d as s,_ as t,j as i,ah as l,ap as n,Q as p,o as d,c as m,a as g,V as j,T as c,P as u,U as v}from"./@vue-CX_mlhJe.js";import{_ as b}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./vue-demi-DMxTsK9-.js";import"./vue-DMOwXDUL.js";import"./@babel-Q_QrznUx.js";import"./jspdf-CH-AZmyM.js";import"./fflate-B3Xb404m.js";import"./vue-router-DCQgfElv.js";import"./vue-i18n-DOLUIXgH.js";import"./@intlify-8Jop7_C0.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-BOmeTCVz.js";import"./nprogress-BXoedg-7.js";import"./axios-CURSphCx.js";import"./element-plus-B9gGnqkL.js";import"./lodash-es-Bx2dc0Qf.js";import"./@vueuse-DXufPiA3.js";import"./@sxzz-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-DCN6noHZ.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DHjS97uh.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-DUD0Qdrs.js";import"./vform3-builds-n_pM9nIF.js";import"./vue-signature-pad-lyh4QR3Z.js";import"./signature_pad-edH0THtw.js";import"./merge-images-Cwm9rL5U.js";import"./vue3-tree-org-BzkJto3m.js";/* empty css                    */import"./vue-plugin-hiprint-DZDwPE-S.js";import"./jquery-VSNIoD5U.js";import"./jsbarcode-BgYCXnWS.js";import"./socket.io-client-Czs-wWz3.js";import"./engine.io-client-CYjl6Vq_.js";import"./engine.io-parser-BcOgFIoq.js";import"./@socket.io-mcuM6LAc.js";import"./debug-CmirTkX5.js";import"./ms-CufoL-nS.js";import"./socket.io-parser-CnrqkM7d.js";import"./canvg-FiHv1N34.js";import"./core-js-BJmvCVxN.js";import"./raf-B8RiLMb0.js";import"./performance-now-D4QiMMAM.js";import"./rgbcolor-Cv9DR9SS.js";import"./svg-pathdata-BQypvdxQ.js";import"./stackblur-canvas-WbqePTkn.js";const h={style:{"text-align":"right"}},y={style:{"margin-right":"10px"}},f={style:{height:"500px"}},x={class:"tree-org-node__text node-label"},F={class:"node-title"},D={class:"node-id"},z=s({name:"orgTree"}),_=b(s({...z,setup(s){const b=e(),{userInfos:z}=o(b),_={color:"#FFFFFF",background:"#3B3B3B"},k=t({loading:!1,orgData:[],horizontal:!1,collapsable:!0,onlyOneNode:!1,cloneNodeDrag:!1,nodeDraggable:!1,style:{background:"var(--el-color-primary)",color:"#FFFFFF"}});i((async()=>{k.loading=!0;var o=(await r(a).apiSysOrgListGet(0)).data.result??[];k.orgData=o[0]??[],k.orgData.id==z.value.orgId?k.orgData.style=_:w(k.orgData.children,z.value.orgId),k.loading=!1}));const w=(o,e)=>{o&&o.length>0&&o.forEach((function(o){o.id!=e?w(o.children,e):o.style=_}))};return(o,e)=>{const r=l("el-switch"),a=l("vue3-tree-org"),s=n("loading");return p((d(),m("div",null,[g("div",h,[g("div",y,[j(r,{modelValue:k.horizontal,"onUpdate:modelValue":e[0]||(e[0]=o=>k.horizontal=o)},null,8,["modelValue"]),c(" 横向/纵向")])]),g("div",f,[j(a,{data:k.orgData,props:{id:"id",pid:"pid",label:"name",expand:"expand",children:"children"},"label-style":k.style,"default-expand-level":100,horizontal:k.horizontal,collapsable:k.collapsable,"only-one-node":k.onlyOneNode,"clone-node-drag":k.cloneNodeDrag,"node-draggable":k.nodeDraggable,style:{"background-color":"var(--el-bg-color)"}},{default:u((({node:o})=>[g("div",x,[g("div",F,v(o.label),1),g("div",D,"编码："+v(o.id),1)])])),expand:u((({node:o})=>[g("div",null,v(o.children.length),1)])),_:1},8,["data","label-style","horizontal","collapsable","only-one-node","clone-node-drag","node-draggable"])])])),[[s,k.loading]])}}}),[["__scopeId","data-v-8b3fc2ad"]]);export{_ as default};

import{g as e,r as s}from"./index-DWGcUZYU.js";import{S as o}from"./sys-tenant-api-rfUaKb-E.js";import{d as t,r as i,_ as a,j as r,ah as l,ap as n,o as m,c as p,V as d,P as u,a as j,T as c,Q as g,O as f,bm as v,bk as h}from"./@vue-CX_mlhJe.js";import{_ as y}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./pinia-CUaEdNPK.js";import"./vue-demi-DMxTsK9-.js";import"./vue-DMOwXDUL.js";import"./@babel-Q_QrznUx.js";import"./jspdf-CH-AZmyM.js";import"./fflate-B3Xb404m.js";import"./vue-router-DCQgfElv.js";import"./vue-i18n-DOLUIXgH.js";import"./@intlify-8Jop7_C0.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-BOmeTCVz.js";import"./nprogress-BXoedg-7.js";import"./axios-CURSphCx.js";import"./element-plus-B9gGnqkL.js";import"./lodash-es-Bx2dc0Qf.js";import"./@vueuse-DXufPiA3.js";import"./@sxzz-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-DCN6noHZ.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DHjS97uh.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-DUD0Qdrs.js";import"./vform3-builds-n_pM9nIF.js";import"./vue-signature-pad-lyh4QR3Z.js";import"./signature_pad-edH0THtw.js";import"./merge-images-Cwm9rL5U.js";import"./vue3-tree-org-BzkJto3m.js";/* empty css                    */import"./vue-plugin-hiprint-DZDwPE-S.js";import"./jquery-VSNIoD5U.js";import"./jsbarcode-BgYCXnWS.js";import"./socket.io-client-Czs-wWz3.js";import"./engine.io-client-CYjl6Vq_.js";import"./engine.io-parser-BcOgFIoq.js";import"./@socket.io-mcuM6LAc.js";import"./debug-CmirTkX5.js";import"./ms-CufoL-nS.js";import"./socket.io-parser-CnrqkM7d.js";import"./canvg-FiHv1N34.js";import"./core-js-BJmvCVxN.js";import"./raf-B8RiLMb0.js";import"./performance-now-D4QiMMAM.js";import"./rgbcolor-Cv9DR9SS.js";import"./svg-pathdata-BQypvdxQ.js";import"./stackblur-canvas-WbqePTkn.js";const b={class:"sys-grantMenu-container"},k={style:{color:"#fff"}},w=(e=>(v("data-v-7db55d5d"),e=e(),h(),e))((()=>j("span",null," 授权租户菜单 ",-1))),_={class:"dialog-footer"},x=t({name:"sysGrantMenu"}),D=y(t({...x,setup(t,{expose:v}){const h=i(),y=a({loading:!1,isShowDialog:!1,ruleForm:{id:0,menuIdList:[]},menuData:[]});r((async()=>{y.loading=!0;var o=await e(s).apiSysMenuListGet();y.menuData=o.data.result,y.loading=!1}));const x=()=>{y.isShowDialog=!1},D=async()=>{var s;y.ruleForm.menuIdList=null==(s=h.value)?void 0:s.getCheckedKeys(),await e(o).apiSysTenantGrantMenuPost(y.ruleForm),y.isShowDialog=!1},S=e=>{var s;let o=!0;for(const t in e.children)if(null==(s=e.children[t].children)?void 0:s.length){o=!1;break}return o?"penultimate-node":""};return v({openDialog:async s=>{var t;null==(t=h.value)||t.setCheckedKeys([]),y.ruleForm=s;var i=await e(o).apiSysTenantOwnMenuListGet(s.userId);setTimeout((()=>{var e;null==(e=h.value)||e.setCheckedKeys(i.data.result)}),100),y.isShowDialog=!0}}),(e,s)=>{const o=l("ele-Edit"),t=l("el-icon"),i=l("el-tree"),a=l("el-form-item"),r=l("el-col"),v=l("el-row"),M=l("el-form"),C=l("el-button"),F=l("el-dialog"),I=n("loading");return m(),p("div",b,[d(F,{modelValue:y.isShowDialog,"onUpdate:modelValue":s[0]||(s[0]=e=>y.isShowDialog=e),draggable:"","close-on-click-modal":!1,width:"769px"},{header:u((()=>[j("div",k,[d(t,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:u((()=>[d(o)])),_:1}),w])])),footer:u((()=>[j("span",_,[d(C,{onClick:x},{default:u((()=>[c("取 消")])),_:1}),d(C,{type:"primary",onClick:D},{default:u((()=>[c("确 定")])),_:1})])])),default:u((()=>[g((m(),f(M,{model:y.ruleForm},{default:u((()=>[d(v,{gutter:35},{default:u((()=>[d(r,{xs:24,sm:24,md:24,lg:24,xl1:24},{default:u((()=>[d(a,{prop:"orgIdList",label:""},{default:u((()=>[d(i,{ref_key:"treeRef",ref:h,data:y.menuData,"node-key":"id","show-checkbox":"",props:{children:"children",label:"title",class:S},icon:"ele-Menu","highlight-current":"","default-expand-all":""},null,8,["data","props"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])),[[I,y.loading]])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-7db55d5d"]]);export{D as default};
import{_ as e}from"./editMenu.vue_vue_type_script_setup_true_name_sysEditMenu_lang-Bl-qaA8T.js";import{_ as t}from"./modifyRecord.vue_vue_type_script_setup_true_lang-BJJtdc8n.js";import{g as a,r as o}from"./index-DWGcUZYU.js";import{c as l,E as r}from"./element-plus-B9gGnqkL.js";import{d as i,r as s,_ as n,j as p,ah as u,ap as m,o as d,c,V as f,P as y,Q as j,O as _,T as v,a as g,U as h}from"./@vue-CX_mlhJe.js";import"./index.vue_vue_type_script_setup_true_name_iconSelector_lang-Bt5ZQH5T.js";import"./jspdf-CH-AZmyM.js";import"./@babel-Q_QrznUx.js";import"./fflate-B3Xb404m.js";import"./@element-plus-BOmeTCVz.js";import"./pinia-CUaEdNPK.js";import"./vue-demi-DMxTsK9-.js";import"./vue-DMOwXDUL.js";import"./vue-router-DCQgfElv.js";import"./vue-i18n-DOLUIXgH.js";import"./@intlify-8Jop7_C0.js";import"./js-cookie-BXEMiIsG.js";import"./nprogress-BXoedg-7.js";import"./axios-CURSphCx.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-DUD0Qdrs.js";import"./vform3-builds-n_pM9nIF.js";import"./vue-signature-pad-lyh4QR3Z.js";import"./signature_pad-edH0THtw.js";import"./merge-images-Cwm9rL5U.js";import"./vue3-tree-org-BzkJto3m.js";/* empty css                    */import"./vue-plugin-hiprint-DZDwPE-S.js";import"./jquery-VSNIoD5U.js";import"./jsbarcode-BgYCXnWS.js";import"./socket.io-client-Czs-wWz3.js";import"./engine.io-client-CYjl6Vq_.js";import"./engine.io-parser-BcOgFIoq.js";import"./@socket.io-mcuM6LAc.js";import"./debug-CmirTkX5.js";import"./ms-CufoL-nS.js";import"./socket.io-parser-CnrqkM7d.js";import"./canvg-FiHv1N34.js";import"./core-js-BJmvCVxN.js";import"./raf-B8RiLMb0.js";import"./performance-now-D4QiMMAM.js";import"./rgbcolor-Cv9DR9SS.js";import"./svg-pathdata-BQypvdxQ.js";import"./stackblur-canvas-WbqePTkn.js";import"./lodash-es-Bx2dc0Qf.js";import"./@vueuse-DXufPiA3.js";import"./@sxzz-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-DCN6noHZ.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DHjS97uh.js";const w={class:"sys-menu-container"},b={class:"ml10"},k=i({name:"sysMenu"}),M=i({...k,setup(i){const k=s(),M=n({loading:!1,menuData:[],queryParams:{title:void 0,type:void 0},editMenuTitle:""});p((async()=>{P()}));const P=async()=>{M.loading=!0;var e=await a(o).apiSysMenuListGet(M.queryParams.title,M.queryParams.type);M.menuData=e.data.result??[],M.loading=!1},q=()=>{M.queryParams.title=void 0,M.queryParams.type=void 0,P()},x=()=>{var e;M.editMenuTitle="添加菜单",null==(e=k.value)||e.openDialog({type:2,isHide:!1,isKeepAlive:!0,isAffix:!1,isIframe:!1,status:1,orderNo:100})};return(i,s)=>{const n=u("el-input"),p=u("el-form-item"),D=u("el-option"),C=u("el-select"),T=u("el-button"),V=u("el-button-group"),z=u("el-form"),S=u("el-card"),E=u("SvgIcon"),U=u("el-table-column"),B=u("el-tag"),I=u("el-table"),N=m("auth"),Q=m("loading");return d(),c("div",w,[f(S,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:y((()=>[f(z,{model:M.queryParams,ref:"queryForm",inline:!0},{default:y((()=>[f(p,{label:"菜单名称"},{default:y((()=>[f(n,{modelValue:M.queryParams.title,"onUpdate:modelValue":s[0]||(s[0]=e=>M.queryParams.title=e),placeholder:"菜单名称",clearable:""},null,8,["modelValue"])])),_:1}),f(p,{label:"类型"},{default:y((()=>[f(C,{modelValue:M.queryParams.type,"onUpdate:modelValue":s[1]||(s[1]=e=>M.queryParams.type=e),placeholder:"类型",clearable:""},{default:y((()=>[f(D,{label:"目录",value:1}),f(D,{label:"菜单",value:2}),f(D,{label:"按钮",value:3})])),_:1},8,["modelValue"])])),_:1}),f(p,null,{default:y((()=>[f(V,null,{default:y((()=>[j((d(),_(T,{type:"primary",icon:"ele-Search",onClick:P},{default:y((()=>[v(" 查询 ")])),_:1})),[[N,"sysMenu:list"]]),f(T,{icon:"ele-Refresh",onClick:q},{default:y((()=>[v(" 重置 ")])),_:1})])),_:1})])),_:1}),f(p,null,{default:y((()=>[j((d(),_(T,{type:"primary",icon:"ele-Plus",onClick:x},{default:y((()=>[v(" 新增 ")])),_:1})),[[N,"sysMenu:add"]])])),_:1})])),_:1},8,["model"])])),_:1}),f(S,{class:"full-table",shadow:"hover",style:{"margin-top":"5px"}},{default:y((()=>[j((d(),_(I,{data:M.menuData,"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"},border:""},{default:y((()=>[f(U,{label:"菜单名称","header-align":"center","show-overflow-tooltip":""},{default:y((e=>[f(E,{name:e.row.icon},null,8,["name"]),g("span",b,h(i.$t(e.row.title)),1)])),_:1}),f(U,{label:"类型",width:"70",align:"center","show-overflow-tooltip":""},{default:y((e=>[1===e.row.type?(d(),_(B,{key:0,type:"warning"},{default:y((()=>[v("目录")])),_:1})):2===e.row.type?(d(),_(B,{key:1},{default:y((()=>[v("菜单")])),_:1})):(d(),_(B,{key:2,type:"info"},{default:y((()=>[v("按钮")])),_:1}))])),_:1}),f(U,{prop:"path",label:"路由路径","header-align":"center","show-overflow-tooltip":""}),f(U,{prop:"component",label:"组件路径",align:"center","show-overflow-tooltip":""}),f(U,{prop:"permission",label:"权限标识",align:"center","show-overflow-tooltip":""}),f(U,{prop:"orderNo",label:"排序",width:"70",align:"center","show-overflow-tooltip":""}),f(U,{label:"状态",width:"80",align:"center","show-overflow-tooltip":""},{default:y((e=>[1===e.row.status?(d(),_(B,{key:0,type:"success"},{default:y((()=>[v("启用")])),_:1})):(d(),_(B,{key:1,type:"danger"},{default:y((()=>[v("禁用")])),_:1}))])),_:1}),f(U,{label:"修改记录",width:"100",align:"center","show-overflow-tooltip":""},{default:y((e=>[f(t,{data:e.row},null,8,["data"])])),_:1}),f(U,{label:"操作",width:"140",fixed:"right",align:"center","show-overflow-tooltip":""},{default:y((e=>[j((d(),_(T,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:t=>{return a=e.row,M.editMenuTitle="编辑菜单",void(null==(o=k.value)||o.openDialog(a));var a,o}},{default:y((()=>[v(" 编辑 ")])),_:2},1032,["onClick"])),[[N,"sysMenu:update"]]),j((d(),_(T,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:t=>{return i=e.row,void l.confirm(`确定删除菜单：【${i.title}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await a(o).apiSysMenuDeletePost({id:i.id}),P(),r.success("删除成功")})).catch((()=>{}));var i}},{default:y((()=>[v(" 删除 ")])),_:2},1032,["onClick"])),[[N,"sysMenu:delete"]])])),_:1})])),_:1},8,["data"])),[[Q,M.loading]])])),_:1}),f(e,{ref_key:"editMenuRef",ref:k,title:M.editMenuTitle,menuData:M.menuData,onHandleQuery:P},null,8,["title","menuData"])])}}});export{M as default};
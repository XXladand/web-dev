import e from"./preview-CrGrIBDL.js";import a from"./editFormDialog-By9tSFjk.js";import l from"./detailDialog-BDp1ndDJ.js";import t from"./editFlowDialog-BU3rs0li.js";import o from"./editDialog-C1bFaYIR.js";import{_ as r}from"./modifyRecord.vue_vue_type_script_setup_true_lang-BJJtdc8n.js";import{g as i}from"./index-DWGcUZYU.js";import{A as s}from"./approval-flow-api-BPCG1yJd.js";import{c as p,E as m}from"./element-plus-B9gGnqkL.js";import{d as n,r as d,_ as u,j as c,ah as g,ap as f,o as j,c as v,V as y,P as _,O as b,S as w,T as P,Q as h}from"./@vue-CX_mlhJe.js";import{_ as k}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./sys-code-gen-api-BI7DgiUl.js";import"./axios-CURSphCx.js";import"./sys-database-api-V52ZKqx1.js";import"./@logicflow-CF0QjZ9u.js";import"./@babel-Q_QrznUx.js";import"./preact-26HT5LyJ.js";import"./lodash-es-Bx2dc0Qf.js";import"./PanelNode-B1rMdpDC.js";import"./PanelControl-lfuY-SGK.js";import"./PanelDataDialog.vue_vue_type_script_setup_true_lang-DSCAWjNb.js";import"./vue-json-pretty-C2Gqq-RF.js";import"./PropertyDialog-CBR2Suvt.js";import"./PropertyCommon.vue_vue_type_script_setup_true_lang-PbkQhNEZ.js";import"./pinia-CUaEdNPK.js";import"./vue-demi-DMxTsK9-.js";import"./vue-DMOwXDUL.js";import"./jspdf-CH-AZmyM.js";import"./fflate-B3Xb404m.js";import"./vue-router-DCQgfElv.js";import"./vue-i18n-DOLUIXgH.js";import"./@intlify-8Jop7_C0.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-BOmeTCVz.js";import"./nprogress-BXoedg-7.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-DUD0Qdrs.js";import"./vform3-builds-n_pM9nIF.js";import"./vue-signature-pad-lyh4QR3Z.js";import"./signature_pad-edH0THtw.js";import"./merge-images-Cwm9rL5U.js";import"./vue3-tree-org-BzkJto3m.js";/* empty css                    */import"./vue-plugin-hiprint-DZDwPE-S.js";import"./jquery-VSNIoD5U.js";import"./jsbarcode-BgYCXnWS.js";import"./socket.io-client-Czs-wWz3.js";import"./engine.io-client-CYjl6Vq_.js";import"./engine.io-parser-BcOgFIoq.js";import"./@socket.io-mcuM6LAc.js";import"./debug-CmirTkX5.js";import"./ms-CufoL-nS.js";import"./socket.io-parser-CnrqkM7d.js";import"./canvg-FiHv1N34.js";import"./core-js-BJmvCVxN.js";import"./raf-B8RiLMb0.js";import"./performance-now-D4QiMMAM.js";import"./rgbcolor-Cv9DR9SS.js";import"./svg-pathdata-BQypvdxQ.js";import"./stackblur-canvas-WbqePTkn.js";import"./@vueuse-DXufPiA3.js";import"./@sxzz-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-DCN6noHZ.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DHjS97uh.js";const x={class:"labApprovalFlow-container"},D=n({name:"approvalFlow"}),C=k(n({...D,setup(n){const k=d(!1),D=d(),C=d(),T=d(),z=d(),q=d(),V=u({loading:!1,tableData:[],queryParams:{},tableParams:{page:1,pageSize:20,total:0},dialogTitle:""});c((async()=>{F()}));const R=()=>{k.value=!k.value},F=async()=>{var e,a;V.loading=!0;let l=Object.assign(V.queryParams,V.tableParams);var t=await i(s).apiApprovalFlowPagePost(l);V.tableData=(null==(e=t.data.result)?void 0:e.items)??[],V.tableParams.total=null==(a=t.data.result)?void 0:a.total,V.loading=!1},U=()=>{V.dialogTitle="添加审批流",q.value.openDialog({status:1})},S=e=>{F()},A=e=>{V.tableParams.pageSize=e,F()},E=e=>{V.tableParams.page=e,F()};return(n,d)=>{const u=g("el-input"),c=g("el-form-item"),K=g("el-col"),B=g("el-button"),J=g("el-button-group"),N=g("el-row"),O=g("el-form"),I=g("el-card"),L=g("el-table-column"),M=g("el-table"),Q=g("el-pagination"),G=f("loading");return j(),v("div",x,[y(I,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:_((()=>[y(O,{model:V.queryParams,ref:"queryForm"},{default:_((()=>[y(N,{gutter:35},{default:_((()=>[y(K,{xs:24,sm:12,md:12,lg:8,xl:4,class:"mb10"},{default:_((()=>[y(c,{label:"关键字"},{default:_((()=>[y(u,{modelValue:V.queryParams.searchKey,"onUpdate:modelValue":d[0]||(d[0]=e=>V.queryParams.searchKey=e),placeholder:"请输入模糊查询关键字",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),k.value?(j(),b(K,{key:0,xs:24,sm:12,md:12,lg:8,xl:4,class:"mb10"},{default:_((()=>[y(c,{label:"编号"},{default:_((()=>[y(u,{modelValue:V.queryParams.code,"onUpdate:modelValue":d[1]||(d[1]=e=>V.queryParams.code=e),placeholder:"请输入编号",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})):w("",!0),k.value?(j(),b(K,{key:1,xs:24,sm:12,md:12,lg:8,xl:4,class:"mb10"},{default:_((()=>[y(c,{label:"名称"},{default:_((()=>[y(u,{modelValue:V.queryParams.name,"onUpdate:modelValue":d[2]||(d[2]=e=>V.queryParams.name=e),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})):w("",!0),k.value?(j(),b(K,{key:2,xs:24,sm:12,md:12,lg:8,xl:4,class:"mb10"},{default:_((()=>[y(c,{label:"备注"},{default:_((()=>[y(u,{modelValue:V.queryParams.remark,"onUpdate:modelValue":d[3]||(d[3]=e=>V.queryParams.remark=e),placeholder:"请输入备注",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})):w("",!0),y(K,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb10"},{default:_((()=>[y(c,null,{default:_((()=>[y(J,null,{default:_((()=>[y(B,{type:"primary",icon:"ele-Search",onClick:F},{default:_((()=>[P(" 查询 ")])),_:1}),y(B,{icon:"ele-Refresh",onClick:d[4]||(d[4]=()=>V.queryParams={})},{default:_((()=>[P(" 重置 ")])),_:1})])),_:1}),y(B,{type:"primary",icon:"ele-Plus",onClick:U,style:{"margin-left":"30px"}},{default:_((()=>[P(" 新增 ")])),_:1}),k.value?w("",!0):(j(),b(B,{key:0,icon:"ele-ArrowDown",onClick:R,style:{"margin-left":"5px"},text:""})),k.value?(j(),b(B,{key:1,icon:"ele-ArrowUp",onClick:R,style:{"margin-left":"5px"},text:""})):w("",!0)])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),y(I,{class:"full-table",shadow:"hover",style:{"margin-top":"5px"}},{default:_((()=>[h((j(),b(M,{data:V.tableData,style:{width:"100%"},"row-key":"id",border:""},{default:_((()=>[y(L,{type:"index",label:"序号",width:"55",align:"center"}),y(L,{prop:"code",label:"编号",width:"140","show-overflow-tooltip":""}),y(L,{prop:"name",label:"名称","show-overflow-tooltip":""}),y(L,{prop:"formJson",label:"表单",align:"center","show-overflow-tooltip":""},{default:_((e=>[y(B,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:a=>{return l=e.row,V.dialogTitle="编辑表单",void C.value.openDialog(l);var l}},{default:_((()=>[P(" 表单 ")])),_:2},1032,["onClick"])])),_:1}),y(L,{prop:"flowJson",label:"流程",align:"center","show-overflow-tooltip":""},{default:_((e=>[y(B,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:a=>{return l=e.row,V.dialogTitle="编辑流程",void T.value.openDialog(l);var l}},{default:_((()=>[P(" 流程 ")])),_:2},1032,["onClick"])])),_:1}),y(L,{label:"修改记录",width:"100",align:"center","show-overflow-tooltip":""},{default:_((e=>[y(r,{data:e.row},null,8,["data"])])),_:1}),y(L,{label:"操作",width:"200",align:"center",fixed:"right","show-overflow-tooltip":""},{default:_((e=>[y(B,{icon:"ele-View",size:"small",text:"",type:"primary",onClick:a=>{return l=e.row,V.dialogTitle="查看审批流",void D.value.openDialog(l);var l}},{default:_((()=>[P(" 查看 ")])),_:2},1032,["onClick"]),y(B,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:a=>{return l=e.row,V.dialogTitle="编辑审批流",void q.value.openDialog(l);var l}},{default:_((()=>[P(" 编辑 ")])),_:2},1032,["onClick"]),y(B,{icon:"ele-Delete",size:"small",text:"",type:"primary",onClick:a=>{return l=e.row,void p.confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{l.id&&(await i(s).apiApprovalFlowDeletePost({id:l.id}),F(),m.success("删除成功"))})).catch((()=>{}));var l}},{default:_((()=>[P(" 删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[G,V.loading]]),y(Q,{currentPage:V.tableParams.page,"onUpdate:currentPage":d[5]||(d[5]=e=>V.tableParams.page=e),"page-size":V.tableParams.pageSize,"onUpdate:pageSize":d[6]||(d[6]=e=>V.tableParams.pageSize=e),total:V.tableParams.total,"page-sizes":[10,20,50,100,200,500],small:"",background:"",onSizeChange:A,onCurrentChange:E,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])),_:1}),y(l,{ref_key:"detailDialogRef",ref:D,title:V.dialogTitle,onReloadTable:F},null,8,["title"]),y(e,{ref_key:"printDialogRef",ref:z,title:V.dialogTitle,onReloadTable:F},null,8,["title"]),y(o,{ref_key:"editDialogRef",ref:q,title:V.dialogTitle,onReloadTable:F},null,8,["title"]),y(a,{ref_key:"editFormDialogRef",ref:C,title:V.dialogTitle,onReloadTable:F},null,8,["title"]),y(t,{ref_key:"editFlowDialogRef",ref:T,title:V.dialogTitle,onUpdateFlow:S,onReloadTable:F},null,8,["title"])])}}}),[["__scopeId","data-v-c574ea6f"]]);export{C as default};

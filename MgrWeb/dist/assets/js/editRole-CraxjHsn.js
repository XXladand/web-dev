import{g as e,r as l}from"./index-DWGcUZYU.js";import{S as a}from"./sys-role-api-CtWvDK07.js";import{d as r,r as o,_ as s,j as t,ah as i,ap as m,o as u,c as d,V as p,P as n,a as c,U as j,T as g,Q as f,O as v}from"./@vue-CX_mlhJe.js";import{_ as h}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./pinia-CUaEdNPK.js";import"./vue-demi-DMxTsK9-.js";import"./vue-DMOwXDUL.js";import"./@babel-Q_QrznUx.js";import"./jspdf-CH-AZmyM.js";import"./fflate-B3Xb404m.js";import"./vue-router-DCQgfElv.js";import"./vue-i18n-DOLUIXgH.js";import"./@intlify-8Jop7_C0.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-BOmeTCVz.js";import"./nprogress-BXoedg-7.js";import"./axios-CURSphCx.js";import"./element-plus-B9gGnqkL.js";import"./lodash-es-Bx2dc0Qf.js";import"./@vueuse-DXufPiA3.js";import"./@sxzz-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-DCN6noHZ.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DHjS97uh.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-DUD0Qdrs.js";import"./vform3-builds-n_pM9nIF.js";import"./vue-signature-pad-lyh4QR3Z.js";import"./signature_pad-edH0THtw.js";import"./merge-images-Cwm9rL5U.js";import"./vue3-tree-org-BzkJto3m.js";/* empty css                    */import"./vue-plugin-hiprint-DZDwPE-S.js";import"./jquery-VSNIoD5U.js";import"./jsbarcode-BgYCXnWS.js";import"./socket.io-client-Czs-wWz3.js";import"./engine.io-client-CYjl6Vq_.js";import"./engine.io-parser-BcOgFIoq.js";import"./@socket.io-mcuM6LAc.js";import"./debug-CmirTkX5.js";import"./ms-CufoL-nS.js";import"./socket.io-parser-CnrqkM7d.js";import"./canvg-FiHv1N34.js";import"./core-js-BJmvCVxN.js";import"./raf-B8RiLMb0.js";import"./performance-now-D4QiMMAM.js";import"./rgbcolor-Cv9DR9SS.js";import"./svg-pathdata-BQypvdxQ.js";import"./stackblur-canvas-WbqePTkn.js";const b={class:"sys-role-container"},y={style:{color:"#fff"}},_={class:"dialog-footer"},x=r({name:"sysEditRole"}),F=h(r({...x,props:{title:String},emits:["handleQuery"],setup(r,{expose:h,emit:x}){const F=r,V=x,k=o(),w=o(),S=s({loading:!1,isShowDialog:!1,ruleForm:{},menuData:[]});t((async()=>{S.loading=!0;var a=await e(l).apiSysMenuListGet();S.menuData=a.data.result??[],S.loading=!1}));const D=()=>{S.isShowDialog=!1},U=()=>{k.value.validate((async l=>{var r;l&&(S.ruleForm.menuIdList=null==(r=w.value)?void 0:r.getCheckedKeys(),null!=S.ruleForm.id&&S.ruleForm.id>0?await e(a).apiSysRoleUpdatePost(S.ruleForm):await e(a).apiSysRoleAddPost(S.ruleForm),V("handleQuery"),S.isShowDialog=!1)}))},C=e=>{var l;let a=!0;for(var r in e.children)if(null==(l=e.children[r].children)?void 0:l.length){a=!1;break}return a?"penultimate-node":""};return h({openDialog:async l=>{var r,o;if(null==(r=k.value)||r.resetFields(),null==(o=w.value)||o.setCheckedKeys([]),S.ruleForm=JSON.parse(JSON.stringify(l)),null!=l.id){var s=await e(a).apiSysRoleOwnMenuListGet(l.id);setTimeout((()=>{var e;null==(e=w.value)||e.setCheckedKeys(s.data.result??[])}),100)}S.isShowDialog=!0}}),(e,l)=>{const a=i("ele-Edit"),r=i("el-icon"),o=i("el-input"),s=i("el-form-item"),t=i("el-col"),h=i("el-input-number"),x=i("el-radio"),V=i("el-radio-group"),R=i("el-tree"),z=i("el-row"),N=i("el-form"),q=i("el-button"),K=i("el-dialog"),L=m("loading");return u(),d("div",b,[p(K,{modelValue:S.isShowDialog,"onUpdate:modelValue":l[5]||(l[5]=e=>S.isShowDialog=e),draggable:"","close-on-click-modal":!1},{header:n((()=>[c("div",y,[p(r,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:n((()=>[p(a)])),_:1}),c("span",null,j(F.title),1)])])),footer:n((()=>[c("span",_,[p(q,{onClick:D},{default:n((()=>[g("取 消")])),_:1}),p(q,{type:"primary",onClick:U},{default:n((()=>[g("确 定")])),_:1})])])),default:n((()=>[p(N,{model:S.ruleForm,ref_key:"ruleFormRef",ref:k,"label-width":"auto"},{default:n((()=>[p(z,{gutter:35},{default:n((()=>[p(t,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:n((()=>[p(s,{label:"角色名称",prop:"name",rules:[{required:!0,message:"角色名称不能为空",trigger:"blur"}]},{default:n((()=>[p(o,{modelValue:S.ruleForm.name,"onUpdate:modelValue":l[0]||(l[0]=e=>S.ruleForm.name=e),placeholder:"角色名称",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),p(t,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:n((()=>[p(s,{label:"角色编码",prop:"code",rules:[{required:!0,message:"角色编码不能为空",trigger:"blur"}]},{default:n((()=>[p(o,{modelValue:S.ruleForm.code,"onUpdate:modelValue":l[1]||(l[1]=e=>S.ruleForm.code=e),placeholder:"角色编码",clearable:"",disabled:"sys_admin"==S.ruleForm.code&&null!=S.ruleForm.id},null,8,["modelValue","disabled"])])),_:1})])),_:1}),p(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:n((()=>[p(s,{label:"排序"},{default:n((()=>[p(h,{modelValue:S.ruleForm.orderNo,"onUpdate:modelValue":l[2]||(l[2]=e=>S.ruleForm.orderNo=e),placeholder:"排序",class:"w100"},null,8,["modelValue"])])),_:1})])),_:1}),p(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:n((()=>[p(s,{label:"状态"},{default:n((()=>[p(V,{modelValue:S.ruleForm.status,"onUpdate:modelValue":l[3]||(l[3]=e=>S.ruleForm.status=e)},{default:n((()=>[p(x,{value:1},{default:n((()=>[g("启用")])),_:1}),p(x,{value:2},{default:n((()=>[g("禁用")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(t,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:n((()=>[p(s,{label:"备注"},{default:n((()=>[p(o,{modelValue:S.ruleForm.remark,"onUpdate:modelValue":l[4]||(l[4]=e=>S.ruleForm.remark=e),placeholder:"请输入备注内容",clearable:"",type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1}),p(t,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:n((()=>[f((u(),v(s,{label:"菜单权限"},{default:n((()=>[p(R,{ref_key:"treeRef",ref:w,data:S.menuData,"node-key":"id","show-checkbox":"",props:{children:"children",label:"title",class:C},icon:"ele-Menu","highlight-current":"","default-expand-all":"",style:{height:"600px","overflow-y":"auto"}},null,8,["data","props"])])),_:1})),[[L,S.loading]])])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-c1f01072"]]);export{F as default};
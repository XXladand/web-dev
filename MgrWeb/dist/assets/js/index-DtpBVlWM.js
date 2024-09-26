import{_ as e}from"./editTenant.vue_vue_type_script_setup_true_name_sysEditTenant_lang-DXEJDvdH.js";import t from"./grantMenu-D2rFqXP1.js";import{_ as a}from"./modifyRecord.vue_vue_type_script_setup_true_lang-BJJtdc8n.js";import{g as o}from"./index-DWGcUZYU.js";import{S as l}from"./sys-tenant-api-rfUaKb-E.js";import{c as r,E as n}from"./element-plus-B9gGnqkL.js";import{d as s,r as i,_ as d,j as p,ah as u,ap as m,o as c,c as y,V as f,P as w,Q as g,O as b,T as _,S as h}from"./@vue-CX_mlhJe.js";import"./_plugin-vue_export-helper-BCo6x5W8.js";import"./pinia-CUaEdNPK.js";import"./vue-demi-DMxTsK9-.js";import"./vue-DMOwXDUL.js";import"./@babel-Q_QrznUx.js";import"./jspdf-CH-AZmyM.js";import"./fflate-B3Xb404m.js";import"./vue-router-DCQgfElv.js";import"./vue-i18n-DOLUIXgH.js";import"./@intlify-8Jop7_C0.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-BOmeTCVz.js";import"./nprogress-BXoedg-7.js";import"./axios-CURSphCx.js";import"./lodash-es-Bx2dc0Qf.js";import"./@vueuse-DXufPiA3.js";import"./@sxzz-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-DCN6noHZ.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DHjS97uh.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-DUD0Qdrs.js";import"./vform3-builds-n_pM9nIF.js";import"./vue-signature-pad-lyh4QR3Z.js";import"./signature_pad-edH0THtw.js";import"./merge-images-Cwm9rL5U.js";import"./vue3-tree-org-BzkJto3m.js";/* empty css                    */import"./vue-plugin-hiprint-DZDwPE-S.js";import"./jquery-VSNIoD5U.js";import"./jsbarcode-BgYCXnWS.js";import"./socket.io-client-Czs-wWz3.js";import"./engine.io-client-CYjl6Vq_.js";import"./engine.io-parser-BcOgFIoq.js";import"./@socket.io-mcuM6LAc.js";import"./debug-CmirTkX5.js";import"./ms-CufoL-nS.js";import"./socket.io-parser-CnrqkM7d.js";import"./canvg-FiHv1N34.js";import"./core-js-BJmvCVxN.js";import"./raf-B8RiLMb0.js";import"./performance-now-D4QiMMAM.js";import"./rgbcolor-Cv9DR9SS.js";import"./svg-pathdata-BQypvdxQ.js";import"./stackblur-canvas-WbqePTkn.js";const v={class:"sys-tenant-container"},j=s({name:"sysTenant"}),T=s({...j,setup(s){const j=i(),T=i(),k=d({loading:!1,tenantData:[],queryParams:{name:void 0,phone:void 0},tableParams:{page:1,pageSize:10,total:0},editTenantTitle:""});p((async()=>{P()}));const P=async()=>{var e,t;k.loading=!0;let a=Object.assign(k.queryParams,k.tableParams);var r=await o(l).apiSysTenantPagePost(a);k.tenantData=(null==(e=r.data.result)?void 0:e.items)??[],k.tableParams.total=null==(t=r.data.result)?void 0:t.total,k.loading=!1},C=()=>{k.queryParams.name=void 0,k.queryParams.phone=void 0,P()},S=()=>{var e;k.editTenantTitle="添加租户",null==(e=j.value)||e.openDialog({tenantType:0,orderNo:100})},x=e=>{k.tableParams.pageSize=e,P()},D=e=>{k.tableParams.page=e,P()};return(s,i)=>{const d=u("el-input"),p=u("el-form-item"),z=u("el-button"),q=u("el-button-group"),B=u("el-form"),V=u("el-card"),O=u("el-table-column"),M=u("el-tag"),U=u("el-switch"),R=u("el-dropdown-item"),G=u("el-dropdown-menu"),Q=u("el-dropdown"),$=u("el-table"),E=u("el-pagination"),F=m("auth"),I=m("loading");return c(),y("div",v,[f(V,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:w((()=>[f(B,{model:k.queryParams,ref:"queryForm",inline:!0},{default:w((()=>[f(p,{label:"租户名称"},{default:w((()=>[f(d,{modelValue:k.queryParams.name,"onUpdate:modelValue":i[0]||(i[0]=e=>k.queryParams.name=e),placeholder:"租户名称",clearable:""},null,8,["modelValue"])])),_:1}),f(p,{label:"联系电话"},{default:w((()=>[f(d,{modelValue:k.queryParams.phone,"onUpdate:modelValue":i[1]||(i[1]=e=>k.queryParams.phone=e),placeholder:"联系电话",clearable:""},null,8,["modelValue"])])),_:1}),f(p,null,{default:w((()=>[f(q,null,{default:w((()=>[g((c(),b(z,{type:"primary",icon:"ele-Search",onClick:P},{default:w((()=>[_(" 查询 ")])),_:1})),[[F,"sysTenant:page"]]),f(z,{icon:"ele-Refresh",onClick:C},{default:w((()=>[_(" 重置 ")])),_:1})])),_:1})])),_:1}),f(p,null,{default:w((()=>[g((c(),b(z,{type:"primary",icon:"ele-Plus",onClick:S},{default:w((()=>[_(" 新增 ")])),_:1})),[[F,"sysTenant:add"]])])),_:1})])),_:1},8,["model"])])),_:1}),f(V,{class:"full-table",shadow:"hover",style:{"margin-top":"5px"}},{default:w((()=>[g((c(),b($,{data:k.tenantData,style:{width:"100%"},border:""},{default:w((()=>[f(O,{type:"index",label:"序号",width:"55",align:"center",fixed:""}),f(O,{prop:"name",label:"租户名称",width:"160",align:"center","show-overflow-tooltip":""}),f(O,{prop:"adminAccount",label:"租管账号",align:"center",width:"120","show-overflow-tooltip":""}),f(O,{prop:"phone",label:"电话",width:"120",align:"center","show-overflow-tooltip":""}),f(O,{prop:"tenantType",label:"租户类型",width:"100",align:"center","show-overflow-tooltip":""},{default:w((e=>[0===e.row.tenantType?(c(),b(M,{key:0},{default:w((()=>[_(" ID隔离 ")])),_:1})):(c(),b(M,{key:1,type:"danger"},{default:w((()=>[_(" 库隔离 ")])),_:1}))])),_:1}),f(O,{label:"状态",width:"70",align:"center","show-overflow-tooltip":""},{default:w((e=>[f(U,{modelValue:e.row.status,"onUpdate:modelValue":t=>e.row.status=t,"active-value":1,"inactive-value":2,size:"small",onChange:t=>{return a=e.row,void o(l).apiSysTenantSetStatusPost({id:a.id,status:a.status}).then((()=>{n.success("租户状态设置成功")})).catch((()=>{a.status=1==a.status?2:1}));var a},disabled:12345678e7==e.row.id},null,8,["modelValue","onUpdate:modelValue","onChange","disabled"])])),_:1}),f(O,{prop:"dbType",label:"数据库类型",width:"120",align:"center","show-overflow-tooltip":""},{default:w((e=>[0===e.row.dbType?(c(),b(M,{key:0},{default:w((()=>[_(" MySql ")])),_:1})):1===e.row.dbType?(c(),b(M,{key:1},{default:w((()=>[_(" SqlServer ")])),_:1})):h("",!0),2===e.row.dbType?(c(),b(M,{key:2},{default:w((()=>[_(" Sqlite ")])),_:1})):3===e.row.dbType?(c(),b(M,{key:3},{default:w((()=>[_(" Oracle ")])),_:1})):h("",!0),4===e.row.dbType?(c(),b(M,{key:4},{default:w((()=>[_(" PostgreSQL ")])),_:1})):5===e.row.dbType?(c(),b(M,{key:5},{default:w((()=>[_(" Dm ")])),_:1})):h("",!0),6===e.row.dbType?(c(),b(M,{key:6},{default:w((()=>[_(" Kdbndp ")])),_:1})):7===e.row.dbType?(c(),b(M,{key:7},{default:w((()=>[_(" Oscar ")])),_:1})):h("",!0),8===e.row.dbType?(c(),b(M,{key:8},{default:w((()=>[_(" MySqlConnector ")])),_:1})):9===e.row.dbType?(c(),b(M,{key:9},{default:w((()=>[_(" Access ")])),_:1})):h("",!0),10===e.row.dbType?(c(),b(M,{key:10},{default:w((()=>[_(" OpenGauss ")])),_:1})):11===e.row.dbType?(c(),b(M,{key:11},{default:w((()=>[_(" QuestDB ")])),_:1})):12===e.row.dbType?(c(),b(M,{key:12},{default:w((()=>[_(" HG ")])),_:1})):13===e.row.dbType?(c(),b(M,{key:13},{default:w((()=>[_(" ClickHouse ")])),_:1})):14===e.row.dbType?(c(),b(M,{key:14},{default:w((()=>[_(" GBase ")])),_:1})):15===e.row.dbType?(c(),b(M,{key:15},{default:w((()=>[_(" Odbc ")])),_:1})):16===e.row.dbType?(c(),b(M,{key:16},{default:w((()=>[_(" OceanBaseForOracle ")])),_:1})):17===e.row.dbType?(c(),b(M,{key:17},{default:w((()=>[_(" TDengine ")])),_:1})):18===e.row.dbType?(c(),b(M,{key:18},{default:w((()=>[_(" GaussDB ")])),_:1})):19===e.row.dbType?(c(),b(M,{key:19},{default:w((()=>[_(" OceanBase ")])),_:1})):20===e.row.dbType?(c(),b(M,{key:20},{default:w((()=>[_(" Tidb ")])),_:1})):21===e.row.dbType?(c(),b(M,{key:21},{default:w((()=>[_(" Vastbase ")])),_:1})):22===e.row.dbType?(c(),b(M,{key:22},{default:w((()=>[_(" PolarDB ")])),_:1})):23===e.row.dbType?(c(),b(M,{key:23},{default:w((()=>[_(" Doris ")])),_:1})):900===e.row.dbType?(c(),b(M,{key:24},{default:w((()=>[_(" Custom ")])),_:1})):h("",!0)])),_:1}),f(O,{prop:"connection",label:"数据库连接","min-width":"300","header-align":"center","show-overflow-tooltip":""}),f(O,{prop:"slaveConnections",label:"从库连接","min-width":"300","header-align":"center","show-overflow-tooltip":""}),f(O,{prop:"orderNo",label:"排序",width:"70",align:"center","show-overflow-tooltip":""}),f(O,{label:"修改记录",width:"100",align:"center","show-overflow-tooltip":""},{default:w((e=>[f(a,{data:e.row},null,8,["data"])])),_:1}),f(O,{label:"操作",width:"200",fixed:"right",align:"center","show-overflow-tooltip":""},{default:w((e=>[g((c(),b(z,{icon:"ele-Coin",size:"small",text:"",type:"danger",onClick:t=>{return a=e.row,void r.confirm(`确定创建/更新租户数据库：【${a.name}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await o(l).apiSysTenantCreateDbPost({id:a.id}),n.success("创建/更新租户数据库成功")})).catch((()=>{}));var a},disabled:0==e.row.tenantType},{default:w((()=>[_(" 创建库 ")])),_:2},1032,["onClick","disabled"])),[[F,"sysTenant:createDb"]]),g((c(),b(z,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:t=>{return a=e.row,k.editTenantTitle="编辑租户",void(null==(o=j.value)||o.openDialog(a));var a,o}},{default:w((()=>[_(" 编辑 ")])),_:2},1032,["onClick"])),[[F,"sysTenant:update"]]),f(Q,null,{dropdown:w((()=>[f(G,null,{default:w((()=>[f(R,{icon:"ele-OfficeBuilding",onClick:t=>(async e=>{var t;null==(t=T.value)||t.openDialog(e)})(e.row),"v-auth":"sysTenant:grantMenu"},{default:w((()=>[_(" 授权菜单 ")])),_:2},1032,["onClick"]),f(R,{icon:"ele-RefreshLeft",onClick:t=>(async e=>{r.confirm(`确定重置密码：【${e.name}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await o(l).apiSysTenantResetPwdPost({userId:e.userId}).then((e=>{n.success(`密码重置成功为：${e.data.result}`)}))})).catch((()=>{}))})(e.row),"v-auth":"sysTenant:resetPwd"},{default:w((()=>[_(" 重置密码 ")])),_:2},1032,["onClick"]),f(R,{icon:"ele-Delete",onClick:t=>{return a=e.row,void r.confirm(`确定删除租户：【${a.name}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await o(l).apiSysTenantDeletePost({id:a.id}),P(),n.success("删除成功")})).catch((()=>{}));var a},"v-auth":"sysTenant:delete"},{default:w((()=>[_(" 删除租户 ")])),_:2},1032,["onClick"])])),_:2},1024)])),default:w((()=>[f(z,{icon:"ele-MoreFilled",size:"small",text:"",type:"primary",style:{"padding-left":"12px"}})])),_:2},1024)])),_:1})])),_:1},8,["data"])),[[I,k.loading]]),f(E,{currentPage:k.tableParams.page,"onUpdate:currentPage":i[2]||(i[2]=e=>k.tableParams.page=e),"page-size":k.tableParams.pageSize,"onUpdate:pageSize":i[3]||(i[3]=e=>k.tableParams.pageSize=e),total:k.tableParams.total,"page-sizes":[10,20,50,100],size:"small",background:"",onSizeChange:x,onCurrentChange:D,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])),_:1}),f(e,{ref_key:"editTenantRef",ref:j,title:k.editTenantTitle,onHandleQuery:P},null,8,["title"]),f(t,{ref_key:"grantMenuRef",ref:T},null,512)])}}});export{T as default};

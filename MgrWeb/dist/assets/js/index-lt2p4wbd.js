import{Q as e}from"./qrcodejs2-fixes-BqqGeaSD.js";import{r as a}from"./request-Cv12-fnH.js";import{c as t,E as l}from"./element-plus-B9gGnqkL.js";import{d as r,r as o,_ as s,j as i,ah as d,ap as p,o as u,c as n,V as m,P as c,T as f,Q as y,O as g,S as h,a as b,n as j}from"./@vue-CX_mlhJe.js";import"./@babel-Q_QrznUx.js";import"./axios-CURSphCx.js";import"./index-DWGcUZYU.js";import"./pinia-CUaEdNPK.js";import"./vue-demi-DMxTsK9-.js";import"./vue-DMOwXDUL.js";import"./jspdf-CH-AZmyM.js";import"./fflate-B3Xb404m.js";import"./vue-router-DCQgfElv.js";import"./vue-i18n-DOLUIXgH.js";import"./@intlify-8Jop7_C0.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-BOmeTCVz.js";import"./nprogress-BXoedg-7.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-DUD0Qdrs.js";import"./vform3-builds-n_pM9nIF.js";import"./vue-signature-pad-lyh4QR3Z.js";import"./signature_pad-edH0THtw.js";import"./merge-images-Cwm9rL5U.js";import"./vue3-tree-org-BzkJto3m.js";/* empty css                    */import"./vue-plugin-hiprint-DZDwPE-S.js";import"./jquery-VSNIoD5U.js";import"./jsbarcode-BgYCXnWS.js";import"./socket.io-client-Czs-wWz3.js";import"./engine.io-client-CYjl6Vq_.js";import"./engine.io-parser-BcOgFIoq.js";import"./@socket.io-mcuM6LAc.js";import"./debug-CmirTkX5.js";import"./ms-CufoL-nS.js";import"./socket.io-parser-CnrqkM7d.js";import"./canvg-FiHv1N34.js";import"./core-js-BJmvCVxN.js";import"./raf-B8RiLMb0.js";import"./performance-now-D4QiMMAM.js";import"./rgbcolor-Cv9DR9SS.js";import"./svg-pathdata-BQypvdxQ.js";import"./stackblur-canvas-WbqePTkn.js";import"./lodash-es-Bx2dc0Qf.js";import"./@vueuse-DXufPiA3.js";import"./@sxzz-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-DCN6noHZ.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DHjS97uh.js";const v={class:"weChatPay-container"},w={class:"dialog-footer"},_=r({name:"weChatPay"}),k=r({..._,setup(r){const _=o(null),k=o(!1),P=o(!1),S=o(!1),C=o([]),V=o({}),q=s({loading:!1,tableData:[],queryParams:{searchKey:void 0,createTimeRange:void 0},tableParams:{page:1,pageSize:10,total:0},editTenantTitle:""});i((async()=>{x()}));const x=async()=>{var e,t;q.loading=!0;let l=Object.assign(q.queryParams,q.tableParams);var r=await(e=>a({url:"/api/sysWechatPay/page",method:"post",data:e}))(l);let o=(null==(e=r.data.result)?void 0:e.items)??[];q.tableData.value=o,q.tableParams.total=null==(t=r.data.result)?void 0:t.total,q.loading=!1},z=()=>{q.queryParams.searchKey=void 0,q.queryParams.createTimeRange=void 0,x()},T=async e=>{t.prompt(`确定进行退款：${e.total/100}元？请输入退款理由`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((async({value:t})=>{let r=await(o={tradeId:e.outTradeNumber,reason:t,refund:e.total,total:e.total},a({url:"/api/sysWechatPay/refundDomestic",method:"post",data:o}));var o;200==r.data.code?l.success(`【${t}】退款申请成功`):l.error("操作失败："+r.data.message)})).catch((()=>{l.error("取消操作")}))},U=(e,a,t,l)=>(t/100).toFixed(2),D=()=>{V.value={description:null,total:null,attachment:null},k.value=!0},R=()=>{k.value=!1},E=a=>{P.value=!0,j((()=>{_.value.innerHTML="",new e(_.value,{text:a,width:260,height:260,colorDark:"#000000",colorLight:"#ffffff"})}))},N=async e=>{var t,r=await(t=e,a({url:"/api/sysWechatPay/listRefund",method:"post",data:t}));if(200===r.data.code){let e=r.data.result??[];C.value=e,S.value=!0}else l.error("获取退款列表失败，"+r.data.message)},I=async()=>{var e,t=await(e=V.value,a({url:"/api/sysWechatPay/payTransactionNative",method:"post",data:e}));if(200===t.data.code){R();let e=t.data.result.qrcodeUrl;E(e),x()}else l.error("新建失败，"+t.data.message)},F=e=>{q.tableParams.pageSize=e,x()},K=e=>{q.tableParams.page=e,x()};return(e,a)=>{const t=d("el-input"),l=d("el-form-item"),r=d("el-date-picker"),o=d("el-button"),s=d("el-button-group"),i=d("el-form"),j=d("el-card"),Y=d("el-table-column"),M=d("el-tag"),W=d("el-table"),B=d("el-pagination"),L=d("el-dialog"),Q=p("loading");return u(),n("div",v,[m(j,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:c((()=>[m(i,{model:q.queryParams,ref:"queryForm",inline:!0},{default:c((()=>[m(l,{label:"订单号"},{default:c((()=>[m(t,{modelValue:q.queryParams.searchKey,"onUpdate:modelValue":a[0]||(a[0]=e=>q.queryParams.searchKey=e),clearable:"",placeholder:"请输入订单号"},null,8,["modelValue"])])),_:1}),m(l,{label:"创建时间"},{default:c((()=>[m(r,{placeholder:"请选择创建时间","value-format":"YYYY/MM/DD",type:"daterange",modelValue:q.queryParams.createTimeRange,"onUpdate:modelValue":a[1]||(a[1]=e=>q.queryParams.createTimeRange=e)},null,8,["modelValue"])])),_:1}),m(l,null,{default:c((()=>[m(s,null,{default:c((()=>[m(o,{type:"primary",icon:"ele-Search",onClick:x},{default:c((()=>[f(" 查询 ")])),_:1}),m(o,{icon:"ele-Refresh",onClick:z},{default:c((()=>[f(" 重置 ")])),_:1})])),_:1})])),_:1}),m(l,null,{default:c((()=>[m(o,{type:"primary",icon:"ele-Plus",onClick:D},{default:c((()=>[f("新增模拟数据")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),m(j,{class:"full-table",shadow:"hover",style:{"margin-top":"5px"}},{default:c((()=>[y((u(),g(W,{data:q.tableData,style:{width:"100%"},border:""},{default:c((()=>[m(Y,{type:"index",label:"序号",width:"55",align:"center"}),m(Y,{prop:"outTradeNumber",label:"商户订单号",width:"180"}),m(Y,{prop:"transactionId",label:"支付订单号",width:"220"}),m(Y,{prop:"description",label:"描述",width:"180"}),m(Y,{prop:"total",formatter:U,label:"金额",width:"70"}),m(Y,{prop:"tradeState",label:"状态",width:"70"},{default:c((e=>["SUCCESS"==e.row.tradeState?(u(),g(M,{key:0,type:"success"},{default:c((()=>[f(" 完成 ")])),_:1})):"REFUND"==e.row.tradeState?(u(),g(M,{key:1,type:"danger"},{default:c((()=>[f(" 退款 ")])),_:1})):(u(),g(M,{key:2,type:"info"},{default:c((()=>[f(" 未完成 ")])),_:1}))])),_:1}),m(Y,{prop:"attachment",label:"附加信息",width:"180"}),m(Y,{prop:"tags",label:"业务类型",width:"90"}),m(Y,{prop:"createTime",label:"创建时间",width:"150"}),m(Y,{prop:"successTime",label:"完成时间",width:"150"}),m(Y,{prop:"businessId",label:"业务ID",width:"130"}),m(Y,{label:"操作",align:"center",fixed:"right"},{default:c((e=>[null==e.row.qrcodeContent||""==e.row.qrcodeContent||""!==e.row.tradeState&&e.row.tradeState?h("",!0):(u(),g(o,{key:0,size:"small",text:"",type:"primary",onClick:a=>E(e.row.qrcodeContent)},{default:c((()=>[f("付款二维码")])),_:2},1032,["onClick"])),"REFUND"===e.row.tradeState?(u(),g(o,{key:1,size:"small",text:"",type:"primary",onClick:a=>N(e.row.transactionId)},{default:c((()=>[f("查看退款")])),_:2},1032,["onClick"])):h("",!0),"SUCCESS"===e.row.tradeState?(u(),g(o,{key:2,size:"small",text:"",type:"primary",onClick:a=>T(e.row)},{default:c((()=>[f("全额退款")])),_:2},1032,["onClick"])):h("",!0)])),_:1})])),_:1},8,["data"])),[[Q,q.loading]]),m(B,{currentPage:q.tableParams.page,"onUpdate:currentPage":a[2]||(a[2]=e=>q.tableParams.page=e),"page-size":q.tableParams.pageSize,"onUpdate:pageSize":a[3]||(a[3]=e=>q.tableParams.pageSize=e),total:q.tableParams.total,"page-sizes":[10,20,50,100],size:"small",background:"",onSizeChange:F,onCurrentChange:K,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])),_:1}),m(L,{modelValue:k.value,"onUpdate:modelValue":a[7]||(a[7]=e=>k.value=e),title:"新增模拟数据"},{footer:c((()=>[b("span",w,[m(o,{onClick:R},{default:c((()=>[f("取 消")])),_:1}),m(o,{type:"primary",onClick:I},{default:c((()=>[f("确 定")])),_:1})])])),default:c((()=>[m(i,null,{default:c((()=>[m(l,{label:"商品"},{default:c((()=>[m(t,{modelValue:V.value.description,"onUpdate:modelValue":a[4]||(a[4]=e=>V.value.description=e),placeholder:"必填",clearable:""},null,8,["modelValue"])])),_:1}),m(l,{label:"金额(分)"},{default:c((()=>[m(t,{modelValue:V.value.total,"onUpdate:modelValue":a[5]||(a[5]=e=>V.value.total=e),placeholder:"必填，填数字,单位是分",clearable:""},null,8,["modelValue"])])),_:1}),m(l,{label:"附加信息"},{default:c((()=>[m(t,{modelValue:V.value.attachment,"onUpdate:modelValue":a[6]||(a[6]=e=>V.value.attachment=e),clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),m(L,{title:"付款二维码",modelValue:P.value,"onUpdate:modelValue":a[8]||(a[8]=e=>P.value=e)},{default:c((()=>[b("div",{ref_key:"qrDiv",ref:_},null,512)])),_:1},8,["modelValue"]),m(L,{title:"退款信息",modelValue:S.value,"onUpdate:modelValue":a[9]||(a[9]=e=>S.value=e)},{default:c((()=>[m(W,{data:C.value,style:{width:"100%"},"tooltip-effect":"light","row-key":"id",border:""},{default:c((()=>[m(Y,{type:"index",label:"序号",width:"55",align:"center"}),m(Y,{prop:"outRefundNumber",label:"商户退款号",width:"180"}),m(Y,{prop:"transactionId",label:"支付订单号",width:"220"}),m(Y,{prop:"refund",label:"金额(分)",width:"70"}),m(Y,{prop:"reason",label:"退款原因",width:"180"}),m(Y,{prop:"tradeState",label:"状态",width:"70"},{default:c((e=>["SUCCESS"==e.row.tradeState?(u(),g(M,{key:0,type:"success"},{default:c((()=>[f(" 完成 ")])),_:1})):"REFUND"==e.row.tradeState?(u(),g(M,{key:1,type:"danger"},{default:c((()=>[f(" 退款 ")])),_:1})):(u(),g(M,{key:2,type:"info"},{default:c((()=>[f(" 未完成 ")])),_:1}))])),_:1}),m(Y,{prop:"remark",label:"备注",width:"180"}),m(Y,{prop:"createTime",label:"创建时间",width:"150"}),m(Y,{prop:"successTime",label:"完成时间",width:"150"})])),_:1},8,["data"])])),_:1},8,["modelValue"])])}}});export{k as default};

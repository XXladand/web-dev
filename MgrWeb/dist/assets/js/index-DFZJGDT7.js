import{f as s}from"./base64Conver-CqQ1R74E.js";import{g as e,x as a}from"./index-DWGcUZYU.js";import{E as o}from"./element-plus-B9gGnqkL.js";import{d as t,r as i,_ as l,ah as r,ap as m,o as p,c as n,Q as y,O as c,P as d,V as u,T as f,n as j}from"./@vue-CX_mlhJe.js";import{_ as g}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./pinia-CUaEdNPK.js";import"./vue-demi-DMxTsK9-.js";import"./vue-DMOwXDUL.js";import"./@babel-Q_QrznUx.js";import"./jspdf-CH-AZmyM.js";import"./fflate-B3Xb404m.js";import"./vue-router-DCQgfElv.js";import"./vue-i18n-DOLUIXgH.js";import"./@intlify-8Jop7_C0.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-BOmeTCVz.js";import"./nprogress-BXoedg-7.js";import"./axios-CURSphCx.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-DUD0Qdrs.js";import"./vform3-builds-n_pM9nIF.js";import"./vue-signature-pad-lyh4QR3Z.js";import"./signature_pad-edH0THtw.js";import"./merge-images-Cwm9rL5U.js";import"./vue3-tree-org-BzkJto3m.js";/* empty css                    */import"./vue-plugin-hiprint-DZDwPE-S.js";import"./jquery-VSNIoD5U.js";import"./jsbarcode-BgYCXnWS.js";import"./socket.io-client-Czs-wWz3.js";import"./engine.io-client-CYjl6Vq_.js";import"./engine.io-parser-BcOgFIoq.js";import"./@socket.io-mcuM6LAc.js";import"./debug-CmirTkX5.js";import"./ms-CufoL-nS.js";import"./socket.io-parser-CnrqkM7d.js";import"./canvg-FiHv1N34.js";import"./core-js-BJmvCVxN.js";import"./raf-B8RiLMb0.js";import"./performance-now-D4QiMMAM.js";import"./rgbcolor-Cv9DR9SS.js";import"./svg-pathdata-BQypvdxQ.js";import"./stackblur-canvas-WbqePTkn.js";import"./lodash-es-Bx2dc0Qf.js";import"./@vueuse-DXufPiA3.js";import"./@sxzz-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-DCN6noHZ.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DHjS97uh.js";const V=["src"],D=t({name:"sysInfoSetting"}),v=g(t({...D,setup(t){const g=i(),D=l({isLoading:!1,file:void 0,formData:{sysLogoBlob:void 0,sysLogo:"",sysLogoFileName:"",sysTitle:"",sysViceTitle:"",sysViceDesc:"",sysWatermark:"",sysCopyright:"",sysIcp:"",sysIcpUrl:""}}),v=s=>{g.value.clearFiles(),D.file=s,D.formData.sysLogo=URL.createObjectURL(D.file.raw)},b=async()=>{let t="",i="";D.file&&(t=await s(D.file.raw),i=D.file.raw.name);try{D.isLoading=!0;if("success"!==(await e(a).apiSysConfigSaveSysInfoPost({sysLogoBase64:t,sysLogoFileName:i,sysTitle:D.formData.sysTitle,sysViceTitle:D.formData.sysViceTitle,sysViceDesc:D.formData.sysViceDesc,sysWatermark:D.formData.sysWatermark,sysCopyright:D.formData.sysCopyright,sysIcp:D.formData.sysIcp,sysIcpUrl:D.formData.sysIcpUrl})).data.type)return;D.file=void 0,await I(),o.success("保存成功")}finally{j((()=>{D.isLoading=!1}))}},I=async()=>{try{D.isLoading=!0;const s=await e(a).apiSysConfigSysInfoGet();if("success"!==s.data.type)return;const o=s.data.result;D.formData={sysLogoBlob:void 0,sysLogo:o.sysLogo,sysLogoFileName:"",sysTitle:o.sysTitle,sysViceTitle:o.sysViceTitle,sysViceDesc:o.sysViceDesc,sysWatermark:o.sysWatermark,sysCopyright:o.sysCopyright,sysIcp:o.sysIcp,sysIcpUrl:o.sysIcpUrl}}finally{j((()=>{D.isLoading=!1}))}};return I(),(s,e)=>{const a=r("ele-Setting"),o=r("el-icon"),t=r("SvgIcon"),i=r("el-upload"),l=r("el-descriptions-item"),j=r("el-input"),I=r("el-button"),L=r("el-descriptions"),_=r("el-card"),h=m("loading");return p(),n("div",null,[y((p(),c(_,{shadow:"hover"},{default:d((()=>[u(L,{title:"系统信息配置",column:2,border:!0},{title:d((()=>[u(o,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:d((()=>[u(a)])),_:1}),f(" 系统信息配置 ")])),extra:d((()=>[u(I,{type:"primary",icon:"ele-SuccessFilled",onClick:b},{default:d((()=>[f("保存")])),_:1})])),default:d((()=>[u(l,{label:"系统图标",span:2},{default:d((()=>[u(i,{ref_key:"uploadRef",ref:g,class:"avatar-uploader",showFileList:!1,autoUpload:!1,accept:".jpg,.png,.svg",action:"",limit:1,onChange:v},{default:d((()=>[D.formData.sysLogo?(p(),n("img",{key:0,src:D.formData.sysLogo,class:"avatar"},null,8,V)):(p(),c(t,{key:1,class:"avatar-uploader-icon",name:"ele-Plus",size:28}))])),_:1},512)])),_:1}),u(l,{label:"系统主标题"},{default:d((()=>[u(j,{modelValue:D.formData.sysTitle,"onUpdate:modelValue":e[0]||(e[0]=s=>D.formData.sysTitle=s)},null,8,["modelValue"])])),_:1}),u(l,{label:"系统副标题"},{default:d((()=>[u(j,{modelValue:D.formData.sysViceTitle,"onUpdate:modelValue":e[1]||(e[1]=s=>D.formData.sysViceTitle=s)},null,8,["modelValue"])])),_:1}),u(l,{label:"系统描述",span:2},{default:d((()=>[u(j,{modelValue:D.formData.sysViceDesc,"onUpdate:modelValue":e[2]||(e[2]=s=>D.formData.sysViceDesc=s)},null,8,["modelValue"])])),_:1}),u(l,{label:"水印内容",span:2},{default:d((()=>[u(j,{modelValue:D.formData.sysWatermark,"onUpdate:modelValue":e[3]||(e[3]=s=>D.formData.sysWatermark=s)},null,8,["modelValue"])])),_:1}),u(l,{label:"版权说明",span:2},{default:d((()=>[u(j,{modelValue:D.formData.sysCopyright,"onUpdate:modelValue":e[4]||(e[4]=s=>D.formData.sysCopyright=s)},null,8,["modelValue"])])),_:1}),u(l,{label:"ICP备案号"},{default:d((()=>[u(j,{modelValue:D.formData.sysIcp,"onUpdate:modelValue":e[5]||(e[5]=s=>D.formData.sysIcp=s)},null,8,["modelValue"])])),_:1}),u(l,{label:"ICP地址"},{default:d((()=>[u(j,{modelValue:D.formData.sysIcpUrl,"onUpdate:modelValue":e[6]||(e[6]=s=>D.formData.sysIcpUrl=s)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})),[[h,D.isLoading]])])}}}),[["__scopeId","data-v-b300537e"]]);export{v as default};

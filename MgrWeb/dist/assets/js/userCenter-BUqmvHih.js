import{s as e}from"./pinia-CUaEdNPK.js";import{a,g as l,y as r}from"./index-DWGcUZYU.js";import{b as o}from"./base64Conver-CqQ1R74E.js";import s from"./orgTree-GoxRs6Y8.js";import{C as t}from"./cropperjs-Dcck23_9.js";import{g as i,f as p,c as d}from"./element-plus-B9gGnqkL.js";import{d as u,r as n,_ as m,ah as c,o as g,c as f,V as w,P as v,a as b,U as y,T as h,n as _,bm as j,bk as V,j as x,w as F,ap as k,Q as B,u as U,O as C}from"./@vue-CX_mlhJe.js";import{_ as S}from"./_plugin-vue_export-helper-BCo6x5W8.js";import{s as P}from"./sm-crypto-v2-BPWIU65d.js";import{S as N}from"./sys-file-api-DidooOQP.js";import{S as I}from"./sys-user-api-CGBglDdl.js";import"./vue-demi-DMxTsK9-.js";import"./vue-DMOwXDUL.js";import"./@babel-Q_QrznUx.js";import"./jspdf-CH-AZmyM.js";import"./fflate-B3Xb404m.js";import"./vue-router-DCQgfElv.js";import"./vue-i18n-DOLUIXgH.js";import"./@intlify-8Jop7_C0.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-BOmeTCVz.js";import"./nprogress-BXoedg-7.js";import"./axios-CURSphCx.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-DUD0Qdrs.js";import"./vform3-builds-n_pM9nIF.js";import"./vue-signature-pad-lyh4QR3Z.js";import"./signature_pad-edH0THtw.js";import"./merge-images-Cwm9rL5U.js";import"./vue3-tree-org-BzkJto3m.js";/* empty css                    */import"./vue-plugin-hiprint-DZDwPE-S.js";import"./jquery-VSNIoD5U.js";import"./jsbarcode-BgYCXnWS.js";import"./socket.io-client-Czs-wWz3.js";import"./engine.io-client-CYjl6Vq_.js";import"./engine.io-parser-BcOgFIoq.js";import"./@socket.io-mcuM6LAc.js";import"./debug-CmirTkX5.js";import"./ms-CufoL-nS.js";import"./socket.io-parser-CnrqkM7d.js";import"./canvg-FiHv1N34.js";import"./core-js-BJmvCVxN.js";import"./raf-B8RiLMb0.js";import"./performance-now-D4QiMMAM.js";import"./rgbcolor-Cv9DR9SS.js";import"./svg-pathdata-BQypvdxQ.js";import"./stackblur-canvas-WbqePTkn.js";import"./lodash-es-Bx2dc0Qf.js";import"./@vueuse-DXufPiA3.js";import"./@sxzz-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-DCN6noHZ.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DHjS97uh.js";import"./sys-org-api-BuTSvnhC.js";import"./@noble-DPz6ZhRw.js";const D=e=>(j("data-v-fa22962b"),e=e(),V(),e),O={style:{color:"#fff"}},L={class:"cropper-warp"},R={class:"cropper-warp-left"},z=["src"],T={class:"cropper-warp-right"},M=D((()=>b("div",{class:"cropper-warp-right-title"},"预览",-1))),E={class:"cropper-warp-right-item"},q={class:"cropper-warp-right-value"},Y=["src"],W=D((()=>b("div",{class:"cropper-warp-right-label"},"100 x 100",-1))),A={class:"cropper-warp-right-item"},$={class:"cropper-warp-right-value"},G=["src"],K=D((()=>b("div",{class:"cropper-warp-right-label"},"50 x 50",-1))),Q={class:"dialog-footer"},H=u({name:"cropper"}),J=S(u({...H,props:{title:{type:String,default:()=>""}},emits:["uploadCropperImg"],setup(e,{expose:a,emit:l}){const r=e,o=l,s=n(),p=m({isShowDialog:!1,cropperImg:"",cropperImgBase64:"",cropper:""}),d=()=>{p.cropper.destroy(),p.isShowDialog=!1},u=()=>{d()},j=async()=>{const e=await x();o("uploadCropperImg",{img:e}),d()},V=()=>{const e=document.querySelector(".cropper-warp-left-img");e&&e.setAttribute("crossOrigin","anonymous"),p.cropper=new t(e,{viewMode:1,dragMode:"none",initialAspectRatio:1,aspectRatio:1,preview:".before",background:!0,autoCropArea:1,checkCrossOrigin:!1,crop:()=>{p.cropperImgBase64=p.cropper.getCroppedCanvas().toDataURL("image/jpeg")}})},x=()=>new Promise((e=>{p.cropper.getCroppedCanvas().toBlob((a=>{e(a)}))})),F=async e=>{let a=window.URL||window.webkitURL;p.cropperImg=a.createObjectURL(e.raw),p.cropper.replace(p.cropperImg)},k=e=>{s.value.clearFiles();const a=e[0];a.uid=i(),s.value.handleStart(a)};return a({openDialog:e=>{p.cropperImg=e,p.isShowDialog=!0,_((()=>{V()}))}}),(e,a)=>{const l=c("ele-Edit"),o=c("el-icon"),t=c("el-button"),i=c("el-upload"),d=c("el-dialog");return g(),f("div",null,[w(d,{modelValue:p.isShowDialog,"onUpdate:modelValue":a[0]||(a[0]=e=>p.isShowDialog=e),width:"769px","before-close":u},{header:v((()=>[b("div",O,[w(o,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:v((()=>[w(l)])),_:1}),b("span",null,y(r.title),1)])])),footer:v((()=>[b("span",Q,[w(i,{ref_key:"uploadSignRef",ref:s,accept:".jpg,.png",limit:1,"show-file-list":!1,"auto-upload":!1,"on-change":F,"on-exceed":k,style:{display:"inline-block",position:"absolute",right:"182px"}},{default:v((()=>[w(t,{icon:"ele-Picture"},{default:v((()=>[h("选择图片")])),_:1})])),_:1},512),w(t,{onClick:u},{default:v((()=>[h("取 消")])),_:1}),w(t,{type:"primary",onClick:j},{default:v((()=>[h("确 定")])),_:1})])])),default:v((()=>[b("div",L,[b("div",R,[b("img",{src:p.cropperImg,class:"cropper-warp-left-img"},null,8,z)]),b("div",T,[M,b("div",E,[b("div",q,[b("img",{src:p.cropperImgBase64,class:"cropper-warp-right-value-img"},null,8,Y)]),W]),b("div",A,[b("div",$,[b("img",{src:p.cropperImgBase64,class:"cropper-warp-right-value-img cropper-size"},null,8,G)]),K])])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-fa22962b"]]),X={class:"sys-userCenter-container"},Z={class:"account-center-avatarHolder"},ee={class:"username"},ae={class:"account-center-org"},le={class:"image-signature"},re={style:{color:"#fff"}},oe=(e=>(j("data-v-db8f06df"),e=e(),V(),e))((()=>b("span",null," 电子签名 ",-1))),se={style:{border:"1px dashed gray",width:"100%",height:"250px"}},te={style:{"margin-top":"10px"}},ie={style:{display:"inline"}},pe={style:{display:"inline","margin-left":"30px"}},de={class:"dialog-footer"},ue=u({name:"sysUserCenter"}),ne=S(u({...ue,setup(t,{expose:u}){const _=a(),{userInfos:j}=e(_),V=n(),S=n(),D=n(),O=n(),L=n(),R=m({loading:!1,avatarLoading:!1,signDialogVisible:!1,ruleFormBase:{},ruleFormPassword:{},signOptions:{penColor:"#000000",minWidth:1,onBegin:()=>{S.value.resizeCanvas()}},signFileList:[],passwordNew2:"",cropperTitle:""});x((async()=>{R.loading=!0;var e=await l(I).apiSysUserBaseInfoGet();R.ruleFormBase=e.data.result??{account:""},R.loading=!1})),F(R.signOptions,(()=>{S.value.signaturePad.penColor=R.signOptions.penColor,S.value.signaturePad.minWidth=R.signOptions.minWidth}));const z=async e=>{var a=await l(N).apiSysFileUploadAvatarPostForm(e.img);j.value.avatar=ne(a.data.result)},T=()=>{R.signDialogVisible=!0},M=async()=>{const{isEmpty:e,data:a}=S.value.saveSignature();if(!e){var r=await l(N).apiSysFileUploadSignaturePostForm(o(a,j.value.account+".png"));j.value.signature=ne(r.data.result),q(),R.signDialogVisible=!1}},E=()=>{S.value.undoSignature()},q=()=>{S.value.clearSignature()},Y=async e=>{var a,r=await l(N).apiSysFileUploadSignaturePostForm(e.raw);j.value.signature=null==(a=r.data.result)?void 0:a.url},W=()=>{var e;null==(e=D.value)||e.validate((async e=>{e&&d.confirm("确定修改个人基础信息？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await l(I).apiSysUserBaseInfoPost(R.ruleFormBase)}))}))},A=(e,a,l)=>{R.passwordNew2!=R.ruleFormPassword.passwordNew?l(new Error("两次密码不一致！")):l()},$=()=>{R.ruleFormPassword.passwordOld="",R.ruleFormPassword.passwordNew="",R.passwordNew2=""},G=()=>{var e;null==(e=O.value)||e.validate((async e=>{if(!e)return;const a={passwordOld:"",passwordNew:""},o=window.__env__.VITE_SM_PUBLIC_KEY;a.passwordOld=P.doEncrypt(R.ruleFormPassword.passwordOld,o,1),a.passwordNew=P.doEncrypt(R.ruleFormPassword.passwordNew,o,1),await l(I).apiSysUserChangePwdPost(a),d.confirm("密码已修改，是否重新登录系统？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{r()}))}))},K=()=>{var e;R.cropperTitle="更换头像",null==(e=L.value)||e.openDialog(j.value.avatar)},Q=()=>{R.avatarLoading=!0},H=()=>{R.avatarLoading=!1},ue=e=>{V.value.clearFiles();const a=e[0];a.uid=i(),V.value.handleStart(a)},ne=e=>"Local"==e.bucketName?`/${e.filePath}/${e.id}${e.suffix}`:e.url;return u({handleChangeSignFile:(e,a)=>{R.signFileList=a}}),(e,a)=>{const l=c("el-avatar"),r=c("ele-School"),o=c("el-icon"),t=c("ele-Mug"),i=c("ele-LocationInformation"),d=c("el-image"),u=c("el-button"),n=c("el-upload"),m=c("el-card"),_=c("el-col"),x=c("el-input"),F=c("el-form-item"),P=c("el-date-picker"),N=c("el-radio"),I=c("el-radio-group"),ne=c("el-row"),me=c("el-tab-pane"),ce=c("el-tabs"),ge=c("ele-EditPen"),fe=c("VueSignaturePad"),we=c("el-input-number"),ve=c("el-color-picker"),be=c("el-dialog"),ye=k("loading"),he=k("auth");return g(),f("div",X,[w(ne,{gutter:5,style:{width:"100%"}},{default:v((()=>[w(_,{span:8,xs:24},{default:v((()=>[w(m,{shadow:"hover"},{default:v((()=>[b("div",Z,[B(w(l,{size:100,src:U(j).avatar,onClick:K,"element-loading-spinner":"el-icon-Upload","element-loading-background":"rgba(0, 0, 0, 0.2)",onMouseenter:Q,onMouseleave:H},null,8,["src"]),[[ye,R.avatarLoading]]),b("div",ee,y(U(j).realName),1)]),b("div",ae,[b("p",null,[w(o,null,{default:v((()=>[w(r)])),_:1}),h(),b("span",null,y(U(j).orgName??"超级管理员"),1)]),b("p",null,[w(o,null,{default:v((()=>[w(t)])),_:1}),h(),b("span",null,y(U(j).posName??"超级管理员"),1)]),b("p",null,[w(o,null,{default:v((()=>[w(i)])),_:1}),h(),b("span",null,y(U(j).address??"家庭住址"),1)])]),b("div",le,[w(d,{src:U(j).signature,fit:"contain",alt:"电子签名",loading:"lazy",style:{width:"100%",height:"100%"}},null,8,["src"])]),B((g(),C(u,{icon:"ele-Edit",type:"primary",onClick:T},{default:v((()=>[h(" 电子签名 ")])),_:1})),[[he,"sysFile:uploadSignature"]]),w(n,{ref_key:"uploadSignRef",ref:V,action:"",accept:".png",limit:1,"show-file-list":!1,"auto-upload":!1,"on-change":Y,"on-exceed":ue,style:{display:"inline-block","margin-left":"12px",position:"absolute"}},{default:v((()=>[B((g(),C(u,{icon:"ele-UploadFilled"},{default:v((()=>[h("上传手写签名")])),_:1})),[[he,"sysFile:uploadSignature"]])])),_:1},512)])),_:1})])),_:1}),w(_,{span:16,xs:24},{default:v((()=>[w(m,{shadow:"hover"},{default:v((()=>[w(ce,null,{default:v((()=>[B((g(),C(me,{label:"基础信息"},{default:v((()=>[w(U(p),{model:R.ruleFormBase,ref_key:"ruleFormBaseRef",ref:D,"label-width":"auto"},{default:v((()=>[w(ne,{gutter:35},{default:v((()=>[w(_,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:v((()=>[w(F,{label:"真实姓名",prop:"realName",rules:[{required:!0,message:"真实姓名不能为空",trigger:"blur"}]},{default:v((()=>[w(x,{modelValue:R.ruleFormBase.realName,"onUpdate:modelValue":a[0]||(a[0]=e=>R.ruleFormBase.realName=e),placeholder:"真实姓名",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),w(_,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:v((()=>[w(F,{label:"昵称"},{default:v((()=>[w(x,{modelValue:R.ruleFormBase.nickName,"onUpdate:modelValue":a[1]||(a[1]=e=>R.ruleFormBase.nickName=e),placeholder:"昵称",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),w(_,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:v((()=>[w(F,{label:"手机号码",prop:"phone",rules:[{required:!0,message:"手机号码不能为空",trigger:"blur"}]},{default:v((()=>[w(x,{modelValue:R.ruleFormBase.phone,"onUpdate:modelValue":a[2]||(a[2]=e=>R.ruleFormBase.phone=e),placeholder:"手机号码",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),w(_,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:v((()=>[w(F,{label:"邮箱"},{default:v((()=>[w(x,{modelValue:R.ruleFormBase.email,"onUpdate:modelValue":a[3]||(a[3]=e=>R.ruleFormBase.email=e),placeholder:"邮箱",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),w(_,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:v((()=>[w(F,{label:"出生日期",prop:"birthday",rules:[{required:!0,message:"出生日期不能为空",trigger:"blur"}]},{default:v((()=>[w(P,{modelValue:R.ruleFormBase.birthday,"onUpdate:modelValue":a[4]||(a[4]=e=>R.ruleFormBase.birthday=e),type:"date",placeholder:"出生日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",class:"w100"},null,8,["modelValue"])])),_:1})])),_:1}),w(_,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:v((()=>[w(F,{label:"性别"},{default:v((()=>[w(I,{modelValue:R.ruleFormBase.sex,"onUpdate:modelValue":a[5]||(a[5]=e=>R.ruleFormBase.sex=e)},{default:v((()=>[w(N,{value:1},{default:v((()=>[h("男")])),_:1}),w(N,{value:2},{default:v((()=>[h("女")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),w(_,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:v((()=>[w(F,{label:"地址"},{default:v((()=>[w(x,{modelValue:R.ruleFormBase.address,"onUpdate:modelValue":a[6]||(a[6]=e=>R.ruleFormBase.address=e),placeholder:"地址",clearable:"",type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1}),w(_,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:v((()=>[w(F,{label:"备注"},{default:v((()=>[w(x,{modelValue:R.ruleFormBase.remark,"onUpdate:modelValue":a[7]||(a[7]=e=>R.ruleFormBase.remark=e),placeholder:"备注",clearable:"",type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1}),w(_,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:v((()=>[w(F,null,{default:v((()=>[B((g(),C(u,{icon:"ele-SuccessFilled",type:"primary",onClick:W},{default:v((()=>[h(" 保存基本信息 ")])),_:1})),[[he,"sysUser:baseInfo"]])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})),[[ye,R.loading]]),w(me,{label:"组织机构"},{default:v((()=>[w(s,{ref:"orgTreeRef"},null,512)])),_:1}),w(me,{label:"修改密码"},{default:v((()=>[w(U(p),{ref_key:"ruleFormPasswordRef",ref:O,model:R.ruleFormPassword,"label-width":"auto"},{default:v((()=>[w(F,{label:"当前密码",prop:"passwordOld",rules:[{required:!0,message:"当前密码不能为空",trigger:"blur"}]},{default:v((()=>[w(x,{modelValue:R.ruleFormPassword.passwordOld,"onUpdate:modelValue":a[8]||(a[8]=e=>R.ruleFormPassword.passwordOld=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),w(F,{label:"新密码",prop:"passwordNew",rules:[{required:!0,message:"新密码不能为空",trigger:"blur"}]},{default:v((()=>[w(x,{modelValue:R.ruleFormPassword.passwordNew,"onUpdate:modelValue":a[9]||(a[9]=e=>R.ruleFormPassword.passwordNew=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),w(F,{label:"确认密码",prop:"passwordNew2",rules:[{validator:A,required:!0,trigger:"blur"}]},{default:v((()=>[w(x,{modelValue:R.passwordNew2,"onUpdate:modelValue":a[10]||(a[10]=e=>R.passwordNew2=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1},8,["rules"]),w(F,null,{default:v((()=>[w(u,{icon:"ele-Refresh",onClick:$},{default:v((()=>[h("重 置")])),_:1}),B((g(),C(u,{icon:"ele-SuccessFilled",type:"primary",onClick:G},{default:v((()=>[h("确 定")])),_:1})),[[he,"sysUser:changePwd"]])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),w(be,{modelValue:R.signDialogVisible,"onUpdate:modelValue":a[13]||(a[13]=e=>R.signDialogVisible=e),draggable:"",width:"600px"},{header:v((()=>[b("div",re,[w(o,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:v((()=>[w(ge)])),_:1}),oe])])),footer:v((()=>[b("span",de,[w(u,{onClick:E},{default:v((()=>[h("撤销")])),_:1}),w(u,{onClick:q},{default:v((()=>[h("清屏")])),_:1}),w(u,{type:"primary",onClick:M},{default:v((()=>[h("保存")])),_:1})])])),default:v((()=>[b("div",se,[w(fe,{ref_key:"signaturePadRef",ref:S,options:R.signOptions,style:{"background-color":"#fff"}},null,8,["options"])]),b("div",te,[b("div",ie,[h("画笔粗细："),w(we,{modelValue:R.signOptions.minWidth,"onUpdate:modelValue":a[11]||(a[11]=e=>R.signOptions.minWidth=e),min:.5,max:2.5,step:.1,size:"small"},null,8,["modelValue"])]),b("div",pe,[h("画笔颜色："),w(ve,{modelValue:R.signOptions.penColor,"onUpdate:modelValue":a[12]||(a[12]=e=>R.signOptions.penColor=e),"color-format":"hex",size:"default"},null,8,["modelValue"])])])])),_:1},8,["modelValue"]),w(J,{ref_key:"cropperDialogRef",ref:L,title:R.cropperTitle,onUploadCropperImg:z},null,8,["title"])])}}}),[["__scopeId","data-v-db8f06df"]]);export{ne as default};

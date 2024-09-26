import{d as e,r as l,j as a,ah as t,o as u,c as d,V as s,P as o,a as r,U as m,u as i,T as p,Q as n,F as c,a8 as v,W as f,O as g}from"./@vue-CX_mlhJe.js";import{g as b}from"./dict-utils-LXnBJ9wT.js";import{r as _}from"./request-Cv12-fnH.js";import{E as V}from"./element-plus-B9gGnqkL.js";import{_ as x}from"./_plugin-vue_export-helper-BCo6x5W8.js";const h=e=>_({url:"/api/netTask/page",method:"post",data:e}),y={class:"netTask-container"},T={style:{color:"#fff"}},k={class:"dialog-footer"},w=x(e({__name:"editDialog",props:{title:{type:String,default:""}},emits:["reloadTable"],setup(e,{expose:x,emit:h}){var w=e;const j=h,O=l(),U=l(!1),q=l({}),S=l({name:[{required:!0,message:"请输入名称！",trigger:"blur"}],state:[{required:!0,message:"请选择状态！",trigger:"change"}],data:[{required:!0,message:"请输入网站链接！",trigger:"blur"}],deep:[{required:!0,message:"请输入爬取深度！",trigger:"blur"}],execType:[{required:!0,message:"请选择执行方式！",trigger:"change"}]});a((()=>{}));const $=()=>{U.value=!1},N=async()=>{O.value.validate((async(e,l)=>{if(e){let e=q.value;null==q.value.id||null==q.value.id||""==q.value.id||0==q.value.id?await(a=e,_({url:"/api/netTask/add",method:"post",data:a})):await(e=>_({url:"/api/netTask/update",method:"post",data:e}))(e),j("reloadTable"),U.value=!1}else V({message:`表单有${Object.keys(l).length}处验证失败，请修改后再提交`,type:"error"});var a}))};return x({openDialog:async e=>{let l=JSON.parse(JSON.stringify(e));var a;l.id?q.value=(await(a=l.id,_({url:"/api/netTask/detail",method:"get",data:{id:a}}))).data.result:q.value=l,U.value=!0}}),(e,l)=>{const a=t("el-input"),_=t("el-form-item"),V=t("el-col"),x=t("el-option"),h=t("el-select"),j=t("el-switch"),C=t("el-row"),D=t("el-form"),z=t("el-button"),F=t("el-dialog");return u(),d("div",y,[s(F,{modelValue:U.value,"onUpdate:modelValue":l[7]||(l[7]=e=>U.value=e),width:800,draggable:"","close-on-click-modal":!1},{header:o((()=>[r("div",T,[r("span",null,m(i(w).title),1)])])),footer:o((()=>[r("span",k,[s(z,{onClick:$},{default:o((()=>[p("取 消")])),_:1}),s(z,{type:"primary",onClick:N},{default:o((()=>[p("确 定")])),_:1})])])),default:o((()=>[s(D,{model:q.value,ref_key:"ruleFormRef",ref:O,"label-width":"auto",rules:S.value},{default:o((()=>[s(C,{gutter:35},{default:o((()=>[n(s(_,null,{default:o((()=>[s(a,{modelValue:q.value.id,"onUpdate:modelValue":l[0]||(l[0]=e=>q.value.id=e)},null,8,["modelValue"])])),_:1},512),[[f,!1]]),s(V,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o((()=>[s(_,{label:"名称",prop:"name"},{default:o((()=>[s(a,{modelValue:q.value.name,"onUpdate:modelValue":l[1]||(l[1]=e=>q.value.name=e),placeholder:"请输入名称",maxlength:"64","show-word-limit":"",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),s(V,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o((()=>[s(_,{label:"网站链接",prop:"data"},{default:o((()=>[s(a,{modelValue:q.value.data,"onUpdate:modelValue":l[2]||(l[2]=e=>q.value.data=e),placeholder:"请输入网站链接",type:"textarea",maxlength:"2000","show-word-limit":"",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),s(V,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o((()=>[s(_,{label:"爬取深度",prop:"deep"},{default:o((()=>[s(h,{clearable:"",modelValue:q.value.deep,"onUpdate:modelValue":l[3]||(l[3]=e=>q.value.deep=e),placeholder:"请选择爬取深度"},{default:o((()=>[(u(!0),d(c,null,v(i(b)("pqsd"),((e,l)=>(u(),g(x,{key:l,value:Number(e.code),label:`[${e.code}] ${e.value}`},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),s(V,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o((()=>[s(_,{label:"是否翻译",prop:"isTranslate"},{default:o((()=>[s(j,{modelValue:q.value.isTranslate,"onUpdate:modelValue":l[4]||(l[4]=e=>q.value.isTranslate=e),"active-text":"是","inactive-text":"否"},null,8,["modelValue"])])),_:1})])),_:1}),s(V,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o((()=>[s(_,{label:"是否提取视频",prop:"isOutVideo"},{default:o((()=>[s(j,{modelValue:q.value.isOutVideo,"onUpdate:modelValue":l[5]||(l[5]=e=>q.value.isOutVideo=e),"active-text":"是","inactive-text":"否"},null,8,["modelValue"])])),_:1})])),_:1}),s(V,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o((()=>[s(_,{label:"执行方式",prop:"execType"},{default:o((()=>[s(h,{clearable:"",modelValue:q.value.execType,"onUpdate:modelValue":l[6]||(l[6]=e=>q.value.execType=e),placeholder:"请选择执行方式"},{default:o((()=>[(u(!0),d(c,null,v(i(b)("zxfs"),((e,l)=>(u(),g(x,{key:l,value:Number(e.code),label:`[${e.code}] ${e.value}`},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-b1c166ff"]]),j=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));export{j as a,w as e,h as p};

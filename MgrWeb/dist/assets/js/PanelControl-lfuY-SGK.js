import{d as l,_ as e,ah as a,o as t,c as s,V as o,P as u,T as d}from"./@vue-CX_mlhJe.js";import{_ as n}from"./_plugin-vue_export-helper-BCo6x5W8.js";const i={class:"panel-control"},r=n(l({__name:"PanelControl",props:{lf:Object},emits:["catData"],setup(l,{emit:n}){var r=l;const f=n,p=e({undoDisable:!0,redoDisable:!0}),c=()=>{var l;null==(l=r.lf)||l.zoom(!0)},m=()=>{var l;null==(l=r.lf)||l.zoom(!1)},_=()=>{var l;null==(l=r.lf)||l.resetZoom()},v=()=>{var l;null==(l=r.lf)||l.resetTranslate()},z=()=>{var l,e;null==(l=r.lf)||l.resetZoom(),null==(e=r.lf)||e.resetTranslate()},b=()=>{var l;null==(l=r.lf)||l.undo()},y=()=>{var l;null==(l=r.lf)||l.redo()},C=()=>{var l;null==(l=r.lf)||l.getSnapshot()},k=()=>{f("catData")},D=()=>{var l;null==(l=r.lf)||l.extension.miniMap.show(r.lf.graphModel.width-210,70)};return(l,e)=>{const n=a("el-button"),r=a("el-button-group");return t(),s("div",i,[o(r,null,{default:u((()=>[o(n,{type:"default",size:"small",onClick:c},{default:u((()=>[d("放大")])),_:1}),o(n,{type:"default",size:"small",onClick:m},{default:u((()=>[d("缩小")])),_:1}),o(n,{type:"default",size:"small",onClick:_},{default:u((()=>[d("大小适应")])),_:1}),o(n,{type:"default",size:"small",onClick:v},{default:u((()=>[d("定位还原")])),_:1}),o(n,{type:"default",size:"small",onClick:z},{default:u((()=>[d("还原(大小&定位)")])),_:1}),o(n,{type:"default",size:"small",onClick:b,disabled:p.undoDisable},{default:u((()=>[d("上一步(ctrl+z)")])),_:1},8,["disabled"]),o(n,{type:"default",size:"small",onClick:y,disabled:p.redoDisable},{default:u((()=>[d("下一步(ctrl+y)")])),_:1},8,["disabled"]),o(n,{type:"default",size:"small",onClick:C},{default:u((()=>[d("下载图片")])),_:1}),o(n,{type:"default",size:"small",onClick:k},{default:u((()=>[d("查看数据")])),_:1}),o(n,{type:"default",size:"small",onClick:D},{default:u((()=>[d("查看缩略图")])),_:1})])),_:1})])}}}),[["__scopeId","data-v-3ed79d77"]]);export{r as default};
import{d as e,r as t,w as r,ag as o,o as a,O as l,u as i,_ as n,k as s,j as p,ah as c,ap as d,c as u,a as f,I as m,Q as g,S as h,P as y,V as v,K as b,T as x,F as j,a8 as k,W as w,L as S,aa as C,U as _,n as z,bm as N,bk as O}from"./@vue-CX_mlhJe.js";import{S as $}from"./sortablejs-Wk4gy0r7.js";import{s as F}from"./pinia-CUaEdNPK.js";import{u as E}from"./index-DWGcUZYU.js";import{X as V}from"./xlsx-js-style-APVtXwG5.js";import{p as J}from"./print-js-hvv5SWVL.js";import{E as L}from"./element-plus-B9gGnqkL.js";import{_ as A}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./@babel-Q_QrznUx.js";import"./vue-demi-DMxTsK9-.js";import"./vue-DMOwXDUL.js";import"./jspdf-CH-AZmyM.js";import"./fflate-B3Xb404m.js";import"./vue-router-DCQgfElv.js";import"./vue-i18n-DOLUIXgH.js";import"./@intlify-8Jop7_C0.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-BOmeTCVz.js";import"./nprogress-BXoedg-7.js";import"./axios-CURSphCx.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-DUD0Qdrs.js";import"./vform3-builds-n_pM9nIF.js";import"./vue-signature-pad-lyh4QR3Z.js";import"./signature_pad-edH0THtw.js";import"./merge-images-Cwm9rL5U.js";import"./vue3-tree-org-BzkJto3m.js";/* empty css                    */import"./vue-plugin-hiprint-DZDwPE-S.js";import"./jquery-VSNIoD5U.js";import"./jsbarcode-BgYCXnWS.js";import"./socket.io-client-Czs-wWz3.js";import"./engine.io-client-CYjl6Vq_.js";import"./engine.io-parser-BcOgFIoq.js";import"./@socket.io-mcuM6LAc.js";import"./debug-CmirTkX5.js";import"./ms-CufoL-nS.js";import"./socket.io-parser-CnrqkM7d.js";import"./canvg-FiHv1N34.js";import"./core-js-BJmvCVxN.js";import"./raf-B8RiLMb0.js";import"./performance-now-D4QiMMAM.js";import"./rgbcolor-Cv9DR9SS.js";import"./svg-pathdata-BQypvdxQ.js";import"./stackblur-canvas-WbqePTkn.js";import"./lodash-es-Bx2dc0Qf.js";import"./@vueuse-DXufPiA3.js";import"./@sxzz-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-DCN6noHZ.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DHjS97uh.js";import"./mqtt-BarZW3Jq.js";function I(e){let t="";return e.children?e.children.default?t=e.children.default():e.children.forEach((e=>{t+=I(e)})):t=e,t}function D(e){let t=1;function r(e,o){e.children&&e.children.length>0&&(++o>t&&(t=o),e.children.forEach((e=>r(e,o))))}return e.forEach((e=>r(e,1))),t}function P(e){let t=0;function r(e){e.children&&e.children.length>0?e.children.forEach((e=>r(e))):t++}return e.forEach((e=>r(e))),t}const T=(e,t)=>{const r=t.split(".");let o=e;for(const a of r)o=o[a];return o},U=e({__name:"formatter",props:{fn:{}},setup(e){const n=e,s=t();return r(n,(async()=>{s.value=o("div",null,n.fn)}),{deep:!0,immediate:!0}),(e,t)=>(a(),l(i(s)))}}),q={class:"table-container"},R={key:0,class:"table-header mb15"},H={class:"table-footer-tool"},K={class:"tool-box"},Q=["data-key"],W=(e=>(N("data-v-cf7b121f"),e=e(),O(),e))((()=>f("i",{class:"fa fa-arrows-alt handle cursor-pointer"},null,-1))),B={key:1,class:"table-footer mt15"},G=e({name:"netxTable"}),M=A(e({...G,props:{getData:{type:Function,required:!0},columns:{type:Array,default:()=>[]},config:{type:Object,default:()=>({})},param:{type:Object,default:()=>({})},defaultSort:{type:Object,default:()=>({})},exportChangeData:{type:Function},printName:{type:String,default:()=>""}},emits:["pageChange","selectionChange","sortHeader"],setup(e,{expose:r,emit:o}){const i=e,N=o,O=t(),A=t(),G=E(),{themeConfig:M}=F(G),X=n({data:[],loading:!1,exportLoading:!1,total:0,page:{page:1,pageSize:10,field:"",order:""},showPagination:!0,selectlist:[],checkListAll:!0,checkListIndeterminate:!1,oldColumns:[],columns:[],haveFixed:!1,currentFixed:!1,serialNoFixed:!1,switchFixedContent:"取消固定列",fixedIconColor:M.value.primary}),Y=s((()=>i.config.hideTool??!1)),Z=(e,t)=>{const r=t.split(".");let o=e;for(const a of r)o=o[a];return o},ee=s((()=>!!i.config.isBorder)),te=s((()=>!!i.config.isStripe)),re=s((()=>i.config)),oe=s((()=>X.columns.filter((e=>e.isCheck)))),ae=e=>{e?X.columns.forEach((e=>e.isCheck=!0)):X.columns.forEach((e=>e.isCheck=!1)),X.checkListIndeterminate=!1},le=()=>{const e=X.columns.filter((e=>e.isCheck)).length;X.checkListAll=e===X.columns.length,X.checkListIndeterminate=e>0&&e<X.columns.length},ie=e=>{X.selectlist=e,N("selectionChange",X.selectlist)},ne=e=>{X.page.pageSize=e,he(),N("pageChange",X.page)},se=e=>{X.page.page=e,he(),N("pageChange",X.page)},pe=e=>{X.page.field=e.prop,X.page.order=e.order,he()},ce=()=>{if(oe.value.length<=0)return L.error("没有勾选要导出的列");ue(X.data)},de=async()=>{var e;if(oe.value.length<=0)return L.error("没有勾选要导出的列");X.exportLoading=!0;const t=Object.assign({},i.param,{page:1,pageSize:9999999}),r=await i.getData(t);X.exportLoading=!1;const o=(null==(e=r.result)?void 0:e.items)??[];ue(o)},ue=e=>{if(e.length<=0)return L.error("没有数据可以导出");X.exportLoading=!0;let t=JSON.parse(JSON.stringify(e));i.exportChangeData&&(t=i.exportChangeData(t)),function(e,t,r,o){var a=new Array,l=new Array;const i={top:{style:"thin",color:{rgb:"000000"}},bottom:{style:"thin",color:{rgb:"000000"}},left:{style:"thin",color:{rgb:"000000"}},right:{style:"thin",color:{rgb:"000000"}}};let n=D(r),s=P(r),p=new Array(n);for(let v=0;v<p.length;v++)p[v]=new Array(s);let c=0;for(let v=0;v<r.length;v++){let e=r[v],t=P([e]),o=D([e]);for(let r=0;r<t;r++){c+=r;for(let t=0;t<o;t++)d(t,c,r,e,p)}c++}for(let v=0;v<p.length;v++){let e=p[v];for(let t=0;t<e.length;t++)null==p[v][t]&&(p[v][t]=p[v-1][t])}function d(e,t,r,o,a){e>0?o.children?d(e,c,r,o.children,a):a[e][t]=o[r]:a[e][t]=o}for(let v=0;v<p.length;v++){var u=new Array;let e=p[v];for(let t=0;t<e.length;t++){let r=e[t],o=200;r.width&&!isNaN(r.width)&&(o=.7*parseInt(r.width)),l.push({wpx:o}),u.push({v:r.label,t:"s",s:{font:{bold:!0},alignment:{wrapText:!0,horizontal:r.headerAlign?r.headerAlign:r.align?r.align:"",vertical:"center"},border:i}})}a.push(u)}var f=[],m=!1,g={s:{r:0,c:0},e:{r:0,c:0}};for(let v=0;v<s;v++){let e=p[0][v];for(let t=0;t<n;t++){let r=p[t][v];r==e&&0==m?(m=!0,g.s={r:t,c:v}):r!=e&&1==m?(g.e={r:t-1,c:v},g.s.r!=g.e.r?(f.push(JSON.parse(JSON.stringify(g))),m=!1,g={s:{r:0,c:0},e:{r:0,c:0}}):t==n-1&&1==m?(g.e={r:t,c:v},g.s.r!=g.e.r&&r==e&&f.push(JSON.parse(JSON.stringify(g))),m=!1,g={s:{r:0,c:0},e:{r:0,c:0}}):(e=r,m=!0,g.s={r:t,c:v})):t==n-1&&1==m&&(g.e={r:t,c:v},g.s.r!=g.e.r&&r==e&&f.push(JSON.parse(JSON.stringify(g))),m=!1,g={s:{r:0,c:0},e:{r:0,c:0}})}}m=!1;for(let v=0;v<n;v++){let e=p[v][0];for(let t=0;t<s;t++){let r=p[v][t];r==e&&0==m?(m=!0,g.s={r:v,c:t}):r!=e&&1==m?(g.e={r:v,c:t-1},g.s.c!=g.e.c?(f.push(JSON.parse(JSON.stringify(g))),m=!1,g={s:{r:0,c:0},e:{r:0,c:0}}):t==s-1&&1==m?(g.e={r:v,c:t},g.s.r!=g.e.r&&r==e&&f.push(JSON.parse(JSON.stringify(g))),m=!1,g={s:{r:0,c:0},e:{r:0,c:0}}):(e=r,m=!0,g.s={r:v,c:t})):t==s-1&&1==m&&(g.e={r:v,c:t},g.s.c!=g.e.c&&r==e&&f.push(JSON.parse(JSON.stringify(g))),m=!1,g={s:{r:0,c:0},e:{r:0,c:0}})}}e.forEach((e=>{var t=new Array;p[p.length-1].forEach((r=>{if(e.hasOwnProperty(r.prop)||T(e,r.prop)){let o="";null!=e[r.prop]?o=r.formatter?I(r.formatter(e)):e[r.prop]:T(e,r.prop)&&(o=r.formatter?I(r.formatter(e)):T(e,r.prop)),t.push({v:o,t:"s",s:{alignment:{wrapText:!0,horizontal:r.align?r.align:"",vertical:"center"},border:i}})}})),a.push(t)}));const h=V.utils.aoa_to_sheet(a),y=V.utils.book_new();h["!cols"]=l,h["!merges"]=f,V.utils.book_append_sheet(y,h,o),V.writeFile(y,t+".xlsx")}(t,`${i.config.exportFileName?i.config.exportFileName:M.value.globalTitle}_${(new Date).toLocaleString()}`,oe.value.filter((e=>"action"!=e.type)),"导出数据"),X.exportLoading=!1},fe=()=>{let e="",t="",r={};oe.value.forEach((t=>{"action"!==t.prop&&(e+=`<th class="table-th">${t.label}</th>`)})),X.data.forEach(((e,o)=>{r[o]||(r[o]=[]),oe.value.forEach((t=>{"action"!==t.prop&&("text"===t.type?r[o].push(`<td class="table-th table-center">${e[t.prop]}</td>`):"image"===t.type?r[o].push(`<td class="table-th table-center"><img src="${e[t.prop]}" style="width:${t.width}px;height:${t.height}px;"/></td>`):r[o].push(`<td class="table-th table-center">${e[t.prop]}</td>`))})),t+=`<tr>${r[o].join("")}</tr>`})),J({printable:`<div style=display:flex;flex-direction:column;text-align:center><h3>${i.printName}</h3></div><table border=1 cellspacing=0><tr>${e}${t}</table>`,type:"raw-html",css:["//at.alicdn.com/t/c/font_2298093_rnp72ifj3ba.css","//unpkg.com/element-plus/dist/index.css"],style:"@media print{.mb15{margin-bottom:15px;}.el-button--small i.iconfont{font-size: 12px !important;margin-right: 5px;}}; .table-th{word-break: break-all;white-space: pre-wrap;}.table-center{text-align: center;}"})},me=()=>{he()},ge=()=>{z((()=>{const e=$.create(O.value,{handle:".handle",dataIdAttr:"data-key",animation:150,onEnd:()=>{const t=[];e.toArray().forEach((e=>{X.columns.forEach((r=>{r.prop===e&&t.push({...r})}))})),N("sortHeader",t)}})}))},he=async()=>{var e,t;X.loading=!0;let r=Object.assign({},i.param,{...X.page});Object.keys(r).forEach((e=>void 0===r[e]&&delete r[e]));const o=await i.getData(r);X.loading=!1,o&&o.result&&o.result.items?(X.showPagination=!0,X.data=(null==(e=o.result)?void 0:e.items)??[],X.total=(null==(t=o.result)?void 0:t.total)??0):(X.showPagination=!1,X.data=o&&o.result?o.result:[])},ye=()=>{X.currentFixed=!X.currentFixed,X.switchFixedContent=X.currentFixed?"取消固定列":"启用固定列",X.currentFixed?(X.fixedIconColor=M.value.primary,X.columns=JSON.parse(JSON.stringify(X.oldColumns))):(X.fixedIconColor="",(()=>{for(let e of X.columns)delete e.fixed})())},ve=()=>{X.oldColumns=JSON.parse(JSON.stringify(i.columns)),X.columns=i.columns;for(let e of X.columns)if(void 0!==e.fixed&&(X.haveFixed=!0,X.currentFixed=!0,"left"==e.fixed)){X.serialNoFixed=!0;break}};return p((()=>{i.defaultSort&&(X.page.field=i.defaultSort.prop,X.page.order=i.defaultSort.order),X.page.pageSize=i.config.pageSize??10,ve(),he()})),r({pageReset:()=>{A.value.clearSelection(),X.page.page=1,he()},handleList:he,toggleSelection:(e,t)=>{A.value.toggleRowSelection(e,t)},getTableData:()=>X.data,setTableData:(e,t=!1)=>{if(t){var r=!1;for(let t of e){r=!1;for(let e of X.data)if(t.id===e.id){r=!0;break}r||X.data.push(t)}}else X.data=e},refreshColumns:ve}),(t,r)=>{const o=c("SvgIcon"),i=c("ele-Switch"),n=c("el-icon"),s=c("el-tooltip"),p=c("el-dropdown-item"),z=c("el-dropdown-menu"),N=c("el-dropdown"),$=c("el-checkbox"),F=c("el-scrollbar"),E=c("el-popover"),V=c("el-table-column"),J=c("el-image"),L=c("el-empty"),I=c("el-table"),D=c("el-pagination"),P=d("loading");return a(),u("div",q,[Y.value?h("",!0):(a(),u("div",R,[f("div",null,[m(t.$slots,"command",{},void 0,!0)]),g((a(),u("div",H,[e.config.hideRefresh?h("",!0):(a(),l(o,{key:0,name:"iconfont icon-shuaxin",size:22,title:"刷新",onClick:me})),X.haveFixed?(a(),l(s,{key:1,effect:"light",content:X.switchFixedContent,placement:"bottom-start","show-after":200},{default:y((()=>[v(n,{style:b({color:X.fixedIconColor}),onClick:ye},{default:y((()=>[v(i)])),_:1},8,["style"])])),_:1},8,["content"])):h("",!0),e.config.hideExport?h("",!0):(a(),l(N,{key:2,trigger:"click"},{dropdown:y((()=>[v(z,null,{default:y((()=>[v(p,{onClick:ce},{default:y((()=>[x("导出本页数据")])),_:1}),v(p,{onClick:de},{default:y((()=>[x("导出全部数据")])),_:1})])),_:1})])),default:y((()=>[v(o,{name:"iconfont icon-yunxiazai_o",size:22,title:"导出"})])),_:1})),e.config.hidePrint?h("",!0):(a(),l(o,{key:3,name:"iconfont icon-dayin",size:19,title:"打印",onClick:fe})),e.config.hideSet?h("",!0):(a(),l(E,{key:4,placement:"bottom-end",trigger:"click",transition:"el-zoom-in-top","popper-class":"table-tool-popper",width:300,persistent:!1,onShow:ge},{reference:y((()=>[v(o,{name:"iconfont icon-quanjushezhi_o",size:22,title:"设置"})])),default:y((()=>[f("div",K,[v(s,{content:"拖动进行排序",placement:"top-start"},{default:y((()=>[v(o,{name:"fa fa-question-circle-o",size:17,class:"ml11",color:"#909399"})])),_:1}),v($,{modelValue:X.checkListAll,"onUpdate:modelValue":r[0]||(r[0]=e=>X.checkListAll=e),indeterminate:X.checkListIndeterminate,class:"ml10 mr1",label:"列显示",onChange:ae},null,8,["modelValue","indeterminate"]),v($,{modelValue:re.value.isSerialNo,"onUpdate:modelValue":r[1]||(r[1]=e=>re.value.isSerialNo=e),class:"ml12 mr1",label:"序号"},null,8,["modelValue"]),re.value.showSelection?(a(),l($,{key:0,modelValue:re.value.isSelection,"onUpdate:modelValue":r[2]||(r[2]=e=>re.value.isSelection=e),class:"ml12 mr1",label:"多选"},null,8,["modelValue"])):h("",!0)]),v(F,null,{default:y((()=>[f("div",{ref_key:"toolSetRef",ref:O,class:"tool-sortable"},[(a(!0),u(j,null,k(e.columns,(e=>g((a(),u("div",{class:"tool-sortable-item",key:e.prop,"data-key":e.prop},[W,v($,{modelValue:e.isCheck,"onUpdate:modelValue":t=>e.isCheck=t,size:"default",class:"ml12 mr8",label:e.label,onChange:le},null,8,["modelValue","onUpdate:modelValue","label"])],8,Q)),[[w,!e.hideCheck]]))),128))],512)])),_:1})])),_:1}))])),[[P,X.exportLoading]])])),g((a(),l(I,S({ref_key:"tableRef",ref:A,data:X.data,border:ee.value,stripe:te.value},t.$attrs,{"row-key":"id","default-expand-all":"",style:{width:"100%"},"default-sort":e.defaultSort,onSelectionChange:ie,onSortChange:pe}),{empty:y((()=>[v(L,{description:"暂无数据"})])),default:y((()=>[e.config.isSelection&&e.config.showSelection?(a(),l(V,{key:0,type:"selection","reserve-selection":!0,width:30})):h("",!0),e.config.isSerialNo?(a(),l(V,{key:1,type:"index",fixed:X.currentFixed&&X.serialNoFixed,label:"序号",align:"center",width:60},null,8,["fixed"])):h("",!0),(a(!0),u(j,null,k(oe.value,((e,r)=>(a(),l(V,S({key:r,ref_for:!0},e),C({default:y((()=>[(a(!0),u(j,null,k(e.children,((e,r)=>(a(),l(V,S({key:r,ref_for:!0},e),C({_:2},[t.$slots[e.prop]?{name:"default",fn:y((r=>[e.formatter?(a(),l(U,{key:0,fn:e.formatter(r.row,r.column,r.cellValue,r.index)},null,8,["fn"])):m(t.$slots,e.prop,S({key:1,ref_for:!0},r),void 0,!0)])),key:"0"}:{name:"default",fn:y((t=>[e.formatter?(a(),l(U,{key:0,fn:e.formatter(t.row,t.column,t.cellValue,t.index)},null,8,["fn"])):"image"===e.type?(a(),l(J,{key:1,style:b({width:`${e.width}px`,height:`${e.height}px`}),src:t.row[e.prop],"zoom-rate":1.2,"preview-src-list":[t.row[e.prop]],"preview-teleported":"",fit:"cover"},null,8,["style","src","preview-src-list"])):(a(),u(j,{key:2},[x(_(Z(t.row,e.prop)),1)],64))])),key:"1"}]),1040)))),128))])),_:2},[!e.children&&t.$slots[e.prop]?{name:"header",fn:y((()=>[m(t.$slots,`${e.prop}header`,{},void 0,!0)])),key:"0"}:void 0,!e.children&&t.$slots[e.prop]?{name:"default",fn:y((r=>[e.formatter?(a(),l(U,{key:0,fn:e.formatter(r.row,r.column,r.cellValue,r.index)},null,8,["fn"])):m(t.$slots,e.prop,S({key:1,ref_for:!0},r),void 0,!0)])),key:"1"}:e.children?void 0:{name:"default",fn:y((t=>[e.formatter?(a(),l(U,{key:0,fn:e.formatter(t.row,t.column,t.cellValue,t.index)},null,8,["fn"])):"image"===e.type?(a(),l(J,{key:1,style:b({width:`${e.width}px`,height:`${e.height}px`}),src:t.row[e.prop],"zoom-rate":1.2,"preview-src-list":[t.row[e.prop]],"preview-teleported":"",fit:"cover"},null,8,["style","src","preview-src-list"])):(a(),u(j,{key:2},[x(_(Z(t.row,e.prop)),1)],64))])),key:"2"}]),1040)))),128))])),_:3},16,["data","border","stripe","default-sort"])),[[P,X.loading]]),!e.config.hidePagination&&X.showPagination?(a(),u("div",B,[v(D,{"current-page":X.page.page,"onUpdate:currentPage":r[3]||(r[3]=e=>X.page.page=e),"page-size":X.page.pageSize,"onUpdate:pageSize":r[4]||(r[4]=e=>X.page.pageSize=e),size:"small","pager-count":5,"page-sizes":e.config.pageSizes,total:X.total,layout:"total, sizes, prev, pager, next, jumper",background:"",onSizeChange:ne,onCurrentChange:se},null,8,["current-page","page-size","page-sizes","total"])])):h("",!0)])}}}),[["__scopeId","data-v-cf7b121f"]]);export{M as default};

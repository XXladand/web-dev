const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./contextmenu-Dkxi_JxZ.js","./@vue-CX_mlhJe.js","./_plugin-vue_export-helper-BCo6x5W8.js","../css/contextmenu-XDCCcYfQ.css"])))=>i.map(i=>d[i]);
import{_ as e}from"./jspdf-CH-AZmyM.js";import{d as a,r as t,_ as s,k as i,G as r,Z as l,ai as o,j as n,w as u,ah as m,o as p,c,V as v,P as d,a as h,J as g,F as w,a8 as f,a3 as y,S as V,O as j,U as L,u as b,aU as k,n as C}from"./@vue-CX_mlhJe.js";import{u as q,b as x,o as D}from"./vue-router-DCQgfElv.js";import{S as R}from"./sortablejs-Wk4gy0r7.js";import{s as T}from"./pinia-CUaEdNPK.js";import{c as S,u as A,z as I,i as P,o as _,e as U,b as $,A as O}from"./index-DWGcUZYU.js";import{E}from"./element-plus-B9gGnqkL.js";import{_ as z}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./@babel-Q_QrznUx.js";import"./fflate-B3Xb404m.js";import"./vue-demi-DMxTsK9-.js";import"./vue-DMOwXDUL.js";import"./vue-i18n-DOLUIXgH.js";import"./@intlify-8Jop7_C0.js";import"./js-cookie-BXEMiIsG.js";import"./@element-plus-BOmeTCVz.js";import"./nprogress-BXoedg-7.js";import"./axios-CURSphCx.js";import"./mitt-CNZ6avp8.js";import"./vue-grid-layout-DUD0Qdrs.js";import"./vform3-builds-n_pM9nIF.js";import"./vue-signature-pad-lyh4QR3Z.js";import"./signature_pad-edH0THtw.js";import"./merge-images-Cwm9rL5U.js";import"./vue3-tree-org-BzkJto3m.js";/* empty css                    */import"./vue-plugin-hiprint-DZDwPE-S.js";import"./jquery-VSNIoD5U.js";import"./jsbarcode-BgYCXnWS.js";import"./socket.io-client-Czs-wWz3.js";import"./engine.io-client-CYjl6Vq_.js";import"./engine.io-parser-BcOgFIoq.js";import"./@socket.io-mcuM6LAc.js";import"./debug-CmirTkX5.js";import"./ms-CufoL-nS.js";import"./socket.io-parser-CnrqkM7d.js";import"./canvg-FiHv1N34.js";import"./core-js-BJmvCVxN.js";import"./raf-B8RiLMb0.js";import"./performance-now-D4QiMMAM.js";import"./rgbcolor-Cv9DR9SS.js";import"./svg-pathdata-BQypvdxQ.js";import"./stackblur-canvas-WbqePTkn.js";import"./lodash-es-Bx2dc0Qf.js";import"./@vueuse-DXufPiA3.js";import"./@sxzz-D3lHDW-0.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-DCN6noHZ.js";import"./async-validator-Cuo4gI4y.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DHjS97uh.js";const M=["data-url","onContextmenu","onMousedown","onClick"],F={key:0,class:"iconfont icon-webicon318 layout-navbars-tagsview-ul-li-iconfont"},W=a({name:"layoutTagsView"}),H=z(a({...W,setup(a){const z=k((()=>e((()=>import("./contextmenu-Dkxi_JxZ.js")),__vite__mapDeps([0,1,2,3]),import.meta.url))),W=t([]),H=t(),G=t(),K=t(),N=S(),Q=A(),J=S(),X=I(),{themeConfig:Y}=T(Q),{tagsViewRoutes:Z}=T(J),{routesList:B}=T(X),ee=P(),ae=q(),te=x(),se=s({routeActive:"",routePath:ae.path,dropdown:{x:"",y:""},sortable:"",tagsRefsIndex:0,tagsViewList:[],tagsViewRoutesList:[]}),ie=i((()=>Y.value.tagsStyle)),re=i((()=>Y.value)),le=i((()=>e=>_.setTagsViewNameI18n(e))),oe=e=>re.value.isShareTagsView?e.path===se.routePath:e.query&&Object.keys(e.query).length||e.params&&Object.keys(e.params).length?e.url?e.url===se.routeActive:e.path===se.routeActive:e.path===se.routePath,ne=e=>{$.set("tagsViewList",e)},ue=async()=>{se.routeActive=await ye(ae),se.routePath=await ae.meta.isDynamic?ae.meta.isDynamicPath:ae.path,se.tagsViewList=[],se.tagsViewRoutesList=Z.value,me()},me=async()=>{$.get("tagsViewList")&&re.value.isCacheTagsView?se.tagsViewList=await $.get("tagsViewList"):(await se.tagsViewRoutesList.map((e=>{var a;(null==(a=e.meta)?void 0:a.isAffix)&&!e.meta.isHide&&(e.url=ye(e),se.tagsViewList.push({...e}),ee.addCachedView(e))})),await ve(ae.path,ae)),je(re.value.isShareTagsView?se.routePath:se.routeActive)},pe=async(e,a)=>{var t,s;let i=(null==(t=null==a?void 0:a.meta)?void 0:t.isDynamic)?a.meta.isDynamicPath:e;if(se.tagsViewList.filter((e=>{var t,s;return e.path===i&&O((null==(t=null==a?void 0:a.meta)?void 0:t.isDynamic)?e.params?e.params:null:e.query?e.query:null,(null==(s=null==a?void 0:a.meta)?void 0:s.isDynamic)?(null==a?void 0:a.params)?null==a?void 0:a.params:null:(null==a?void 0:a.query)?null==a?void 0:a.query:null)})).length<=0){let e=se.tagsViewRoutesList.find((e=>e.path===i));if(!e)return!1;if(e.meta.isAffix)return!1;if(e.meta.isLink&&!e.meta.isIframe)return!1;(null==(s=null==a?void 0:a.meta)?void 0:s.isDynamic)?e.params=a.params:e.query=null==a?void 0:a.query,e.url=ye(e),se.tagsViewList.push({...e}),await ee.addCachedView(e),ne(se.tagsViewList)}},ce=(e,a)=>{var t;let s=(null==(t=null==a?void 0:a.meta)?void 0:t.isDynamic)?a.meta.isDynamicPath:e;se.tagsViewList.forEach((e=>{var t,i,r;e.path!==s||O((null==(t=null==a?void 0:a.meta)?void 0:t.isDynamic)?e.params?e.params:null:e.query?e.query:null,(null==(i=null==a?void 0:a.meta)?void 0:i.isDynamic)?(null==a?void 0:a.params)?null==a?void 0:a.params:null:(null==a?void 0:a.query)?null==a?void 0:a.query:null)||((null==(r=null==a?void 0:a.meta)?void 0:r.isDynamic)?e.params=a.params:e.query=null==a?void 0:a.query,e.url=ye(e),ne(se.tagsViewList))}))},ve=(e,a)=>{C((async()=>{var t,s,i;let r;if(null==(t=null==a?void 0:a.meta)?void 0:t.isDynamic){if(re.value.isShareTagsView?await ce(e,a):await pe(e,a),se.tagsViewList.some((e=>{var t;return e.path===(null==(t=null==a?void 0:a.meta)?void 0:t.isDynamicPath)})))return ne(se.tagsViewList),!1;r=se.tagsViewRoutesList.find((e=>{var t;return e.path===(null==(t=null==a?void 0:a.meta)?void 0:t.isDynamicPath)}))}else{if(re.value.isShareTagsView?await ce(e,a):await pe(e,a),se.tagsViewList.some((a=>a.path===e)))return ne(se.tagsViewList),!1;r=se.tagsViewRoutesList.find((a=>a.path===e))}return!!r&&(!((null==(s=null==r?void 0:r.meta)?void 0:s.isLink)&&!r.meta.isIframe)&&((null==(i=null==a?void 0:a.meta)?void 0:i.isDynamic)?r.params=(null==a?void 0:a.params)?null==a?void 0:a.params:ae.params:r.query=(null==a?void 0:a.query)?null==a?void 0:a.query:ae.query,r.url=ye(r),await ee.addCachedView(r),await se.tagsViewList.push({...r}),void(await ne(se.tagsViewList))))}))},de=async e=>{var a;const t=decodeURI(e);let s={};if(se.tagsViewList.forEach((e=>{e.transUrl=fe(e),e.transUrl?e.transUrl===fe(e)&&(s=e):e.path===t&&(s=e)})),!s)return!1;await ee.delCachedView(s),U.emit("onTagsViewRefreshRouterView",e),(null==(a=s.meta)?void 0:a.isKeepAlive)&&ee.addCachedView(s)},he=e=>{se.tagsViewList.map(((a,t,s)=>{var i;(null==(i=a.meta)?void 0:i.isAffix)||(re.value.isShareTagsView?a.path===e:a.url===e)&&(ee.delCachedView(a),se.tagsViewList.splice(t,1),setTimeout((()=>{(se.tagsViewList.length===t&&re.value.isShareTagsView?se.routePath===e:se.routeActive===e)?s[s.length-1].meta.isDynamic?t!==s.length?te.push({name:s[t].name,params:s[t].params}):te.push({name:s[s.length-1].name,params:s[s.length-1].params}):t!==s.length?te.push({path:s[t].path,query:s[t].query}):te.push({path:s[s.length-1].path,query:s[s.length-1].query}):(se.tagsViewList.length!==t&&re.value.isShareTagsView?se.routePath===e:se.routeActive===e)&&(s[t].meta.isDynamic?te.push({name:s[t].name,params:s[t].params}):te.push({path:s[t].path,query:s[t].query}))}),0))})),ne(se.tagsViewList)},ge=e=>{let a={};return se.tagsViewList.forEach((t=>{t.transUrl=fe(t),t.transUrl?t.transUrl===fe(t)&&t.transUrl===e.commonUrl&&(a=t):t.path===decodeURI(e.path)&&(a=t)})),a||null},we=async e=>{if(e.commonUrl=fe(e),!ge(e))return E({type:"warning",message:"请正确输入路径及完整参数（query、params）"});const{path:a,name:t,params:s,query:i,meta:r,url:l}=ge(e);switch(e.contextMenuClickId){case 0:r.isDynamic?await te.push({name:t,params:s}):await te.push({path:a,query:i}),de(ae.fullPath);break;case 1:he(re.value.isShareTagsView?a:l);break;case 2:r.isDynamic?await te.push({name:t,params:s}):await te.push({path:a,query:i}),(e=>{$.get("tagsViewList")&&(se.tagsViewList=[],$.get("tagsViewList").map((e=>{var a;(null==(a=e.meta)?void 0:a.isAffix)&&!e.meta.isHide&&(e.url=ye(e),ee.delOthersCachedViews(e),se.tagsViewList.push({...e}))})),ve(e,ae),ne(se.tagsViewList))})(a);break;case 3:$.get("tagsViewList")&&(ee.delAllCachedViews(),se.tagsViewList=[],$.get("tagsViewList").map((e=>{var a;(null==(a=e.meta)?void 0:a.isAffix)&&!e.meta.isHide&&(e.url=ye(e),se.tagsViewList.push({...e}),te.push({path:se.tagsViewList[se.tagsViewList.length-1].path}))})),ne(se.tagsViewList));break;case 4:(async e=>{const a=se.tagsViewList.find((a=>re.value.isShareTagsView?a.path===e:a.url===e));a.meta.isDynamic?await te.push({name:a.name,params:a.params}):await te.push({name:a.name,query:a.query}),N.setCurrenFullscreen(!0)})(re.value.isShareTagsView?a:l)}},fe=e=>{var a,t;let s=e.query&&Object.keys(e.query).length>0?e.query:e.params;if(!s)return"";let i="";for(let[r,l]of Object.entries(s))(null==(a=e.meta)?void 0:a.isDynamic)?i+=`/${l}`:i+=`&${r}=${l}`;return(null==(t=e.meta)?void 0:t.isDynamic)?e.isFnClick?decodeURI(e.path):`${e.path.split(":")[0]}${i.replace(/^\//,"")}`:`${e.path}${i.replace(/^&/,"?")}`},ye=e=>{var a;let t=e.query&&Object.keys(e.query).length>0?e.query:e.params;if(!t||Object.keys(t).length<=0)return e.path;let s="";for(let i in t)s+=t[i];return`${(null==(a=e.meta)?void 0:a.isDynamic)?e.meta.isDynamicPath:e.path}-${s}`},Ve=e=>{H.value.$refs.wrapRef.scrollLeft+=e.wheelDelta/4},je=e=>{C((async()=>{let a=await se.tagsViewList;se.tagsRefsIndex=a.findIndex((a=>re.value.isShareTagsView?a.path===e:a.url===e)),C((()=>{if(W.value.length<=0)return!1;let e=W.value[se.tagsRefsIndex],a=se.tagsRefsIndex,t=W.value.length,s=W.value[0],i=W.value[W.value.length-1],r=H.value.$refs.wrapRef,l=r.scrollWidth,o=r.offsetWidth,n=r.scrollLeft,u=W.value[se.tagsRefsIndex-1],m=W.value[se.tagsRefsIndex+1],p=0,c=0;e===s?r.scrollLeft=0:e===i?r.scrollLeft=l-o:(p=0===a?s.offsetLeft-5:(null==u?void 0:u.offsetLeft)-5,c=a===t?i.offsetLeft+i.offsetWidth+5:m.offsetLeft+m.offsetWidth+5,c>n+o?r.scrollLeft=c-o:p<n&&(r.scrollLeft=p)),H.value.update()}))}))},Le=async()=>{const e=document.querySelector(".layout-navbars-tagsview-ul");if(!e)return!1;se.sortable.el&&se.sortable.destroy(),se.sortable=R.create(e,{animation:300,dataIdAttr:"data-url",disabled:!re.value.isSortableTagsView,onEnd:()=>{const e=[];se.sortable.toArray().map((a=>{se.tagsViewList.map((t=>{t.url===a&&e.push({...t})}))})),ne(e)}})},be=async()=>{await Le(),_.isMobile()&&se.sortable.el&&se.sortable.destroy()};return r((()=>{be(),window.addEventListener("resize",be),U.on("onCurrentContextmenuClick",(e=>{e.isFnClick=!0,we(e)})),U.on("openOrCloseSortable",(()=>{Le()})),U.on("openShareTagsView",(()=>{re.value.isShareTagsView&&(te.push("/home"),se.tagsViewList=[],se.tagsViewRoutesList.map((e=>{var a;(null==(a=e.meta)?void 0:a.isAffix)&&!e.meta.isHide&&(e.url=ye(e),se.tagsViewList.push({...e}))})))}))})),l((()=>{U.off("onCurrentContextmenuClick",(()=>{})),U.off("openOrCloseSortable",(()=>{})),U.off("openShareTagsView",(()=>{})),window.removeEventListener("resize",be)})),o((()=>{W.value=[]})),n((()=>{ue(),Le()})),D((async e=>{se.routeActive=ye(e),se.routePath=e.meta.isDynamic?e.meta.isDynamicPath:e.path,await ve(e.path,e),je(re.value.isShareTagsView?se.routePath:se.routeActive)})),u((()=>Z.value),(e=>{if(e.length===se.tagsViewRoutesList.length)return!1;ue()}),{deep:!0}),(e,a)=>{const t=m("SvgIcon"),s=m("el-scrollbar");return p(),c("div",{class:g(["layout-navbars-tagsview",{"layout-navbars-tagsview-shadow":"classic"===re.value.layout}])},[v(s,{ref_key:"scrollbarRef",ref:H,onWheel:y(Ve,["prevent"])},{default:d((()=>[h("ul",{class:g(["layout-navbars-tagsview-ul",ie.value]),ref_key:"tagsUlRef",ref:K},[(p(!0),c(w,null,f(se.tagsViewList,((s,i)=>(p(),c("li",{key:i,class:g(["layout-navbars-tagsview-ul-li",{"is-active":oe(s)}]),"data-url":s.url,onContextmenu:y((e=>((e,a)=>{const{clientX:t,clientY:s}=a;se.dropdown.x=t,se.dropdown.y=s,G.value.openContextmenu(e)})(s,e)),["prevent"]),onMousedown:e=>((e,a)=>{var t;if(!(null==(t=e.meta)?void 0:t.isAffix)&&1===a.button){const a=Object.assign({},{contextMenuClickId:1,...e});we(a)}})(s,e),onClick:e=>((e,a)=>{se.tagsRefsIndex=a,te.push(e),"columns"===re.value.layout&&(B.value.find((a=>a.path.indexOf(`/${e.path.split("/")[1]}`)>-1)).children?re.value.isCollapse=!1:re.value.isCollapse=!0)})(s,i),ref_for:!0,ref:e=>{e&&(W.value[i]=e)}},[oe(s)?(p(),c("i",F)):V("",!0),!oe(s)&&re.value.isTagsviewIcon?(p(),j(t,{key:1,name:s.meta.icon,class:"pr5"},null,8,["name"])):V("",!0),h("span",null,L(le.value(s)),1),oe(s)?(p(),c(w,{key:2},[v(t,{name:"ele-RefreshRight",class:"ml5 layout-navbars-tagsview-ul-li-refresh",onClick:a[0]||(a[0]=y((a=>de(e.$route.fullPath)),["stop"]))}),s.meta.isAffix?V("",!0):(p(),j(t,{key:0,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-active",onClick:y((e=>he(re.value.isShareTagsView?s.path:s.url)),["stop"])},null,8,["onClick"]))],64)):V("",!0),s.meta.isAffix?V("",!0):(p(),j(t,{key:3,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-three",onClick:y((e=>he(re.value.isShareTagsView?s.path:s.url)),["stop"])},null,8,["onClick"]))],42,M)))),128))],2)])),_:1},512),v(b(z),{dropdown:se.dropdown,ref_key:"contextmenuRef",ref:G,onCurrentContextmenuClick:we},null,8,["dropdown"])],2)}}}),[["__scopeId","data-v-c6858e54"]]);export{H as default};

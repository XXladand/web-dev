import{a as t}from"./axios-CURSphCx.js";import{B as s,j as e,R as a}from"./index-DWGcUZYU.js";const n=function(t){return{apiSysPrintAddPost:async(s,e={})=>{const a=new URL("/api/sysPrint/add","https://example.com");let n;t&&(n=t.baseOptions);const r={method:"POST",...n,...e},o={},i={};if(t&&t.accessToken){const s="function"==typeof t.accessToken?await t.accessToken():await t.accessToken;o.Authorization="Bearer "+s}o["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const t in i)c.set(t,i[t]);for(const t in e.params)c.set(t,e.params[t]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};r.headers={...o,...p,...e.headers};const h="string"!=typeof s||"application/json"===r.headers["Content-Type"];return r.data=h?JSON.stringify(void 0!==s?s:{}):s||"",{url:a.pathname+a.search+a.hash,options:r}},apiSysPrintDeletePost:async(s,e={})=>{const a=new URL("/api/sysPrint/delete","https://example.com");let n;t&&(n=t.baseOptions);const r={method:"POST",...n,...e},o={},i={};if(t&&t.accessToken){const s="function"==typeof t.accessToken?await t.accessToken():await t.accessToken;o.Authorization="Bearer "+s}o["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const t in i)c.set(t,i[t]);for(const t in e.params)c.set(t,e.params[t]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};r.headers={...o,...p,...e.headers};const h="string"!=typeof s||"application/json"===r.headers["Content-Type"];return r.data=h?JSON.stringify(void 0!==s?s:{}):s||"",{url:a.pathname+a.search+a.hash,options:r}},apiSysPrintPagePost:async(s,e={})=>{const a=new URL("/api/sysPrint/page","https://example.com");let n;t&&(n=t.baseOptions);const r={method:"POST",...n,...e},o={},i={};if(t&&t.accessToken){const s="function"==typeof t.accessToken?await t.accessToken():await t.accessToken;o.Authorization="Bearer "+s}o["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const t in i)c.set(t,i[t]);for(const t in e.params)c.set(t,e.params[t]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};r.headers={...o,...p,...e.headers};const h="string"!=typeof s||"application/json"===r.headers["Content-Type"];return r.data=h?JSON.stringify(void 0!==s?s:{}):s||"",{url:a.pathname+a.search+a.hash,options:r}},apiSysPrintPrintNameGet:async(s,e={})=>{if(null==s)throw new a("name","Required parameter name was null or undefined when calling apiSysPrintPrintNameGet.");const n="/api/sysPrint/print/{name}".replace("{name}",encodeURIComponent(String(s))),r=new URL(n,"https://example.com");let o;t&&(o=t.baseOptions);const i={method:"GET",...o,...e},c={},p={};if(t&&t.accessToken){const s="function"==typeof t.accessToken?await t.accessToken():await t.accessToken;c.Authorization="Bearer "+s}const h=new URLSearchParams(r.search);for(const t in p)h.set(t,p[t]);for(const t in e.params)h.set(t,e.params[t]);r.search=new URLSearchParams(h).toString();let P=o&&o.headers?o.headers:{};return i.headers={...c,...P,...e.headers},{url:r.pathname+r.search+r.hash,options:i}},apiSysPrintUpdatePost:async(s,e={})=>{const a=new URL("/api/sysPrint/update","https://example.com");let n;t&&(n=t.baseOptions);const r={method:"POST",...n,...e},o={},i={};if(t&&t.accessToken){const s="function"==typeof t.accessToken?await t.accessToken():await t.accessToken;o.Authorization="Bearer "+s}o["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const t in i)c.set(t,i[t]);for(const t in e.params)c.set(t,e.params[t]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};r.headers={...o,...p,...e.headers};const h="string"!=typeof s||"application/json"===r.headers["Content-Type"];return r.data=h?JSON.stringify(void 0!==s?s:{}):s||"",{url:a.pathname+a.search+a.hash,options:r}}}},r=function(s){return{async apiSysPrintAddPost(a,r){const o=await n(s).apiSysPrintAddPost(a,r);return(s=t,a=e)=>{const n={...o.options,url:a+o.url};return s.request(n)}},async apiSysPrintDeletePost(a,r){const o=await n(s).apiSysPrintDeletePost(a,r);return(s=t,a=e)=>{const n={...o.options,url:a+o.url};return s.request(n)}},async apiSysPrintPagePost(a,r){const o=await n(s).apiSysPrintPagePost(a,r);return(s=t,a=e)=>{const n={...o.options,url:a+o.url};return s.request(n)}},async apiSysPrintPrintNameGet(a,r){const o=await n(s).apiSysPrintPrintNameGet(a,r);return(s=t,a=e)=>{const n={...o.options,url:a+o.url};return s.request(n)}},async apiSysPrintUpdatePost(a,r){const o=await n(s).apiSysPrintUpdatePost(a,r);return(s=t,a=e)=>{const n={...o.options,url:a+o.url};return s.request(n)}}}};class o extends s{async apiSysPrintAddPost(t,s){return r(this.configuration).apiSysPrintAddPost(t,s).then((t=>t(this.axios,this.basePath)))}async apiSysPrintDeletePost(t,s){return r(this.configuration).apiSysPrintDeletePost(t,s).then((t=>t(this.axios,this.basePath)))}async apiSysPrintPagePost(t,s){return r(this.configuration).apiSysPrintPagePost(t,s).then((t=>t(this.axios,this.basePath)))}async apiSysPrintPrintNameGet(t,s){return r(this.configuration).apiSysPrintPrintNameGet(t,s).then((t=>t(this.axios,this.basePath)))}async apiSysPrintUpdatePost(t,s){return r(this.configuration).apiSysPrintUpdatePost(t,s).then((t=>t(this.axios,this.basePath)))}}export{o as S};

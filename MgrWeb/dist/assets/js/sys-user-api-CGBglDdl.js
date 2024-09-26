import{a as s}from"./axios-CURSphCx.js";import{B as e,j as t,R as a}from"./index-DWGcUZYU.js";const n=function(s){return{apiSysUserAddPost:async(e,t={})=>{const a=new URL("/api/sysUser/add","https://example.com");let n;s&&(n=s.baseOptions);const o={method:"POST",...n,...t},r={},i={};if(s&&s.accessToken){const e="function"==typeof s.accessToken?await s.accessToken():await s.accessToken;r.Authorization="Bearer "+e}r["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const s in i)c.set(s,i[s]);for(const s in t.params)c.set(s,t.params[s]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};o.headers={...r,...p,...t.headers};const h="string"!=typeof e||"application/json"===o.headers["Content-Type"];return o.data=h?JSON.stringify(void 0!==e?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:o}},apiSysUserBaseInfoGet:async(e={})=>{const t=new URL("/api/sysUser/baseInfo","https://example.com");let a;s&&(a=s.baseOptions);const n={method:"GET",...a,...e},o={},r={};if(s&&s.accessToken){const e="function"==typeof s.accessToken?await s.accessToken():await s.accessToken;o.Authorization="Bearer "+e}const i=new URLSearchParams(t.search);for(const s in r)i.set(s,r[s]);for(const s in e.params)i.set(s,e.params[s]);t.search=new URLSearchParams(i).toString();let c=a&&a.headers?a.headers:{};return n.headers={...o,...c,...e.headers},{url:t.pathname+t.search+t.hash,options:n}},apiSysUserBaseInfoPost:async(e,t={})=>{const a=new URL("/api/sysUser/baseInfo","https://example.com");let n;s&&(n=s.baseOptions);const o={method:"POST",...n,...t},r={},i={};if(s&&s.accessToken){const e="function"==typeof s.accessToken?await s.accessToken():await s.accessToken;r.Authorization="Bearer "+e}r["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const s in i)c.set(s,i[s]);for(const s in t.params)c.set(s,t.params[s]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};o.headers={...r,...p,...t.headers};const h="string"!=typeof e||"application/json"===o.headers["Content-Type"];return o.data=h?JSON.stringify(void 0!==e?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:o}},apiSysUserChangePwdPost:async(e,t={})=>{const a=new URL("/api/sysUser/changePwd","https://example.com");let n;s&&(n=s.baseOptions);const o={method:"POST",...n,...t},r={},i={};if(s&&s.accessToken){const e="function"==typeof s.accessToken?await s.accessToken():await s.accessToken;r.Authorization="Bearer "+e}r["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const s in i)c.set(s,i[s]);for(const s in t.params)c.set(s,t.params[s]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};o.headers={...r,...p,...t.headers};const h="string"!=typeof e||"application/json"===o.headers["Content-Type"];return o.data=h?JSON.stringify(void 0!==e?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:o}},apiSysUserDeletePost:async(e,t={})=>{const a=new URL("/api/sysUser/delete","https://example.com");let n;s&&(n=s.baseOptions);const o={method:"POST",...n,...t},r={},i={};if(s&&s.accessToken){const e="function"==typeof s.accessToken?await s.accessToken():await s.accessToken;r.Authorization="Bearer "+e}r["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const s in i)c.set(s,i[s]);for(const s in t.params)c.set(s,t.params[s]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};o.headers={...r,...p,...t.headers};const h="string"!=typeof e||"application/json"===o.headers["Content-Type"];return o.data=h?JSON.stringify(void 0!==e?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:o}},apiSysUserGrantRolePost:async(e,t={})=>{const a=new URL("/api/sysUser/grantRole","https://example.com");let n;s&&(n=s.baseOptions);const o={method:"POST",...n,...t},r={},i={};if(s&&s.accessToken){const e="function"==typeof s.accessToken?await s.accessToken():await s.accessToken;r.Authorization="Bearer "+e}r["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const s in i)c.set(s,i[s]);for(const s in t.params)c.set(s,t.params[s]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};o.headers={...r,...p,...t.headers};const h="string"!=typeof e||"application/json"===o.headers["Content-Type"];return o.data=h?JSON.stringify(void 0!==e?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:o}},apiSysUserOwnExtOrgListUserIdGet:async(e,t={})=>{if(null==e)throw new a("userId","Required parameter userId was null or undefined when calling apiSysUserOwnExtOrgListUserIdGet.");const n="/api/sysUser/ownExtOrgList/{userId}".replace("{userId}",encodeURIComponent(String(e))),o=new URL(n,"https://example.com");let r;s&&(r=s.baseOptions);const i={method:"GET",...r,...t},c={},p={};if(s&&s.accessToken){const e="function"==typeof s.accessToken?await s.accessToken():await s.accessToken;c.Authorization="Bearer "+e}const h=new URLSearchParams(o.search);for(const s in p)h.set(s,p[s]);for(const s in t.params)h.set(s,t.params[s]);o.search=new URLSearchParams(h).toString();let y=r&&r.headers?r.headers:{};return i.headers={...c,...y,...t.headers},{url:o.pathname+o.search+o.hash,options:i}},apiSysUserOwnRoleListUserIdGet:async(e,t={})=>{if(null==e)throw new a("userId","Required parameter userId was null or undefined when calling apiSysUserOwnRoleListUserIdGet.");const n="/api/sysUser/ownRoleList/{userId}".replace("{userId}",encodeURIComponent(String(e))),o=new URL(n,"https://example.com");let r;s&&(r=s.baseOptions);const i={method:"GET",...r,...t},c={},p={};if(s&&s.accessToken){const e="function"==typeof s.accessToken?await s.accessToken():await s.accessToken;c.Authorization="Bearer "+e}const h=new URLSearchParams(o.search);for(const s in p)h.set(s,p[s]);for(const s in t.params)h.set(s,t.params[s]);o.search=new URLSearchParams(h).toString();let y=r&&r.headers?r.headers:{};return i.headers={...c,...y,...t.headers},{url:o.pathname+o.search+o.hash,options:i}},apiSysUserPagePost:async(e,t={})=>{const a=new URL("/api/sysUser/page","https://example.com");let n;s&&(n=s.baseOptions);const o={method:"POST",...n,...t},r={},i={};if(s&&s.accessToken){const e="function"==typeof s.accessToken?await s.accessToken():await s.accessToken;r.Authorization="Bearer "+e}r["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const s in i)c.set(s,i[s]);for(const s in t.params)c.set(s,t.params[s]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};o.headers={...r,...p,...t.headers};const h="string"!=typeof e||"application/json"===o.headers["Content-Type"];return o.data=h?JSON.stringify(void 0!==e?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:o}},apiSysUserResetPwdPost:async(e,t={})=>{const a=new URL("/api/sysUser/resetPwd","https://example.com");let n;s&&(n=s.baseOptions);const o={method:"POST",...n,...t},r={},i={};if(s&&s.accessToken){const e="function"==typeof s.accessToken?await s.accessToken():await s.accessToken;r.Authorization="Bearer "+e}r["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const s in i)c.set(s,i[s]);for(const s in t.params)c.set(s,t.params[s]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};o.headers={...r,...p,...t.headers};const h="string"!=typeof e||"application/json"===o.headers["Content-Type"];return o.data=h?JSON.stringify(void 0!==e?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:o}},apiSysUserSetStatusPost:async(e,t={})=>{const a=new URL("/api/sysUser/setStatus","https://example.com");let n;s&&(n=s.baseOptions);const o={method:"POST",...n,...t},r={},i={};if(s&&s.accessToken){const e="function"==typeof s.accessToken?await s.accessToken():await s.accessToken;r.Authorization="Bearer "+e}r["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const s in i)c.set(s,i[s]);for(const s in t.params)c.set(s,t.params[s]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};o.headers={...r,...p,...t.headers};const h="string"!=typeof e||"application/json"===o.headers["Content-Type"];return o.data=h?JSON.stringify(void 0!==e?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:o}},apiSysUserUnlockLoginPost:async(e,t={})=>{const a=new URL("/api/sysUser/unlockLogin","https://example.com");let n;s&&(n=s.baseOptions);const o={method:"POST",...n,...t},r={},i={};if(s&&s.accessToken){const e="function"==typeof s.accessToken?await s.accessToken():await s.accessToken;r.Authorization="Bearer "+e}r["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const s in i)c.set(s,i[s]);for(const s in t.params)c.set(s,t.params[s]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};o.headers={...r,...p,...t.headers};const h="string"!=typeof e||"application/json"===o.headers["Content-Type"];return o.data=h?JSON.stringify(void 0!==e?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:o}},apiSysUserUpdatePost:async(e,t={})=>{const a=new URL("/api/sysUser/update","https://example.com");let n;s&&(n=s.baseOptions);const o={method:"POST",...n,...t},r={},i={};if(s&&s.accessToken){const e="function"==typeof s.accessToken?await s.accessToken():await s.accessToken;r.Authorization="Bearer "+e}r["Content-Type"]="application/json-patch+json";const c=new URLSearchParams(a.search);for(const s in i)c.set(s,i[s]);for(const s in t.params)c.set(s,t.params[s]);a.search=new URLSearchParams(c).toString();let p=n&&n.headers?n.headers:{};o.headers={...r,...p,...t.headers};const h="string"!=typeof e||"application/json"===o.headers["Content-Type"];return o.data=h?JSON.stringify(void 0!==e?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:o}}}},o=function(e){return{async apiSysUserAddPost(a,o){const r=await n(e).apiSysUserAddPost(a,o);return(e=s,a=t)=>{const n={...r.options,url:a+r.url};return e.request(n)}},async apiSysUserBaseInfoGet(a){const o=await n(e).apiSysUserBaseInfoGet(a);return(e=s,a=t)=>{const n={...o.options,url:a+o.url};return e.request(n)}},async apiSysUserBaseInfoPost(a,o){const r=await n(e).apiSysUserBaseInfoPost(a,o);return(e=s,a=t)=>{const n={...r.options,url:a+r.url};return e.request(n)}},async apiSysUserChangePwdPost(a,o){const r=await n(e).apiSysUserChangePwdPost(a,o);return(e=s,a=t)=>{const n={...r.options,url:a+r.url};return e.request(n)}},async apiSysUserDeletePost(a,o){const r=await n(e).apiSysUserDeletePost(a,o);return(e=s,a=t)=>{const n={...r.options,url:a+r.url};return e.request(n)}},async apiSysUserGrantRolePost(a,o){const r=await n(e).apiSysUserGrantRolePost(a,o);return(e=s,a=t)=>{const n={...r.options,url:a+r.url};return e.request(n)}},async apiSysUserOwnExtOrgListUserIdGet(a,o){const r=await n(e).apiSysUserOwnExtOrgListUserIdGet(a,o);return(e=s,a=t)=>{const n={...r.options,url:a+r.url};return e.request(n)}},async apiSysUserOwnRoleListUserIdGet(a,o){const r=await n(e).apiSysUserOwnRoleListUserIdGet(a,o);return(e=s,a=t)=>{const n={...r.options,url:a+r.url};return e.request(n)}},async apiSysUserPagePost(a,o){const r=await n(e).apiSysUserPagePost(a,o);return(e=s,a=t)=>{const n={...r.options,url:a+r.url};return e.request(n)}},async apiSysUserResetPwdPost(a,o){const r=await n(e).apiSysUserResetPwdPost(a,o);return(e=s,a=t)=>{const n={...r.options,url:a+r.url};return e.request(n)}},async apiSysUserSetStatusPost(a,o){const r=await n(e).apiSysUserSetStatusPost(a,o);return(e=s,a=t)=>{const n={...r.options,url:a+r.url};return e.request(n)}},async apiSysUserUnlockLoginPost(a,o){const r=await n(e).apiSysUserUnlockLoginPost(a,o);return(e=s,a=t)=>{const n={...r.options,url:a+r.url};return e.request(n)}},async apiSysUserUpdatePost(a,o){const r=await n(e).apiSysUserUpdatePost(a,o);return(e=s,a=t)=>{const n={...r.options,url:a+r.url};return e.request(n)}}}};class r extends e{async apiSysUserAddPost(s,e){return o(this.configuration).apiSysUserAddPost(s,e).then((s=>s(this.axios,this.basePath)))}async apiSysUserBaseInfoGet(s){return o(this.configuration).apiSysUserBaseInfoGet(s).then((s=>s(this.axios,this.basePath)))}async apiSysUserBaseInfoPost(s,e){return o(this.configuration).apiSysUserBaseInfoPost(s,e).then((s=>s(this.axios,this.basePath)))}async apiSysUserChangePwdPost(s,e){return o(this.configuration).apiSysUserChangePwdPost(s,e).then((s=>s(this.axios,this.basePath)))}async apiSysUserDeletePost(s,e){return o(this.configuration).apiSysUserDeletePost(s,e).then((s=>s(this.axios,this.basePath)))}async apiSysUserGrantRolePost(s,e){return o(this.configuration).apiSysUserGrantRolePost(s,e).then((s=>s(this.axios,this.basePath)))}async apiSysUserOwnExtOrgListUserIdGet(s,e){return o(this.configuration).apiSysUserOwnExtOrgListUserIdGet(s,e).then((s=>s(this.axios,this.basePath)))}async apiSysUserOwnRoleListUserIdGet(s,e){return o(this.configuration).apiSysUserOwnRoleListUserIdGet(s,e).then((s=>s(this.axios,this.basePath)))}async apiSysUserPagePost(s,e){return o(this.configuration).apiSysUserPagePost(s,e).then((s=>s(this.axios,this.basePath)))}async apiSysUserResetPwdPost(s,e){return o(this.configuration).apiSysUserResetPwdPost(s,e).then((s=>s(this.axios,this.basePath)))}async apiSysUserSetStatusPost(s,e){return o(this.configuration).apiSysUserSetStatusPost(s,e).then((s=>s(this.axios,this.basePath)))}async apiSysUserUnlockLoginPost(s,e){return o(this.configuration).apiSysUserUnlockLoginPost(s,e).then((s=>s(this.axios,this.basePath)))}async apiSysUserUpdatePost(s,e){return o(this.configuration).apiSysUserUpdatePost(s,e).then((s=>s(this.axios,this.basePath)))}}export{r as S};

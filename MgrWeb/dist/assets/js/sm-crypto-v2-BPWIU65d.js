const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./xlsx-js-style-APVtXwG5.js","./@babel-Q_QrznUx.js","./mqtt-BarZW3Jq.js"])))=>i.map(i=>d[i]);
var t=Object.defineProperty,e=(e,n,r)=>((e,n,r)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r)(e,"symbol"!=typeof n?n+"":n,r);import{_ as n}from"./jspdf-CH-AZmyM.js";import{F as r,w as i,c as s,h as o,n as u,m as h,b as c,a as l}from"./@noble-DPz6ZhRw.js";var a=Object.defineProperty,f=(t,e)=>{for(var n in e)a(t,n,{get:e[n],enumerable:!0})},g={};f(g,{EmptyArray:()=>lt,arrayToHex:()=>et,arrayToUtf8:()=>nt,calculateSharedKey:()=>ht,comparePublicKeyHex:()=>st,compressPublicKeyHex:()=>Y,doDecrypt:()=>gt,doEncrypt:()=>at,doSignature:()=>pt,doVerifySignature:()=>yt,generateKeyPairHex:()=>X,getHash:()=>bt,getPoint:()=>mt,getPublicKeyFromPrivateKey:()=>vt,getZ:()=>dt,hexToArray:()=>rt,initRNGPool:()=>L,leftPad:()=>tt,precomputePublicKey:()=>wt,utf8ToHex:()=>$,verifyPublicKey:()=>it});var p=BigInt(0),y=BigInt(1),d=BigInt(2);BigInt(3);var b=class{constructor(t=null,e="00",n="00",r=""){this.tlv=t,this.t=e,this.l=n,this.v=r}getEncodedHex(){return this.tlv||(this.v=this.getValue(),this.l=this.getLength(),this.tlv=this.t+this.l+this.v),this.tlv}getLength(){const t=this.v.length/2;let e=t.toString(16);if(e.length%2==1&&(e="0"+e),t<128)return e;return(128+e.length/2).toString(16)+e}getValue(){return""}},w=class extends b{constructor(t){super(),this.t="02",t&&(this.v=function(t){let e=t.toString(16);if("-"!==e[0])e.length%2==1?e="0"+e:e.match(/^[0-7]/)||(e="00"+e);else{e=e.substring(1);let n=e.length;n%2==1?n+=1:e.match(/^[0-7]/)||(n+=2);let r="";for(let t=0;t<n;t++)r+="f";e=((o(r)^t)+y).toString(16).replace(/^-/,"")}return e}(t))}getValue(){return this.v}},v=class extends b{constructor(t){super(),e(this,"hV",""),this.s=t,this.t="04",t&&(this.v=t.toLowerCase())}getValue(){return this.v}},m=class extends b{constructor(t){super(),e(this,"t","30"),this.asn1Array=t}getValue(){return this.v=this.asn1Array.map((t=>t.getEncodedHex())).join(""),this.v}};function x(t,e){if(+t[e+2]<8)return 1;const n=t.slice(e+2,e+6).slice(0,2);return 2*(parseInt(n,16)-128)}function P(t,e){const n=x(t,e),r=t.substring(e+2,e+2+2*n);if(!r)return-1;return+(+r[0]<8?o(r):o(r.substring(2))).toString()}function A(t,e){return e+2*(x(t,e)+1)}function H(t,e,n,r){const i=new w(t),s=new w(e),o=new v(n),u=new v(r);return new m([i,s,o,u]).getEncodedHex()}var U,E=16384,I=new Uint8Array(0);async function L(){if("crypto"in globalThis)U=globalThis.crypto;else if(!(I.length>E/2))if("wx"in globalThis&&"getRandomValues"in globalThis.wx)I=await new Promise((t=>{wx.getRandomValues({length:E,success(e){t(new Uint8Array(e.randomValues))}})}));else try{if(globalThis.crypto)U=globalThis.crypto;else{const t=await n((()=>import("./xlsx-js-style-APVtXwG5.js").then((t=>t._))),__vite__mapDeps([0,1,2]),import.meta.url);U=t.webcrypto}const t=new Uint8Array(E);U.getRandomValues(t),I=t}catch(t){throw new Error("no available csprng, abort.")}}L();var j=t=>t instanceof Uint8Array,B=t=>new DataView(t.buffer,t.byteOffset,t.byteLength);if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");var S=Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));function K(t){if(!j(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=S[t[n]];return e}function k(t){if("string"==typeof t&&(t=function(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array((new TextEncoder).encode(t))}(t)),!j(t))throw new Error("expected Uint8Array, got "+typeof t);return t}var C=class{clone(){return this._cloneInto()}};var V=(t,e,n)=>t&e|t&n|e&n,_=(t,e,n)=>t^e^n,T=(t,e,n)=>t&e|~t&n;function R(t,e){const n=31&e;return t<<n|t>>>32-n}function N(t){return t^R(t,9)^R(t,17)}var O=class extends C{constructor(t,n,r,i){super(),e(this,"buffer"),e(this,"view"),e(this,"finished",!1),e(this,"length",0),e(this,"pos",0),e(this,"destroyed",!1),this.blockLen=t,this.outputLen=n,this.padOffset=r,this.isLE=i,this.buffer=new Uint8Array(t),this.view=B(this.buffer)}update(t){const{view:e,buffer:n,blockLen:r}=this,i=(t=k(t)).length;for(let s=0;s<i;){const o=Math.min(r-this.pos,i-s);if(o!==r)n.set(t.subarray(s,s+o),this.pos),this.pos+=o,s+=o,this.pos===r&&(this.process(e,0),this.pos=0);else{const e=B(t);for(;r<=i-s;s+=r)this.process(e,s)}}return this.length+=t.length,this.roundClean(),this}digestInto(t){this.finished=!0;const{buffer:e,view:n,blockLen:r,isLE:i}=this;let{pos:s}=this;e[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>r-s&&(this.process(n,0),s=0);for(let l=s;l<r;l++)e[l]=0;!function(t,e,n,r){if("function"==typeof t.setBigUint64)return t.setBigUint64(e,n,r);const i=BigInt(32),s=BigInt(4294967295),o=Number(n>>i&s),u=Number(n&s),h=r?4:0,c=r?0:4;t.setUint32(e+h,o,r),t.setUint32(e+c,u,r)}(n,r-8,BigInt(8*this.length),i),this.process(n,0);const o=B(t),u=this.outputLen;if(u%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=u/4,c=this.get();if(h>c.length)throw new Error("_sha2: outputLen bigger than state");for(let l=0;l<h;l++)o.setUint32(4*l,c[l],i)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:r,finished:i,destroyed:s,pos:o}=this;return t.length=r,t.pos=o,t.finished=i,t.destroyed=s,r%e&&t.buffer.set(n),t}},D=new Uint32Array([1937774191,1226093241,388252375,3666478592,2842636476,372324522,3817729613,2969243214]),F=new Uint32Array(68),G=new Uint32Array(64),q=class extends O{constructor(){super(64,32,8,!1),e(this,"A",0|D[0]),e(this,"B",0|D[1]),e(this,"C",0|D[2]),e(this,"D",0|D[3]),e(this,"E",0|D[4]),e(this,"F",0|D[5]),e(this,"G",0|D[6]),e(this,"H",0|D[7])}get(){const{A:t,B:e,C:n,D:r,E:i,F:s,G:o,H:u}=this;return[t,e,n,r,i,s,o,u]}set(t,e,n,r,i,s,o,u){this.A=0|t,this.B=0|e,this.C=0|n,this.D=0|r,this.E=0|i,this.F=0|s,this.G=0|o,this.H=0|u}process(t,e){for(let a=0;a<16;a++,e+=4)F[a]=t.getUint32(e,!1);for(let a=16;a<68;a++)F[a]=(n=F[a-16]^F[a-9]^R(F[a-3],15))^R(n,15)^R(n,23)^R(F[a-13],7)^F[a-6];var n;for(let a=0;a<64;a++)G[a]=F[a]^F[a+4];let{A:r,B:i,C:s,D:o,E:u,F:h,G:c,H:l}=this;for(let a=0;a<64;a++){let t=a>=0&&a<=15,e=t?2043430169:2055708042,n=R(R(r,12)+u+R(e,a),7),f=n^R(r,12),g=(t?_(r,i,s):V(r,i,s))+o+f+G[a]|0,p=(t?_(u,h,c):T(u,h,c))+l+n+F[a]|0;o=s,s=R(i,9),i=r,r=g,l=c,c=R(h,19),h=u,u=N(p)}r^=this.A,i^=this.B,s^=this.C,o^=this.D,u^=this.E,h^=this.F,c^=this.G,l^=this.H,this.set(r,i,s,o,u,h,c,l)}roundClean(){F.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},M=function(t){const e=e=>t().update(k(e)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}((()=>new q)),Z=class extends C{constructor(t,n){super(),e(this,"oHash"),e(this,"iHash"),e(this,"blockLen"),e(this,"outputLen"),e(this,"finished",!1),e(this,"destroyed",!1);const r=k(n);if(this.iHash=t.create(),"function"!=typeof this.iHash.update)throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const i=this.blockLen,s=new Uint8Array(i);s.set(r.length>i?t.create().update(r).digest():r);for(let e=0;e<s.length;e++)s[e]^=54;this.iHash.update(s),this.oHash=t.create();for(let e=0;e<s.length;e++)s[e]^=106;this.oHash.update(s),s.fill(0)}update(t){return this.iHash.update(t),this}digestInto(t){this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:n,finished:r,destroyed:i,blockLen:s,outputLen:o}=this;return t.finished=r,t.destroyed=i,t.blockLen=s,t.outputLen=o,t.oHash=e._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},z=(t,e,n)=>new Z(t,e).update(n).digest();z.create=(t,e)=>new Z(t,e);var J=r(BigInt("115792089210356248756420345214020892766250353991924191454421193933289684991999")),Q=i({a:BigInt("115792089210356248756420345214020892766250353991924191454421193933289684991996"),b:BigInt("18505919022281880113072981827955639221458448578012075254857346196103069175443"),Fp:J,h:y,n:BigInt("115792089210356248756420345214020892766061623724957744567843809356293439045923"),Gx:BigInt("22963146547237050559479531362550074578802567295341616970375194840604139615431"),Gy:BigInt("85132369209828568825618990617112496413088388631904505083283536607588877201568"),hash:M,hmac:(t,...e)=>z(M,t,s(...e)),randomBytes:function(t=0){const e=new Uint8Array(t);if(U)return U.getRandomValues(e);{const e=function(t){if(I.length>t){const e=I.slice(0,t);return I=I.slice(t),L(),e}throw new Error("random number pool is not ready or insufficient, prevent getting too long random values or too often.")}(t);return e}}}),W=r(BigInt(Q.CURVE.n));function X(t){const e=t?u(h(BigInt(t),y)+y,32):Q.utils.randomPrivateKey(),n=Q.getPublicKey(e,!1);return{privateKey:tt(c(e),64),publicKey:tt(c(n),64)}}function Y(t){if(130!==t.length)throw new Error("Invalid public key to compress");const e=(t.length-2)/2,n=t.substring(2,2+e),r=o(t.substring(e+2,e+e+2));let i="03";return h(r,d)===p&&(i="02"),i+n}function $(t){const e=(t=decodeURIComponent(encodeURIComponent(t))).length,n=new Uint32Array(1+(e>>>2));for(let i=0;i<e;i++)n[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;const r=[];for(let i=0;i<e;i++){const t=n[i>>>2]>>>24-i%4*8&255;r.push((t>>>4).toString(16)),r.push((15&t).toString(16))}return r.join("")}function tt(t,e){return t.length>=e?t:new Array(e-t.length+1).join("0")+t}function et(t){return t.map((t=>{const e=t.toString(16);return 1===e.length?"0"+e:e})).join("")}function nt(t){const e=[];for(let n=0,r=t.length;n<r;n++)t[n]>=240&&t[n]<=247?(e.push(String.fromCodePoint(((7&t[n])<<18)+((63&t[n+1])<<12)+((63&t[n+2])<<6)+(63&t[n+3]))),n+=3):t[n]>=224&&t[n]<=239?(e.push(String.fromCodePoint(((15&t[n])<<12)+((63&t[n+1])<<6)+(63&t[n+2]))),n+=2):t[n]>=192&&t[n]<=223?(e.push(String.fromCodePoint(((31&t[n])<<6)+(63&t[n+1]))),n++):e.push(String.fromCodePoint(t[n]));return e.join("")}function rt(t){let e=t.length;e%2!=0&&(t=tt(t,e+1)),e=t.length;const n=e/2,r=new Uint8Array(n);for(let i=0;i<n;i++)r[i]=parseInt(t.substring(2*i,2*i+2),16);return r}function it(t){const e=Q.ProjectivePoint.fromHex(t);if(!e)return!1;try{return e.assertValidity(),!0}catch(n){return!1}}function st(t,e){const n=Q.ProjectivePoint.fromHex(t);if(!n)return!1;const r=Q.ProjectivePoint.fromHex(e);return!!r&&n.equals(r)}var ot=o("80000000000000000000000000000000"),ut=o("7fffffffffffffffffffffffffffffff");function ht(t,e,n,r,i,u=!1,h="1234567812345678",c="1234567812345678"){const a=Q.ProjectivePoint.fromHex(e.publicKey),f=Q.ProjectivePoint.fromHex(r),g=Q.ProjectivePoint.fromHex(n);let p=dt(t.publicKey,h),y=dt(n,c);u&&([p,y]=[y,p]);const d=o(e.privateKey),b=o(t.privateKey),w=a.x,v=ot+(w&ut),m=W.add(b,W.mulN(v,d)),x=f.x,P=W.add(ot,x&ut),A=f.multiply(P).add(g).multiply(m),H=rt(tt(l(A.x),64)),U=rt(tt(l(A.y),64));return function(t,e){let n=new Uint8Array(e),r=1,i=0,o=lt;const u=new Uint8Array(4),h=()=>{u[0]=r>>24&255,u[1]=r>>16&255,u[2]=r>>8&255,u[3]=255&r,o=M(s(t,u)),r++,i=0};h();for(let s=0,c=n.length;s<c;s++)i===o.length&&h(),n[s]=255&o[i++];return n}(s(H,U,p,y),i)}var ct=0,lt=new Uint8Array;function at(t,e,n=1,r){const i="string"==typeof t?rt($(t)):Uint8Array.from(t),u="string"==typeof e?Q.ProjectivePoint.fromHex(e):e,h=X(),c=o(h.privateKey);let a=h.publicKey;a.length>128&&(a=a.substring(a.length-128));const f=u.multiply(c),g=rt(tt(l(f.x),64)),p=rt(tt(l(f.y),64)),y=K(M(s(g,i,p)));ft(g,p,i);const d=K(i);if(null==r?void 0:r.asn1){const t=Q.ProjectivePoint.fromHex(h.publicKey);return n===ct?H(t.x,t.y,d,y):H(t.x,t.y,y,d)}return n===ct?a+d+y:a+y+d}function ft(t,e,n){let r=1,i=0,o=lt;const u=new Uint8Array(4),h=()=>{u[0]=r>>24&255,u[1]=r>>16&255,u[2]=r>>8&255,u[3]=255&r,o=M(s(t,e,u)),r++,i=0};h();for(let s=0,c=n.length;s<c;s++)i===o.length&&h(),n[s]^=255&o[i++]}function gt(t,e,n=1,{output:r="string",asn1:i=!1}={}){const u=o(e);let h,c,a;if(i){const{x:e,y:r,cipher:i,hash:s}=function(t){function e(t,e){const n=A(t,e),r=P(t,e),i=t.substring(n,n+2*r);return{value:i,nextStart:n+i.length}}const n=A(t,0),{value:r,nextStart:i}=e(t,n),{value:s,nextStart:u}=e(t,i),{value:h,nextStart:c}=e(t,u),{value:l}=e(t,c);return{x:o(r),y:o(s),hash:h,cipher:l}}(t);h=Q.ProjectivePoint.fromAffine({x:e,y:r}),a=s,c=i,n===ct&&([c,a]=[a,c])}else h=Q.ProjectivePoint.fromHex("04"+t.substring(0,128)),a=t.substring(128,192),c=t.substring(192),n===ct&&(a=t.substring(t.length-64),c=t.substring(128,t.length-64));const f=rt(c),g=h.multiply(u),p=rt(tt(l(g.x),64)),y=rt(tt(l(g.y),64));ft(p,y,f);return et(Array.from(M(s(p,f,y))))===a.toLowerCase()?"array"===r?f:nt(f):"array"===r?[]:""}function pt(t,e,n={}){let{pointPool:r,der:i,hash:s,publicKey:u,userId:h}=n,c="string"==typeof t?$(t):et(Array.from(t));s&&(u=u||vt(e),c=bt(c,u,h));const a=o(e),f=o(c);let g=null,d=null,b=null;do{do{let t;t=r&&r.length?r.pop():mt(),g=t.k,d=W.add(f,t.x1)}while(d===p||d+g===Q.CURVE.n);b=W.mul(W.inv(W.addN(a,y)),W.subN(g,W.mulN(d,a)))}while(b===p);return i?function(t,e){const n=new w(t),r=new w(e);return new m([n,r]).getEncodedHex()}(d,b):tt(l(d),64)+tt(l(b),64)}function yt(t,e,n,r={}){let i;const{hash:s,der:u,userId:h}=r,c="string"==typeof n?n:n.toHex(!1);let l,a;if(i=s?bt("string"==typeof t?$(t):t,c,h):"string"==typeof t?$(t):et(Array.from(t)),u){const t=function(t){const e=A(t,0),n=A(t,e),r=P(t,e),i=t.substring(n,n+2*r),s=n+i.length,u=A(t,s),h=P(t,s),c=t.substring(u,u+2*h);return{r:o(i),s:o(c)}}(e);l=t.r,a=t.s}else l=o(e.substring(0,64)),a=o(e.substring(64));const f="string"==typeof n?Q.ProjectivePoint.fromHex(n):n,g=o(i),y=W.add(l,a);if(y===p)return!1;const d=Q.ProjectivePoint.BASE.multiply(a).add(f.multiply(y));return l===W.add(g,d.x)}function dt(t,e="1234567812345678"){e=$(e);const n=tt(l(Q.CURVE.a),64),r=tt(l(Q.CURVE.b),64),i=tt(l(Q.ProjectivePoint.BASE.x),64),o=tt(l(Q.ProjectivePoint.BASE.y),64);let u,h;if(128===t.length)u=t.substring(0,64),h=t.substring(64,128);else{const e=Q.ProjectivePoint.fromHex(t);u=tt(l(e.x),64),h=tt(l(e.y),64)}const c=rt(e+n+r+i+o+u+h),a=4*e.length;return M(s(new Uint8Array([a>>8&255,255&a]),c))}function bt(t,e,n="1234567812345678"){const r=dt(e,n);return K(M(s(r,"string"==typeof t?rt(t):t)))}function wt(t,e){const n=Q.ProjectivePoint.fromHex(t);return Q.utils.precompute(e,n)}function vt(t){const e=Q.getPublicKey(t,!1);return tt(c(e),64)}function mt(){const t=X(),e=Q.ProjectivePoint.fromHex(t.publicKey),n=o(t.privateKey);return{...t,k:n,x1:e.x}}f({},{decrypt:()=>St,encrypt:()=>Bt,sm4:()=>jt});var xt=0,Pt=32,At=16,Ht=Uint8Array.from([214,144,233,254,204,225,61,183,22,182,20,194,40,251,44,5,43,103,154,118,42,190,4,195,170,68,19,38,73,134,6,153,156,66,80,244,145,239,152,122,51,84,11,67,237,207,172,98,228,179,28,169,201,8,232,149,128,223,148,250,117,143,63,166,71,7,167,252,243,115,23,186,131,89,60,25,230,133,79,168,104,107,129,178,113,100,218,139,248,235,15,75,112,86,157,53,30,36,14,94,99,88,209,162,37,34,124,59,1,33,120,135,212,0,70,87,159,211,39,82,76,54,2,231,160,196,200,158,234,191,138,210,64,199,56,181,163,247,242,206,249,97,21,161,224,174,93,164,155,52,26,85,173,147,50,48,245,140,177,227,29,246,226,46,130,102,202,96,192,41,35,171,13,83,78,111,213,219,55,69,222,253,142,47,3,255,106,114,109,108,91,81,141,27,175,146,187,221,188,127,17,217,92,65,31,16,90,216,10,193,49,136,165,205,123,189,45,116,208,18,184,229,180,176,137,105,151,74,12,150,119,126,101,185,241,9,197,110,198,132,24,240,125,236,58,220,77,32,121,238,95,62,215,203,57,72]),Ut=new Uint32Array([462357,472066609,943670861,1415275113,1886879365,2358483617,2830087869,3301692121,3773296373,4228057617,404694573,876298825,1347903077,1819507329,2291111581,2762715833,3234320085,3705924337,4177462797,337322537,808926789,1280531041,1752135293,2223739545,2695343797,3166948049,3638552301,4110090761,269950501,741554753,1213159005,1684763257]);function Et(t){return(255&Ht[t>>>24&255])<<24|(255&Ht[t>>>16&255])<<16|(255&Ht[t>>>8&255])<<8|255&Ht[255&t]}function It(t,e,n){let r=0,i=0,s=0,o=0,u=0,h=0,c=0,l=0;u=255&t[0],h=255&t[1],c=255&t[2],l=255&t[3],r=u<<24|h<<16|c<<8|l,u=255&t[4],h=255&t[5],c=255&t[6],l=255&t[7],i=u<<24|h<<16|c<<8|l,u=255&t[8],h=255&t[9],c=255&t[10],l=255&t[11],s=u<<24|h<<16|c<<8|l,u=255&t[12],h=255&t[13],c=255&t[14],l=255&t[15],o=u<<24|h<<16|c<<8|l;for(let a=0;a<32;a+=4)u=i^s^o^n[a],u=Et(u),r^=u^(u<<2|u>>>30)^(u<<10|u>>>22)^(u<<18|u>>>14)^(u<<24|u>>>8),h=s^o^r^n[a+1],h=Et(h),i^=h^(h<<2|h>>>30)^(h<<10|h>>>22)^(h<<18|h>>>14)^(h<<24|h>>>8),c=o^r^i^n[a+2],c=Et(c),s^=c^(c<<2|c>>>30)^(c<<10|c>>>22)^(c<<18|c>>>14)^(c<<24|c>>>8),l=r^i^s^n[a+3],l=Et(l),o^=l^(l<<2|l>>>30)^(l<<10|l>>>22)^(l<<18|l>>>14)^(l<<24|l>>>8);e[0]=o>>>24&255,e[1]=o>>>16&255,e[2]=o>>>8&255,e[3]=255&o,e[4]=s>>>24&255,e[5]=s>>>16&255,e[6]=s>>>8&255,e[7]=255&s,e[8]=i>>>24&255,e[9]=i>>>16&255,e[10]=i>>>8&255,e[11]=255&i,e[12]=r>>>24&255,e[13]=r>>>16&255,e[14]=r>>>8&255,e[15]=255&r}var Lt=new Uint8Array(16);function jt(t,e,n,r={}){let{padding:i="pkcs#7",mode:s,iv:o=new Uint8Array(16),output:u}=r;if("cbc"===s&&("string"==typeof o&&(o=rt(o)),16!==o.length))throw new Error("iv is invalid");if("string"==typeof e&&(e=rt(e)),16!==e.length)throw new Error("key is invalid");if(t="string"==typeof t?n!==xt?function(t){const e=[];for(let n=0,r=t.length;n<r;n++){const r=t.codePointAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>>6),e.push(128|63&r);else if(r<=55295||r>=57344&&r<=65535)e.push(224|r>>>12),e.push(128|r>>>6&63),e.push(128|63&r);else{if(!(r>=65536&&r<=1114111))throw e.push(r),new Error("input is not supported");n++,e.push(240|r>>>18&28),e.push(128|r>>>12&63),e.push(128|r>>>6&63),e.push(128|63&r)}}return new Uint8Array(e)}(t):rt(t):Uint8Array.from(t),("pkcs#5"===i||"pkcs#7"===i)&&n!==xt){const e=At-t.length%At,n=new Uint8Array(t.length+e);n.set(t,0);for(let r=0;r<e;r++)n[t.length+r]=e;t=n}const h=new Uint32Array(Pt);!function(t,e,n){let r=0,i=0,s=0,o=0,u=0;r=(255&t[0])<<24|(255&t[1])<<16|(255&t[2])<<8|255&t[3],i=(255&t[4])<<24|(255&t[5])<<16|(255&t[6])<<8|255&t[7],s=(255&t[8])<<24|(255&t[9])<<16|(255&t[10])<<8|255&t[11],o=(255&t[12])<<24|(255&t[13])<<16|(255&t[14])<<8|255&t[15],r^=2746333894,i^=1453994832,s^=1736282519,o^=2993693404;for(let h=0;h<32;h+=4)u=i^s^o^Ut[h+0],u=Et(u),r^=u^(u<<13|u>>>19)^(u<<23|u>>>9),e[h+0]=r,u=s^o^r^Ut[h+1],u=Et(u),i^=u^(u<<13|u>>>19)^(u<<23|u>>>9),e[h+1]=i,u=o^r^i^Ut[h+2],u=Et(u),s^=u^(u<<13|u>>>19)^(u<<23|u>>>9),e[h+2]=s,u=r^i^s^Ut[h+3],u=Et(u),o^=u^(u<<13|u>>>19)^(u<<23|u>>>9),e[h+3]=o;if(n===xt)for(let h=0;h<16;h++)[e[h],e[31-h]]=[e[31-h],e[h]]}(e,h,n);let c=new Uint8Array(t.length),l=o,a=t.length,f=0;for(;a>=At;){const e=t.subarray(f,f+16);if("cbc"===s)for(let t=0;t<At;t++)n!==xt&&(e[t]^=l[t]);It(e,Lt,h);for(let t=0;t<At;t++)"cbc"===s&&n===xt&&(Lt[t]^=l[t]),c[f+t]=Lt[t];"cbc"===s&&(l=n!==xt?Lt:e),a-=At,f+=At}if(("pkcs#5"===i||"pkcs#7"===i)&&n===xt){const t=c.length,e=c[t-1];for(let n=1;n<=e;n++)if(c[t-n]!==e)throw new Error("padding is invalid");c=c.slice(0,t-e)}return"array"!==u?n!==xt?K(c):nt(c):c}function Bt(t,e,n={}){return jt(t,e,1,n)}function St(t,e,n={}){return jt(t,e,0,n)}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */export{g as s};
import{c as t}from"./@babel-Q_QrznUx.js";var r,e={exports:{}};function a(){return r||(r=1,function(t){
/*! *****************************************************************************
      		    Copyright (c) Microsoft Corporation.
      
      		    Permission to use, copy, modify, and/or distribute this software for any
      		    purpose with or without fee is hereby granted.
      
      		    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      		    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      		    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      		    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      		    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      		    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      		    PERFORMANCE OF THIS SOFTWARE.
      		    ***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(t,e)};function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}var a=" ";function i(t){var r="";Array.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++){var i=t[e];if(i.type===N.CLOSE_PATH)r+="z";else if(i.type===N.HORIZ_LINE_TO)r+=(i.relative?"h":"H")+i.x;else if(i.type===N.VERT_LINE_TO)r+=(i.relative?"v":"V")+i.y;else if(i.type===N.MOVE_TO)r+=(i.relative?"m":"M")+i.x+a+i.y;else if(i.type===N.LINE_TO)r+=(i.relative?"l":"L")+i.x+a+i.y;else if(i.type===N.CURVE_TO)r+=(i.relative?"c":"C")+i.x1+a+i.y1+a+i.x2+a+i.y2+a+i.x+a+i.y;else if(i.type===N.SMOOTH_CURVE_TO)r+=(i.relative?"s":"S")+i.x2+a+i.y2+a+i.x+a+i.y;else if(i.type===N.QUAD_TO)r+=(i.relative?"q":"Q")+i.x1+a+i.y1+a+i.x+a+i.y;else if(i.type===N.SMOOTH_QUAD_TO)r+=(i.relative?"t":"T")+i.x+a+i.y;else{if(i.type!==N.ARC)throw new Error('Unexpected command type "'+i.type+'" at index '+e+".");r+=(i.relative?"a":"A")+i.rX+a+i.rY+a+i.xRot+a+ +i.lArcFlag+a+ +i.sweepFlag+a+i.x+a+i.y}}return r}function n(t,r){var e=t[0],a=t[1];return[e*Math.cos(r)-a*Math.sin(r),e*Math.sin(r)+a*Math.cos(r)]}function o(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0;e<t.length;e++)if("number"!=typeof t[e])throw new Error("assertNumbers arguments["+e+"] is not a number. "+typeof t[e]+" == typeof "+t[e]);return!0}var s=Math.PI;function u(t,r,e){t.lArcFlag=0===t.lArcFlag?0:1,t.sweepFlag=0===t.sweepFlag?0:1;var a=t.rX,i=t.rY,o=t.x,u=t.y;a=Math.abs(t.rX),i=Math.abs(t.rY);var h=n([(r-o)/2,(e-u)/2],-t.xRot/180*s),c=h[0],m=h[1],y=Math.pow(c,2)/Math.pow(a,2)+Math.pow(m,2)/Math.pow(i,2);1<y&&(a*=Math.sqrt(y),i*=Math.sqrt(y)),t.rX=a,t.rY=i;var p=Math.pow(a,2)*Math.pow(m,2)+Math.pow(i,2)*Math.pow(c,2),T=(t.lArcFlag!==t.sweepFlag?1:-1)*Math.sqrt(Math.max(0,(Math.pow(a,2)*Math.pow(i,2)-p)/p)),f=a*m/i*T,O=-i*c/a*T,l=n([f,O],t.xRot/180*s);t.cX=l[0]+(r+o)/2,t.cY=l[1]+(e+u)/2,t.phi1=Math.atan2((m-O)/i,(c-f)/a),t.phi2=Math.atan2((-m-O)/i,(-c-f)/a),0===t.sweepFlag&&t.phi2>t.phi1&&(t.phi2-=2*s),1===t.sweepFlag&&t.phi2<t.phi1&&(t.phi2+=2*s),t.phi1*=180/s,t.phi2*=180/s}function h(t,r,e){o(t,r,e);var a=t*t+r*r-e*e;if(0>a)return[];if(0===a)return[[t*e/(t*t+r*r),r*e/(t*t+r*r)]];var i=Math.sqrt(a);return[[(t*e+r*i)/(t*t+r*r),(r*e-t*i)/(t*t+r*r)],[(t*e-r*i)/(t*t+r*r),(r*e+t*i)/(t*t+r*r)]]}var c=Math.PI/180;function m(t,r,e){return(1-e)*t+e*r}function y(t,r,e,a){return t+Math.cos(a/180*s)*r+Math.sin(a/180*s)*e}function p(t,r,e,a){var i=1e-6,n=r-t,o=e-r,s=3*n+3*(a-e)-6*o,u=6*(o-n),h=3*n;return Math.abs(s)<i?[-h/u]:function(t,r,e){var a=t*t/4-r;if(a<-e)return[];if(a<=e)return[-t/2];var i=Math.sqrt(a);return[-t/2-i,-t/2+i]}(u/s,h/s,i)}function T(t,r,e,a,i){var n=1-i;return t*(n*n*n)+r*(3*n*n*i)+e*(3*n*i*i)+a*(i*i*i)}t.SVGPathDataTransformer=void 0,function(t){function r(){return i((function(t,r,e){return t.relative&&(void 0!==t.x1&&(t.x1+=r),void 0!==t.y1&&(t.y1+=e),void 0!==t.x2&&(t.x2+=r),void 0!==t.y2&&(t.y2+=e),void 0!==t.x&&(t.x+=r),void 0!==t.y&&(t.y+=e),t.relative=!1),t}))}function e(){var t=NaN,r=NaN,e=NaN,a=NaN;return i((function(i,n,o){return i.type&N.SMOOTH_CURVE_TO&&(i.type=N.CURVE_TO,t=isNaN(t)?n:t,r=isNaN(r)?o:r,i.x1=i.relative?n-t:2*n-t,i.y1=i.relative?o-r:2*o-r),i.type&N.CURVE_TO?(t=i.relative?n+i.x2:i.x2,r=i.relative?o+i.y2:i.y2):(t=NaN,r=NaN),i.type&N.SMOOTH_QUAD_TO&&(i.type=N.QUAD_TO,e=isNaN(e)?n:e,a=isNaN(a)?o:a,i.x1=i.relative?n-e:2*n-e,i.y1=i.relative?o-a:2*o-a),i.type&N.QUAD_TO?(e=i.relative?n+i.x1:i.x1,a=i.relative?o+i.y1:i.y1):(e=NaN,a=NaN),i}))}function a(){var t=NaN,r=NaN;return i((function(e,a,i){if(e.type&N.SMOOTH_QUAD_TO&&(e.type=N.QUAD_TO,t=isNaN(t)?a:t,r=isNaN(r)?i:r,e.x1=e.relative?a-t:2*a-t,e.y1=e.relative?i-r:2*i-r),e.type&N.QUAD_TO){t=e.relative?a+e.x1:e.x1,r=e.relative?i+e.y1:e.y1;var n=e.x1,o=e.y1;e.type=N.CURVE_TO,e.x1=((e.relative?0:a)+2*n)/3,e.y1=((e.relative?0:i)+2*o)/3,e.x2=(e.x+2*n)/3,e.y2=(e.y+2*o)/3}else t=NaN,r=NaN;return e}))}function i(t){var r=0,e=0,a=NaN,i=NaN;return function(n){if(isNaN(a)&&!(n.type&N.MOVE_TO))throw new Error("path must start with moveto");var o=t(n,r,e,a,i);return n.type&N.CLOSE_PATH&&(r=a,e=i),void 0!==n.x&&(r=n.relative?r+n.x:n.x),void 0!==n.y&&(e=n.relative?e+n.y:n.y),n.type&N.MOVE_TO&&(a=r,i=e),o}}function s(t,r,e,a,n,s){return o(t,r,e,a,n,s),i((function(i,o,u,h){var c=i.x1,m=i.x2,y=i.relative&&!isNaN(h),p=void 0!==i.x?i.x:y?0:o,T=void 0!==i.y?i.y:y?0:u;function f(t){return t*t}i.type&N.HORIZ_LINE_TO&&0!==r&&(i.type=N.LINE_TO,i.y=i.relative?0:u),i.type&N.VERT_LINE_TO&&0!==e&&(i.type=N.LINE_TO,i.x=i.relative?0:o),void 0!==i.x&&(i.x=i.x*t+T*e+(y?0:n)),void 0!==i.y&&(i.y=p*r+i.y*a+(y?0:s)),void 0!==i.x1&&(i.x1=i.x1*t+i.y1*e+(y?0:n)),void 0!==i.y1&&(i.y1=c*r+i.y1*a+(y?0:s)),void 0!==i.x2&&(i.x2=i.x2*t+i.y2*e+(y?0:n)),void 0!==i.y2&&(i.y2=m*r+i.y2*a+(y?0:s));var O=t*a-r*e;if(void 0!==i.xRot&&(1!==t||0!==r||0!==e||1!==a))if(0===O)delete i.rX,delete i.rY,delete i.xRot,delete i.lArcFlag,delete i.sweepFlag,i.type=N.LINE_TO;else{var l=i.xRot*Math.PI/180,v=Math.sin(l),_=Math.cos(l),x=1/f(i.rX),d=1/f(i.rY),A=f(_)*x+f(v)*d,E=2*v*_*(x-d),C=f(v)*x+f(_)*d,M=A*a*a-E*r*a+C*r*r,R=E*(t*a+r*e)-2*(A*e*a+C*t*r),S=A*e*e-E*t*e+C*t*t,g=(Math.atan2(R,M-S)+Math.PI)%Math.PI/2,I=Math.sin(g),V=Math.cos(g);i.rX=Math.abs(O)/Math.sqrt(M*f(V)+R*I*V+S*f(I)),i.rY=Math.abs(O)/Math.sqrt(M*f(I)-R*I*V+S*f(V)),i.xRot=180*g/Math.PI}return void 0!==i.sweepFlag&&0>O&&(i.sweepFlag=+!i.sweepFlag),i}))}function f(){return function(t){var r={};for(var e in t)r[e]=t[e];return r}}t.ROUND=function(t){function r(r){return Math.round(r*t)/t}return void 0===t&&(t=1e13),o(t),function(t){return void 0!==t.x1&&(t.x1=r(t.x1)),void 0!==t.y1&&(t.y1=r(t.y1)),void 0!==t.x2&&(t.x2=r(t.x2)),void 0!==t.y2&&(t.y2=r(t.y2)),void 0!==t.x&&(t.x=r(t.x)),void 0!==t.y&&(t.y=r(t.y)),void 0!==t.rX&&(t.rX=r(t.rX)),void 0!==t.rY&&(t.rY=r(t.rY)),t}},t.TO_ABS=r,t.TO_REL=function(){return i((function(t,r,e){return t.relative||(void 0!==t.x1&&(t.x1-=r),void 0!==t.y1&&(t.y1-=e),void 0!==t.x2&&(t.x2-=r),void 0!==t.y2&&(t.y2-=e),void 0!==t.x&&(t.x-=r),void 0!==t.y&&(t.y-=e),t.relative=!0),t}))},t.NORMALIZE_HVZ=function(t,r,e){return void 0===t&&(t=!0),void 0===r&&(r=!0),void 0===e&&(e=!0),i((function(a,i,n,o,s){if(isNaN(o)&&!(a.type&N.MOVE_TO))throw new Error("path must start with moveto");return r&&a.type&N.HORIZ_LINE_TO&&(a.type=N.LINE_TO,a.y=a.relative?0:n),e&&a.type&N.VERT_LINE_TO&&(a.type=N.LINE_TO,a.x=a.relative?0:i),t&&a.type&N.CLOSE_PATH&&(a.type=N.LINE_TO,a.x=a.relative?o-i:o,a.y=a.relative?s-n:s),a.type&N.ARC&&(0===a.rX||0===a.rY)&&(a.type=N.LINE_TO,delete a.rX,delete a.rY,delete a.xRot,delete a.lArcFlag,delete a.sweepFlag),a}))},t.NORMALIZE_ST=e,t.QT_TO_C=a,t.INFO=i,t.SANITIZE=function(t){void 0===t&&(t=0),o(t);var r=NaN,e=NaN,a=NaN,n=NaN;return i((function(i,o,s,u,h){var c=Math.abs,m=!1,y=0,p=0;if(i.type&N.SMOOTH_CURVE_TO&&(y=isNaN(r)?0:o-r,p=isNaN(e)?0:s-e),i.type&(N.CURVE_TO|N.SMOOTH_CURVE_TO)?(r=i.relative?o+i.x2:i.x2,e=i.relative?s+i.y2:i.y2):(r=NaN,e=NaN),i.type&N.SMOOTH_QUAD_TO?(a=isNaN(a)?o:2*o-a,n=isNaN(n)?s:2*s-n):i.type&N.QUAD_TO?(a=i.relative?o+i.x1:i.x1,n=i.relative?s+i.y1:i.y2):(a=NaN,n=NaN),i.type&N.LINE_COMMANDS||i.type&N.ARC&&(0===i.rX||0===i.rY||!i.lArcFlag)||i.type&N.CURVE_TO||i.type&N.SMOOTH_CURVE_TO||i.type&N.QUAD_TO||i.type&N.SMOOTH_QUAD_TO){var T=void 0===i.x?0:i.relative?i.x:i.x-o,f=void 0===i.y?0:i.relative?i.y:i.y-s;y=isNaN(a)?void 0===i.x1?y:i.relative?i.x:i.x1-o:a-o,p=isNaN(n)?void 0===i.y1?p:i.relative?i.y:i.y1-s:n-s;var O=void 0===i.x2?0:i.relative?i.x:i.x2-o,l=void 0===i.y2?0:i.relative?i.y:i.y2-s;c(T)<=t&&c(f)<=t&&c(y)<=t&&c(p)<=t&&c(O)<=t&&c(l)<=t&&(m=!0)}return i.type&N.CLOSE_PATH&&c(o-u)<=t&&c(s-h)<=t&&(m=!0),m?[]:i}))},t.MATRIX=s,t.ROTATE=function(t,r,e){void 0===r&&(r=0),void 0===e&&(e=0),o(t,r,e);var a=Math.sin(t),i=Math.cos(t);return s(i,a,-a,i,r-r*i+e*a,e-r*a-e*i)},t.TRANSLATE=function(t,r){return void 0===r&&(r=0),o(t,r),s(1,0,0,1,t,r)},t.SCALE=function(t,r){return void 0===r&&(r=t),o(t,r),s(t,0,0,r,0,0)},t.SKEW_X=function(t){return o(t),s(1,0,Math.atan(t),1,0,0)},t.SKEW_Y=function(t){return o(t),s(1,Math.atan(t),0,1,0,0)},t.X_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),o(t),s(-1,0,0,1,t,0)},t.Y_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),o(t),s(1,0,0,-1,0,t)},t.A_TO_C=function(){return i((function(t,r,e){return N.ARC===t.type?function(t,r,e){var a,i,o,s;t.cX||u(t,r,e);for(var h=Math.min(t.phi1,t.phi2),y=Math.max(t.phi1,t.phi2)-h,p=Math.ceil(y/90),T=new Array(p),f=r,O=e,l=0;l<p;l++){var v=m(t.phi1,t.phi2,l/p),_=m(t.phi1,t.phi2,(l+1)/p),x=_-v,d=4/3*Math.tan(x*c/4),A=[Math.cos(v*c)-d*Math.sin(v*c),Math.sin(v*c)+d*Math.cos(v*c)],E=A[0],C=A[1],M=[Math.cos(_*c),Math.sin(_*c)],R=M[0],S=M[1],g=[R+d*Math.sin(_*c),S-d*Math.cos(_*c)],I=g[0],V=g[1];T[l]={relative:t.relative,type:N.CURVE_TO};var D=function(r,e){var a=n([r*t.rX,e*t.rY],t.xRot),i=a[0],o=a[1];return[t.cX+i,t.cY+o]};a=D(E,C),T[l].x1=a[0],T[l].y1=a[1],i=D(I,V),T[l].x2=i[0],T[l].y2=i[1],o=D(R,S),T[l].x=o[0],T[l].y=o[1],t.relative&&(T[l].x1-=f,T[l].y1-=O,T[l].x2-=f,T[l].y2-=O,T[l].x-=f,T[l].y-=O),f=(s=[T[l].x,T[l].y])[0],O=s[1]}return T}(t,t.relative?0:r,t.relative?0:e):t}))},t.ANNOTATE_ARCS=function(){return i((function(t,r,e){return t.relative&&(r=0,e=0),N.ARC===t.type&&u(t,r,e),t}))},t.CLONE=f,t.CALCULATE_BOUNDS=function(){var t=function(t){var r={};for(var e in t)r[e]=t[e];return r},n=r(),o=a(),s=e(),c=i((function(r,e,a){var i=s(o(n(t(r))));function m(t){t>c.maxX&&(c.maxX=t),t<c.minX&&(c.minX=t)}function f(t){t>c.maxY&&(c.maxY=t),t<c.minY&&(c.minY=t)}if(i.type&N.DRAWING_COMMANDS&&(m(e),f(a)),i.type&N.HORIZ_LINE_TO&&m(i.x),i.type&N.VERT_LINE_TO&&f(i.y),i.type&N.LINE_TO&&(m(i.x),f(i.y)),i.type&N.CURVE_TO){m(i.x),f(i.y);for(var O=0,l=p(e,i.x1,i.x2,i.x);O<l.length;O++)0<(H=l[O])&&1>H&&m(T(e,i.x1,i.x2,i.x,H));for(var v=0,_=p(a,i.y1,i.y2,i.y);v<_.length;v++)0<(H=_[v])&&1>H&&f(T(a,i.y1,i.y2,i.y,H))}if(i.type&N.ARC){m(i.x),f(i.y),u(i,e,a);for(var x=i.xRot/180*Math.PI,d=Math.cos(x)*i.rX,A=Math.sin(x)*i.rX,E=-Math.sin(x)*i.rY,C=Math.cos(x)*i.rY,M=i.phi1<i.phi2?[i.phi1,i.phi2]:-180>i.phi2?[i.phi2+360,i.phi1+360]:[i.phi2,i.phi1],R=M[0],S=M[1],g=function(t){var r=t[0],e=t[1],a=180*Math.atan2(e,r)/Math.PI;return a<R?a+360:a},I=0,V=h(E,-d,0).map(g);I<V.length;I++)(H=V[I])>R&&H<S&&m(y(i.cX,d,E,H));for(var D=0,L=h(C,-A,0).map(g);D<L.length;D++){var H;(H=L[D])>R&&H<S&&f(y(i.cY,A,C,H))}}return r}));return c.minX=1/0,c.maxX=-1/0,c.minY=1/0,c.maxY=-1/0,c}}(t.SVGPathDataTransformer||(t.SVGPathDataTransformer={}));var f,O=function(){function r(){}return r.prototype.round=function(r){return this.transform(t.SVGPathDataTransformer.ROUND(r))},r.prototype.toAbs=function(){return this.transform(t.SVGPathDataTransformer.TO_ABS())},r.prototype.toRel=function(){return this.transform(t.SVGPathDataTransformer.TO_REL())},r.prototype.normalizeHVZ=function(r,e,a){return this.transform(t.SVGPathDataTransformer.NORMALIZE_HVZ(r,e,a))},r.prototype.normalizeST=function(){return this.transform(t.SVGPathDataTransformer.NORMALIZE_ST())},r.prototype.qtToC=function(){return this.transform(t.SVGPathDataTransformer.QT_TO_C())},r.prototype.aToC=function(){return this.transform(t.SVGPathDataTransformer.A_TO_C())},r.prototype.sanitize=function(r){return this.transform(t.SVGPathDataTransformer.SANITIZE(r))},r.prototype.translate=function(r,e){return this.transform(t.SVGPathDataTransformer.TRANSLATE(r,e))},r.prototype.scale=function(r,e){return this.transform(t.SVGPathDataTransformer.SCALE(r,e))},r.prototype.rotate=function(r,e,a){return this.transform(t.SVGPathDataTransformer.ROTATE(r,e,a))},r.prototype.matrix=function(r,e,a,i,n,o){return this.transform(t.SVGPathDataTransformer.MATRIX(r,e,a,i,n,o))},r.prototype.skewX=function(r){return this.transform(t.SVGPathDataTransformer.SKEW_X(r))},r.prototype.skewY=function(r){return this.transform(t.SVGPathDataTransformer.SKEW_Y(r))},r.prototype.xSymmetry=function(r){return this.transform(t.SVGPathDataTransformer.X_AXIS_SYMMETRY(r))},r.prototype.ySymmetry=function(r){return this.transform(t.SVGPathDataTransformer.Y_AXIS_SYMMETRY(r))},r.prototype.annotateArcs=function(){return this.transform(t.SVGPathDataTransformer.ANNOTATE_ARCS())},r}(),l=function(t){return" "===t||"\t"===t||"\r"===t||"\n"===t},v=function(t){return"0".charCodeAt(0)<=t.charCodeAt(0)&&t.charCodeAt(0)<="9".charCodeAt(0)},_=function(t){function r(){var r=t.call(this)||this;return r.curNumber="",r.curCommandType=-1,r.curCommandRelative=!1,r.canParseCommandOrComma=!0,r.curNumberHasExp=!1,r.curNumberHasExpDigits=!1,r.curNumberHasDecimal=!1,r.curArgs=[],r}return e(r,t),r.prototype.finish=function(t){if(void 0===t&&(t=[]),this.parse(" ",t),0!==this.curArgs.length||!this.canParseCommandOrComma)throw new SyntaxError("Unterminated command at the path end.");return t},r.prototype.parse=function(t,r){var e=this;void 0===r&&(r=[]);for(var a=function(t){r.push(t),e.curArgs.length=0,e.canParseCommandOrComma=!0},i=0;i<t.length;i++){var n=t[i],o=!(this.curCommandType!==N.ARC||3!==this.curArgs.length&&4!==this.curArgs.length||1!==this.curNumber.length||"0"!==this.curNumber&&"1"!==this.curNumber),s=v(n)&&("0"===this.curNumber&&"0"===n||o);if(!v(n)||s)if("e"!==n&&"E"!==n)if("-"!==n&&"+"!==n||!this.curNumberHasExp||this.curNumberHasExpDigits)if("."!==n||this.curNumberHasExp||this.curNumberHasDecimal||o){if(this.curNumber&&-1!==this.curCommandType){var u=Number(this.curNumber);if(isNaN(u))throw new SyntaxError("Invalid number ending at "+i);if(this.curCommandType===N.ARC)if(0===this.curArgs.length||1===this.curArgs.length){if(0>u)throw new SyntaxError('Expected positive number, got "'+u+'" at index "'+i+'"')}else if((3===this.curArgs.length||4===this.curArgs.length)&&"0"!==this.curNumber&&"1"!==this.curNumber)throw new SyntaxError('Expected a flag, got "'+this.curNumber+'" at index "'+i+'"');this.curArgs.push(u),this.curArgs.length===x[this.curCommandType]&&(N.HORIZ_LINE_TO===this.curCommandType?a({type:N.HORIZ_LINE_TO,relative:this.curCommandRelative,x:u}):N.VERT_LINE_TO===this.curCommandType?a({type:N.VERT_LINE_TO,relative:this.curCommandRelative,y:u}):this.curCommandType===N.MOVE_TO||this.curCommandType===N.LINE_TO||this.curCommandType===N.SMOOTH_QUAD_TO?(a({type:this.curCommandType,relative:this.curCommandRelative,x:this.curArgs[0],y:this.curArgs[1]}),N.MOVE_TO===this.curCommandType&&(this.curCommandType=N.LINE_TO)):this.curCommandType===N.CURVE_TO?a({type:N.CURVE_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x2:this.curArgs[2],y2:this.curArgs[3],x:this.curArgs[4],y:this.curArgs[5]}):this.curCommandType===N.SMOOTH_CURVE_TO?a({type:N.SMOOTH_CURVE_TO,relative:this.curCommandRelative,x2:this.curArgs[0],y2:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===N.QUAD_TO?a({type:N.QUAD_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===N.ARC&&a({type:N.ARC,relative:this.curCommandRelative,rX:this.curArgs[0],rY:this.curArgs[1],xRot:this.curArgs[2],lArcFlag:this.curArgs[3],sweepFlag:this.curArgs[4],x:this.curArgs[5],y:this.curArgs[6]})),this.curNumber="",this.curNumberHasExpDigits=!1,this.curNumberHasExp=!1,this.curNumberHasDecimal=!1,this.canParseCommandOrComma=!0}if(!l(n))if(","===n&&this.canParseCommandOrComma)this.canParseCommandOrComma=!1;else if("+"!==n&&"-"!==n&&"."!==n)if(s)this.curNumber=n,this.curNumberHasDecimal=!1;else{if(0!==this.curArgs.length)throw new SyntaxError("Unterminated command at index "+i+".");if(!this.canParseCommandOrComma)throw new SyntaxError('Unexpected character "'+n+'" at index '+i+". Command cannot follow comma");if(this.canParseCommandOrComma=!1,"z"!==n&&"Z"!==n)if("h"===n||"H"===n)this.curCommandType=N.HORIZ_LINE_TO,this.curCommandRelative="h"===n;else if("v"===n||"V"===n)this.curCommandType=N.VERT_LINE_TO,this.curCommandRelative="v"===n;else if("m"===n||"M"===n)this.curCommandType=N.MOVE_TO,this.curCommandRelative="m"===n;else if("l"===n||"L"===n)this.curCommandType=N.LINE_TO,this.curCommandRelative="l"===n;else if("c"===n||"C"===n)this.curCommandType=N.CURVE_TO,this.curCommandRelative="c"===n;else if("s"===n||"S"===n)this.curCommandType=N.SMOOTH_CURVE_TO,this.curCommandRelative="s"===n;else if("q"===n||"Q"===n)this.curCommandType=N.QUAD_TO,this.curCommandRelative="q"===n;else if("t"===n||"T"===n)this.curCommandType=N.SMOOTH_QUAD_TO,this.curCommandRelative="t"===n;else{if("a"!==n&&"A"!==n)throw new SyntaxError('Unexpected character "'+n+'" at index '+i+".");this.curCommandType=N.ARC,this.curCommandRelative="a"===n}else r.push({type:N.CLOSE_PATH}),this.canParseCommandOrComma=!0,this.curCommandType=-1}else this.curNumber=n,this.curNumberHasDecimal="."===n}else this.curNumber+=n,this.curNumberHasDecimal=!0;else this.curNumber+=n;else this.curNumber+=n,this.curNumberHasExp=!0;else this.curNumber+=n,this.curNumberHasExpDigits=this.curNumberHasExp}return r},r.prototype.transform=function(t){return Object.create(this,{parse:{value:function(r,e){void 0===e&&(e=[]);for(var a=0,i=Object.getPrototypeOf(this).parse.call(this,r);a<i.length;a++){var n=i[a],o=t(n);Array.isArray(o)?e.push.apply(e,o):e.push(o)}return e}}})},r}(O),N=function(r){function a(t){var e=r.call(this)||this;return e.commands="string"==typeof t?a.parse(t):t,e}return e(a,r),a.prototype.encode=function(){return a.encode(this.commands)},a.prototype.getBounds=function(){var r=t.SVGPathDataTransformer.CALCULATE_BOUNDS();return this.transform(r),r},a.prototype.transform=function(t){for(var r=[],e=0,a=this.commands;e<a.length;e++){var i=t(a[e]);Array.isArray(i)?r.push.apply(r,i):r.push(i)}return this.commands=r,this},a.encode=function(t){return i(t)},a.parse=function(t){var r=new _,e=[];return r.parse(t,e),r.finish(e),e},a.CLOSE_PATH=1,a.MOVE_TO=2,a.HORIZ_LINE_TO=4,a.VERT_LINE_TO=8,a.LINE_TO=16,a.CURVE_TO=32,a.SMOOTH_CURVE_TO=64,a.QUAD_TO=128,a.SMOOTH_QUAD_TO=256,a.ARC=512,a.LINE_COMMANDS=a.LINE_TO|a.HORIZ_LINE_TO|a.VERT_LINE_TO,a.DRAWING_COMMANDS=a.HORIZ_LINE_TO|a.VERT_LINE_TO|a.LINE_TO|a.CURVE_TO|a.SMOOTH_CURVE_TO|a.QUAD_TO|a.SMOOTH_QUAD_TO|a.ARC,a}(O),x=((f={})[N.MOVE_TO]=2,f[N.LINE_TO]=2,f[N.HORIZ_LINE_TO]=1,f[N.VERT_LINE_TO]=1,f[N.CLOSE_PATH]=0,f[N.QUAD_TO]=4,f[N.SMOOTH_QUAD_TO]=2,f[N.CURVE_TO]=6,f[N.SMOOTH_CURVE_TO]=4,f[N.ARC]=7,f);t.COMMAND_ARG_COUNTS=x,t.SVGPathData=N,t.SVGPathDataParser=_,t.encodeSVGPath=i,Object.defineProperty(t,"__esModule",{value:!0})}(e.exports)),e.exports}var i=a();export{i as S,a as r};

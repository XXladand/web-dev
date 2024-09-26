import{S as e}from"./signature_pad-edH0THtw.js";import{m as t}from"./merge-images-Cwm9rL5U.js";import{d as a,ag as i}from"./@vue-CX_mlhJe.js";const s=["image/png","image/jpeg","image/svg+xml"],r={dotSize:1.5,minWidth:.5,maxWidth:2.5,throttle:16,minDistance:5,backgroundColor:"rgba(0,0,0,0)",penColor:"black",velocityFilterWeight:.7,onBegin:()=>{},onEnd:()=>{}},n=e=>JSON.parse(JSON.stringify(e)),o={src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",x:0,y:0};var g=a({name:"VueSignaturePad",props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"},customStyle:{type:Object,default:()=>({})},options:{type:Object,default:()=>({})},images:{type:Array,default:()=>[]},scaleToDevicePixelRatio:{type:Boolean,default:()=>!0}},data:()=>({signaturePad:{},cacheImages:[],signatureData:o,onResizeHandler:null}),computed:{propsImagesAndCustomImages(){return[...n(this.images),...n(this.cacheImages)]}},watch:{options:function(e){Object.keys(e).forEach((t=>{this.signaturePad[t]&&(this.signaturePad[t]=e[t])}))}},mounted(){const{options:t}=this,a=this.$refs.signaturePadCanvas,i=new e(a,{...r,...t});this.signaturePad=i,t.resizeHandler&&(this.resizeCanvas=t.resizeHandler.bind(this)),this.onResizeHandler=this.resizeCanvas.bind(this),window.addEventListener("resize",this.onResizeHandler,!1),this.resizeCanvas()},beforeUnmount(){this.onResizeHandler&&window.removeEventListener("resize",this.onResizeHandler,!1)},methods:{resizeCanvas(){const e=this.$refs.signaturePadCanvas,t=this.signaturePad.toData(),a=this.scaleToDevicePixelRatio?Math.max(window.devicePixelRatio||1,1):1;e.width=e.offsetWidth*a,e.height=e.offsetHeight*a,e.getContext("2d").scale(a,a),this.signaturePad.clear(),this.signatureData=o,this.signaturePad.fromData(t)},saveSignature(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s[0],t=arguments.length>1?arguments[1]:void 0;const{signaturePad:a}=this,i={isEmpty:!1,data:void 0};if(!(e=>s.includes(e))(e)){const e=s.join(", ");throw new Error(`The Image type is incorrect! We are support ${e} types.`)}return a.isEmpty()?{...i,isEmpty:!0}:(this.signatureData=a.toDataURL(e,t),{...i,data:this.signatureData})},undoSignature(){const{signaturePad:e}=this,t=e.toData();if(t)return e.fromData(t.slice(0,-1))},mergeImageAndSignature(e){return this.signatureData=e,t([...this.images,...this.cacheImages,this.signatureData])},addImages(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this.cacheImages=[...this.cacheImages,...e],t([...this.images,...this.cacheImages,this.signatureData])},fromDataURL(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;return this.signaturePad.fromDataURL(e,t,a)},fromData(e){return this.signaturePad.fromData(e)},toData(){return this.signaturePad.toData()},lockSignaturePad(){return this.signaturePad.off()},openSignaturePad(){return this.signaturePad.on()},isEmpty(){return this.signaturePad.isEmpty()},getPropImagesAndCacheImages(){return this.propsImagesAndCustomImages},clearCacheImages(){return this.cacheImages=[],this.cacheImages},clearSignature(){return this.signaturePad.clear()}},render(){const{width:e,height:t,customStyle:a}=this;return i("div",{style:{width:e,height:t,...a}},[i("canvas",{style:{width:e,height:t},ref:"signaturePadCanvas"})])}});g.__file="src/components/VueSignaturePad.vue";var h=Object.freeze({__proto__:null,VueSignaturePad:g});const d=function(e){Object.entries(h).forEach((t=>{let[a,i]=t;e.component(a,i)}))};export{d as i};

import{r as a}from"./request-Cv12-fnH.js";const e=e=>a({url:"/api/netSearch/add",method:"post",data:e}),t=e=>a({url:"/api/netSearch/delete",method:"post",data:e}),g=e=>a({url:"/api/netSearch/update",method:"post",data:e}),n=e=>a({url:"/api/netSearch/page",method:"post",data:e}),o=e=>a({url:"/api/netSearch/RunSearchTask",method:"post",data:e}),r=e=>a({url:"/api/netSearch/detail",method:"get",data:{id:e}});var i=(a=>(a[a.Bing=1]="Bing",a[a.Google=2]="Google",a))(i||{}),d=(a=>(a[a.BingLanguageRegion=1]="BingLanguageRegion",a[a.BingLanguage=2]="BingLanguage",a[a.BingRegion=3]="BingRegion",a[a.GoogleLanguage=4]="GoogleLanguage",a[a.GoogleRegion=5]="GoogleRegion",a[a.BingTranslate=6]="BingTranslate",a))(d||{});const s=e=>a({url:"/api/netSearch/getLangRegionList",method:"get",data:e}),h=e=>a({url:"/api/netSearch/GenerateQuery",method:"get",data:{keyWord:e}}),l=(e,t,g,n)=>a({url:"/api/netSearch/SearchBing",method:"get",data:{keyWord:e,lang:t,region:g,timeRange:n}}),u=(e,t,g,n)=>a({url:"/api/netSearch/SearchGoogle",method:"get",data:{keyWord:e,lang:t,region:g,timeRange:n}});export{d as E,s as G,e as a,i as b,l as c,r as d,t as e,h as g,n as p,o as r,u as s,g as u};

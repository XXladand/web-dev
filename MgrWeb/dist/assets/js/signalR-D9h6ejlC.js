import{d as e}from"./index-DWGcUZYU.js";import{e as n}from"./element-plus-B9gGnqkL.js";import{H as o,L as t,a as i}from"./@microsoft-BNXrp5LF.js";const s=(new o).configureLogging(t.Information).withUrl(`${window.__env__.VITE_API_URL}/hubs/onlineUser?token=${e()}`,{transport:i.WebSockets,skipNegotiation:!0}).withAutomaticReconnect({nextRetryDelayInMilliseconds:()=>5e3}).build();s.keepAliveIntervalInMilliseconds=15e3,s.serverTimeoutInMilliseconds=18e5,s.start().then((()=>{})),s.onclose((async()=>{})),s.onreconnecting((()=>{n({title:"提示",message:"服务器已断线...",type:"error",position:"bottom-right"})})),s.onreconnected((()=>{})),s.on("OnlineUserList",(()=>{}));export{s as c};

import{R as e,S as l,T as a,U as t,P as o}from"./@element-plus-BOmeTCVz.js";import{m as u}from"./mqtt-BarZW3Jq.js";import{d,r as s,_ as n,j as c,n as i,ah as A,ap as p,o as r,c as b,V as v,P as m,u as h,K as _,T as f,U as y,O as S,S as g,F as k,a8 as w,a as V,Q as C,bm as T,bk as q}from"./@vue-CX_mlhJe.js";import{_ as U}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./@babel-Q_QrznUx.js";const x=e=>(T("data-v-9e1e0b7e"),e=e(),q(),e),R={class:"mqtt-box"},I=x((()=>V("h1",{class:"header"},"MQTTX在线测试客户端",-1))),P=x((()=>V("h1",null,"连接参数(Configuration)",-1))),B=x((()=>V("h1",null,"订阅(Subscribe)",-1))),j=x((()=>V("h1",null,"发布(Publish)",-1))),L=d({name:"mqttx"}),$=U(d({...L,setup(d){const T=[0,1,2],q=new Date,U=s(0),x=s(0),L=s(0),$=s(""),D=s("温度0℃,湿度0%"),F=s(0),M=s({connected:!1}),Q=s(""),E=s(!1),O=s(!1),H=s(""),J=s(0),K=n({protocol:"ws",host:"broker.emqx.io",port:8083,clientId:"emqx_vue3_"+Math.random().toString(16).substring(2,8),username:"",password:"",repacket:"d1ca1ff51f04",dhtRegpack:"d1ca1ff51f04",mqttToken:"0804d4c44c1f1bd11dea461481f19868",keepalive:30,clean:!0,connectTimeout:3e4,reconnectPeriod:5e3,resubscribe:!0,subTopic:"mqtt/admintnet/#0#/out",willTopic:"mqtt/admintnet/#0#/will",dhtTopic:"mqtt/admintnet/#0#/dht",pubTopic:"mqtt/admintnet/#0#/into",subTopics:[],pubPayload:'{"msg":"hellow vue3 mqtt."}',onlineStatus:!1,ch1_Status:!1,ch2_Status:!1,ch3_Status:!1,ch4_Status:!1,all_Status:!1,isAC:null}),N=()=>{K.subTopic="mqtt/admintnet/#0#/out".replace("#0#",K.repacket),K.willTopic="mqtt/admintnet/#0#/will".replace("#0#",K.repacket),K.dhtTopic="mqtt/admintnet/#0#/dht".replace("#0#",K.dhtRegpack),K.pubTopic="mqtt/admintnet/#0#/into".replace("#0#",K.repacket),K.subTopics=[K.subTopic,K.willTopic,K.dhtTopic],K.pubPayload='{"token":"{0}","cmd":"{1}","cmdpara":"{2}","clientid":"{3}"}'},X=()=>{K.dhtRegpack=K.repacket},z=(e,l)=>{for(let a=0;a<l.length;a++){let t=new RegExp("\\{"+a+"\\}","gi");e=e.replace(t,l[a])}return e};c((async()=>{N(),i((()=>{}))}));const G=s({topic:"$(connection.subTopics.value)",qos:0}),W=s({topic:`${K.pubTopic}`,qos:0,retain:!1,payload:"55 AA AA AA AA 91 CF"}),Y=()=>{M.value={connected:!1},J.value=0,H.value="",E.value=!1},Z=()=>{if(J.value++,K.clientId="emqx_vue3_"+Math.random().toString(16).substring(2,8),J.value>5)try{M.value.end(),Y(),de(q.toLocaleString()+"|超出重连接次数，停止重试"+J.value)}catch(e){}},ee=()=>{try{H.value="connect";const{protocol:e,host:l,port:a,...t}=K,o=`${e}://${l}:${a}/mqtt`;M.value=u.connect(o,t),M.value.on&&(M.value.on("connect",(()=>{H.value="",O.value=!0,de(q.toLocaleString()+"|连接服务成功")})),M.value.on("reconnect",Z),M.value.on("error",(e=>{de(q.toLocaleString()+"|发生错误："+e)})),M.value.on("message",((e,l)=>{U.value++,le(e,l),Q.value=Q.value.concat(q.toLocaleString()+` ${e}\r\n`+l.toString()+"\r\n"),i((()=>{setTimeout((()=>{te()}),50)}))})))}catch(e){H.value=""}},le=(e,l)=>{let a=JSON.parse(l.toString()),t=a.regpacket,o=K.repacket;if(t==o&&null!=t){if(e==K.dhtTopic){let e=a.regpacket,l=a.temperature,t=a.humidity,o=a.time,u=a.runsec;if(e!=K.dhtRegpack)return;null!=e&&(x.value=l,L.value=t,$.value="更新时间:"+o,F.value=u,D.value="温度:"+x.value+"℃,湿度:"+L.value+"%")}if(e==K.willTopic&&("offline"==a.redata?K.onlineStatus=!1:K.onlineStatus=!0),e==K.subTopic){let e=a.regpacket;null!=e&&e==o&&ae(a.redata)}}},ae=e=>{"55 AA AA AA AA 82 01 01"==e&&(K.ch1_Status=!0),"55 AA AA AA AA 82 01 00"==e&&(K.ch1_Status=!1),"55 AA AA AA AA 82 02 01"==e&&(K.ch2_Status=!0),"55 AA AA AA AA 82 02 00"==e&&(K.ch2_Status=!1),"55 AA AA AA AA 82 03 01"==e&&(K.ch3_Status=!0),"55 AA AA AA AA 82 03 00"==e&&(K.ch3_Status=!1),"55 AA AA AA AA 82 04 01"==e&&(K.ch4_Status=!0),"55 AA AA AA AA 82 04 00"==e&&(K.ch4_Status=!1),"55 AA AA AA AA 82 A4 01"==e&&(K.ch1_Status=!0,K.ch2_Status=!0,K.ch3_Status=!0,K.ch4_Status=!0),"55 AA AA AA AA 82 A4 00"==e&&(K.ch1_Status=!1,K.ch2_Status=!1,K.ch3_Status=!1,K.ch4_Status=!1),"55 AA AA AA AA 84 AC 01"==e&&(K.isAC=!0),"55 AA AA AA AA 84 AC 00"==e&&(K.isAC=!1),K.ch1_Status&&K.ch2_Status&&K.ch3_Status&&K.ch4_Status&&(K.all_Status=!0),K.ch1_Status||K.ch2_Status||K.ch3_Status||K.ch4_Status||(K.all_Status=!1),"55 AA AA AA AA 84 AC 01"==e&&(K.isAC=!0),"55 AA AA AA AA 84 AC 00"==e&&(K.isAC=!1)},te=()=>{const e=document.getElementById("recv");e&&(e.scrollTop=e.scrollHeight-30)},oe=()=>{H.value="subscribe";const{topic:e,qos:l}=G.value;M.value.subscribe(K.subTopics,{qos:l},((e,l)=>{H.value="",e||(E.value=!0,se("55 AA AA AA AA 91 CF"))}))},ue=()=>{H.value="unsubscribe";const{topic:e,qos:l}=G.value;M.value.unsubscribe(K.subTopics,{qos:l},(e=>{H.value="",E.value=!1}))},de=e=>{Q.value=Q.value.concat(e+"\r\n")},se=e=>{if(!M.value.connected)return void de("尚未连接到服务!");let l=z(K.pubPayload,[K.mqttToken,e??W.value.payload,"",K.clientId]);const{topic:a,qos:t,payload:o,retain:u}=W.value;M.value.publish(K.pubTopic,l,{qos:t},u,(e=>{H.value=""}))},ne=()=>{if(M.value.connected){H.value="disconnect";try{M.value.end(!1,(()=>{Y(),O.value=!1,de(q.toLocaleString()+"|连接已断开.")}))}catch(e){H.value=""}}},ce=e=>{K.port="wss"===e?8084:8083},ie=()=>{Q.value=""};return(u,d)=>{const s=A("el-option"),n=A("el-select"),c=A("el-input"),x=A("el-form-item"),L=A("el-col"),J=A("el-button"),Y=A("el-row"),Z=A("el-form"),le=A("el-card"),ae=A("el-tag"),te=A("el-alert"),Ae=p("reclick");return r(),b("div",R,[I,v(le,{model:K},{default:m((()=>[P,v(Z,{"label-position":"top",model:K},{default:m((()=>[v(Y,{gutter:6},{default:m((()=>[v(L,{span:8},{default:m((()=>[v(x,{prop:"host",label:"协议|主机|端口"},{default:m((()=>[v(c,{modelValue:K.host,"onUpdate:modelValue":d[2]||(d[2]=e=>K.host=e),disabled:O.value,type:"password","show-password":""},{prepend:m((()=>[v(n,{modelValue:K.protocol,"onUpdate:modelValue":d[0]||(d[0]=e=>K.protocol=e),class:"w80",disabled:O.value,onChange:ce},{default:m((()=>[v(s,{label:"ws://",value:"ws"}),v(s,{label:"wss://",value:"wss"})])),_:1},8,["modelValue","disabled"])])),append:m((()=>[v(c,{modelValue:K.port,"onUpdate:modelValue":d[1]||(d[1]=e=>K.port=e),modelModifiers:{number:!0},type:"number",class:"w80",disabled:O.value,placeholder:"8083/8084"},null,8,["modelValue","disabled"])])),_:1},8,["modelValue","disabled"])])),_:1})])),_:1}),v(L,{span:0},{default:m((()=>[v(x,{prop:"clientId",label:"标识(Client ID)唯一性"},{default:m((()=>[v(c,{modelValue:K.clientId,"onUpdate:modelValue":d[3]||(d[3]=e=>K.clientId=e)},null,8,["modelValue"])])),_:1})])),_:1}),v(L,{span:0},{default:m((()=>[v(x,{prop:"username",label:"账号(Username)"},{default:m((()=>[v(c,{modelValue:K.username,"onUpdate:modelValue":d[4]||(d[4]=e=>K.username=e)},null,8,["modelValue"])])),_:1})])),_:1}),v(L,{span:0},{default:m((()=>[v(x,{prop:"password",label:"密码(Password)"},{default:m((()=>[v(c,{modelValue:K.password,"onUpdate:modelValue":d[5]||(d[5]=e=>K.password=e),type:"password","show-password":""},null,8,["modelValue"])])),_:1})])),_:1}),v(L,{span:4},{default:m((()=>[v(x,{prop:"regpacket",label:"设备包名(Regpacket)"},{default:m((()=>[v(c,{modelValue:K.repacket,"onUpdate:modelValue":d[6]||(d[6]=e=>K.repacket=e),disabled:O.value,onInput:X,onChange:N},null,8,["modelValue","disabled"])])),_:1})])),_:1}),v(L,{span:4},{default:m((()=>[v(x,{prop:"dhtRegpack",label:"共享传感器(dhtRegpacket)"},{default:m((()=>[v(c,{modelValue:K.dhtRegpack,"onUpdate:modelValue":d[7]||(d[7]=e=>K.dhtRegpack=e),disabled:O.value,onChange:N},null,8,["modelValue","disabled"])])),_:1})])),_:1}),v(L,{span:8,class:"text-right"},{default:m((()=>[v(J,{type:"primary",icon:h(e),class:"sub-btn",disabled:M.value.connected,onClick:ee,loading:"connect"===H.value,style:_({display:M.value.connected?"none":""})},{default:m((()=>[f(y(M.value.connected?"已连接(Connected)":"连接(Connect)"),1)])),_:1},8,["icon","disabled","loading","style"]),M.value.connected?(r(),S(J,{key:0,class:"sub-btn",type:"warning",icon:h(l),onClick:ne,loading:"disconnect"===H.value},{default:m((()=>[f(" 断开(Disconnect) ")])),_:1},8,["icon","loading"])):g("",!0)])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["model"]),v(le,{shadow:"hover"},{default:m((()=>[B,v(Z,{"label-position":"top",model:G.value},{default:m((()=>[v(Y,{gutter:6},{default:m((()=>[v(L,{span:12},{default:m((()=>[v(x,{prop:"topic",label:"订阅主题(Topic)"},{default:m((()=>[v(c,{modelValue:K.subTopics,"onUpdate:modelValue":d[8]||(d[8]=e=>K.subTopics=e),disabled:E.value,type:"password","show-password":""},null,8,["modelValue","disabled"])])),_:1})])),_:1}),v(L,{span:4},{default:m((()=>[v(x,{prop:"qos",label:"订阅质量(QoS)"},{default:m((()=>[v(n,{modelValue:G.value.qos,"onUpdate:modelValue":d[9]||(d[9]=e=>G.value.qos=e),disabled:E.value},{default:m((()=>[(r(),b(k,null,w(T,(e=>v(s,{key:e,label:0==e?"0 至多一次":1==e?"1 至少一次":"2 仅仅一次",value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue","disabled"])])),_:1})])),_:1}),v(L,{span:8,class:"text-right"},{default:m((()=>[v(J,{type:"primary",icon:h(a),class:"sub-btn",style:_({display:E.value?"none":""}),loading:"subscribe"===H.value,disabled:!M.value.connected||E.value,onClick:oe},{default:m((()=>[f(y(E.value?"已订阅(Subscribed)":"订阅(Subscribe)"),1)])),_:1},8,["icon","style","loading","disabled"]),E.value?(r(),S(J,{key:0,type:"warning",icon:h(l),class:"sub-btn",loading:"unsubscribe"===H.value,disabled:!M.value.connected,onClick:ue},{default:m((()=>[f(" 取消(Unsubscribe) ")])),_:1},8,["icon","loading","disabled"])):g("",!0)])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),v(le,{shadow:"hover"},{default:m((()=>[j,v(Z,{"label-position":"top",model:W.value},{default:m((()=>[v(Y,{gutter:6},{default:m((()=>[v(L,{span:8},{default:m((()=>[v(x,{prop:"topic",label:"发布主题(Topic)"},{default:m((()=>[v(c,{modelValue:K.pubTopic,"onUpdate:modelValue":d[10]||(d[10]=e=>K.pubTopic=e),type:"password","show-password":""},null,8,["modelValue"])])),_:1})])),_:1}),v(L,{span:4},{default:m((()=>[v(x,{prop:"qos",label:"发布质量(QoS)"},{default:m((()=>[v(n,{modelValue:W.value.qos,"onUpdate:modelValue":d[11]||(d[11]=e=>W.value.qos=e)},{default:m((()=>[(r(),b(k,null,w(T,(e=>v(s,{key:e,label:0==e?"0 至多一次":1==e?"1 至少一次":"2 仅仅一次",value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),v(L,{span:4},{default:m((()=>[v(x,{prop:"retain",label:"发布保留(Retain)"},{default:m((()=>[v(n,{modelValue:W.value.retain,"onUpdate:modelValue":d[12]||(d[12]=e=>W.value.retain=e)},{default:m((()=>[v(s,{value:"false",label:"false 不保留"}),v(s,{value:"true",label:"true 不保留"})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),v(Y,{gutter:6},{default:m((()=>[v(L,{span:16},{default:m((()=>[v(x,{prop:"payload",label:"操作指令(Payload)"},{default:m((()=>[v(c,{modelValue:W.value.payload,"onUpdate:modelValue":d[14]||(d[14]=e=>W.value.payload=e),clearable:"",maxlength:"64","show-word-limit":""},{append:m((()=>[v(n,{modelValue:W.value.payload,"onUpdate:modelValue":d[13]||(d[13]=e=>W.value.payload=e),placeholder:"选择指令",style:{width:"115px"}},{default:m((()=>[v(s,{label:"状态查询",value:"55 AA AA AA AA 91 CF"}),v(s,{label:"全部打开",value:"55 AA AA AA AA 81 A4 01"}),v(s,{label:"全部关闭",value:"55 AA AA AA AA 81 A4 00"}),v(s,{label:"一路开关",value:"55 AA AA AA AA 81 BA 01"}),v(s,{label:"二路开关",value:"55 AA AA AA AA 81 BA 02"}),v(s,{label:"三路开关",value:"55 AA AA AA AA 81 BA 03"}),v(s,{label:"四路开关",value:"55 AA AA AA AA 81 BA 04"})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1})])),_:1}),v(L,{span:8,class:"text-right"},{default:m((()=>[v(J,{type:"success",icon:h(t),class:"sub-btn",loading:"publish"===H.value,disabled:!M.value.connected,onClick:d[15]||(d[15]=e=>((e,l)=>{const{topic:a,qos:t,payload:o,retain:u}=W.value;let d=z(K.pubPayload,[K.mqttToken,e??W.value.payload,"",K.clientId]);M.value.publish(l??K.pubTopic,d,{qos:t},(e=>{i((()=>{setTimeout((()=>{H.value=""}),50)})),e&&de(q.toLocaleString()+"|发布消息错误."+e)}))})(W.value.payload,K.pubTopic))},{default:m((()=>[f(" 发布(Publish) ")])),_:1},8,["icon","loading","disabled"])])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),v(le,{shadow:"hover"},{default:m((()=>[V("h1",null,[v(J,{onClick:ie,type:"success",icon:h(o),title:"点击清空历史记录"},{default:m((()=>[f("接收(Receive)")])),_:1},8,["icon"]),v(ae,{title:"接收次数"},{default:m((()=>[f("收 "+y(U.value),1)])),_:1}),v(ae,{title:$.value},{default:m((()=>[f(y(D.value),1)])),_:1},8,["title"]),v(ae,{title:"设备已工作时长"},{default:m((()=>[f(y(parseInt(F.value))+" 秒",1)])),_:1}),K.ch1_Status?C((r(),S(J,{key:0,type:"success",title:"关闭一路",disabled:!K.onlineStatus||!M.value.connected,icon:"ele-Check",id:"ch1",onClick:d[16]||(d[16]=e=>se("55 AA AA AA AA 81 01 00"))},{default:m((()=>[f("关闭")])),_:1},8,["disabled"])),[[Ae,2e3]]):C((r(),S(J,{key:1,type:"warning",title:"打开一路",disabled:!K.onlineStatus||!M.value.connected,icon:"ele-CloseBold",id:"ch1",onClick:d[17]||(d[17]=e=>se("55 AA AA AA AA 81 01 01"))},{default:m((()=>[f("打开")])),_:1},8,["disabled"])),[[Ae,2e3]]),K.ch2_Status?C((r(),S(J,{key:2,type:"success",title:"关闭二路",disabled:!K.onlineStatus||!M.value.connected,icon:"ele-Check",id:"ch2",onClick:d[18]||(d[18]=e=>se("55 AA AA AA AA 81 02 00"))},{default:m((()=>[f("关闭")])),_:1},8,["disabled"])),[[Ae,2e3]]):C((r(),S(J,{key:3,type:"warning",title:"打开二路",disabled:!K.onlineStatus||!M.value.connected,icon:"ele-CloseBold",id:"ch2",onClick:d[19]||(d[19]=e=>se("55 AA AA AA AA 81 02 01"))},{default:m((()=>[f("打开")])),_:1},8,["disabled"])),[[Ae,2e3]]),K.ch3_Status?C((r(),S(J,{key:4,type:"success",title:"关闭三路",disabled:!K.onlineStatus||!M.value.connected,icon:"ele-Check",id:"ch3",onClick:d[20]||(d[20]=e=>se("55 AA AA AA AA 81 03 00"))},{default:m((()=>[f("关闭")])),_:1},8,["disabled"])),[[Ae,2e3]]):C((r(),S(J,{key:5,type:"warning",title:"打开三路",disabled:!K.onlineStatus||!M.value.connected,icon:"ele-CloseBold",id:"ch3",onClick:d[21]||(d[21]=e=>se("55 AA AA AA AA 81 03 01"))},{default:m((()=>[f("打开")])),_:1},8,["disabled"])),[[Ae,2e3]]),K.ch4_Status?C((r(),S(J,{key:6,type:"success",title:"关闭四路",disabled:!K.onlineStatus||!M.value.connected,icon:"ele-Check",id:"ch4",onClick:d[22]||(d[22]=e=>se("55 AA AA AA AA 81 04 00"))},{default:m((()=>[f("关闭")])),_:1},8,["disabled"])),[[Ae,2e3]]):C((r(),S(J,{key:7,type:"warning",title:"打开四路",disabled:!K.onlineStatus||!M.value.connected,icon:"ele-CloseBold",id:"ch4",onClick:d[23]||(d[23]=e=>se("55 AA AA AA AA 81 04 01"))},{default:m((()=>[f("打开")])),_:1},8,["disabled"])),[[Ae,2e3]]),K.all_Status?(r(),S(J,{key:8,type:"danger",title:"四路全部关闭",disabled:!K.onlineStatus||!M.value.connected,icon:"ele-SwitchButton",id:"ch5",onClick:d[24]||(d[24]=e=>se("55 AA AA AA AA 81 A4 00"))},{default:m((()=>[f("全关")])),_:1},8,["disabled"])):(r(),S(J,{key:9,type:"success",title:"四路全部打开",disabled:!K.onlineStatus||!M.value.connected,icon:"ele-Switch",id:"ch5",onClick:d[25]||(d[25]=e=>se("55 AA AA AA AA 81 A4 01"))},{default:m((()=>[f("全开")])),_:1},8,["disabled"])),M.value.connected&&K.onlineStatus?g("",!0):(r(),S(te,{key:10,title:"网络服务断开或设备离线!",center:"",type:"warning",effect:"light",style:{"margin-top":"4px"}}))]),v(L,{span:24},{default:m((()=>[v(c,{type:"textarea",rows:8,id:"recv",modelValue:Q.value,"onUpdate:modelValue":d[26]||(d[26]=e=>Q.value=e),readonly:"",class:"log"},null,8,["modelValue"])])),_:1})])),_:1})])}}}),[["__scopeId","data-v-9e1e0b7e"]]);export{$ as default};
var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,o=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&a(e,r,t[r]);if(n)for(var r of n(t))s.call(t,r)&&a(e,r,t[r]);return e},c=(e,n)=>t(e,r(n));"undefined"!=typeof require&&require;import{r as i,R as u,u as m,J as d,F as p,c as f,H as E,L as h,S as y,a as v,b as g,d as b}from"./vendor.4542b73f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var x=(e={})=>{var t;const r=i.exports.useRef(0),[n,l]=i.exports.useState(e.src||(null==(t=e.srclist)?void 0:t[r.current++||0]));return u.createElement("img",c(o({},e),{src:n,onError:()=>{const t=e.srclist[r.current++||0];t&&l(t)}}))};const _="_square-100_da0le_9",w="_noselect_da0le_14";const k="https://img.icons8.com/glyph-neue/2x/easy.png",S="https://www.easyicon.cc/icon/tabler-icons/node_modules/@tabler/icons/icons/mood-smile.svg";const N=()=>{},C=async(e,t)=>(await((e=1e3)=>new Promise((t=>setTimeout(t,e))))(t),e);var O=({killMyself:e=N})=>{const[t,r]=i.exports.useState(0);return i.exports.useEffect((()=>{C("response",1e3).then(r),setTimeout(e,500)}),[]),u.createElement("div",null,"child: ",t)},R=({killMyself:e=N})=>{const[t,r]=(e=>{const[t,r]=i.exports.useState(e),n=i.exports.useRef(!1);return i.exports.useEffect((()=>()=>n.current=!0)),[t,n.current?N:r]})(0);return i.exports.useEffect((()=>{C("response",1e3).then(r),setTimeout(e,500)}),[]),u.createElement("div",null,"child: ",t)};const L=({get:e,set:t})=>({count:1,increase(){const{count:r}=e();t({count:r+1})},decrease(){const{count:r}=e();t({count:r-1})}});var j=()=>{const{count:e,increase:t,decrease:r}=m(L);return u.createElement("div",null,u.createElement("p",null,e),u.createElement("button",{onClick:r},"minus"))},A=()=>{const{count:e,increase:t,decrease:r}=m(L);return u.createElement("div",null,u.createElement("p",null,e),u.createElement("button",{onClick:t},"add"))};const P=e=>e.substring(e.lastIndexOf("/")+1),I=(e="")=>{const t=P(e),r=t.split(".").pop()||"png",n=document.createElement("canvas"),l=document.createElement("img");l.onload=()=>{n.width=l.width,n.height=l.height;n.getContext("2d").drawImage(l,0,0,l.width,l.height),n.getContext("2d").drawImage(l,0,0,l.width,l.height),n.toBlob((e=>{const r=document.createElement("a");r.href=window.URL.createObjectURL(e),r.download=t,r.click()}),`image/${r}`)},l.setAttribute("crossOrigin","Anonymous"),l.src=e},$=(e,t="打包下载")=>{if(!(e.length>0))return;const r=new d,n={},l=e.map((e=>{return(t=e,new Promise((e=>{const r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="blob",r.onload=()=>200===r.status&&e(r.response),r.send()}))).then((t=>{const l=P(e);r.file(l,t,{binary:!0}),n[l]=t}));var t}));Promise.all(l).then((()=>{r.generateAsync({type:"blob"}).then((e=>{p.saveAs(e,`${t}.zip`)}))}))},D=e=>{Array.isArray(e)?e.length>1?$(e):I(e.slice(0).pop()):I(e)};const M="/2.jpeg",V="/3.jpeg";var T=({value:e=0,itemStyle:t,updateRecycle:r}={})=>{const n=i.exports.useRef(!0),[{transition:l,transformValue:s,prevValue:a},m]=i.exports.useState({transition:!1,transformValue:0,prevValue:0});i.exports.useEffect((()=>{m((t=>c(o({},t),{transition:!0,transformValue:-100*(e+(e<a?10:0))-(r||n.current?1e3:0)})))}),[e]),i.exports.useEffect((()=>n.current=!1),[]);return u.createElement("div",{className:"_roll-number-content_13d96_1",onTransitionEnd:()=>{m((t=>c(o({},t),{transition:!1,transformValue:-100*e,prevValue:e})))}},[...Array(10).keys(),...Array(10).keys()].map(((e,r)=>u.createElement("span",{key:`${e}_${r}`,className:f(l?"_roll-number-cell-transition_13d96_6":"_roll-number-cell-hidden_13d96_9"),style:c(o({},t),{transform:`translateY(${s}%)`})},e))))};const q=(e,t)=>{const{radix:r=0,omitDecimals:n=!0}=t||{},l=null==e?void 0:e.toFixed(r),s=n?parseFloat(l).toString():l,[a,o]=s.split("."),c=(null==a?void 0:a.length)||0,i=(null==a?void 0:a.split(""))||[],u=(null==o?void 0:o.split(""))||[],m=[];return i.forEach(((e,t)=>{m.push({value:e,key:c-t})})),u.length&&m.push({value:".",key:"0"}),u.forEach(((e,t)=>{m.push({value:e,key:-1*(t+1)})})),m};var z=({number:e=0,radix:t=0,omitDecimals:r=!0,updateRecycle:n=!1,itemStyle:l={}})=>{const[s,a]=i.exports.useState(q(0,{radix:t,omitDecimals:r}));i.exports.useEffect((()=>{a(q(e,{radix:t,omitDecimals:r}))}),[e]);const{fontSize:o,lineHeight:c,height:m}=l||{};return u.createElement("div",{className:"_roll-number_25g53_1",style:{height:m||c||o||"1rem"}},s.map((e=>/^\d$/.test(e.value)?u.createElement(T,{updateRecycle:n,itemStyle:l,key:e.key,kname:e.key,value:parseInt(e.value,10)}):u.createElement("span",{key:e.key,style:l},e.value))))},F=[{route:"/download",title:"批量下载图片",Component:()=>u.createElement("div",{className:"_download_1sf8r_1"},u.createElement("div",{className:"_download-btn_1sf8r_5",onClick:()=>{D(M)}},"down1"),u.createElement("div",{className:"_download-btn_1sf8r_5",onClick:()=>{D([M,V])}},"down2"))},{route:"/safeImage",Component:()=>u.createElement("div",null,u.createElement("h6",null,"可以当做正常的img使用"),u.createElement(x,{src:k,className:"_outline_da0le_5",alt:"hand"}),u.createElement("hr",null),u.createElement("h6",null,"也可以不传src 只穿srclist"),u.createElement(x,{srclist:[k,S],className:_}),u.createElement("hr",null),u.createElement("h6",null,"当srclist第一个地址报错的时候，会尝试使用第二个"),u.createElement(x,{srclist:[`mass${k}`,S],className:_}),u.createElement("hr",null),u.createElement("h6",null,"src 和 srclist 可以一起使用，src优先级高于srcList"),u.createElement(x,{src:`mass${S}`,srclist:[k,S],className:_}),u.createElement("hr",null))},{route:"/setState",title:"安全的setState",Component:()=>{const[e,t]=i.exports.useState(!0),[r,n]=i.exports.useState(!0);return u.createElement("div",null,u.createElement("h6",null,"当子组件卸载发生在setState之前，控制台就会报一个warning: Can't perform a React state update on an unmounted component."),e&&u.createElement(O,{killMyself:()=>t(!1)}),u.createElement("hr",null),u.createElement("h6",null,"如果使用useSafeState就不会有这样的问题"),r&&u.createElement(R,{killMyself:()=>n(!1)}),u.createElement("hr",null))}},{route:"/flooks",title:"数据流",Component:()=>u.createElement("div",{className:"App"},u.createElement(A,null),u.createElement(j,null))},{route:"/flipNumber",title:"数字滚动",Component:()=>{const[e,t]=i.exports.useState(10),[r,n]=i.exports.useState(10);return u.createElement("div",null,u.createElement(z,{number:e,radix:3,omitDecimals:!1,itemStyle:{color:"red",fontSize:"50px"}}),u.createElement("div",{className:w,onClick:()=>t(e+1)},"add1"),u.createElement(z,{number:r,updateRecycle:!0,radix:3,omitDecimals:!1,itemStyle:{color:"red",fontSize:"50px"}}),u.createElement("div",{className:w,onClick:()=>n(r+1)},"add2"))}}];const H="_con_f8ky2_1";var B=()=>{const e=i.exports.useRef(((e=[],t)=>e.reduce(((e,r)=>Object.assign(e,{[r[t]]:r})),{}))(F,"route")),t=()=>{var t;const{route:r,title:n=r.slice(1)}=null==(t=e.current)?void 0:t[location.hash.slice(1)];document.title=n};return((e,t,r=window)=>{const n=i.exports.useRef();i.exports.useEffect((()=>{n.current=t}),[t]),i.exports.useEffect((()=>{if(!r||!r.addEventListener)return;const t=e=>n.current(e);return r.addEventListener(e,t),()=>{r.removeEventListener(e,t)}}),[e,r])})("hashchange",t),i.exports.useEffect(t,[]),u.createElement(E,null,u.createElement("div",{className:H},u.createElement("ul",null,F.map((({title:e,route:t})=>u.createElement("li",{key:t},u.createElement(h,{to:t},e||t.slice(1)))))),u.createElement(y,null,F.map((({route:e,Component:t})=>u.createElement(v,{key:e,path:e,component:t}))),u.createElement(g,{path:"/",to:F[0].route}))))};b.render(u.createElement(u.StrictMode,null,u.createElement(B,null)),document.getElementById("root"));
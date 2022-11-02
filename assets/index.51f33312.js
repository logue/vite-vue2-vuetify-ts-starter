import{b as S,c as V,d as $,n as A,e as O,u as M,f as I,h as N,r as v,i as g,w as p,o as x,V as w,T as B}from"./vue.f8acad0c.js";import{g as U,w as F,c as W,u as q,_ as z,a as H,b as G,d as J,e as X,f as T,h as k,i as K,j,k as Q,l as L,m as C,V as R,n as D,o as Y,p as Z,q as ee,r as te,s as oe}from"./vuetify.ed1e6d88.js";/* empty css                            */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const ne="modulepreload",se=function(t,e){return new URL(t,e).href},P={},y=function(e,o,r){if(!o||o.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(o.map(s=>{if(s=se(s,r),s in P)return;P[s]=!0;const c=s.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!r)for(let m=n.length-1;m>=0;m--){const _=n[m];if(_.href===s&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${d}`))return;const i=document.createElement("link");if(i.rel=c?"stylesheet":ne,c||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),c)return new Promise((m,_)=>{i.addEventListener("load",m),i.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},re={themeDark:window.matchMedia("(prefers-color-scheme: dark)").matches,locale:window.navigator.languages&&window.navigator.languages[0]||window.navigator.language},ae={themeDark:t=>t.themeDark,locale:t=>t.locale},ie={storeThemeDark(t){t.themeDark=!t.themeDark},storeLocale(t,e){t.locale=e}},ce={setThemeDark(t,e){t.commit("storeThemeDark",e)},setLocale(t,e){t.commit("storeLocale",e)}},le={namespaced:!0,state:re,getters:ae,mutations:ie,actions:ce},ue={loading:!1,progress:0,message:"",error:""},me={loading:t=>t.loading,progress:t=>t.progress,message:t=>t.message,error:t=>t.error},_e={storeLoading(t,e){t.loading=e,e||(t.progress=0)},storeProgress(t,e){t.progress=e,t.loading=!0},storeMessage(t,e){t.message=e},storeError(t,e){t.error=e}},pe={setLoading(t,e=!1){t.commit("storeLoading",e)},setProgress(t,e=0){t.commit("storeProgress",e)},setMessage(t,e){t.commit("storeMessage",e)},setError(t,e){t.commit("storeError",e)}},de={strict:!1,state:ue,getters:me,mutations:_e,actions:pe,modules:{ConfigModule:le},plugins:[new S({key:{BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0}.VITE_APP_WEBSTORAGE_NAMESPACE||"vuex",storage:window.localStorage,modules:["ConfigModule"]}).plugin]},E=V(de),fe=[{path:"/",name:"Home",component:()=>y(()=>import("./HomePage.c9927bd1.js"),["./HomePage.c9927bd1.js","./vue.f8acad0c.js","./vuetify.ed1e6d88.js","./vuetify.118f775e.css","./HomePage.f8cacfc1.css","./materialdesignicons.ad86dcb1.css"],import.meta.url)},{path:"/about",name:"About",component:()=>y(()=>import("./AboutPage.6d795292.js"),["./AboutPage.6d795292.js","./vue.f8acad0c.js","./vuetify.ed1e6d88.js","./vuetify.118f775e.css","./materialdesignicons.ad86dcb1.css"],import.meta.url)},{path:"*",name:"Error",component:()=>y(()=>import("./ErrorPage.d26a1f8a.js"),["./ErrorPage.d26a1f8a.js","./vue.f8acad0c.js","./vuetify.ed1e6d88.js","./vuetify.118f775e.css","./materialdesignicons.ad86dcb1.css"],import.meta.url)}],b=$({base:"./",mode:"history",scrollBehavior:async(t,e,o)=>{let r=0;return t.hash?r=t.hash:o&&(r=o.y),{x:0,y:await U(r)}},routes:fe});b.beforeEach(async(t,e,o)=>{E.dispatch("setLoading",!0),await A(),o()});b.afterEach(()=>{E.dispatch("setLoading",!1)});async function ge(){const t=document.createElement("link");t.rel="dns-prefetch",t.href="//fonts.googleapis.com",document.head.appendChild(t);const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.gstatic.com",document.head.appendChild(e);const o={google:{families:["Roboto:100,300,400,500,700,900&display=swap","Noto+Colr+Emoji+Glyf:400"]}};F.exports.load(o)}ge();const he=W({icons:{iconfont:"mdi"},theme:{options:{themeCache:{get:t=>localStorage.getItem(JSON.stringify(t)),set:(t,e)=>{localStorage.setItem(JSON.stringify(t),e)}},customProperties:!0}}}),ve=O({setup:(t,e)=>{const o=M(),r=I(),n=N(),s=q(),c=v({BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0}.VITE_APP_TITLE||"Vite Vuetify Application"),d=v(!1),a=v(!1),i=v(n?.name),m=g({get:()=>o.getters.message,set:u=>o.dispatch("setMessage",u)}),_=g({get:()=>o.getters.progress,set:u=>o.dispatch("setProgress",u)}),l=g({get:()=>o.getters.loading,set:u=>o.dispatch("setLoading",u)}),h=g({get:()=>o.getters["ConfigModule/themeDark"],set:u=>o.dispatch("ConfigModule/setThemeDark",u)}),f=g(()=>o.getters.error);return p(m,()=>a.value=!0),p(i,()=>a.value=!1),p(l,u=>document.body.style.cursor=u?"wait":"auto"),p(f,()=>r.push({name:"Error"})),p(h,u=>s.theme.dark=u),p(a,u=>{u||(m.value="")}),x(()=>{document.title=c.value,l.value=!1}),{vuetify:s,title:c,drawer:d,snackbar:a,snackbarText:m,progress:_,loading:l,error:f,themeDark:h}}}),ke=""+new URL("vuetify.a40b4f16.svg",import.meta.url).href;function ye(t,e,o,r,n,s,c,d){var a=typeof t=="function"?t.options:t;e&&(a.render=e,a.staticRenderFns=o,a._compiled=!0),r&&(a.functional=!0),s&&(a._scopeId="data-v-"+s);var i;if(c?(i=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__<"u"&&(l=__VUE_SSR_CONTEXT__),n&&n.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(c)},a._ssrRegister=i):n&&(i=d?function(){n.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:n),i)if(a.functional){a._injectStyles=i;var m=a.render;a.render=function(h,f){return i.call(f),m(h,f)}}else{var _=a.beforeCreate;a.beforeCreate=_?[].concat(_,i):[i]}return{exports:t,options:a}}var we=function(){var e=this,o=e._self._c;return e._self._setupProxy,o(z,[o(H,{attrs:{app:""}},[o(G,{on:{click:function(r){r.stopPropagation(),e.drawer=!e.drawer}}}),o(J,[e._v(e._s(e.title))]),o(X),o(T,{attrs:{icon:""},on:{click:function(r){e.themeDark=!e.themeDark}}},[o(k,[e._v("mdi-theme-light-dark")])],1),o(K,{attrs:{active:e.loading,indeterminate:e.progress===null,value:e.progress,absolute:"",bottom:"",color:"primary accent-3"}})],1),o(j,{attrs:{app:""},model:{value:e.drawer,callback:function(r){e.drawer=r},expression:"drawer"}},[o(Q,{attrs:{link:""}},[o(L,{attrs:{to:{name:"Home"}}},[o(C,[o(k,[e._v("mdi-home")])],1),o(R,[o(D,[e._v("Home")])],1)],1),o(L,{attrs:{to:{name:"About"}}},[o(C,[o(k,[e._v("mdi-information")])],1),o(R,[o(D,[e._v("About")])],1)],1)],1)],1),o(Y,[o(Z,{attrs:{mode:"out-in"}},[o("router-view")],1)],1),o(ee,{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{"z-index":"999"}},[o(te,{attrs:{indeterminate:"",size:"64"}})],1),o(oe,{attrs:{app:"",timeout:"5000",transition:"scroll-y-transition"},scopedSlots:e._u([{key:"action",fn:function({attrs:r}){return[o(T,e._b({attrs:{color:"primary",icon:""},on:{click:function(n){e.snackbar=!1}}},"v-btn",r,!1),[o(k,[e._v("mdi-close")])],1)]}}]),model:{value:e.snackbar,callback:function(r){e.snackbar=r},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarText)+" ")]),o("teleport",{attrs:{to:"head"}},[o("meta",{attrs:{name:"theme-color",content:e.vuetify.theme.currentTheme.primary?.toString()}}),o("link",{attrs:{rel:"icon",href:ke,type:"image/svg+xml"}})])],1)},Ee=[],be=ye(ve,we,Ee,!1,null,null,null,null);const Te=be.exports;w.config.productionTip=!1;w.component("Teleport",B);const Le=new w({router:b,store:E,vuetify:he,render:t=>t(Te)});Le.$mount("#app");export{ke as l,ye as n};
(function(e){function t(t){for(var c,a,s=t[0],i=t[1],l=t[2],u=0,b=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},o={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-06bf3122":"eb01544b","chunk-0dac7272":"f2e2c57c","chunk-18e4e666":"206f3231","chunk-195a8ec0":"e8a88f15","chunk-1e05c61f":"008fd51f","chunk-2068fd5b":"c3a442cc","chunk-2374e9f2":"41948ede","chunk-2f05f3f0":"2069fea3","chunk-36d72990":"a8444129","chunk-5197782b":"24989e8c","chunk-567f24b4":"3be14a8d","chunk-5bf57eae":"b39b63d8","chunk-760ec778":"928f567c","chunk-a5cd0000":"8efeb775","chunk-ac9ac24c":"50019bf4","chunk-bcd96e82":"36cfc4a6"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-06bf3122":1,"chunk-0dac7272":1,"chunk-18e4e666":1,"chunk-195a8ec0":1,"chunk-1e05c61f":1,"chunk-2068fd5b":1,"chunk-2374e9f2":1,"chunk-2f05f3f0":1,"chunk-36d72990":1,"chunk-5197782b":1,"chunk-567f24b4":1,"chunk-5bf57eae":1,"chunk-760ec778":1,"chunk-a5cd0000":1,"chunk-ac9ac24c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-06bf3122":"5f312c8d","chunk-0dac7272":"e39fbcf3","chunk-18e4e666":"0fa9f9f2","chunk-195a8ec0":"3fac56d0","chunk-1e05c61f":"1b56c178","chunk-2068fd5b":"e70e15fd","chunk-2374e9f2":"1f5fbf46","chunk-2f05f3f0":"9aa93db9","chunk-36d72990":"5f312c8d","chunk-5197782b":"33e753b1","chunk-567f24b4":"33e753b1","chunk-5bf57eae":"5f312c8d","chunk-760ec778":"a961b991","chunk-a5cd0000":"33e753b1","chunk-ac9ac24c":"ed6821c0","chunk-bcd96e82":"31d6cfe0"}[e]+".css",o=i.p+c,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===c||u===o))return t()}var b=document.getElementsByTagName("style");for(s=0;s<b.length;s++){l=b[s],u=l.getAttribute("data-href");if(u===c||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var c=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete a[e],d.parentNode.removeChild(d),n(r)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,n){c=o[e]=[t,n]}));t.push(c[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var b=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",b.name="ChunkLoadError",b.type=c,b.request=a,n[1](b)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5139:function(e,t,n){"use strict";n("ec39")},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=n("bc3a"),o=n.n(a),r=n("130e"),s=n("8a14"),i=(n("fe26"),n("cd74"),n("0deb"),n("f5af")),l=n.n(i),u=(n("e829"),n("0180")),b=(n("da96"),n("7bb1")),d=n("3aa8"),f=n("cbdf"),h=n("9457");function p(e,t){const n=Object(c["I"])("RouterView");return Object(c["B"])(),Object(c["f"])(n)}n("a8ea");var v=n("6b0d"),m=n.n(v);const g={},k=m()(g,[["render",p]]);var O=k,j=n("6605");function y(e,t,n,a,o,r){const s=Object(c["I"])("UserNavbar"),i=Object(c["I"])("RouterView"),l=Object(c["I"])("UserFooter");return Object(c["B"])(),Object(c["h"])(c["a"],null,[Object(c["l"])(s),Object(c["l"])(i),Object(c["l"])(l)],64)}var x=n("d839");const w={class:"footer-bg py-4"},C=Object(c["j"])('<div class="container text-center text-light"><p class="mb-1">Copyright © 2022 moonstrand</p><p class="mb-1">個人練習作品，非商業用途。</p><a class="text-light footer-links" href="https://github.com/moonstrand"><i class="bi bi-github pe-1"></i>GitHub </a></div>',1),_=[C];function L(e,t){return Object(c["B"])(),Object(c["h"])("div",w,_)}n("5139");const S={},T=m()(S,[["render",L]]);var P=T,X=n("cfb9"),B=n("d30f"),H={name:"Home",components:{UserNavbar:x["a"],UserFooter:P},provide(){return{emitter:X["a"],toast:B["a"]}}};n("a032");const E=m()(H,[["render",y]]);var I=E;const F=[{path:"/",name:"userBoard",component:I,children:[{path:"",name:"index",component:()=>n.e("chunk-0dac7272").then(n.bind(null,"d504"))},{path:"products",name:"products",component:()=>n.e("chunk-1e05c61f").then(n.bind(null,"3e2b"))},{path:"products/:id",name:"product",component:()=>n.e("chunk-ac9ac24c").then(n.bind(null,"f962"))},{path:"favor",name:"favor",component:()=>n.e("chunk-2374e9f2").then(n.bind(null,"7586"))},{path:"cart",name:"cart",component:()=>n.e("chunk-5197782b").then(n.bind(null,"76db"))},{path:"check",name:"check",component:()=>n.e("chunk-567f24b4").then(n.bind(null,"ce7b"))},{path:"payment/:orderId",name:"payment",component:()=>n.e("chunk-a5cd0000").then(n.bind(null,"94a4"))},{path:"success",name:"success",component:()=>n.e("chunk-2068fd5b").then(n.bind(null,"d4ff"))},{path:"order",name:"order",component:()=>n.e("chunk-2f05f3f0").then(n.bind(null,"0435"))},{path:"ordercheck/:orderId",name:"ordercheck",component:()=>n.e("chunk-760ec778").then(n.bind(null,"59ef"))},{path:"login",name:"login",component:()=>n.e("chunk-18e4e666").then(n.bind(null,"a55b"))}]},{path:"/dashboard",name:"dashboard",component:()=>n.e("chunk-bcd96e82").then(n.bind(null,"0a6e")),children:[{path:"products",name:"adminProducts",component:()=>n.e("chunk-5bf57eae").then(n.bind(null,"724a"))},{path:"orders",name:"adminOrders",component:()=>n.e("chunk-36d72990").then(n.bind(null,"0750"))},{path:"coupon",name:"adminCoupon",component:()=>n.e("chunk-06bf3122").then(n.bind(null,"6bde"))}]},{path:"/:pathMatch(.*)*",name:"notfound",component:()=>n.e("chunk-195a8ec0").then(n.bind(null,"e272"))}],A=(e,t,n)=>n&&e.meta.keepAlive?n:{left:0,top:0},N=Object(j["a"])({history:Object(j["b"])(),routes:F,linkActiveClass:"active",scrollBehavior:A});var Q=N;function M(e){const t=parseInt(e,10);return""+t.toFixed(0).replace(/./g,(e,t,n)=>t&&"."!==e&&(n.length-t)%3===0?(", "+e).replace(/\s/g,""):e)}function R(e){const t=new Date(1e3*e);return t.toLocaleDateString()}l.a.init();const U=Object(c["e"])(O);U.config.globalProperties.$filters={currency:M,date:R},Object(b["e"])("required",d["c"]),Object(b["e"])("email",d["a"]),Object(b["e"])("min",d["b"]),Object(b["d"])({generateMessage:Object(f["a"])({zh_TW:h}),validateOnInput:!0}),Object(f["b"])("zh_TW"),U.component("Loading",s["a"]),U.component("Form",b["c"]),U.component("Field",b["b"]),U.component("ErrorMessage",b["a"]),U.use(r["a"],o.a),U.use(Q),U.use(u["a"],{timeout:2500,maxToasts:5,hideProgressBar:!0}),U.mount("#app")},"5c99":function(e,t,n){"use strict";var c=n("1517"),a=n.n(c);t["a"]={methods:{canvasToggle(){this.offcanvas.toggle()},canvasHide(){this.offcanvas.hide()}},mounted(){this.offcanvas=new a.a(this.$refs.offcanvas)}}},"9daf":function(e,t,n){},a032:function(e,t,n){"use strict";n("bbb7")},a8ea:function(e,t,n){"use strict";n("d663")},bbb7:function(e,t,n){},cfb9:function(e,t,n){"use strict";var c=n("1344");const a=Object(c["a"])();t["a"]=a},d30f:function(e,t,n){"use strict";var c=n("0180");const a=Object(c["b"])();t["a"]=a},d663:function(e,t,n){},d839:function(e,t,n){"use strict";var c=n("7a23"),a=n("ed29"),o=n.n(a);const r={class:"container-fluid"},s=Object(c["i"])("img",{class:"nav-logo",src:o.a,alt:"logo"},null,-1),i=Object(c["i"])("span",{class:"bi bi-list fs-2 text-light"},null,-1),l=[i],u={class:"offcanvas offcanvas-end bg-dark w-100 d-lg-none d-block navShow",tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel",ref:"offcanvas"},b=Object(c["i"])("div",{class:"offcanvas-header pb-0"},[Object(c["i"])("button",{type:"button",class:"btn bi bi-x-lg fs-4 text-light","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),d={class:"offcanvas-body pt-0"},f={class:"navbar-nav text-center me-auto mb-2 mb-lg-0"},h={class:"nav-item py-2 fs-4"},p=Object(c["k"])("返回首頁"),v={class:"nav-item py-2 fs-4"},m=Object(c["k"])("專輯列表"),g={class:"nav-item py-2 fs-4"},k=Object(c["k"])("訂單查詢"),O={class:"nav-item py-2 fs-4"},j=Object(c["k"])("最愛商品"),y={class:"nav-item py-2 fs-4"},x=Object(c["k"])("購物車"),w={class:"nav-item py-2 fs-4"},C=Object(c["k"])("後台登入"),_={class:"collapse navbar-collapse nav-user",id:"navbarText"},L={class:"navbar-nav me-auto mb-2 mb-lg-0 d-lg-flex d-none"},S={class:"nav-item"},T=Object(c["k"])("首頁"),P={class:"nav-item"},X=Object(c["k"])("專輯列表"),B={class:"nav-item"},H=Object(c["k"])("訂單查詢"),E={class:"navbar-nav"},I={class:"nav-item"},F=Object(c["i"])("i",{class:"bi bi-star"},null,-1),A={key:0},N={class:"nav-item my-md-0 my-2"},Q=Object(c["i"])("i",{class:"bi bi-cart2"},null,-1),M={key:0},R={class:"nav-item"},U=Object(c["i"])("i",{class:"bi bi-person-workspace"},null,-1);function D(e,t,n,a,o,i){const D=Object(c["I"])("RouterLink");return Object(c["B"])(),Object(c["h"])("nav",{class:Object(c["u"])(["navbar navbar-expand-lg navbar-light bg-opacity-0 fixed-top px-4 py-0",{navShow:o.navScroll}])},[Object(c["i"])("div",r,[Object(c["l"])(D,{class:"navbar-brand",to:"/"},{default:Object(c["X"])(()=>[s]),_:1}),Object(c["i"])("button",{class:"btn d-lg-none d-block",type:"button",onClick:t[0]||(t[0]=(...e)=>i.offcanvasToggle&&i.offcanvasToggle(...e))},l),Object(c["i"])("div",u,[b,Object(c["i"])("div",d,[Object(c["i"])("ul",f,[Object(c["i"])("li",h,[Object(c["l"])(D,{class:"canvas-link text-light",to:"/",onClick:i.offcanvasHide},{default:Object(c["X"])(()=>[p]),_:1},8,["onClick"])]),Object(c["i"])("li",v,[Object(c["l"])(D,{class:"canvas-link text-light",to:"/products",onClick:i.offcanvasHide},{default:Object(c["X"])(()=>[m]),_:1},8,["onClick"])]),Object(c["i"])("li",g,[Object(c["l"])(D,{class:"canvas-link text-light",to:"/order",onClick:i.offcanvasHide},{default:Object(c["X"])(()=>[k]),_:1},8,["onClick"])]),Object(c["i"])("li",O,[Object(c["l"])(D,{class:"canvas-link text-light",to:"/favor",onClick:i.offcanvasHide},{default:Object(c["X"])(()=>[j]),_:1},8,["onClick"])]),Object(c["i"])("li",y,[Object(c["l"])(D,{class:"canvas-link text-light",to:"/cart",onClick:i.offcanvasHide},{default:Object(c["X"])(()=>[x]),_:1},8,["onClick"])]),Object(c["i"])("li",w,[Object(c["l"])(D,{class:"canvas-link text-light",to:"/login",onClick:i.offcanvasHide},{default:Object(c["X"])(()=>[C]),_:1},8,["onClick"])])])])],512),Object(c["i"])("div",_,[Object(c["i"])("ul",L,[Object(c["i"])("li",S,[Object(c["l"])(D,{class:"nav-link text-light",to:"/"},{default:Object(c["X"])(()=>[T]),_:1})]),Object(c["i"])("li",P,[Object(c["l"])(D,{class:"nav-link text-light",to:"/products"},{default:Object(c["X"])(()=>[X]),_:1})]),Object(c["i"])("li",B,[Object(c["l"])(D,{class:"nav-link text-light",to:"/order"},{default:Object(c["X"])(()=>[H]),_:1})])]),Object(c["i"])("ul",E,[Object(c["i"])("li",I,[Object(c["l"])(D,{class:"nav-icon text-light fs-4 d-lg-block d-none",to:"/favor"},{default:Object(c["X"])(()=>[F,0!==o.favorLength?(Object(c["B"])(),Object(c["h"])("sup",A,[Object(c["i"])("small",null,Object(c["L"])(o.favorLength),1)])):Object(c["g"])("",!0)]),_:1})]),Object(c["i"])("li",N,[Object(c["l"])(D,{class:"nav-icon text-light fs-4 d-lg-block d-none",to:"/cart"},{default:Object(c["X"])(()=>[Q,o.cartQty?(Object(c["B"])(),Object(c["h"])("sup",M,[Object(c["i"])("small",null,Object(c["L"])(o.cartQty),1)])):Object(c["g"])("",!0)]),_:1})]),Object(c["i"])("li",R,[Object(c["l"])(D,{class:"nav-icon text-light fs-4 d-lg-block d-none",to:"/login"},{default:Object(c["X"])(()=>[U]),_:1})])])])])],2)}var q=n("5c99"),J={data(){return{navScroll:!1,cartQty:"",favorLength:0}},inject:["emitter","toast"],mixins:[q["a"]],methods:{navShow(){this.navScroll=window.scrollY>25},offcanvasToggle(){this.canvasToggle()},offcanvasHide(){this.canvasHide()},getCartQty(){const e="https://vue3-course-api.hexschool.io/api/strand-api/cart";this.$http.get(e).then(e=>{e.data.success&&(0!==e.data.data.carts.length?this.cartQty=e.data.data.carts.length:this.cartQty=0)}).catch(e=>{this.toast.error("請求失敗，代碼："+e.response.status),this.isLoading=!1})},getFavorLength(){this.favorLength=(JSON.parse(localStorage.getItem("favor"))||[]).length}},mounted(){this.emitter.on("update-cart",this.getCartQty),this.emitter.on("update-favor",this.getFavorLength)},created(){window.addEventListener("scroll",this.navShow),this.getCartQty(),this.getFavorLength()}},$=(n("e13e"),n("6b0d")),z=n.n($);const V=z()(J,[["render",D]]);t["a"]=V},e13e:function(e,t,n){"use strict";n("9daf")},ec39:function(e,t,n){},ed29:function(e,t,n){e.exports=n.p+"img/logo.407e8ad7.svg"}});
//# sourceMappingURL=app.e76c55d5.js.map
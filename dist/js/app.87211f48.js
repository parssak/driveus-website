(function(e){function t(t){for(var a,c,i=t[0],l=t[1],s=t[2],u=0,d=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},c={app:0},r={app:0},o=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-0f77be0f":"dcf1e02f","chunk-970f0a24":"88861376","chunk-b7930b38":"eff4bf65","chunk-36df53a9":"19e4b738","chunk-4d8ffd6a":"d6ca6a7c","chunk-74340e36":"0ad78e1d","chunk-a963bb5c":"eb2600c6"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-0f77be0f":1,"chunk-970f0a24":1,"chunk-36df53a9":1,"chunk-74340e36":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0f77be0f":"dee0b2a0","chunk-970f0a24":"c127bf94","chunk-b7930b38":"31d6cfe0","chunk-36df53a9":"dee0b2a0","chunk-4d8ffd6a":"31d6cfe0","chunk-74340e36":"dee0b2a0","chunk-a963bb5c":"31d6cfe0"}[e]+".css",r=l.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],u=s.getAttribute("data-href");if(u===a||u===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],b.parentNode.removeChild(b),n(o)},b.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,n[1](d)}r[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/driveus-website/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"47f9":function(e,t,n){e.exports=n.p+"img/footer-logo.0881eea1.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(e,t,n,c,r,o){var i=Object(a["B"])("Nav"),l=Object(a["B"])("router-view"),s=Object(a["B"])("Footer");return Object(a["v"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(i),Object(a["k"])(l),Object(a["k"])(s)],64)}var r=n("47f9"),o=n.n(r),i={class:"bg-accent-darkest text-white","aria-labelledby":"footer-heading"},l=Object(a["k"])("h2",{id:"footer-heading",class:"sr-only"},"Footer",-1),s={class:"max-w-7xl mx-auto py-12 pb-8 px-4 sm:px-6 lg:px-8"},u={class:"grid md:grid-cols-2 gap-8"},d=Object(a["k"])("img",{class:"h-16 w-auto",src:o.a,alt:"Company Name"},null,-1),b={class:"grid sm:grid-cols-2 gap-8"},f=Object(a["k"])("p",{class:"mb-3 text-white font-medium text-lg"},"Navigation",-1),p={class:"space-y-1"},j=Object(a["i"])('<div><p class="mb-3 text-white font-medium text-lg">Contact Us</p><div class="space-y-4 font-light tracking-wide text-sm"><address class="not-italic"> 2604-1011 W. Cordova St <br> Vancouver, BC V6C-0B2. </address><a href="tel:+1-778-868-8000" class="block with-underline w-max hover:text-accent">+1-778-868-8000 </a><a href="mailto:info@driveus.ca" class="block with-underline w-max hover:text-accent">info@driveus.ca</a></div></div>',1),v=Object(a["k"])("div",{class:"mt-8 pt-8 border-t border-gray-200 md:flex md:items-center md:justify-between"},[Object(a["k"])("p",{class:"text-base text-gray-400"},"Drive Us © 2022")],-1);function h(e,t,n,c,r,o){var h=Object(a["B"])("router-link");return Object(a["v"])(),Object(a["g"])("footer",i,[l,Object(a["k"])("div",s,[Object(a["k"])("div",u,[Object(a["k"])(h,{to:"/"},{default:Object(a["I"])((function(){return[d]})),_:1}),Object(a["k"])("div",b,[Object(a["k"])("div",null,[f,Object(a["k"])("div",p,[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(c.navigation,(function(e){return Object(a["v"])(),Object(a["g"])(h,{key:e.label,class:"\n                  block\n                  with-underline\n                  w-max\n                  transition\n                  hover:text-accent\n                  uppercase\n                  tracking-wider\n                  font-light\n                  text-sm\n                ",to:e.path},{default:Object(a["I"])((function(){return[Object(a["j"])(Object(a["D"])(e.label),1)]})),_:2},1032,["to"])})),128))])]),j])]),v])])}var O=n("b0ea"),m={setup:function(){return{navigation:O["c"]}}};m.render=h;var g=m,k=n("9b19"),y=n.n(k),x={class:"flex justify-between items-center py-6 lg:justify-start"},w={class:"flex justify-start lg:mx-auto"},I=Object(a["k"])("span",{class:"sr-only"},"Company Name",-1),_=Object(a["k"])("div",{class:"flex items-center"},[Object(a["k"])("img",{class:"h-12 w-auto",src:y.a,alt:"Company Name"})],-1),P={class:"hidden justify-end items-center lg:flex"},B=Object(a["k"])("a",{href:"tel:+1-778-868-8000",class:"\n              block\n              with-underline\n              text-white\n              w-max\n              hover:text-accent\n              tracking-widest\n              font-light\n              mr-4\n            "},"+1-778-868-8000 ",-1),C=Object(a["j"])(" Book a car "),N={class:"-mr-2 -my-2 lg:hidden"},S=Object(a["k"])("span",{class:"sr-only"},"Open menu",-1),A={class:"\n            shadow-lg\n            ring-1 ring-black ring-opacity-5\n            bg-accent-darkest\n            text-white\n            divide-y-2 divide-gray-50\n          "},E={class:"pt-5 pb-6 px-5"},z={class:"flex items-center justify-between"},T=Object(a["k"])("img",{class:"h-9 w-auto",src:y.a,alt:"Company name"},null,-1),D={class:"-mr-2"},L=Object(a["k"])("span",{class:"sr-only"},"Close menu",-1),M={class:"mt-6"},F={class:"grid gap-y-8"},q={class:"nav-item-mobile__text"},R=Object(a["k"])("span",{class:"nav-item-mobile__text"},"book a car",-1),V=Object(a["k"])("div",{class:"nav-gap"},null,-1);function G(e,t,n,c,r,o){var i=Object(a["B"])("NavItem"),l=Object(a["B"])("PopoverGroup"),s=Object(a["B"])("router-link"),u=Object(a["B"])("MenuIcon"),d=Object(a["B"])("PopoverButton"),b=Object(a["B"])("XIcon"),f=Object(a["B"])("PopoverPanel"),p=Object(a["B"])("Popover");return Object(a["v"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(p,{class:["fixed left-0 w-full top-0 z-20 transition-all",r.top?"bg-transparent":"bg-accent-darkest"]},{default:Object(a["I"])((function(){return[Object(a["k"])("div",{class:["transition-all max-w-7xl mx-auto px-4 sm:px-6 border-b",r.top?"":"border-transparent"]},[Object(a["k"])("div",x,[Object(a["k"])(l,{as:"nav",class:"hidden lg:flex space-x-6 xl:space-x-7"},{default:Object(a["I"])((function(){return[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(c.navigation,(function(e){return Object(a["v"])(),Object(a["g"])(i,{path:e.path,key:e.label,dropdownItems:e.dropdownItems},{default:Object(a["I"])((function(){return[Object(a["j"])(Object(a["D"])(e.label),1)]})),_:2},1032,["path","dropdownItems"])})),128))]})),_:1}),Object(a["k"])("div",w,[Object(a["k"])(s,{to:"/"},{default:Object(a["I"])((function(){return[I,_]})),_:1})]),Object(a["k"])("div",P,[B,Object(a["k"])(s,{to:"/contact",class:"btn btn-xl"},{default:Object(a["I"])((function(){return[C]})),_:1})]),Object(a["k"])("div",N,[Object(a["k"])(d,{class:"\n              p-2\n              inline-flex\n              items-center\n              justify-center\n              text-white\n              hover:text-gray-500\n              transition\n              hover:bg-white\n            "},{default:Object(a["I"])((function(){return[S,Object(a["k"])(u,{class:"h-6 w-6 text-accent","aria-hidden":"true"})]})),_:1})])])],2),Object(a["k"])(a["c"],{"enter-active-class":"duration-200 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:Object(a["I"])((function(){return[Object(a["k"])(f,{focus:"",class:"absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right lg:hidden"},{default:Object(a["I"])((function(){return[Object(a["k"])("div",A,[Object(a["k"])("div",E,[Object(a["k"])("div",z,[Object(a["k"])(s,{to:"/"},{default:Object(a["I"])((function(){return[T]})),_:1}),Object(a["k"])("div",D,[Object(a["k"])(d,{class:"\n                    p-2\n                    inline-flex\n                    items-center\n                    justify-center\n                    transition\n                    hover:bg-accent-lightest\n                  "},{default:Object(a["I"])((function(){return[L,Object(a["k"])(b,{class:"h-6 w-6 text-accent","aria-hidden":"true"})]})),_:1})])]),Object(a["k"])("div",M,[Object(a["k"])("nav",F,[Object(a["k"])(d,null,{default:Object(a["I"])((function(){return[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(c.navigation,(function(e){return Object(a["v"])(),Object(a["g"])(s,{key:e.label,to:e.path,class:"nav-item-mobile"},{default:Object(a["I"])((function(){return[Object(a["k"])("span",q,Object(a["D"])(e.label),1)]})),_:2},1032,["to"])})),128)),Object(a["k"])(s,{to:"/contact",class:"nav-item-mobile"},{default:Object(a["I"])((function(){return[R]})),_:1})]})),_:1})])])])])]})),_:1})]})),_:1})]})),_:1},8,["class"]),V],64)}n("4de4"),n("caad"),n("2532");var H={key:0,class:"flex items-center -mr-2"},J=Object(a["k"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ml-2 h-5 w-5 group-transition",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(a["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),U={class:"\n                rounded-lg\n                shadow-lg\n                ring-1 ring-black ring-opacity-5\n                overflow-hidden\n              "},K={class:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},W={class:"\n                        text-sm\n                        lg:text-base\n                        font-medium\n                        capitalize\n                        text-gray-900\n                      "},X={key:1,class:"nav-item"};function $(e,t,n,c,r,o){var i=Object(a["B"])("router-link"),l=Object(a["B"])("PopoverButton"),s=Object(a["B"])("PopoverPanel"),u=Object(a["B"])("Popover");return Object(a["v"])(),Object(a["g"])("div",null,[n.dropdownItems&&n.dropdownItems.length>0?(Object(a["v"])(),Object(a["g"])("div",H,[Object(a["k"])(u,{class:"relative"},{default:Object(a["I"])((function(){return[Object(a["k"])(l,{class:"\n            group\n            rounded-md\n            inline-flex\n            items-center\n            text-base\n            font-medium\n            capitalize\n            whitespace-nowrap\n            transition\n            hover:text-accent\n            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal,\n          ",onClick:t[1]||(t[1]=Object(a["J"])((function(){}),["stop"]))},{default:Object(a["I"])((function(){return[Object(a["k"])(i,{to:n.path},{default:Object(a["I"])((function(){return[Object(a["A"])(e.$slots,"default")]})),_:3},8,["to"]),J]})),_:1}),Object(a["k"])(a["c"],{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-1"},{default:Object(a["I"])((function(){return[Object(a["k"])(s,{class:"\n              absolute\n              right-0\n              mt-3\n              transform\n              z-10\n              px-2\n              w-screen\n              max-w-sm\n              sm:px-0\n              lg:ml-0 lg:left-1/2 lg:-translate-x-1/2\n            "},{default:Object(a["I"])((function(){return[Object(a["k"])("div",U,[Object(a["k"])("div",K,[Object(a["k"])(l,null,{default:Object(a["I"])((function(){return[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(n.dropdownItems,(function(e){return Object(a["v"])(),Object(a["g"])(i,{key:e.label,to:e.path,class:"\n                      -m-3\n                      p-3\n                      flex\n                      items-start\n                      rounded-lg\n                      transition\n                      hover:bg-gray-50\n                    "},{default:Object(a["I"])((function(){return[Object(a["k"])("p",W,Object(a["D"])(e.label),1)]})),_:2},1032,["to"])})),128))]})),_:1})])])]})),_:1})]})),_:1})]})),_:1})])):(Object(a["v"])(),Object(a["g"])("div",X,[Object(a["k"])(i,{to:n.path},{default:Object(a["I"])((function(){return[Object(a["A"])(e.$slots,"default")]})),_:3},8,["to"])]))])}var Y=n("d511"),Q={name:"NavItem",components:{Popover:Y["a"],PopoverButton:Y["b"],PopoverPanel:Y["d"]},props:{path:String,dropdownItems:{type:Array,required:!1}}};Q.render=$;var Z=Q,ee=n("9510"),te={components:{Popover:Y["a"],PopoverButton:Y["b"],PopoverGroup:Y["c"],PopoverPanel:Y["d"],MenuIcon:ee["b"],XIcon:ee["c"],NavItem:Z},data:function(){return{top:!1}},mounted:function(){var e=this;window.addEventListener("scroll",(function(){e.top=window.scrollY<200}))},setup:function(){return{navigation:O["c"].filter((function(e){return!e.path.includes("contact")}))}}};te.render=G;var ne=te,ae={components:{Nav:ne,Footer:g}};ae.render=c;var ce=ae,re=n("6c02"),oe=Object(re["a"])({history:Object(re["b"])("/driveus-website/"),routes:O["d"],scrollBehavior:function(e,t,n){return n||{left:0,top:0}}}),ie=oe;n("ba8c");Object(a["f"])(ce).use(ie).mount("#app")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.8f8aad92.svg"},b0ea:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return d}));n("d3b7"),n("3ca3"),n("ddb0");var a=n("b85c"),c=(n("d81d"),n("ac1f"),n("1276"),n("c740"),n("caad"),n("2532"),n("99af"),function(e){return e.map((function(e){return{path:e.path,component:e.component}}))}),r=function(e){var t,n=[],c=Object(a["a"])(e);try{var r=function(){var e=t.value;if(e.hidden)return"continue";var a=e.path.split("/")[1],c=n.findIndex((function(e){return e.path==="/".concat(a)}));-1===c?n.push({path:"/".concat(a),label:e.label,dropdownItems:[]}):e.path.includes(":")||n[c].dropdownItems.push({path:e.path,label:e.label})};for(c.s();!(t=c.n()).done;)r()}catch(o){c.e(o)}finally{c.f()}return n},o="Project",i=[{path:"/",label:"home",component:function(){return Promise.all([n.e("chunk-0f77be0f"),n.e("chunk-970f0a24")]).then(n.bind(null,"7abe"))},hidden:!1},{path:"/cars",label:"cars",component:function(){return n.e("chunk-4d8ffd6a").then(n.bind(null,"3f8d"))},hidden:!1},{path:"/cars/:id",label:"cars",component:function(){return Promise.all([n.e("chunk-0f77be0f"),n.e("chunk-b7930b38")]).then(n.bind(null,"cfb5"))},hidden:!1},{path:"/services",label:"services",component:function(){return n.e("chunk-36df53a9").then(n.bind(null,"b30a"))},hidden:!1},{path:"/faq",label:"faq",component:function(){return n.e("chunk-a963bb5c").then(n.bind(null,"46bf"))},hidden:!1},{path:"/contact",label:"contact",component:function(){return n.e("chunk-74340e36").then(n.bind(null,"0648"))},hidden:!1}],l=c(i),s=r(i),u="/driveus-website/",d=[{id:"caddy-escalade",name:"2022 Cadillac Escalade ESV Sport Platinum",label:"The Legend Reimagined, Again",description:"Custom ordered from Cadillac with Night Vision, Fridge/Freezer Centre console, 36 Speaker AKG Reference Audio System, Hyper Cruise and Augmented Reality Navigation.",slogan:"POWER AND SOPHISTICATION",imgSrc:u+"cars/cadillac/index.png",images:[u+"cars/cadillac/images/1.png",u+"cars/cadillac/images/2.png"]}]},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.87211f48.js.map
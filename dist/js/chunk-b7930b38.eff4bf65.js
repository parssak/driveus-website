(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7930b38"],{"7db0":function(t,e,n){"use strict";var c=n("23e7"),i=n("b727").find,a=n("44d2"),r="find",l=!0;r in[]&&Array(1)[r]((function(){l=!1})),c({target:"Array",proto:!0,forced:l},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},cfb5:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("a4d3"),n("e01a");var c=n("7a23"),i={class:"font-medium mt-5"},a={class:"flex items-center mt-4"},r={class:"flex items-center space-x-2"},l=Object(c["k"])("div",{class:"border-b border-accent-darkest mt-12"},null,-1),s=Object(c["k"])("h2",{class:"text-center"},"Booking Details",-1),o=Object(c["k"])("p",{class:"max-w-4xl mx-auto text-center"}," We accept all major credit cards (VISA, MasterCard and American Express) for in-car mobile payment. GST is no longer included in prices, it is calculated and charged separately. ",-1),u=Object(c["k"])("div",{class:"bg-accent-darkest text-lg text-white px-8 py-4 divide-y-2 max-w-4xl mx-auto mt-12"},[Object(c["k"])("div",{class:"flex justify-between py-6"},[Object(c["k"])("span",null,"Hourly Rate"),Object(c["k"])("span",{class:"font-medium"},"$130/h plus GST")]),Object(c["k"])("div",{class:"flex justify-between py-6"},[Object(c["k"])("span",null,"Daily Rate (8 Hours)"),Object(c["k"])("span",{class:"font-medium"},"Inquire")]),Object(c["k"])("div",{class:"flex justify-between py-6"},[Object(c["k"])("span",null,[Object(c["j"])("Vancouver International (YVR) to "),Object(c["k"])("br"),Object(c["j"])(" Downtown or Downtown to "),Object(c["k"])("br"),Object(c["j"])(" Vancouver International (YVR)")]),Object(c["k"])("span",{class:"font-medium"},"$130 plus GST")])],-1),b={class:"grid place-items-center mt-12"},d=Object(c["j"])(" Book this car ");function j(t,e,n,j,m,f){var O=Object(c["B"])("Header"),p=Object(c["B"])("Split"),k=Object(c["B"])("Container"),g=Object(c["B"])("router-link");return Object(c["v"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(O,{title:m.item.name},null,8,["title"]),Object(c["k"])(p,{title:m.item.name,slogan:m.item.slogan,withoutBorder:"",description:""},{"extra-content":Object(c["I"])((function(){return[Object(c["k"])("p",i,Object(c["D"])(m.item.label),1),Object(c["k"])("p",null,Object(c["D"])(m.item.description),1)]})),default:Object(c["I"])((function(){return[Object(c["k"])("img",{src:m.item.imgSrc,class:"w-full h-full object-contain max-w-xl mx-auto"},null,8,["src"])]})),_:1},8,["title","slogan"]),Object(c["k"])(k,null,{default:Object(c["I"])((function(){return[Object(c["k"])("img",{src:m.item.images[m.index],alt:"",class:"w-full h-full object-cover"},null,8,["src"]),Object(c["k"])("div",a,[Object(c["k"])("button",{class:"btn btn-lg btn-light",onClick:e[1]||(e[1]=function(){return f.prev&&f.prev.apply(f,arguments)})},"←"),Object(c["k"])("button",{class:"btn btn-lg btn-light ml-2 mr-auto",onClick:e[2]||(e[2]=function(){return f.next&&f.next.apply(f,arguments)})},"→"),Object(c["k"])("div",r,[(Object(c["v"])(!0),Object(c["g"])(c["a"],null,Object(c["z"])(m.item.images,(function(t,e){return Object(c["v"])(),Object(c["g"])("button",{key:e,class:["w-3 h-3 rounded-full transition",{"bg-gray-900":e===m.index,"bg-gray-300":e!==m.index}],onClick:function(t){return f.jumpTo(e)}},null,10,["onClick"])})),128))])]),l]})),_:1}),Object(c["k"])(k,null,{default:Object(c["I"])((function(){return[s,o,u,Object(c["k"])("div",b,[Object(c["k"])(g,{to:"/contact",class:"btn btn-xl btn-light"},{default:Object(c["I"])((function(){return[d]})),_:1})])]})),_:1})],64)}n("7db0");var m=n("d794"),f=n("802e"),O=n("06d0"),p=n("fd7f"),k=n("b0ea"),g={components:{Header:O["a"],Container:f["a"],Split:m["a"],LeftArrowIcon:p["LeftArrowIcon"],RightArrowIcon:p["RightArrowIcon"]},data:function(){var t=this;return{cars:k["b"],item:k["b"].find((function(e){return e.id===t.$route.params.id})),index:0}},watch:{$route:function(){var t=this;this.item=k["b"].find((function(e){return e.id===t.$route.params.id}))}},methods:{prev:function(){this.index=(this.index-1+this.item.images.length)%this.item.images.length},next:function(){this.index=(this.index+1)%this.item.images.length},jumpTo:function(t){this.index=t}}};g.render=j;e["default"]=g}}]);
//# sourceMappingURL=chunk-b7930b38.eff4bf65.js.map
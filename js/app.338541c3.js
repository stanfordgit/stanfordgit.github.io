(function(){"use strict";var e={2812:function(e,t,a){var s=a(9242),l=a(1020),i=a(3396),r=a(4870),n=a(7139);a(560);const o=(0,l.Q_)("selectedImagesStore",{state:()=>({listSelectedImages:[]}),actions:{existingSelectedImage(e){let t=this.listSelectedImages.find((t=>t.id==e.id));t?this.removeSelectedImage(e):this.addSelectedImage(e)},addSelectedImage(e){this.listSelectedImages.push(e)},removeSelectedImage(e){let t=this.listSelectedImages.findIndex((t=>t.id==e.id));t>=0&&this.listSelectedImages.splice(t,1)}}}),c=e=>((0,i.dD)("data-v-2986f883"),e=e(),(0,i.Cn)(),e),u={class:"carousel-images__item"},d={key:0,class:"icon",width:"800",height:"800",viewBox:"0 0 24 24","data-name":"Flat Color",xmlns:"http://www.w3.org/2000/svg"},g=c((()=>(0,i._)("path",{fill:"currentColor",d:"M12 20a1 1 0 0 1-1-1v-6H5a1 1 0 0 1 0-2h6V5a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1-1 1Z"},null,-1))),v=[g],m={key:1,class:"icon",width:"800",height:"800",viewBox:"-5 -11 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},f=c((()=>(0,i._)("path",{d:"M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"},null,-1))),h=[f],p=["src","alt"];var _={__name:"CarouselImagesItem",props:{imageData:{type:Object,required:!0}},setup(e){const t=e,a=computed((()=>s.listSelectedImages.find((e=>e.id===t.imageData.id)))),s=o();function l(e){s.existingSelectedImage(e)}return(t,s)=>((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",{class:(0,n.C_)(["button-add-selected-list",{checked:(0,r.SU)(a)}]),onClick:s[0]||(s[0]=t=>l(e.imageData))},[(0,r.SU)(a)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("svg",d,v)),(0,r.SU)(a)?((0,i.wg)(),(0,i.iD)("svg",m,h)):(0,i.kq)("",!0)],2),(0,i._)("img",{src:e.imageData.download_url,alt:e.imageData.id+e.imageData.author,class:"image"},null,8,p)]))}},w=a(89);const k=(0,w.Z)(_,[["__scopeId","data-v-2986f883"]]);var b=k;const y=e=>((0,i.dD)("data-v-b058474a"),e=e(),(0,i.Cn)(),e),I={class:"carousel-images"},S={class:"buttons-scroll"},D=y((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[(0,i._)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m14 7-5 5m0 0 5 5"})],-1))),x=[D],C=y((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[(0,i._)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m10 17l5-5m0 0l-5-5"})],-1))),L=[C];var j={__name:"CarouselImages",props:{images:{type:Array,required:!0}},setup(e){let t=ref(null),a=ref(null);function s(e){a.value=document.querySelector(".carousel-images__item").offsetWidth,"prev"==e?0==t.value.scrollLeft?(t.value.classList.add("no-transition"),t.value.scrollLeft=t.value.scrollWidth,t.value.classList.remove("no-transition")):t.value.scrollLeft-=a.value:Math.ceil(t.value.scrollLeft)===t.value.scrollWidth-t.value.offsetWidth?(t.value.classList.add("no-transition"),t.value.scrollLeft=0,t.value.classList.remove("no-transition")):t.value.scrollLeft+=a.value}return(l,r)=>((0,i.wg)(),(0,i.iD)("div",I,[e.images.length?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"carousel",ref_key:"carousel",ref:t},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.images,(e=>((0,i.wg)(),(0,i.j4)(b,{key:e.id,"image-data":e,ref_for:!0,ref_key:"carouselItem",ref:a},null,8,["image-data"])))),128))],512)):(0,i.kq)("",!0),(0,i._)("div",S,[(0,i._)("button",{class:"buttons-scroll__prev",onClick:r[0]||(r[0]=e=>s("prev"))},x),(0,i._)("button",{class:"buttons-scroll__next",onClick:r[1]||(r[1]=e=>s("next"))},L)])]))}};const O=(0,w.Z)(j,[["__scopeId","data-v-b058474a"]]);var W=O;const q=e=>((0,i.dD)("data-v-e8878ba6"),e=e(),(0,i.Cn)(),e),M={class:"selected-images-list"},U=q((()=>(0,i._)("div",{class:"title"},"List selected images:",-1))),B={key:0,class:"list"},H={key:1,class:"list-empty"};var Z={__name:"SelectedImagesList",setup(e){const t=o();return(e,a)=>((0,i.wg)(),(0,i.iD)("div",M,[U,(0,r.SU)(t).listSelectedImages.length?((0,i.wg)(),(0,i.iD)("ul",B,[(0,i.Wm)(s.W3,{name:"fade",tag:"ul"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,r.SU)(t).listSelectedImages,(e=>((0,i.wg)(),(0,i.iD)("li",{class:"list__item",key:e.id},(0,n.zw)(e.download_url),1)))),128))])),_:1})])):((0,i.wg)(),(0,i.iD)("div",H,"Marked pictures are missing!"))]))}};const P=(0,w.Z)(Z,[["__scopeId","data-v-e8878ba6"]]);var T=P;const E=e=>((0,i.dD)("data-v-3da7b1b2"),e=e(),(0,i.Cn)(),e),z={class:"gallery-images"},A=E((()=>(0,i._)("div",{class:"title"},"Gallery Images Lorem Picsum",-1)));var F={__name:"GalleryImages",setup(e){let t=ref([]);async function a(){const e="https://picsum.photos/v2/list";try{const a=await fetch(e);a.ok||console.log(`Error HTTP: ${a.status}`),t.value=await a.json()}catch(a){console.error("Error:",a.message)}}return onMounted((()=>{a()})),(e,a)=>((0,i.wg)(),(0,i.iD)("main",null,[(0,i._)("div",z,[A,(0,i.Wm)(W,{images:(0,r.SU)(t)},null,8,["images"]),(0,i.Wm)(T)])]))}};const G=(0,w.Z)(F,[["__scopeId","data-v-3da7b1b2"]]);var K=G,Y={__name:"App",setup(e){return(e,t)=>((0,i.wg)(),(0,i.j4)(K))}};const Q=Y;var V=Q;a(1580);const $=(0,l.WB)(),J=(0,s.ri)(V);J.use($),J.mount("#app")}},t={};function a(s){var l=t[s];if(void 0!==l)return l.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,s,l,i){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],l=e[u][1],i=e[u][2];for(var n=!0,o=0;o<s.length;o++)(!1&i||r>=i)&&Object.keys(a.O).every((function(e){return a.O[e](s[o])}))?s.splice(o--,1):(n=!1,i<r&&(r=i));if(n){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[s,l,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var l,i,r=s[0],n=s[1],o=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(l in n)a.o(n,l)&&(a.m[l]=n[l]);if(o)var u=o(a)}for(t&&t(s);c<r.length;c++)i=r[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},s=self["webpackChunkfr_image_carousel"]=self["webpackChunkfr_image_carousel"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(2812)}));s=a.O(s)})();
//# sourceMappingURL=app.338541c3.js.map
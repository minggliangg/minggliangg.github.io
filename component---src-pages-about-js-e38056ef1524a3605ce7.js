/*! For license information please see component---src-pages-about-js-e38056ef1524a3605ce7.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[682],{8431:function(n){"use strict";n.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#989888","images":{"fallback":{"src":"/static/9d6f8afd4207d3b23b082180506a543d/0fdf4/profile.jpg","srcSet":"/static/9d6f8afd4207d3b23b082180506a543d/91a6d/profile.jpg 75w,\\n/static/9d6f8afd4207d3b23b082180506a543d/96deb/profile.jpg 150w,\\n/static/9d6f8afd4207d3b23b082180506a543d/0fdf4/profile.jpg 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/9d6f8afd4207d3b23b082180506a543d/18188/profile.webp 75w,\\n/static/9d6f8afd4207d3b23b082180506a543d/c65bc/profile.webp 150w,\\n/static/9d6f8afd4207d3b23b082180506a543d/078c3/profile.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')},9530:function(n,t,e){"use strict";e.d(t,{Z:function(){return c}});var r=e(7294),a=e(5444);const i="header-module--nav-link--2wXCe";function o(){var n=(0,a.useStaticQuery)("3159585216");return r.createElement("div",{className:"header-module--header--oZGAE"},r.createElement("h1",{className:"header-module--title--1gDua"},n.site.siteMetadata.title),r.createElement(a.Link,{to:"/",className:i},"Home"),r.createElement(a.Link,{to:"/blog",className:i},"Blog"),r.createElement(a.Link,{to:"/projects",className:i},"Projects"),r.createElement(a.Link,{to:"/about",className:i},"About"))}function s(){var n=(0,a.useStaticQuery)("440568431");return r.createElement("p",{className:"footer-module--footer--1jE_x"},"Created by ",n.site.siteMetadata.author," © ",(new Date).getFullYear())}function c(n){return r.createElement("div",{className:"layout-module--container--1x_ZX"},r.createElement(o,null),r.createElement("div",{className:"layout-module--body--dKK_V"},n.children),r.createElement(s,null))}},7988:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return Kn}});var r=e(7294),a=e(9530),i=e(9285);function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){c(n,t,e[t])}))}return n}function f(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,a=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(){},m={},d={},p={mark:u,measure:u};try{"undefined"!=typeof window&&(m=window),"undefined"!=typeof document&&(d=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(p=performance)}catch(Qn){}var h=(m.navigator||{}).userAgent,g=void 0===h?"":h,b=m,y=d,v=p,w=(b.document,!!y.documentElement&&!!y.head&&"function"==typeof y.addEventListener&&"function"==typeof y.createElement),k=(~g.indexOf("MSIE")||g.indexOf("Trident/"),"svg-inline--fa"),x="data-fa-i2svg",O=(function(){try{}catch(Qn){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),_=O.concat([11,12,13,14,15,16,17,18,19,20]),E={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},j=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",E.GROUP,E.SWAP_OPACITY,E.PRIMARY,E.SECONDARY].concat(O.map((function(n){return"".concat(n,"x")}))).concat(_.map((function(n){return"w-".concat(n)}))),b.FontAwesomeConfig||{});if(y&&"function"==typeof y.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(n){var t=f(n,2),e=t[0],r=t[1],a=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=y.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(e));null!=a&&(j[r]=a)}))}var z=l({},{familyPrefix:"fa",replacementClass:k,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},j);z.autoReplaceSvg||(z.observeMutations=!1);var A=l({},z);b.FontAwesomeConfig=A;var M=b||{};M.___FONT_AWESOME___||(M.___FONT_AWESOME___={}),M.___FONT_AWESOME___.styles||(M.___FONT_AWESOME___.styles={}),M.___FONT_AWESOME___.hooks||(M.___FONT_AWESOME___.hooks={}),M.___FONT_AWESOME___.shims||(M.___FONT_AWESOME___.shims=[]);var P=M.___FONT_AWESOME___,S=[];w&&((y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState)||y.addEventListener("DOMContentLoaded",(function n(){y.removeEventListener("DOMContentLoaded",n),1,S.map((function(n){return n()}))})));var N,C="pending",I="settled",T="fulfilled",L="rejected",D=function(){},R=void 0!==e.g&&void 0!==e.g.process&&"function"==typeof e.g.process.emit,W="undefined"==typeof setImmediate?setTimeout:setImmediate,Y=[];function F(){for(var n=0;n<Y.length;n++)Y[n][0](Y[n][1]);Y=[],N=!1}function X(n,t){Y.push([n,t]),N||(N=!0,W(F,0))}function B(n){var t=n.owner,e=t._state,r=t._data,a=n[e],i=n.then;if("function"==typeof a){e=T;try{r=a(r)}catch(Qn){Z(i,Qn)}}U(i,r)||(e===T&&H(i,r),e===L&&Z(i,r))}function U(n,t){var e;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===o(t))){var r=t.then;if("function"==typeof r)return r.call(t,(function(r){e||(e=!0,t===r?G(n,r):H(n,r))}),(function(t){e||(e=!0,Z(n,t))})),!0}}catch(Qn){return e||Z(n,Qn),!0}return!1}function H(n,t){n!==t&&U(n,t)||G(n,t)}function G(n,t){n._state===C&&(n._state=I,n._data=t,X(q,n))}function Z(n,t){n._state===C&&(n._state=I,n._data=t,X(K,n))}function V(n){n._then=n._then.forEach(B)}function q(n){n._state=T,V(n)}function K(n){n._state=L,V(n),!n._handled&&R&&e.g.process.emit("unhandledRejection",n._data,n)}function Q(n){e.g.process.emit("rejectionHandled",n)}function J(n){if("function"!=typeof n)throw new TypeError("Promise resolver "+n+" is not a function");if(this instanceof J==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(n,t){function e(n){Z(t,n)}try{n((function(n){H(t,n)}),e)}catch(Qn){e(Qn)}}(n,this)}J.prototype={constructor:J,_state:C,_then:null,_data:void 0,_handled:!1,then:function(n,t){var e={owner:this,then:new this.constructor(D),fulfilled:n,rejected:t};return!t&&!n||this._handled||(this._handled=!0,this._state===L&&R&&X(Q,this)),this._state===T||this._state===L?X(B,e):this._then.push(e),e.then},catch:function(n){return this.then(null,n)}},J.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new J((function(t,e){var r=[],a=0;function i(n){return a++,function(e){r[n]=e,--a||t(r)}}for(var o,s=0;s<n.length;s++)(o=n[s])&&"function"==typeof o.then?o.then(i(s),e):r[s]=o;a||t(r)}))},J.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new J((function(t,e){for(var r,a=0;a<n.length;a++)(r=n[a])&&"function"==typeof r.then?r.then(t,e):t(r)}))},J.resolve=function(n){return n&&"object"===o(n)&&n.constructor===J?n:new J((function(t){t(n)}))},J.reject=function(n){return new J((function(t,e){e(n)}))};var $={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nn(n){if(n&&w){var t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=y.head.childNodes,r=null,a=e.length-1;a>-1;a--){var i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return y.head.insertBefore(t,r),n}}function tn(){for(var n=12,t="";n-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function en(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rn(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,": ").concat(n[e],";")}),"")}function an(n){return n.size!==$.size||n.x!==$.x||n.y!==$.y||n.rotate!==$.rotate||n.flipX||n.flipY}function on(n){var t=n.transform,e=n.containerWidth,r=n.iconWidth,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var sn={x:0,y:0,width:"100%",height:"100%"};function cn(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function ln(n){var t=n.icons,e=t.main,r=t.mask,a=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,c=n.title,f=n.maskId,u=n.titleId,m=n.extra,d=n.watchable,p=void 0!==d&&d,h=r.found?r:e,g=h.width,b=h.height,y="fak"===a,v=y?"":"fa-w-".concat(Math.ceil(g/b*16)),w=[A.replacementClass,i?"".concat(A.familyPrefix,"-").concat(i):"",v].filter((function(n){return-1===m.classes.indexOf(n)})).filter((function(n){return""!==n||!!n})).concat(m.classes).join(" "),k={children:[],attributes:l({},m.attributes,{"data-prefix":a,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(b)})},O=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/b*16*.0625,"em")}:{};p&&(k.attributes[x]=""),c&&k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||tn())},children:[c]});var _=l({},k,{prefix:a,iconName:i,main:e,mask:r,maskId:f,transform:o,symbol:s,styles:l({},O,m.styles)}),E=r.found&&e.found?function(n){var t,e=n.children,r=n.attributes,a=n.main,i=n.mask,o=n.maskId,s=n.transform,c=a.width,f=a.icon,u=i.width,m=i.icon,d=on({transform:s,containerWidth:u,iconWidth:c}),p={tag:"rect",attributes:l({},sn,{fill:"white"})},h=f.children?{children:f.children.map(cn)}:{},g={tag:"g",attributes:l({},d.inner),children:[cn(l({tag:f.tag,attributes:l({},f.attributes,d.path)},h))]},b={tag:"g",attributes:l({},d.outer),children:[g]},y="mask-".concat(o||tn()),v="clip-".concat(o||tn()),w={tag:"mask",attributes:l({},sn,{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,b]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(t=m,"g"===t.tag?t.children:[t])},w]};return e.push(k,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(y,")")},sn)}),{children:e,attributes:r}}(_):function(n){var t=n.children,e=n.attributes,r=n.main,a=n.transform,i=rn(n.styles);if(i.length>0&&(e.style=i),an(a)){var o=on({transform:a,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:l({},o.outer),children:[{tag:"g",attributes:l({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:l({},r.icon.attributes,o.path)}]}]})}else t.push(r.icon);return{children:t,attributes:e}}(_),j=E.children,z=E.attributes;return _.children=j,_.attributes=z,s?function(n){var t=n.prefix,e=n.iconName,r=n.children,a=n.attributes,i=n.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l({},a,{id:!0===i?"".concat(t,"-").concat(A.familyPrefix,"-").concat(e):i}),children:r}]}]}(_):function(n){var t=n.children,e=n.main,r=n.mask,a=n.attributes,i=n.styles,o=n.transform;if(an(o)&&e.found&&!r.found){var s={x:e.width/e.height/2,y:.5};a.style=rn(l({},i,{"transform-origin":"".concat(s.x+o.x/16,"em ").concat(s.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(_)}var fn=function(){},un=(A.measurePerformance&&v&&v.mark&&v.measure,function(n,t,e,r){var a,i,o,s=Object.keys(n),c=s.length,l=void 0!==r?function(n,t){return function(e,r,a,i){return n.call(t,e,r,a,i)}}(t,r):t;for(void 0===e?(a=1,o=n[s[0]]):(a=0,o=e);a<c;a++)o=l(o,n[i=s[a]],i,n);return o});function mn(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.skipHooks,a=void 0!==r&&r,i=Object.keys(t).reduce((function(n,e){var r=t[e];return!!r.icon?n[r.iconName]=r.icon:n[e]=r,n}),{});"function"!=typeof P.hooks.addPack||a?P.styles[n]=l({},P.styles[n]||{},i):P.hooks.addPack(n,i),"fas"===n&&mn("fa",t)}var dn=P.styles,pn=P.shims,hn=function(){var n=function(n){return un(dn,(function(t,e,r){return t[r]=un(e,n,{}),t}),{})};n((function(n,t,e){return t[3]&&(n[t[3]]=e),n})),n((function(n,t,e){var r=t[2];return n[e]=e,r.forEach((function(t){n[t]=e})),n}));var t="far"in dn;un(pn,(function(n,e){var r=e[0],a=e[1],i=e[2];return"far"!==a||t||(a="fas"),n[r]={prefix:a,iconName:i},n}),{})};hn();P.styles;function gn(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function bn(n){var t=n.tag,e=n.attributes,r=void 0===e?{}:e,a=n.children,i=void 0===a?[]:a;return"string"==typeof n?en(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,'="').concat(en(n[e]),'" ')}),"").trim()}(r),">").concat(i.map(bn).join(""),"</").concat(t,">")}var yn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce((function(n,t){var e=t.toLowerCase().split("-"),r=e[0],a=e.slice(1).join("-");if(r&&"h"===a)return n.flipX=!0,n;if(r&&"v"===a)return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(r){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a}return n}),t):t};function vn(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}vn.prototype=Object.create(Error.prototype),vn.prototype.constructor=vn;var wn={fill:"currentColor"},kn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},xn={tag:"path",attributes:l({},wn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},On=l({},kn,{attributeName:"opacity"});l({},wn,{cx:"256",cy:"364",r:"28"}),l({},kn,{attributeName:"r",values:"28;14;28;28;14;28;"}),l({},On,{values:"1;0;1;1;0;1;"}),l({},wn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),l({},On,{values:"1;0;0;0;0;1;"}),l({},wn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),l({},On,{values:"0;0;1;1;0;0;"}),P.styles;function _n(n){var t=n[0],e=n[1],r=f(n.slice(4),1)[0];return{found:!0,width:t,height:e,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(A.familyPrefix,"-").concat(E.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.familyPrefix,"-").concat(E.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(A.familyPrefix,"-").concat(E.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}P.styles;function En(){var n="fa",t=k,e=A.familyPrefix,r=A.replacementClass,a='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(e!==n||r!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(r))}return a}function jn(){A.autoAddCss&&!Sn&&(nn(En()),Sn=!0)}function zn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map((function(n){return bn(n)}))}}),Object.defineProperty(n,"node",{get:function(){if(w){var t=y.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function An(n){var t=n.prefix,e=void 0===t?"fa":t,r=n.iconName;if(r)return gn(Pn.definitions,e,r)||gn(P.styles,e,r)}var Mn,Pn=new(function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.definitions={}}var t,e,r;return t=n,(e=[{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(t){n.definitions[t]=l({},n.definitions[t]||{},a[t]),mn(t,a[t]),hn()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var e=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(e).map((function(t){var r=e[t],a=r.prefix,i=r.iconName,o=r.icon;n[a]||(n[a]={}),n[a][i]=o})),n}}])&&s(t.prototype,e),r&&s(t,r),n}()),Sn=!1,Nn={transform:function(n){return yn(n)}},Cn=(Mn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.transform,r=void 0===e?$:e,a=t.symbol,i=void 0!==a&&a,o=t.mask,s=void 0===o?null:o,c=t.maskId,f=void 0===c?null:c,u=t.title,m=void 0===u?null:u,d=t.titleId,p=void 0===d?null:d,h=t.classes,g=void 0===h?[]:h,b=t.attributes,y=void 0===b?{}:b,v=t.styles,w=void 0===v?{}:v;if(n){var k=n.prefix,x=n.iconName,O=n.icon;return zn(l({type:"icon"},n),(function(){return jn(),A.autoA11y&&(m?y["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(p||tn()):(y["aria-hidden"]="true",y.focusable="false")),ln({icons:{main:_n(O),mask:s?_n(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:x,transform:l({},$,r),symbol:i,title:m,maskId:f,titleId:p,extra:{attributes:y,styles:w,classes:g}})}))}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(n||{}).icon?n:An(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:An(r||{})),Mn(e,l({},t,{mask:r}))}),In=e(5697),Tn=e.n(In);function Ln(n){return(Ln="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function Dn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Rn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function Wn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?Rn(Object(e),!0).forEach((function(t){Dn(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Rn(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function Yn(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}function Fn(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Xn(n){return t=n,(t-=0)==t?n:(n=n.replace(/[\-_\s]+(.)?/g,(function(n,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+n.substr(1);var t}function Bn(n){return n.split(";").map((function(n){return n.trim()})).filter((function(n){return n})).reduce((function(n,t){var e,r=t.indexOf(":"),a=Xn(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?n[(e=a,e.charAt(0).toUpperCase()+e.slice(1))]=i:n[a]=i,n}),{})}var Un=!1;try{Un=!0}catch(Qn){}function Hn(n){return Nn.icon?Nn.icon(n):null===n?null:"object"===Ln(n)&&n.prefix&&n.iconName?n:Array.isArray(n)&&2===n.length?{prefix:n[0],iconName:n[1]}:"string"==typeof n?{prefix:"fas",iconName:n}:void 0}function Gn(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Dn({},n,t):{}}function Zn(n){var t=n.forwardedRef,e=Yn(n,["forwardedRef"]),r=e.icon,a=e.mask,i=e.symbol,o=e.className,s=e.title,c=e.titleId,l=Hn(r),f=Gn("classes",[].concat(Fn(function(n){var t,e=n.spin,r=n.pulse,a=n.fixedWidth,i=n.inverse,o=n.border,s=n.listItem,c=n.flip,l=n.size,f=n.rotation,u=n.pull,m=(Dn(t={"fa-spin":e,"fa-pulse":r,"fa-fw":a,"fa-inverse":i,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(l),null!=l),Dn(t,"fa-rotate-".concat(f),null!=f&&0!==f),Dn(t,"fa-pull-".concat(u),null!=u),Dn(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(m).map((function(n){return m[n]?n:null})).filter((function(n){return n}))}(e)),Fn(o.split(" ")))),u=Gn("transform","string"==typeof e.transform?Nn.transform(e.transform):e.transform),m=Gn("mask",Hn(a)),d=Cn(l,Wn({},f,{},u,{},m,{symbol:i,title:s,titleId:c}));if(!d)return function(){var n;!Un&&console&&"function"==typeof console.error&&(n=console).error.apply(n,arguments)}("Could not find icon",l),null;var p=d.abstract,h={ref:t};return Object.keys(e).forEach((function(n){Zn.defaultProps.hasOwnProperty(n)||(h[n]=e[n])})),Vn(p[0],h)}Zn.displayName="FontAwesomeIcon",Zn.propTypes={border:Tn().bool,className:Tn().string,mask:Tn().oneOfType([Tn().object,Tn().array,Tn().string]),fixedWidth:Tn().bool,inverse:Tn().bool,flip:Tn().oneOf(["horizontal","vertical","both"]),icon:Tn().oneOfType([Tn().object,Tn().array,Tn().string]),listItem:Tn().bool,pull:Tn().oneOf(["right","left"]),pulse:Tn().bool,rotation:Tn().oneOf([0,90,180,270]),size:Tn().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Tn().bool,symbol:Tn().oneOfType([Tn().bool,Tn().string]),title:Tn().string,transform:Tn().oneOfType([Tn().string,Tn().object]),swapOpacity:Tn().bool},Zn.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var Vn=function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var a=(e.children||[]).map((function(e){return n(t,e)})),i=Object.keys(e.attributes||{}).reduce((function(n,t){var r=e.attributes[t];switch(t){case"class":n.attrs.className=r,delete e.attributes.class;break;case"style":n.attrs.style=Bn(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?n.attrs[t.toLowerCase()]=r:n.attrs[Xn(t)]=r}return n}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,c=Yn(r,["style"]);return i.attrs.style=Wn({},i.attrs.style,{},s),t.apply(void 0,[e.tag,Wn({},i.attrs,{},c)].concat(Fn(a)))}.bind(null,r.createElement),qn=e(7190);function Kn(){return r.createElement(a.Z,null,r.createElement("h1",null,"About Me"),r.createElement(i.S,{className:"about-module--profile-image--2eBMG",src:"../assets/profile.png",alt:"Profile Image",__imageData:e(8431)}),r.createElement("ul",null,r.createElement("li",null,r.createElement(Zn,{icon:qn.zhw})," Github"),r.createElement("li",null,r.createElement(Zn,{icon:qn.D9H})," Linkedin"),r.createElement("li",null,r.createElement(Zn,{icon:qn.Zzi})," Instagram")))}}}]);
//# sourceMappingURL=component---src-pages-about-js-e38056ef1524a3605ce7.js.map
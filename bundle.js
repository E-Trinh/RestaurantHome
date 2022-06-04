(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,':root {\n    --nav-bg-color: #78350f;\n    --main-bg-color: #FEF3C7;\n    --main-contrast-color: #92400E;\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n}\n\nhtml, body {\n    font-family: \'Quicksand\', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\n.nav-bar {\n    background-color: var(--nav-bg-color);\n    display: flex;\n    justify-content: center;\n    gap: 5%;\n    height: 10vh;\n}\n\n.nav-button {\n    border: none;\n    font-size: 2rem;\n    background-color: var(--nav-bg-color);\n    color: var(--main-bg-color);\n}\n\n.nav-button:hover {\n    text-decoration: underline;\n}\n\n#content {\n    width: 100vw;\n    height: 90vh;\n}\n\n.main-panel {\n    height: 100%;\n    width: 100%;\n}\n\n.home {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    overflow: hidden;\n}\n\n.side-image {\n    z-index: 1;\n}\n\n.side-image img {\n    height: 100vh;\n    width: auto;\n    box-shadow: 0px 0px 8px #101010;\n}\n\n.side-image p {\n    position: absolute;\n    bottom: 1px;\n    color: #101010;\n}\n\n.side-image a {\n    color: #101010;\n}\n\n.header {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--main-bg-color);\n    color: var(--main-contrast-color);\n}',""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),c=t.n(a),i=t(565),s=t.n(i),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(28),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=t.p+"34f93b3d2094dde63ba3.jpg";function v(){const e=document.createElement("div");e.classList.toggle("home");const n=document.createElement("div");n.classList.toggle("side-image");const t=document.createElement("img");t.src=f;const o=document.createElement("a");o.href="https://commons.wikimedia.org/wiki/File:Tomato_Pumpkin_Soup_(32881733498).jpg",o.textContent="Ella Olsson from Stockholm, Sweden";const r=document.createElement("a");r.href="https://creativecommons.org/licenses/by/2.0",r.textContent="CC BY 2.0";const a=document.createElement("p"),c=document.createTextNode(", "),i=document.createTextNode(", via Wikimedia Commons");a.appendChild(o),a.appendChild(c),a.appendChild(r),a.appendChild(i);const s=document.createElement("div");s.classList.toggle("header");const d=document.createElement("h1");d.textContent="Healthy Soup Soupermarket";const l=document.createElement("p");return l.textContent="Delivering fresh soup to you everyday!",n.appendChild(t),n.appendChild(a),s.appendChild(d),s.appendChild(l),e.appendChild(n),e.appendChild(s),e}function g(){document.querySelector(".main-panel").innerText=""}document.getElementById("content").appendChild(function(){const e=document.createElement("div");e.classList.toggle("nav-bar");const n=document.createElement("button");n.classList.toggle("nav-button"),n.textContent="Home",n.addEventListener("click",(()=>{g(),document.querySelector(".main-panel").appendChild(v())}));const t=document.createElement("button");t.classList.toggle("nav-button"),t.textContent="Menu",t.addEventListener("click",(()=>{g(),document.querySelector(".main-panel").appendChild(function(){const e=document.createElement("div");return e.classList.toggle("contact"),e}())}));const o=document.createElement("button");return o.classList.toggle("nav-button"),o.textContent="Contact",o.addEventListener("click",(()=>{g(),document.querySelector(".main-panel").appendChild(function(){const e=document.createElement("div");e.classList.toggle("home");const n=document.createElement("div");n.classList.toggle("side-image");const t=document.createElement("img");t.src=f;const o=document.createElement("a");o.href="https://commons.wikimedia.org/wiki/File:Tomato_Pumpkin_Soup_(32881733498).jpg",o.textContent="Ella Olsson from Stockholm, Sweden";const r=document.createElement("a");r.href="https://creativecommons.org/licenses/by/2.0",r.textContent="CC BY 2.0";const a=document.createElement("p"),c=document.createTextNode(", "),i=document.createTextNode(", via Wikimedia Commons");a.appendChild(o),a.appendChild(c),a.appendChild(r),a.appendChild(i);const s=document.createElement("div");s.classList.toggle("header");const d=document.createElement("h1");d.textContent="Contact Us!";const l=document.createElement("h3");l.textContent="Phone: (XXX)XXX-XXXX";const p=document.createElement("h3");p.textContent="Address: 0000 No Address Street";const u=document.createElement("h3");return u.textContent="Email: no-mail@mail",n.appendChild(t),n.appendChild(a),s.appendChild(d),s.appendChild(l),s.appendChild(p),s.appendChild(u),e.appendChild(n),e.appendChild(s),e}())})),e.appendChild(n),e.appendChild(t),e.appendChild(o),e}());const C=document.createElement("div");C.classList.toggle("main-panel"),document.getElementById("content").appendChild(C),document.querySelector(".main-panel").appendChild(v())})()})();
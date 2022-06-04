(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),a=n.n(o),r=n(645),c=n.n(r)()(a());c.push([e.id,':root {\n    --nav-bg-color: #78350f;\n    --main-bg-color: #FEF3C7;\n    --main-contrast-color: #92400E;\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n}\n\nhtml, body {\n    font-family: \'Quicksand\', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\n.nav-bar {\n    background-color: var(--nav-bg-color);\n    display: flex;\n    justify-content: center;\n    gap: 5%;\n    height: 10vh;\n}\n\n.nav-button {\n    border: none;\n    font-size: 2rem;\n    background-color: var(--nav-bg-color);\n    color: var(--main-bg-color);\n}\n\n.nav-button:hover {\n    text-decoration: underline;\n}\n\n#content {\n    width: 100vw;\n    height: 90vh;\n}\n\n.main-panel {\n    height: 100%;\n    width: 100%;\n}\n\n.home {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    overflow: hidden;\n}\n\n.side-image {\n    z-index: 1;\n}\n\n.side-image img {\n    height: 100vh;\n    width: auto;\n    box-shadow: 0px 0px 8px #101010;\n}\n\n.side-image p {\n    position: absolute;\n    bottom: 1px;\n    color: #101010;\n}\n\n.side-image a {\n    color: #101010;\n}\n\n.header {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--main-bg-color);\n    color: var(--main-contrast-color);\n}\n\n.menu {\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 5%;\n    overflow-y: auto;\n}\n\n.menu-item {\n    text-align: center;\n    background-color: var(--main-bg-color);\n    color: var(--main-contrast-color);\n    transition: 1s;\n    box-shadow: 0px 0px 5px #101010;\n}\n\n.menu-item:hover {\n    box-shadow: 0px 0px 15px #101010;\n}',""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},c=[],i=0;i<e.length;i++){var d=e[i],l=o.base?d[0]+o.base:d[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var m=n(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=a(u,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=n(r[c]);t[i].references--}for(var d=o(e,a),l=0;l<r.length;l++){var s=n(r[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),r=n(569),c=n.n(r),i=n(565),d=n.n(i),l=n(216),s=n.n(l),p=n(589),m=n.n(p),u=n(28),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const g=n.p+"34f93b3d2094dde63ba3.jpg";function v(){const e=document.createElement("div");e.classList.toggle("home");const t=document.createElement("div");t.classList.toggle("side-image");const n=document.createElement("img");n.src=g;const o=document.createElement("a");o.href="https://commons.wikimedia.org/wiki/File:Tomato_Pumpkin_Soup_(32881733498).jpg",o.textContent="Ella Olsson from Stockholm, Sweden";const a=document.createElement("a");a.href="https://creativecommons.org/licenses/by/2.0",a.textContent="CC BY 2.0";const r=document.createElement("p"),c=document.createTextNode(", "),i=document.createTextNode(", via Wikimedia Commons");r.appendChild(o),r.appendChild(c),r.appendChild(a),r.appendChild(i);const d=document.createElement("div");d.classList.toggle("header");const l=document.createElement("h1");l.textContent="Healthy Soup Soupermarket";const s=document.createElement("p");return s.textContent="Delivering fresh soup to you everyday!",t.appendChild(n),t.appendChild(r),d.appendChild(l),d.appendChild(s),e.appendChild(t),e.appendChild(d),e}function f(){document.querySelector(".main-panel").innerText=""}document.getElementById("content").appendChild(function(){const e=document.createElement("div");e.classList.toggle("nav-bar");const t=document.createElement("button");t.classList.toggle("nav-button"),t.textContent="Home",t.addEventListener("click",(()=>{f(),document.querySelector(".main-panel").appendChild(v())}));const n=document.createElement("button");n.classList.toggle("nav-button"),n.textContent="Menu",n.addEventListener("click",(()=>{f(),document.querySelector(".main-panel").appendChild(function(){const e=document.createElement("div");e.classList.toggle("menu");const t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("p");n.textContent="Vegatable Soup",o.textContent="A soup made using vegetables",t.classList.toggle("menu-item"),t.appendChild(n),t.appendChild(o);const a=document.createElement("div"),r=document.createElement("h1"),c=document.createElement("p");r.textContent="Beef Stew",c.textContent="A soup made with beef cooked with vegetables",a.classList.toggle("menu-item"),a.appendChild(r),a.appendChild(c);const i=document.createElement("div"),d=document.createElement("h1"),l=document.createElement("p");d.textContent="Tomato Soup",l.textContent="A soup made with a lot of tomatoes",i.classList.toggle("menu-item"),i.appendChild(d),i.appendChild(l);const s=document.createElement("div"),p=document.createElement("h1"),m=document.createElement("p");return p.textContent="Chicken Noodle Soup",m.textContent="A soup made with chicken, noodles alongside vegetables",s.classList.toggle("menu-item"),s.appendChild(p),s.appendChild(m),e.appendChild(t),e.appendChild(a),e.appendChild(i),e.appendChild(s),e}())}));const o=document.createElement("button");return o.classList.toggle("nav-button"),o.textContent="Contact",o.addEventListener("click",(()=>{f(),document.querySelector(".main-panel").appendChild(function(){const e=document.createElement("div");e.classList.toggle("home");const t=document.createElement("div");t.classList.toggle("side-image");const n=document.createElement("img");n.src=g;const o=document.createElement("a");o.href="https://commons.wikimedia.org/wiki/File:Tomato_Pumpkin_Soup_(32881733498).jpg",o.textContent="Ella Olsson from Stockholm, Sweden";const a=document.createElement("a");a.href="https://creativecommons.org/licenses/by/2.0",a.textContent="CC BY 2.0";const r=document.createElement("p"),c=document.createTextNode(", "),i=document.createTextNode(", via Wikimedia Commons");r.appendChild(o),r.appendChild(c),r.appendChild(a),r.appendChild(i);const d=document.createElement("div");d.classList.toggle("header");const l=document.createElement("h1");l.textContent="Contact Us!";const s=document.createElement("h3");s.textContent="Phone: (XXX)XXX-XXXX";const p=document.createElement("h3");p.textContent="Address: 0000 No Address Street";const m=document.createElement("h3");return m.textContent="Email: no-mail@mail",t.appendChild(n),t.appendChild(r),d.appendChild(l),d.appendChild(s),d.appendChild(p),d.appendChild(m),e.appendChild(t),e.appendChild(d),e}())})),e.appendChild(t),e.appendChild(n),e.appendChild(o),e}());const C=document.createElement("div");C.classList.toggle("main-panel"),document.getElementById("content").appendChild(C),document.querySelector(".main-panel").appendChild(v())})()})();
(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,':root {\n    --nav-bg-color: #78350f;\n    --main-bg-color: #FEF3C7;\n    --main-contrast-color: #92400E;\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n}\n\nhtml, body {\n    font-family: \'Quicksand\', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\n.nav-bar {\n    background-color: var(--nav-bg-color);\n    display: flex;\n    justify-content: center;\n    gap: 5%;\n    height: 10vh;\n}\n\n.nav-button {\n    border: none;\n    font-size: 2rem;\n    background-color: var(--nav-bg-color);\n    color: var(--main-bg-color);\n}\n\n.nav-button:hover {\n    text-decoration: underline;\n}\n\n#content {\n    width: 100vw;\n    height: 90vh;\n}\n\n.main-panel {\n    height: 100%;\n    width: 100%;\n}\n\n.home {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    overflow: hidden;\n}\n\n.side-image {\n    z-index: 1;\n    position: relative;\n}\n\n.side-image img {\n    height: 100vh;\n    width: auto;\n    box-shadow: 0px 0px 8px #101010;\n}\n\n.side-image p {\n    background: rgb(255, 255, 255, 0.6);\n    position: absolute;\n    bottom: 1px;\n    color: #101010;\n}\n\n.side-image a {\n    color: #101010;\n}\n\n.header {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--main-bg-color);\n    color: var(--main-contrast-color);\n    text-align: center;\n}\n\n.menu {\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 5%;\n    overflow-y: auto;\n}\n\n.menu-item {\n    text-align: center;\n    background-color: var(--main-bg-color);\n    color: var(--main-contrast-color);\n    transition: 1s;\n    box-shadow: 0px 0px 5px #101010;\n}\n\n.menu-item:hover {\n    box-shadow: 0px 0px 15px #101010;\n}\n\n@media (max-width: 480px) or (orientation:portrait) {\n    .home {\n        flex-direction: column;\n        overflow-y: auto;\n    }\n\n    .side-image img{\n        width: 100vw;\n        height: auto;\n    }\n}',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&i[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var d=e[c],l=o.base?d[0]+o.base:d[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=a(u,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var d=o(e,a),l=0;l<r.length;l++){var s=t(r[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),i=t.n(r),c=t(565),d=t.n(c),l=t(216),s=t.n(l),p=t(589),m=t.n(p),u=t(28),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const g=t.p+"34f93b3d2094dde63ba3.jpg";function v(){const e=document.createElement("div");e.classList.toggle("home");const n=document.createElement("div");n.classList.toggle("side-image");const t=document.createElement("img");t.src=g;const o=document.createElement("a");o.href="https://commons.wikimedia.org/wiki/File:Tomato_Pumpkin_Soup_(32881733498).jpg",o.textContent="Ella Olsson from Stockholm, Sweden";const a=document.createElement("a");a.href="https://creativecommons.org/licenses/by/2.0",a.textContent="CC BY 2.0";const r=document.createElement("p"),i=document.createTextNode(", "),c=document.createTextNode(", via Wikimedia Commons");r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(c);const d=document.createElement("div");d.classList.toggle("header");const l=document.createElement("h1");l.textContent="Healthy Soup Soupermarket";const s=document.createElement("p");return s.textContent="Delivering fresh soup to you everyday!",n.appendChild(t),n.appendChild(r),d.appendChild(l),d.appendChild(s),e.appendChild(n),e.appendChild(d),e}function f(){document.querySelector(".main-panel").innerText=""}document.getElementById("content").appendChild(function(){const e=document.createElement("div");e.classList.toggle("nav-bar");const n=document.createElement("button");n.classList.toggle("nav-button"),n.textContent="Home",n.addEventListener("click",(()=>{f(),document.querySelector(".main-panel").appendChild(v())}));const t=document.createElement("button");t.classList.toggle("nav-button"),t.textContent="Menu",t.addEventListener("click",(()=>{f(),document.querySelector(".main-panel").appendChild(function(){const e=document.createElement("div");e.classList.toggle("menu");const n=document.createElement("div"),t=document.createElement("h1"),o=document.createElement("p");t.textContent="Vegatable Soup",o.textContent="A soup made using vegetables",n.classList.toggle("menu-item"),n.appendChild(t),n.appendChild(o);const a=document.createElement("div"),r=document.createElement("h1"),i=document.createElement("p");r.textContent="Beef Stew",i.textContent="A soup made with beef cooked with vegetables",a.classList.toggle("menu-item"),a.appendChild(r),a.appendChild(i);const c=document.createElement("div"),d=document.createElement("h1"),l=document.createElement("p");d.textContent="Tomato Soup",l.textContent="A soup made with a lot of tomatoes",c.classList.toggle("menu-item"),c.appendChild(d),c.appendChild(l);const s=document.createElement("div"),p=document.createElement("h1"),m=document.createElement("p");return p.textContent="Chicken Noodle Soup",m.textContent="A soup made with chicken, noodles alongside vegetables",s.classList.toggle("menu-item"),s.appendChild(p),s.appendChild(m),e.appendChild(n),e.appendChild(a),e.appendChild(c),e.appendChild(s),e}())}));const o=document.createElement("button");return o.classList.toggle("nav-button"),o.textContent="Contact",o.addEventListener("click",(()=>{f(),document.querySelector(".main-panel").appendChild(function(){const e=document.createElement("div");e.classList.toggle("home");const n=document.createElement("div");n.classList.toggle("side-image");const t=document.createElement("img");t.src=g;const o=document.createElement("a");o.href="https://commons.wikimedia.org/wiki/File:Tomato_Pumpkin_Soup_(32881733498).jpg",o.textContent="Ella Olsson from Stockholm, Sweden";const a=document.createElement("a");a.href="https://creativecommons.org/licenses/by/2.0",a.textContent="CC BY 2.0";const r=document.createElement("p"),i=document.createTextNode(", "),c=document.createTextNode(", via Wikimedia Commons");r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(c);const d=document.createElement("div");d.classList.toggle("header");const l=document.createElement("h1");l.textContent="Contact Us!";const s=document.createElement("h3");s.textContent="Phone: (XXX)XXX-XXXX";const p=document.createElement("h3");p.textContent="Address: 0000 No Address Street";const m=document.createElement("h3");return m.textContent="Email: no-mail@mail",n.appendChild(t),n.appendChild(r),d.appendChild(l),d.appendChild(s),d.appendChild(p),d.appendChild(m),e.appendChild(n),e.appendChild(d),e}())})),e.appendChild(n),e.appendChild(t),e.appendChild(o),e}());const C=document.createElement("div");C.classList.toggle("main-panel"),document.getElementById("content").appendChild(C),document.querySelector(".main-panel").appendChild(v())})()})();
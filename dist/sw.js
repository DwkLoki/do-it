var serviceWorkerOption = {
  "assets": [
    "/0.bundle.js",
    "/1.bundle.js",
    "/2.bundle.js",
    "/3.bundle.js",
    "/4.bundle.js",
    "/5.bundle.js",
    "/6.bundle.js",
    "/bundle.js",
    "/confused-character.png",
    "/favicon.png",
    "/heroes-image.png",
    "/manifest.json",
    "/quote.png",
    "/woman-checking.png",
    "/audio/alarm.mp3",
    "/logo/do-it-logo.png",
    "/manifest-icons/icon-128x128.png",
    "/manifest-icons/icon-144x144.png",
    "/manifest-icons/icon-152x152.png",
    "/manifest-icons/icon-192x192.png",
    "/manifest-icons/icon-384x384.png",
    "/manifest-icons/icon-512x512.png",
    "/manifest-icons/icon-72x72.png",
    "/manifest-icons/icon-96x96.png",
    "/team/dwiky.jpg",
    "/team/faiz.jpeg",
    "/team/rio.jpeg",
    "/team/rizky.jpg",
    "/web-icon/angle-left.svg",
    "/web-icon/angle-right.svg",
    "/web-icon/bars.svg",
    "/web-icon/bullseye.svg",
    "/web-icon/circle-plus.svg",
    "/web-icon/envelope.svg",
    "/web-icon/floppy-disk.svg",
    "/web-icon/github.svg",
    "/web-icon/instagram.svg",
    "/web-icon/linkedin.svg",
    "/web-icon/list-check.svg",
    "/web-icon/list-ol.svg",
    "/web-icon/map-location-dot.svg",
    "/web-icon/pen-to-square.svg",
    "/web-icon/phone.svg",
    "/web-icon/trash-can.svg",
    "/web-icon/twitter.svg",
    "/index.html"
  ]
};
        
        !function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";var n={BASE_URL:"https://api.quotable.io/",CACHE_NAME:(new Date).toISOString()};function o(e,t,r,n,o,u,a){try{var c=e[u](a),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,u){var a=e.apply(t,r);function c(e){o(a,n,u,c,i,"next",e)}function i(e){o(a,n,u,c,i,"throw",e)}c(void 0)}))}}var a={cachingAppShell:function(e){var t=this;return u(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._openCache();case 2:r.sent.addAll(e);case 4:case"end":return r.stop()}}),r)})))()},deleteOldCache:function(){return u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,caches.keys();case 2:e.sent.filter((function(e){return e!==n.CACHE_NAME})).map((function(e){return caches.delete(e)}));case 4:case"end":return e.stop()}}),e)})))()},revalidateCache:function(e){var t=this;return u(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,caches.match(e);case 2:if(!(n=r.sent)){r.next=6;break}return t._fetchRequest(e),r.abrupt("return",n);case 6:return r.abrupt("return",t._fetchRequest(e));case 7:case"end":return r.stop()}}),r)})))()},_openCache:function(){return u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",caches.open(n.CACHE_NAME));case 1:case"end":return e.stop()}}),e)})))()},_fetchRequest:function(e){var t=this;return u(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch(e);case 2:if((n=r.sent)&&200===n.status){r.next=5;break}return r.abrupt("return",n);case 5:return r.next=7,t._addCache(e);case 7:return r.abrupt("return",n);case 8:case"end":return r.stop()}}),r)})))()},_addCache:function(e){var t=this;return u(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._openCache();case 2:r.sent.add(e);case 4:case"end":return r.stop()}}),r)})))()}};t.a=a},function(e,t,r){"use strict";r.r(t),function(e){var t=r(0);function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=e.serviceWorkerOption.assets;self.addEventListener("install",(function(e){e.waitUntil(t.a.cachingAppShell([].concat(n(u),["./"])))})),self.addEventListener("activate",(function(e){e.waitUntil(t.a.deleteOldCache())})),self.addEventListener("fetch",(function(e){e.respondWith(t.a.revalidateCache(e.request))}))}.call(this,r(2))},function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}e.exports=n}]);
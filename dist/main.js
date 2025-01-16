/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={cards:[],likedCardsId:[],page:0,limit:10,logMode:!1,localStorage:!0},r=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t.logMode&&(console.log(r),console.log(t))},e=function(r){var e=t.cards.find((function(t){return t.id==r}));return void 0!==e&&e},n=function(t,r){var e=Array.from(r.childNodes).find((function(r){return r.id==t}));return void 0!==e&&e},o=function(e,n){return!t.cards.includes(e)&&(t.cards.push(e),n&&n(),r("stateCardPush"),!0)},i=function(e,n){return r("stateCardLikeStatusToggle"),n&&n(),t.cards.find((function(t){return t.id==e})).like^=!0},a=function(e,n){return!t.likedCardsId.includes(e)&&(t.likedCardsId.push(e),n&&n(),r("stateLikePush"),!0)};function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var u={baseUrl:"https://api.thecatapi.com/v1/",headers:{"x-api-key":"live_sHTJFxrUksyPzxBgrAtRU2t5aiCqI4ZN9SZBwwoDQ7IgmUCwKTh9xdTyaTmHY3HO","Content-Type":"application/json"}},l=function(t){return t.ok?t.json():Promise.reject(t.status)},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return fetch("".concat(u.baseUrl,"images/search?limit=").concat(t,"&page=").concat(r),{method:"GET",headers:u.headers}).then(l).then((function(t){return t.reduce((function(t,r){return[].concat(function(t){if(Array.isArray(t))return c(t)}(i=t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||function(t,r){if(t){if("string"==typeof t)return c(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,r):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[(e=r,n=e.id,o=e.url,e.like,{id:n,url:o,like:!1})]);var e,n,o,i}),[])}))},f=function(t,r,e){var n=t.querySelector(".card").cloneNode(!0),o=n.querySelector(".card__image"),i=n.querySelector(".card__like-button");return n.id=r.id,o.src=r.url,o.setAttribute("alt","Котик"),r.like&&n.classList.add("like"),i.addEventListener("click",(function(){return e(r.id)})),n},h=new CustomEvent("activeTab",{detail:{tabId:""},bubbles:!0,cancelable:!0,composed:!1});function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function y(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,v(n.key),n)}}function v(t){var r=function(t,r){if("object"!=d(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==d(r)?r:r+""}var m,g,b=function(){return t=function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)},r=[{key:"update",value:function(t,r){Array.isArray(r)?localStorage.setItem(t,r.join(this.separator)):localStorage.setItem(t,r)}},{key:"append",value:function(t,r){if(r instanceof Object)if(localStorage[t]){var e=JSON.parse(localStorage[t]),n=[].concat(function(t){if(Array.isArray(t))return p(t)}(a=e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(a)||function(t,r){if(t){if("string"==typeof t)return p(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?p(t,r):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[r]);localStorage.setItem(t,JSON.stringify(n))}else{var o=[];o.push(r),localStorage.setItem(t,JSON.stringify(o))}else{var i=localStorage[t]?localStorage[t]+",":"";Array.isArray(r)?localStorage.setItem(t,i+r.join(this.separator)):localStorage.setItem(t,i+r)}var a}},{key:"get",value:function(t){return localStorage[t]?localStorage[t].split(this.separator):[]}},{key:"removeItem",value:function(t,r){if(localStorage[t]){var e=localStorage[t].split(this.separator);if(e.includes(r)){var n=e.findIndex((function(t){return t===r}));e.splice(n,1)}this.update(t,e)}}},{key:"clear",value:function(){localStorage.clear()}}],null&&y(t.prototype,null),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function S(){S=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var i=r&&r.prototype instanceof m?r:m,a=Object.create(i.prototype),c=new T(n||[]);return o(a,"_invoke",{value:O(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var h="suspendedStart",d="suspendedYield",p="executing",y="completed",v={};function m(){}function g(){}function b(){}var E={};l(E,a,(function(){return this}));var k=Object.getPrototypeOf,L=k&&k(k(P([])));L&&L!==e&&n.call(L,a)&&(E=L);var x=b.prototype=m.prototype=Object.create(E);function j(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function I(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==w(s)&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function O(r,e,n){var o=h;return function(i,a){if(o===p)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=A(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=f(r,e,n);if("normal"===l.type){if(o=n.done?y:d,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function A(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,A(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function C(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(w(r)+" is not iterable")}return g.prototype=b,o(x,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},j(I.prototype),l(I.prototype,c,(function(){return this})),r.AsyncIterator=I,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new I(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(x),l(x,u,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=P,T.prototype={constructor:T,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;C(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:P(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}function E(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function k(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){E(i,n,o,a,c,"next",t)}function c(t){E(i,n,o,a,c,"throw",t)}a(void 0)}))}}m=b,(g=v(g="separator"))in m?Object.defineProperty(m,g,{value:",",enumerable:!0,configurable:!0,writable:!0}):m[g]=",";var L=document.querySelector("#card-template").content,x=document.querySelector("#allCats .gallary__list"),j=document.querySelector("#favouriteCats .gallary__list"),I=document.querySelectorAll(".tab"),O=document.querySelectorAll(".nav__button"),A=function(t){return j.prepend(t)},_=function(t){return x.append(t)};t.localStorage||b.clear();var C=function(t){a(t,b.append("like",t)),!n(t,j)&&A(f(L,e(t),P))},T=function(e){!function(e,n){t.likedCardsId.splice(t.likedCardsId.indexOf(e),1),n&&n(),r("stateLikeDeleteById")}(e,b.removeItem("like",e));var o=n(e,j);o&&o.remove(o)};function P(t){var r=document.querySelector('[id="'.concat(t,'"]'));r.classList.toggle("like"),i(r.id),r.classList.contains("like")?C(t):T(t)}function N(){return(N=k(S().mark((function r(){var e,n;return S().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(e=b.get("cards")).length&&(e=JSON.parse(e)).forEach((function(t){return o(t)})),(n=b.get("like")).length&&n.forEach((function(t){return a(t)})),r.abrupt("return",t.cards.length);case 5:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function q(){return(q=k(S().mark((function r(n,i){return S().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s(n,i).then((function(t){t.forEach((function(t){e(t.id)||o(t,b.append("cards",t))}))}));case 2:return r.abrupt("return",t.cards.length);case 3:case"end":return r.stop()}}),r)})))).apply(this,arguments)}var G=function(t){e(t.id)||!n(t.id,x)&&_(f(L,t,P))};function U(){return(U=k(S().mark((function r(){var e;return S().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=[],t.cards.forEach((function(t){e.push(f(L,t,P))})),r.next=4,e.forEach((function(t){!n(t.id,x)&&_(t)}));case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}document.addEventListener("activeTab",(function(r){var o;switch(r.detail.tabId){case"allCats":t.cards.forEach(G);break;case"favouriteCats":o=[],t.likedCardsId.forEach((function(t){var r=e(t);r&&o.push(f(L,r,P))})),o.forEach((function(t){!n(t.id,j)&&A(t)}))}})),function(){return N.apply(this,arguments)}().then((function(r){return t.limit-r})).then((function(t){return t>1&&function(t,r){return q.apply(this,arguments)}(t,0)})).then((function(){return function(){return U.apply(this,arguments)}()})).finally((function(){O.forEach((function(t){return t.addEventListener("click",(function(t){return function(t,r,e){if(!t.classList.contains("active")){var n=t.getAttribute("data-tab");r.forEach((function(r){return r==t?r.classList.add("active"):r.classList.remove("active")})),e.forEach((function(t){return t.id==n?t.classList.add("active"):t.classList.remove("active")})),h.detail.tabId=n,document.dispatchEvent(h)}}(t.target,O,I)}))}))})).catch(console.error)})();
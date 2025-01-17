/*! For license information please see main.js.LICENSE.txt */
!function(){"use strict";function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){r=function(){return n};var e,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(e){f=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof b?r:b,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:_(t,e,c)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var y="suspendedStart",d="suspendedYield",v="executing",m="completed",g={};function b(){}function w(){}function S(){}var L={};f(L,u,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(N([])));x&&x!==o&&i.call(x,u)&&(L=x);var k=S.prototype=b.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function O(r,e){function n(o,a,c,u){var l=p(r[o],r,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function _(t,r,n){var o=y;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=p(t,r,n);if("normal"===l.type){if(o=n.done?m:d,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function I(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function N(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function t(){for(;++o<r.length;)if(i.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return w.prototype=S,a(k,"constructor",{value:S,configurable:!0}),a(S,"constructor",{value:w,configurable:!0}),w.displayName=f(S,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,f(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},j(O.prototype),f(O.prototype,l,(function(){return this})),n.AsyncIterator=O,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new O(h(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(k),f(k,s,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},n}function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}var o={cards:[],likedCardsId:[],page:0,limit:10,logMode:!1,localStorage:!0},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";o.logMode&&(console.log(t),console.log(o))},a=function(t){var r=o.cards.find((function(r){return r.id==t}));return void 0!==r&&r},c=function(t,r){var e=Array.from(r.childNodes).find((function(r){return r.id==t}));return void 0!==e&&e},u=function(t,r){return!o.cards.includes(t)&&(o.cards.push(t),r&&r(),i("stateCardPush"),!0)},l=function(){var t=n(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.cards.find((function(t){return t.id==e})).like^=!0);case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),s=function(t,r){l(t).then(r&&r()),i("stateCardLikeStatusToggle")},f=function(){var t=n(r().mark((function t(e,n){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o.likedCardsId.includes(e)){t.next=6;break}return t.next=3,o.likedCardsId.push(e);case 3:return n&&n(),i("stateLikePush"),t.abrupt("return",!0);case 6:return t.abrupt("return",!1);case 7:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}();function h(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var p={baseUrl:"https://api.thecatapi.com/v1/",headers:{"x-api-key":"live_sHTJFxrUksyPzxBgrAtRU2t5aiCqI4ZN9SZBwwoDQ7IgmUCwKTh9xdTyaTmHY3HO","Content-Type":"application/json"}},y=function(t){return t.ok?t.json():Promise.reject(t.status)},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return fetch("".concat(p.baseUrl,"images/search?limit=").concat(t,"&page=").concat(r),{method:"GET",headers:p.headers}).then(y).then((function(t){return t.reduce((function(t,r){return[].concat(function(t){if(Array.isArray(t))return h(t)}(i=t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||function(t,r){if(t){if("string"==typeof t)return h(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?h(t,r):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[(e=r,n=e.id,o=e.url,e.like,{id:n,url:o,like:!1})]);var e,n,o,i}),[])}))},v=function(t,r,e){var n=t.querySelector(".card").cloneNode(!0),o=n.querySelector(".card__image"),i=n.querySelector(".card__like-button");return n.id=r.id,o.src=r.url,o.setAttribute("alt","Котик"),r.like&&n.classList.add("like"),i.addEventListener("click",(function(){return e(r.id)})),n},m=new CustomEvent("activeTab",{detail:{tabId:""},bubbles:!0,cancelable:!0,composed:!1});function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function b(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function w(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,S(n.key),n)}}function S(t){var r=function(t,r){if("object"!=g(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==g(r)?r:r+""}var L,E,x=function(){return t=function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)},r=[{key:"update",value:function(t,r){if(Array.isArray(r)){var e=r.map((function(t){return t instanceof Object?JSON.stringify(t):t}));localStorage.setItem(t,e.join(this.separator))}else localStorage.setItem(t,r)}},{key:"append",value:function(t,r){var e,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(r instanceof Object&&!Array.isArray(r))if(localStorage[t]){var o=JSON.parse(localStorage[t]),i=[].concat(function(t){if(Array.isArray(t))return b(t)}(e=o)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,r){if(t){if("string"==typeof t)return b(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?b(t,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[r]);localStorage.setItem(t,JSON.stringify(i))}else{var a=[];a.push(r),localStorage.setItem(t,JSON.stringify(a))}else{var c=localStorage[t]?localStorage[t]+",":"";Array.isArray(r)?n&&""!=c?!c.split(this.separator).includes(r)&&localStorage.setItem(t,c+r.join(this.separator)):localStorage.setItem(t,c+r.join(this.separator)):n&&""!=c?!c.split(this.separator).includes(r)&&localStorage.setItem(t,c+r):localStorage.setItem(t,c+r)}}},{key:"get",value:function(t){return localStorage[t]?localStorage[t].split(this.separator):[]}},{key:"removeItem",value:function(t,r){if(localStorage[t]){var e=localStorage[t].split(this.separator);if(e.includes(r)){var n=e.findIndex((function(t){return t===r}));e.splice(n,1)}this.update(t,e)}}},{key:"clear",value:function(){localStorage.clear()}}],null&&w(t.prototype,null),r&&w(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function j(){j=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var i=r&&r.prototype instanceof m?r:m,a=Object.create(i.prototype),c=new T(n||[]);return o(a,"_invoke",{value:_(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var h="suspendedStart",p="suspendedYield",y="executing",d="completed",v={};function m(){}function g(){}function b(){}var w={};l(w,a,(function(){return this}));var S=Object.getPrototypeOf,L=S&&S(S(N([])));L&&L!==e&&n.call(L,a)&&(w=L);var E=b.prototype=m.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function O(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==k(s)&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function _(r,e,n){var o=h;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=f(r,e,n);if("normal"===l.type){if(o=n.done?d:p,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function I(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,I(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function A(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function N(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(k(r)+" is not iterable")}return g.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},x(O.prototype),l(O.prototype,c,(function(){return this})),r.AsyncIterator=O,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new O(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(E),l(E,u,"Generator"),l(E,a,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=N,T.prototype={constructor:T,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:N(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}function O(t){return function(t){if(Array.isArray(t))return _(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return _(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function I(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function A(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){I(i,n,o,a,c,"next",t)}function c(t){I(i,n,o,a,c,"throw",t)}a(void 0)}))}}L=x,(E=S(E="separator"))in L?Object.defineProperty(L,E,{value:",",enumerable:!0,configurable:!0,writable:!0}):L[E]=",";var P=document.querySelector("#card-template").content,T=document.querySelector("#allCats .gallary__list"),N=document.querySelector("#favouriteCats .gallary__list"),C=document.querySelectorAll(".tab"),G=document.querySelectorAll(".nav__button"),F=function(t){return N.prepend(t)};o.localStorage||x.clear();var q=function(){x.update("cards",[o.cards]),x.update("like",o.likedCardsId)},U=function(t){f(t),q(),!c(t,N)&&F(v(P,a(t),M))},J=function(t){var r;!function(t,r){o.likedCardsId.splice(o.likedCardsId.indexOf(t),1),i("stateLikeDeleteById")}(t),q(),null===(r=c(t,N))||void 0===r||r.remove()};function M(t){var r=document.querySelector('[id="'.concat(t,'"]'));r.classList.toggle("like"),s(t,q),r.classList.contains("like")?U(t):J(t)}function Y(){return(Y=A(j().mark((function t(){var r,e,n,i;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=x.get("cards")).length&&(r=JSON.parse(r)).forEach((function(t){return u(t)})),e=o.cards.filter((function(t){return 1==t.like})).map((function(t){return t.id})),n=x.get("like"),(i=O(new Set([].concat(O(e),O(n))))).length>0&&i.forEach((function(t){a(t)&&f(t)})),q(),t.abrupt("return",o.cards.length);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(){return(B=A(j().mark((function t(r,e){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(r,e).then((function(t){t.forEach((function(t){a(t.id)||u(t)})),q()}));case 2:return t.abrupt("return",o.cards.length);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function H(){var t=[];o.cards.forEach((function(r){t.push(v(P,r,M))})),t.forEach((function(t){var r;!c(t.id,T)&&(r=t,T.append(r))}))}var $=function(){var t=[];o.likedCardsId.forEach((function(r){var e=a(r);e&&t.push(v(P,e,M))})),t.forEach((function(t){!c(t.id,N)&&F(t)}))};document.addEventListener("activeTab",(function(t){switch(t.detail.tabId){case"allCats":H();break;case"favouriteCats":$()}})),function(){return Y.apply(this,arguments)}().then((function(t){return o.limit-t})).then((function(t){return t>=1&&function(t,r){return B.apply(this,arguments)}(t,0)})).then((function(){H(),$()})).finally((function(){G.forEach((function(t){return t.addEventListener("click",(function(t){return function(t,r,e){if(!t.classList.contains("active")){var n=t.getAttribute("data-tab");r.forEach((function(r){return r==t?r.classList.add("active"):r.classList.remove("active")})),e.forEach((function(t){return t.id==n?t.classList.add("active"):t.classList.remove("active")})),m.detail.tabId=n,document.dispatchEvent(m)}}(t.target,G,C)}))}))})).catch(console.error)}();
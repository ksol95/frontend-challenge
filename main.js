(()=>{"use strict";var e={cards:[],likedCardsId:[],page:0,logMode:!0},t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.logMode&&(console.log(t),console.log(e))},r=function(t){var r=e.cards.find((function(e){return e.id==t}));return void 0!==r&&r},n=function(e,t){var r=Array.from(t.childNodes).find((function(t){return t.id==e}));return void 0!==r&&r},i={baseUrl:"https://api.thecatapi.com/v1",headers:{"x-api-key":"live_sHTJFxrUksyPzxBgrAtRU2t5aiCqI4ZN9SZBwwoDQ7IgmUCwKTh9xdTyaTmHY3HO","Content-Type":"application/json"}},o=function(e,t,r){var n=e.querySelector(".card").cloneNode(!0),i=n.querySelector(".card__image"),o=n.querySelector(".card__like-button");return n.id=t.id,i.src=t.url,i.setAttribute("alt","Котик"),t.like&&n.classList.add("like"),o.addEventListener("click",(function(){return r(t.id)})),n},a=new CustomEvent("activeTab",{detail:{tabId:""},bubbles:!0,cancelable:!0,composed:!1});function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var u=document.querySelector("#card-template").content,d=document.querySelector("#allCats .gallary__list"),l=document.querySelector("#favouriteCats .gallary__list"),f=document.querySelectorAll(".tab"),p=document.querySelectorAll(".nav__button"),v=function(r){!function(r){e.likedCardsId.splice(e.likedCardsId.indexOf(r),1),t("stateLikeDeleteById")}(r);var i=n(r,l);i&&i.remove(i)};function b(i){var a=document.querySelector('[id="'.concat(i,'"]'));a.classList.toggle("like"),function(r){t("stateCardLikeStatusToggle"),e.cards.find((function(e){return e.id==r})).like^=!0}(a.id),a.classList.contains("like")?function(i){!function(r){!e.likedCardsId.includes(r)&&(e.likedCardsId.push(r),t("stateLikePush"))}(i),!n(i,l)&&l.prepend(o(u,r(i),b))}(i):v(i)}p.forEach((function(e){return e.addEventListener("click",(function(e){return function(e,t,r){if(!e.classList.contains("active")){var n=e.getAttribute("data-tab");t.forEach((function(t){return t==e?t.classList.add("active"):t.classList.remove("active")})),r.forEach((function(e){return e.id==n?e.classList.add("active"):e.classList.remove("active")})),a.detail.tabId=n,document.dispatchEvent(a)}}(e.target,p,f)}))})),fetch("".concat(i.baseUrl,"/images/search?limit=10&page=1"),{method:"GET",headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(n){n.forEach((function(n){var i;r(n.id)||(i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){var n,i,o,a;n=e,i=t,o=r[t],a=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i),(i="symbol"==c(a)?a:a+"")in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({like:!1},n),!e.cards.includes(i)&&(e.cards.push(i),t("stateCardPush")),d.append(o(u,n,b)))}))}));var y=function(e){!r(e.id)&&d.append(o(u,e,b))};document.addEventListener("activeTab",(function(t){var i;switch(t.detail.tabId){case"allCats":e.cards.forEach(y);break;case"favouriteCats":i=[],e.likedCardsId.forEach((function(e){var t=r(e);t&&i.push(o(u,t,b))})),i.forEach((function(e){!n(e.id,l)&&l.prepend(e)}))}}))})();
function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function n(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function o(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}(e,t,"get");return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,n)}function s(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function l(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function c(e,t){l(e,t),t.add(e)}var d={errors:{noImages:"Can't find images by this selector",initFailed:"Can't set up the gallery!",simpleTapController:{notFound:"SimpleSwipeController isn't include. Swipes disabled",initError:"Can't init swipe events"}}};function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function u(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var f=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_start",{x:0,y:0}),u(this,"eventNames",["swipeleft","swiperight","swipeup","swipedown","tap"]),this.element=t,this.offset=n,this.addEvents()}var t,n,r;return t=e,n=[{key:"addEvents",value:function(){var e=this;this._startEvent=function(t){e._start.x=t.changedTouches?t.changedTouches[0].screenX:t.screenX,e._start.y=t.changedTouches?t.changedTouches[0].screenY:t.screenY},this._endEvent=function(t){return e._handler(t.changedTouches?t.changedTouches[0].screenX:t.screenX,t.changedTouches?t.changedTouches[0].screenY:t.screenY,t)},this._events()}},{key:"removeEvents",value:function(){this._events("remove")}},{key:"_events",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add";this.element[e+"EventListener"]("touchstart",this._startEvent),this.element[e+"EventListener"]("mousedown",this._startEvent),this.element[e+"EventListener"]("touchend",this._endEvent),this.element[e+"EventListener"]("mouseup",this._endEvent)}},{key:"_handler",value:function(e,t,n){var r=e-this._start.x,i=t-this._start.y,a=Math.abs(r)-this.offset<=0?0:Math.abs(r)-this.offset,o=Math.abs(i)-this.offset<=0?0:Math.abs(i)-this.offset;0===a&&0===o?this._triggerEvent(4,n):a>o?r<0?this._triggerEvent(0,n):r>0&&this._triggerEvent(1,n):i<0?this._triggerEvent(2,n):i>0&&this._triggerEvent(3,n)}},{key:"_getEventName",value:function(e){return this.eventNames[e]}},{key:"_triggerEvent",value:function(e,t){this.element.dispatchEvent(new Event(this._getEventName(e),t))}}],n&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),m=[],g=[];var y="@keyframes dev-galery-fade-left {\r\n    0% {\r\n        transform: translate(0%, 0);\r\n        opacity: 1;\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate(-100%, 0);\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes dev-galery-fade-right {\r\n    0% {\r\n        transform: translate(0%, 0);\r\n        opacity: 1;\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate(100%, 0);\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes dev-galery-fade-in-right {\r\n    0% {\r\n        transform: translate(100%, 0);\r\n        opacity: 0;\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate(0%, 0);\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes dev-galery-fade-in-left {\r\n    0% {\r\n        transform: translate(-100%, 0);\r\n        opacity: 0;\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate(0%, 0);\r\n        opacity: 1;\r\n    }\r\n}\r\n.dev-galery-fade-left {\r\n    animation-name: dev-galery-fade-left;\r\n}\r\n.dev-galery-fade-right {\r\n    animation-name: dev-galery-fade-right;\r\n}\r\n.dev-galery-fade-in-right {\r\n    animation-name: dev-galery-fade-in-right;\r\n} \r\n.dev-galery-fade-in-left {\r\n    animation-name: dev-galery-fade-in-left;\r\n}\r\n\r\n#dev-galery__screen * {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#dev-galery__screen {\r\n    --color-background-modal: rgba(240, 240, 240, 0.9);\r\n\r\n    --color-background-button: #003a72;\r\n    --color-background-button-hover: white;\r\n    --color-text-button:white;\r\n    --color-text-button-hover: #003a72;\r\n\r\n    --color-background-button-download: #007252; \r\n    --color-text-button-download-hover: #007252;\r\n\r\n    --z-index: 10;\r\n    --border-radius-img: 20px;\r\n    --border-radius-button: 10%;\r\n\r\n    --button-size: 50px;\r\n    --button-gap: 10px;\r\n    --button-base-offset: 10px;\r\n}\r\n\r\n.dev-galery__screen_show {\r\n    opacity: 1 !important;\r\n}\r\n\r\n\r\n#dev-galery__screen {\r\n    position: fixed;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    top: 0;\r\n    left: 0;\r\n    background: var(--color-background-modal);\r\n    z-index: var(--z-index);\r\n    text-align: center;\r\n    opacity: 0;\r\n    transition: opacity .2s linear;\r\n}\r\n\r\n\r\n#dev-galery__screen .dev-galery__image {\r\n    height: 100%;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    animation-timing-function: ease-out;\r\n    animation-duration: .3s;\r\n\r\n} \r\n\r\n#dev-galery__screen .dev-galery__image img {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    box-shadow: 0px 0px 30px #8a8a8a;\r\n    margin: 0 auto;\r\n    border-radius: var(--border-radius-img);\r\n    user-select: none;\r\n\r\n}\r\n\r\n\r\n\r\n#dev-galery__screen .dev-galery__btn {\r\n    user-select: none;\r\n    border-radius: var(--border-radius-button);\r\n    width: var(--button-size);\r\n    height: var(--button-size);\r\n    text-align: center;\r\n    line-height: var(--button-size);\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: background .2s ease, opacity .5s linear;\r\n    font-size: calc(var(--button-size) / 2);\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n    box-shadow: 1px 1px 10px #8a8a8a;\r\n    color: var(--color-text-button);\r\n    background: var(--color-background-button);\r\n    opacity: 1;\r\n}\r\n\r\n#dev-galery__screen .dev-galery__btn:hover {\r\n\r\n    background: var(--color-background-button-hover);\r\n    color: var(--color-text-button-hover);\r\n}\r\n\r\n#dev-galery__screen .dev-galery__close,\r\n#dev-galery__screen .dev-galery__download {\r\n    top: var(--button-base-offset);\r\n}\r\n\r\n#dev-galery__screen .dev-galery__close,\r\n#dev-galery__screen .dev-galery__next {\r\n    right: var(--button-base-offset)\r\n}\r\n\r\n#dev-galery__screen .dev-galery__prev,\r\n#dev-galery__screen .dev-galery__download {\r\n    right: calc(var(--button-size) + var(--button-base-offset) + var(--button-gap));\r\n}\r\n\r\n#dev-galery__screen .dev-galery__prev,\r\n#dev-galery__screen .dev-galery__next {\r\n    bottom: var(--button-base-offset)\r\n}\r\n\r\n#dev-galery__screen .dev-galery__download {\r\n    background-color: var(--color-background-button-download);\r\n}\r\n\r\n#dev-galery__screen .dev-galery__download:hover {\r\n    color: var(--color-text-button-download-hover);\r\n}";!function(e,t){if(e&&"undefined"!=typeof document){var n,r=!0===t.prepend?"prepend":"append",i=!0===t.singleTag,a="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(i){var o=m.indexOf(a);-1===o&&(o=m.push(a)-1,g[o]={}),n=g[o]&&g[o][r]?g[o][r]:g[o][r]=s()}else n=s();65279===e.charCodeAt(0)&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function s(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var n=Object.keys(t.attributes),i=0;i<n.length;i++)e.setAttribute(n[i],t.attributes[n[i]]);var o="prepend"===r?"afterbegin":"beforeend";return a.insertAdjacentElement(o,e),e}}(y,{});var p=new WeakSet,b=new WeakSet,_=new WeakSet,w=new WeakMap,k=new WeakSet,E=new WeakSet,S=new WeakSet,x=new WeakSet,C=new WeakSet,T=new WeakSet,j=new WeakSet,L=new WeakSet,W=new WeakSet,A=new WeakSet,I=new WeakSet,O=new WeakSet,P=new WeakSet,z=new WeakSet,N=new WeakSet,M=function(){function e(t){var r,i,a,o=this,s=t.containerSelector,h=void 0===s?"body":s,u=t.imagesSelector,v=void 0===u?"img":u,f=t.showDownloadButton,m=void 0!==f&&f,g=t.displayCopies,y=void 0===g||g,M=t.init,D=void 0===M||M,q=t.animationDuration,F=void 0===q?.3:q;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,N),c(this,z),c(this,P),c(this,O),c(this,I),c(this,A),c(this,W),c(this,L),c(this,j),c(this,T),c(this,C),c(this,x),c(this,S),c(this,E),c(this,k),c(this,_),c(this,b),c(this,p),n(this,"rootSelector","body, html"),n(this,"containerSelector",void 0),n(this,"imagesSelector",void 0),n(this,"modalId","dev-galery__screen"),n(this,"showClass","dev-galery__screen_show"),n(this,"modalElements",{imageContainer:{class:"dev-galery__image",show:!0},close:{class:"dev-galery__close dev-galery__btn ",content:"✕",show:!0,click:function(){o.hide()}},prev:{class:"dev-galery__prev dev-galery__btn ",content:"◀",show:!0,click:function(){o.prev()}},next:{class:"dev-galery__next dev-galery__btn ",content:"▶",show:!0,click:function(){o.next()}},download:{class:"dev-galery__download dev-galery__btn ",content:"▼",show:!0,click:function(){o.downloadCurrent()}}}),n(this,"events",{name:{open:"smartgalleryopen",close:"smartgalleryclose"},html:document.body}),a={writable:!0,value:function(e){switch(e.keyCode){case 39:o.next();break;case 37:o.prev();break;case 27:o.hide()}}},l(r=this,i=w),i.set(r,a),this.translate=d,this.containerSelector=h,this.imagesSelector=v,this.displayCopies=y,this.modalElements.download.show=m,this.animationDuration=F,D&&this.init()}var i,a,h;return i=e,(a=[{key:"init",value:function(){var e=this;try{this.root=document.querySelector(this.rootSelector),this.container=document.querySelector(this.containerSelector),this.images=r(document.querySelectorAll(this.imagesSelector));var t=document.createElement("style");if(t.innerText=y,document.head.appendChild(t),this.images.length<1)return void console.log("".concat(this.translate.errors.noImages," ").concat(this.imagesSelector));var n={};this.displayCopies||(n=s(this,p,D).call(this)),this.images.forEach((function(t,r){var i=function(t){return t.addEventListener("click",(function(){return s(e,b,q).call(e,r)}))};return n[t.src]&&n[t.src].forEach((function(e){return i(e)})),i(t),!0}))}catch(e){return console.log(this.translate.errors.initFailed,e),!1}}},{key:"startKeyControl",value:function(){document.body.addEventListener("keydown",o(this,w))}},{key:"stopKeyControl",value:function(){document.body.removeEventListener("keydown",o(this,w))}},{key:"downloadCurrent",value:function(){var e=document.createElement("a"),t=s(this,S,Y).call(this).src;e.href=t,e.download=t.split("/").pop(),document.body.appendChild(e),e.click(),document.body.removeChild(e)}},{key:"hide",value:function(){var e=this;s(this,k,K).call(this,!1,(function(){e.root.style.overflow="auto",e.modal.remove(),e.stopKeyControl(),s(e,_,F).call(e,"close")}))}},{key:"prev",value:function(){var e=this;return!(this.nowId<=0||this.prevAStarted||(s(this,A,Q).call(this,"dev-galery-fade-right",(function(){e.nowId--,s(e,I,R).call(e,"dev-galery-fade-in-left")})),0))}},{key:"next",value:function(){var e=this;return!(this.nowId>=this.images.length-1||(s(this,A,Q).call(this,"dev-galery-fade-left",(function(){e.nowId++,s(e,I,R).call(e,"dev-galery-fade-in-right")})),0))}}])&&t(i.prototype,a),h&&t(i,h),Object.defineProperty(i,"prototype",{writable:!1}),e}();function D(){var e={},t={};return this.images=this.images.filter((function(n){return void 0===e[n.src]?e[n.src]=!0:(void 0===t[n.src]?t[n.src]=[n]:t[n.src].push(n),!1)})),t}function q(e){this.nowId=e;var t=s(this,C,U).call(this);this.bgContainer=t,this.container.append(t),s(this,k,K).call(this,!0),s(this,x,B).call(this,t),this.modalElements.imageContainer.html.style.animationDuration=this.animationDuration,s(this,L,H).call(this),s(this,z,ee).call(this),s(this,N,te).call(this),this.startKeyControl(),s(this,_,F).call(this,"open")}function F(e){this.events.html.dispatchEvent(new Event(this.events.name[e]))}function K(e,t){var n=this;e?setTimeout((function(){n.bgContainer.classList.add(n.showClass)}),10):(this.bgContainer.classList.remove(this.showClass),this.bgContainer.addEventListener("transitionend",(function(e){t(e)}),!1))}function X(){return{next:this.modalElements.next.html,prev:this.modalElements.prev.html}}function Y(){return this.images[this.nowId]}function B(e){for(var t in this.modalElements)if(Object.hasOwnProperty.call(this.modalElements,t)){var n=this.modalElements[t];if(!n.show)continue;n.html=s(this,O,V).call(this,n.class),void 0!==n.content&&n.html.appendChild(document.createTextNode(n.content)),e.appendChild(n.html)}}function U(){var e=s(this,O,V).call(this);return e.id=this.modalId,this.modal=e,e}function $(e){var t=s(this,O,V).call(this,"","img");return t.src=e,t}function G(e){e.addEventListener("click",(function(e){e.stopPropagation(),e.cancelBubble=!0})),s(this,W,J).call(this,e);var t=this.modalElements.imageContainer.html;s(this,P,Z).call(this,t),t.appendChild(e)}function H(){var e=this,t=this;this.modal.addEventListener("click",(function(e){t.hide()}));var n=function(){if(Object.hasOwnProperty.call(e.modalElements,r)){var t=e.modalElements[r];if(!t.html||!t.show||!t.click)return"continue";t.html.addEventListener("click",(function(e){e.stopPropagation(),t.click()}))}};for(var r in this.modalElements)n()}function J(t){var n=this;if(void 0!==e(f))try{new f(t,2),t.addEventListener("swipeleft",(function(){n.next()})),t.addEventListener("swiperight",(function(){n.prev()}))}catch(e){console.log(this.translate.errors.simpleTapController.initError,e)}else console.log(this.translate.errors.simpleTapController.notFound)}function Q(e,t){var n=this;if(!this.isAnimating){var r=this.modalElements.imageContainer.html;r.classList.add(e),this.isAnimating=!0;r.addEventListener("animationend",(function i(){r.classList.remove(e),n.isAnimating=!1,r.removeEventListener("animationend",i),t()}))}}function R(e){var t=this;s(this,z,ee).call(this),e?s(this,A,Q).call(this,e,(function(){s(t,N,te).call(t)})):s(this,N,te).call(this)}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=document.createElement(t);return n.className=e,n}function Z(e){for(;e.firstChild;)e.removeChild(e.lastChild)}function ee(){s(this,j,G).call(this,s(this,T,$).call(this,s(this,S,Y).call(this).src))}function te(){var e=s(this,E,X).call(this),t=e.next,n=e.prev;n.style.opacity="1",t.style.opacity="1",this.nowId<=0&&(n.style.opacity="0"),this.nowId>=this.images.length-1&&(t.style.opacity="0")}export{M as SmartImageGallery};

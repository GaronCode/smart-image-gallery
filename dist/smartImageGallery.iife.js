var SIG = (function (exports) {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
    }
  }
  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty$1(obj, key, value) {
    key = _toPropertyKey$1(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive$1(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey$1(arg) {
    var key = _toPrimitive$1(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
  }
  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
  function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
  function _classPrivateMethodInitSpec(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }

  var LangEn = {
    errors: {
      noImages: "Can't find images by this selector",
      initFailed: "Can't set up the gallery!",
      simpleTapController: {
        notFound: "SimpleSwipeController isn't include. Swipes disabled",
        initError: "Can't init swipe events"
      }
    }
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  /**
   * Lib simple add additional tap events in HTML element
   * additional events:
   * - swipeLeft
   * - swipeRight
   * - swipeUp
   * - swipeDown
   * - tap
   */
  var SmartSwipeController = /*#__PURE__*/function () {
    /**
     * Apply additional tap events in HTML element
     * @param {HTMLElement} element - any HTML element
     * @param {number} offset - the zone of non-triggering side events in pixels (except for the tap event)
     */
    function SmartSwipeController(element) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
      _classCallCheck(this, SmartSwipeController);
      _defineProperty(this, "_start", {
        x: 0,
        y: 0
      });
      /**
       * Events Array. Can be changed
       */
      _defineProperty(this, "eventNames", ["swipeleft", "swiperight", "swipeup", "swipedown", "tap"]);
      this.element = element;
      this.offset = offset;
      this.addEvents();
    }
    /**
     * Manualy init events
     */
    _createClass(SmartSwipeController, [{
      key: "addEvents",
      value: function addEvents() {
        var _this = this;
        this._startEvent = function (e) {
          _this._start.x = e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
          _this._start.y = e.changedTouches ? e.changedTouches[0].screenY : e.screenY;
        };
        this._endEvent = function (e) {
          return _this._handler(e.changedTouches ? e.changedTouches[0].screenX : e.screenX, e.changedTouches ? e.changedTouches[0].screenY : e.screenY, e);
        };
        this._events();
      }
      /**
       * remove additional events
       */
    }, {
      key: "removeEvents",
      value: function removeEvents() {
        this._events("remove");
      }
    }, {
      key: "_events",
      value: function _events() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "add";
        this.element[a + "EventListener"]("touchstart", this._startEvent);
        this.element[a + "EventListener"]("mousedown", this._startEvent);
        this.element[a + "EventListener"]("touchend", this._endEvent);
        this.element[a + "EventListener"]("mouseup", this._endEvent);
      }
    }, {
      key: "_handler",
      value: function _handler(x, y, e) {
        var iX = x - this._start.x,
          iY = y - this._start.y;
        var normX = Math.abs(iX) - this.offset <= 0 ? 0 : Math.abs(iX) - this.offset,
          normY = Math.abs(iY) - this.offset <= 0 ? 0 : Math.abs(iY) - this.offset;
        if (normX === 0 && normY === 0) {
          this._triggerEvent(4, e);
        } else if (normX > normY) {
          if (iX < 0) {
            this._triggerEvent(0, e);
          } else if (iX > 0) {
            this._triggerEvent(1, e);
          }
        } else {
          if (iY < 0) {
            this._triggerEvent(2, e);
          } else if (iY > 0) {
            this._triggerEvent(3, e);
          }
        }
      }
    }, {
      key: "_getEventName",
      value: function _getEventName(eventId) {
        return this.eventNames[eventId];
      }
    }, {
      key: "_triggerEvent",
      value: function _triggerEvent(eventId, event) {
        this.element.dispatchEvent(new Event(this._getEventName(eventId), event));
      }
    }]);
    return SmartSwipeController;
  }();

  var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

  var css = "@keyframes dev-galery-fade-left {\r\n    0% {\r\n        transform: translate(0%, 0);\r\n        opacity: 1;\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate(-100%, 0);\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes dev-galery-fade-right {\r\n    0% {\r\n        transform: translate(0%, 0);\r\n        opacity: 1;\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate(100%, 0);\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes dev-galery-fade-in-right {\r\n    0% {\r\n        transform: translate(100%, 0);\r\n        opacity: 0;\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate(0%, 0);\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes dev-galery-fade-in-left {\r\n    0% {\r\n        transform: translate(-100%, 0);\r\n        opacity: 0;\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate(0%, 0);\r\n        opacity: 1;\r\n    }\r\n}\r\n.dev-galery-fade-left {\r\n    animation-name: dev-galery-fade-left;\r\n}\r\n.dev-galery-fade-right {\r\n    animation-name: dev-galery-fade-right;\r\n}\r\n.dev-galery-fade-in-right {\r\n    animation-name: dev-galery-fade-in-right;\r\n} \r\n.dev-galery-fade-in-left {\r\n    animation-name: dev-galery-fade-in-left;\r\n}\r\n\r\n#dev-galery__screen * {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#dev-galery__screen {\r\n    --color-background-modal: rgba(240, 240, 240, 0.9);\r\n\r\n    --color-background-button: #003a72;\r\n    --color-background-button-hover: white;\r\n    --color-text-button:white;\r\n    --color-text-button-hover: #003a72;\r\n\r\n    --color-background-button-download: #007252; \r\n    --color-text-button-download-hover: #007252;\r\n\r\n    --z-index: 10;\r\n    --border-radius-img: 20px;\r\n    --border-radius-button: 10%;\r\n\r\n    --button-size: 50px;\r\n    --button-gap: 10px;\r\n    --button-base-offset: 10px;\r\n}\r\n\r\n.dev-galery__screen_show {\r\n    opacity: 1 !important;\r\n}\r\n\r\n\r\n#dev-galery__screen {\r\n    position: fixed;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    top: 0;\r\n    left: 0;\r\n    background: var(--color-background-modal);\r\n    z-index: var(--z-index);\r\n    text-align: center;\r\n    opacity: 0;\r\n    transition: opacity .2s linear;\r\n}\r\n\r\n\r\n#dev-galery__screen .dev-galery__image {\r\n    height: 100%;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    animation-timing-function: ease-out;\r\n    animation-duration: .3s;\r\n\r\n} \r\n\r\n#dev-galery__screen .dev-galery__image img {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    box-shadow: 0px 0px 30px #8a8a8a;\r\n    margin: 0 auto;\r\n    border-radius: var(--border-radius-img);\r\n    user-select: none;\r\n\r\n}\r\n\r\n\r\n\r\n#dev-galery__screen .dev-galery__btn {\r\n    user-select: none;\r\n    border-radius: var(--border-radius-button);\r\n    width: var(--button-size);\r\n    height: var(--button-size);\r\n    text-align: center;\r\n    line-height: var(--button-size);\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: background .2s ease, opacity .5s linear;\r\n    font-size: calc(var(--button-size) / 2);\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n    box-shadow: 1px 1px 10px #8a8a8a;\r\n    color: var(--color-text-button);\r\n    background: var(--color-background-button);\r\n    opacity: 1;\r\n}\r\n\r\n#dev-galery__screen .dev-galery__btn:hover {\r\n\r\n    background: var(--color-background-button-hover);\r\n    color: var(--color-text-button-hover);\r\n}\r\n\r\n#dev-galery__screen .dev-galery__close,\r\n#dev-galery__screen .dev-galery__download {\r\n    top: var(--button-base-offset);\r\n}\r\n\r\n#dev-galery__screen .dev-galery__close,\r\n#dev-galery__screen .dev-galery__next {\r\n    right: var(--button-base-offset)\r\n}\r\n\r\n#dev-galery__screen .dev-galery__prev,\r\n#dev-galery__screen .dev-galery__download {\r\n    right: calc(var(--button-size) + var(--button-base-offset) + var(--button-gap));\r\n}\r\n\r\n#dev-galery__screen .dev-galery__prev,\r\n#dev-galery__screen .dev-galery__next {\r\n    bottom: var(--button-base-offset)\r\n}\r\n\r\n#dev-galery__screen .dev-galery__download {\r\n    background-color: var(--color-background-button-download);\r\n}\r\n\r\n#dev-galery__screen .dev-galery__download:hover {\r\n    color: var(--color-text-button-download-hover);\r\n}";
  n(css,{});

  /**
   * Creates a gallery when an image is clicked. Images are collected by a selector.
   * Styles have all the display settings at the very beginning. Settings can be changed before initialization.
   *
   * SmartImageGallery adding additional events to document.body создаёт события:
   * - smartgalleryopen:  when the gallery is opened
   * - smartgalleryclose: when the gallery is closed
   */
  var _filterCopies = /*#__PURE__*/new WeakSet();
  var _show = /*#__PURE__*/new WeakSet();
  var _dispatchEvents = /*#__PURE__*/new WeakSet();
  var _keyControlCallback = /*#__PURE__*/new WeakMap();
  var _animation = /*#__PURE__*/new WeakSet();
  var _getArrows = /*#__PURE__*/new WeakSet();
  var _getCurrentImg = /*#__PURE__*/new WeakSet();
  var _createElements = /*#__PURE__*/new WeakSet();
  var _createBackground = /*#__PURE__*/new WeakSet();
  var _createImgEl = /*#__PURE__*/new WeakSet();
  var _putImg = /*#__PURE__*/new WeakSet();
  var _addButtonsEvents = /*#__PURE__*/new WeakSet();
  var _addSwipe = /*#__PURE__*/new WeakSet();
  var _animationOut = /*#__PURE__*/new WeakSet();
  var _update = /*#__PURE__*/new WeakSet();
  var _createEl = /*#__PURE__*/new WeakSet();
  var _removeChilds = /*#__PURE__*/new WeakSet();
  var _updateImg = /*#__PURE__*/new WeakSet();
  var _updateArrows = /*#__PURE__*/new WeakSet();
  var SmartImageGallery = /*#__PURE__*/function () {
    /**
     * @param settings - gallery settings
     * @param {string} [settings.containerSelector="body"] - selector for modal window
     * @param {string} [settings.imagesSelector="img"] - find images selector
     * @param {boolean} [settings.showDownloadButton=false] - show download button
     * @param {boolean} [settings.displayCopies=true] - display copies of pictures or not (defines copies or not by img src)
     * @param {number} [settings.animationDuration=0.3] - animation duration
     * @param {boolean} [settings.init=true] - init after create (then you can call method .init() )
     */
    function SmartImageGallery(_ref) {
      var _this = this;
      var _ref$containerSelecto = _ref.containerSelector,
        containerSelector = _ref$containerSelecto === void 0 ? "body" : _ref$containerSelecto,
        _ref$imagesSelector = _ref.imagesSelector,
        imagesSelector = _ref$imagesSelector === void 0 ? "img" : _ref$imagesSelector,
        _ref$showDownloadButt = _ref.showDownloadButton,
        showDownloadButton = _ref$showDownloadButt === void 0 ? false : _ref$showDownloadButt,
        _ref$displayCopies = _ref.displayCopies,
        displayCopies = _ref$displayCopies === void 0 ? true : _ref$displayCopies,
        _ref$init = _ref.init,
        init = _ref$init === void 0 ? true : _ref$init,
        _ref$animationDuratio = _ref.animationDuration,
        animationDuration = _ref$animationDuratio === void 0 ? 0.3 : _ref$animationDuratio;
      _classCallCheck$1(this, SmartImageGallery);
      _classPrivateMethodInitSpec(this, _updateArrows);
      _classPrivateMethodInitSpec(this, _updateImg);
      _classPrivateMethodInitSpec(this, _removeChilds);
      _classPrivateMethodInitSpec(this, _createEl);
      _classPrivateMethodInitSpec(this, _update);
      _classPrivateMethodInitSpec(this, _animationOut);
      _classPrivateMethodInitSpec(this, _addSwipe);
      _classPrivateMethodInitSpec(this, _addButtonsEvents);
      _classPrivateMethodInitSpec(this, _putImg);
      _classPrivateMethodInitSpec(this, _createImgEl);
      _classPrivateMethodInitSpec(this, _createBackground);
      _classPrivateMethodInitSpec(this, _createElements);
      _classPrivateMethodInitSpec(this, _getCurrentImg);
      _classPrivateMethodInitSpec(this, _getArrows);
      _classPrivateMethodInitSpec(this, _animation);
      _classPrivateMethodInitSpec(this, _dispatchEvents);
      _classPrivateMethodInitSpec(this, _show);
      _classPrivateMethodInitSpec(this, _filterCopies);
      // selectors
      _defineProperty$1(this, "rootSelector", "body, html");
      _defineProperty$1(this, "containerSelector", void 0);
      _defineProperty$1(this, "imagesSelector", void 0);
      // CSS classes and events
      _defineProperty$1(this, "modalId", "dev-galery__screen");
      _defineProperty$1(this, "showClass", "dev-galery__screen_show");
      _defineProperty$1(this, "modalElements", {
        imageContainer: {
          class: "dev-galery__image",
          show: true
        },
        close: {
          class: "dev-galery__close dev-galery__btn ",
          content: "✕",
          show: true,
          click: function click() {
            _this.hide();
          }
        },
        prev: {
          class: "dev-galery__prev dev-galery__btn ",
          content: "◀",
          show: true,
          click: function click() {
            _this.prev();
          }
        },
        next: {
          class: "dev-galery__next dev-galery__btn ",
          content: "▶",
          show: true,
          click: function click() {
            _this.next();
          }
        },
        download: {
          class: "dev-galery__download dev-galery__btn ",
          content: "▼",
          show: true,
          click: function click() {
            _this.downloadCurrent();
          }
        }
      });
      _defineProperty$1(this, "events", {
        name: {
          open: "smartgalleryopen",
          close: "smartgalleryclose"
        },
        html: document.body
      });
      _classPrivateFieldInitSpec(this, _keyControlCallback, {
        writable: true,
        value: function value(e) {
          switch (e.keyCode) {
            case 39:
              _this.next();
              break;
            case 37:
              _this.prev();
              break;
            case 27:
              _this.hide();
              break;
          }
        }
      });
      this.translate = LangEn;
      this.containerSelector = containerSelector;
      this.imagesSelector = imagesSelector;
      this.displayCopies = displayCopies;
      this.modalElements.download.show = showDownloadButton;
      this.animationDuration = animationDuration;
      if (init) this.init();
    }
    /**
     * Initialize gallery
     * Sets click events on images, takes all HTML elements by selector, deletes copies, etc
     * @returns {boolean}
     */
    _createClass$1(SmartImageGallery, [{
      key: "init",
      value: function init() {
        var _this2 = this;
        try {
          this.root = document.querySelector(this.rootSelector);
          this.container = document.querySelector(this.containerSelector);
          this.images = _toConsumableArray(document.querySelectorAll(this.imagesSelector));
          var s = document.createElement("style");
          s.innerText = css;
          document.head.appendChild(s);
          if (this.images.length < 1) {
            console.log("".concat(this.translate.errors.noImages, " ").concat(this.imagesSelector));
            return;
          }
          var filеrRejected = {};
          if (!this.displayCopies) filеrRejected = _classPrivateMethodGet(this, _filterCopies, _filterCopies2).call(this);
          this.images.forEach(function (img, i) {
            var addEL = function addEL(el) {
              return el.addEventListener("click", function () {
                return _classPrivateMethodGet(_this2, _show, _show2).call(_this2, i);
              });
            };
            if (filеrRejected[img.src]) {
              filеrRejected[img.src].forEach(function (img) {
                return addEL(img);
              });
            }
            addEL(img);
            return true;
          });
        } catch (error) {
          console.log(this.translate.errors.initFailed, error);
          return false;
        }
      }
    }, {
      key: "startKeyControl",
      value:
      /**
       * Add key control
       */
      function startKeyControl() {
        document.body.addEventListener("keydown", _classPrivateFieldGet(this, _keyControlCallback));
      }
      /**
       * Remove key control
       */
    }, {
      key: "stopKeyControl",
      value: function stopKeyControl() {
        document.body.removeEventListener("keydown", _classPrivateFieldGet(this, _keyControlCallback));
      }
    }, {
      key: "downloadCurrent",
      value:
      /**
       * Start download event for current img
       */
      function downloadCurrent() {
        var a = document.createElement("a");
        var url = _classPrivateMethodGet(this, _getCurrentImg, _getCurrentImg2).call(this).src;
        a.href = url;
        a.download = url.split("/").pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

      /**
       * Hide modal
       */
    }, {
      key: "hide",
      value: function hide() {
        var _this3 = this;
        _classPrivateMethodGet(this, _animation, _animation2).call(this, false, function () {
          _this3.root.style.overflow = "auto";
          _this3.modal.remove();
          _this3.stopKeyControl();
          _classPrivateMethodGet(_this3, _dispatchEvents, _dispatchEvents2).call(_this3, "close");
        });
      }
      /**
       * Show prev img if can
       * @returns {Boolead} - is go prew?
       */
    }, {
      key: "prev",
      value: function prev() {
        var _this4 = this;
        if (this.nowId <= 0 || this.prevAStarted) return false;
        _classPrivateMethodGet(this, _animationOut, _animationOut2).call(this, "dev-galery-fade-right", function () {
          _this4.nowId--;
          _classPrivateMethodGet(_this4, _update, _update2).call(_this4, "dev-galery-fade-in-left");
        });
        return true;
      }
      /**
       * Show next Image if can
       * @returns {Boolean}
       */
    }, {
      key: "next",
      value: function next() {
        var _this5 = this;
        if (this.nowId >= this.images.length - 1) return false;
        _classPrivateMethodGet(this, _animationOut, _animationOut2).call(this, "dev-galery-fade-left", function () {
          _this5.nowId++;
          _classPrivateMethodGet(_this5, _update, _update2).call(_this5, "dev-galery-fade-in-right");
        });
        return true;
      }
    }]);
    return SmartImageGallery;
  }();
  function _filterCopies2() {
    var srcs = {},
      imgs = {};
    this.images = this.images.filter(function (img) {
      if (srcs[img.src] === undefined) {
        return srcs[img.src] = true;
      }
      imgs[img.src] === undefined ? imgs[img.src] = [img] : imgs[img.src].push(img);
      return false;
    });
    return imgs;
  }
  function _show2(id) {
    this.nowId = id;
    var bg = _classPrivateMethodGet(this, _createBackground, _createBackground2).call(this);
    this.bgContainer = bg;
    this.container.append(bg);
    _classPrivateMethodGet(this, _animation, _animation2).call(this, true);
    _classPrivateMethodGet(this, _createElements, _createElements2).call(this, bg);
    this.modalElements.imageContainer.html.style.animationDuration = this.animationDuration;
    _classPrivateMethodGet(this, _addButtonsEvents, _addButtonsEvents2).call(this);
    _classPrivateMethodGet(this, _updateImg, _updateImg2).call(this);
    _classPrivateMethodGet(this, _updateArrows, _updateArrows2).call(this);
    this.startKeyControl();
    _classPrivateMethodGet(this, _dispatchEvents, _dispatchEvents2).call(this, "open");
  }
  function _dispatchEvents2(eventName) {
    this.events.html.dispatchEvent(new Event(this.events.name[eventName]));
  }
  function _animation2(a, callback) {
    var _this6 = this;
    if (a) {
      setTimeout(function () {
        _this6.bgContainer.classList["add"](_this6.showClass);
      }, 10);
    } else {
      this.bgContainer.classList["remove"](this.showClass);
      this.bgContainer.addEventListener("transitionend", function (e) {
        callback(e);
      }, false);
    }
  }
  function _getArrows2() {
    return {
      next: this.modalElements.next.html,
      prev: this.modalElements.prev.html
    };
  }
  function _getCurrentImg2() {
    return this.images[this.nowId];
  }
  function _createElements2(destination) {
    for (var key in this.modalElements) {
      if (Object.hasOwnProperty.call(this.modalElements, key)) {
        var element = this.modalElements[key];
        if (!element.show) continue;
        element.html = _classPrivateMethodGet(this, _createEl, _createEl2).call(this, element.class);
        if (element.content !== undefined) {
          element.html.appendChild(document.createTextNode(element.content));
        }
        destination.appendChild(element.html);
      }
    }
  }
  function _createBackground2() {
    var bg = _classPrivateMethodGet(this, _createEl, _createEl2).call(this);
    bg.id = this.modalId;
    this.modal = bg;
    return bg;
  }
  function _createImgEl2(src) {
    var img = _classPrivateMethodGet(this, _createEl, _createEl2).call(this, "", "img");
    img.src = src;
    return img;
  }
  function _putImg2(img) {
    img.addEventListener("click", function (e) {
      e.stopPropagation();
      e.cancelBubble = true;
    });
    _classPrivateMethodGet(this, _addSwipe, _addSwipe2).call(this, img);
    var html = this.modalElements.imageContainer.html;
    _classPrivateMethodGet(this, _removeChilds, _removeChilds2).call(this, html);
    html.appendChild(img);
  }
  function _addButtonsEvents2() {
    var _this7 = this;
    var self = this;
    var closeEvent = function closeEvent(e) {
      self.hide();
    };
    this.modal.addEventListener("click", closeEvent);
    var _loop = function _loop() {
      if (Object.hasOwnProperty.call(_this7.modalElements, name)) {
        var e = _this7.modalElements[name];
        if (!e.html || !e.show || !e.click) return "continue";
        e.html.addEventListener("click", function (event) {
          event.stopPropagation();
          e.click();
        });
      }
    };
    for (var name in this.modalElements) {
      var _ret = _loop();
      if (_ret === "continue") continue;
    }
  }
  function _addSwipe2(el) {
    var _this8 = this;
    if (_typeof(SmartSwipeController) === undefined) {
      console.log(this.translate.errors.simpleTapController.notFound);
      return;
    }
    try {
      new SmartSwipeController(el, 2);
      el.addEventListener("swipeleft", function () {
        _this8.next();
      });
      el.addEventListener("swiperight", function () {
        _this8.prev();
      });
    } catch (error) {
      console.log(this.translate.errors.simpleTapController.initError, error);
    }
  }
  function _animationOut2(className, callback) {
    var _this9 = this;
    if (this.isAnimating) {
      return;
    }
    var modalImg = this.modalElements.imageContainer.html;
    modalImg.classList.add(className);
    this.isAnimating = true;
    var removeCallback = function removeCallback() {
      modalImg.classList.remove(className);
      _this9.isAnimating = false;
      modalImg.removeEventListener("animationend", removeCallback);
      callback();
    };
    modalImg.addEventListener("animationend", removeCallback);
  }
  function _update2(a) {
    var _this10 = this;
    _classPrivateMethodGet(this, _updateImg, _updateImg2).call(this);
    if (a) {
      _classPrivateMethodGet(this, _animationOut, _animationOut2).call(this, a, function () {
        _classPrivateMethodGet(_this10, _updateArrows, _updateArrows2).call(_this10);
      });
    } else _classPrivateMethodGet(this, _updateArrows, _updateArrows2).call(this);
  }
  function _createEl2() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";
    var element = document.createElement(type);
    element.className = className;
    return element;
  }
  function _removeChilds2(el) {
    while (el.firstChild) {
      el.removeChild(el.lastChild);
    }
  }
  function _updateImg2() {
    _classPrivateMethodGet(this, _putImg, _putImg2).call(this, _classPrivateMethodGet(this, _createImgEl, _createImgEl2).call(this, _classPrivateMethodGet(this, _getCurrentImg, _getCurrentImg2).call(this).src));
  }
  function _updateArrows2() {
    var _classPrivateMethodGe = _classPrivateMethodGet(this, _getArrows, _getArrows2).call(this),
      next = _classPrivateMethodGe.next,
      prev = _classPrivateMethodGe.prev;
    prev.style.opacity = "1";
    next.style.opacity = "1";
    if (this.nowId <= 0) {
      prev.style.opacity = "0";
    }
    if (this.nowId >= this.images.length - 1) {
      next.style.opacity = "0";
    }
  }

  exports.SmartImageGallery = SmartImageGallery;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});

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
   * Библиотека для удобного создания событий свайпов и тапов на любой html элемент
   * Поддерживаемые события:
   * - swipeLeft
   * - swipeRight
   * - swipeUp
   * - swipeDown
   * - tap
   */
  var SimpleSwipeController = /*#__PURE__*/function () {
    /**
     * Применть библиотеку к элементу
     * @param {HTMLElement} element - любой HTML элемент
     * @param {number} offset - зона не срабатывания событий в пикселях (кроме события tap)
     */
    function SimpleSwipeController(element) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      _classCallCheck(this, SimpleSwipeController);
      _defineProperty(this, "start", {
        x: 0,
        y: 0
      });
      _defineProperty(this, "eventCallbacks", {
        swipeLeft: [],
        swipeRight: [],
        swipeUp: [],
        swipeDown: [],
        tap: []
      });
      this.element = element;
      this.offset = offset;
      this.init();
    }
    _createClass(SimpleSwipeController, [{
      key: "init",
      value: function init() {
        var _this = this;
        this.element.addEventListener("touchstart", function (e) {
          _this.start.x = e.changedTouches[0].screenX;
          _this.start.y = e.changedTouches[0].screenY;
        });
        this.element.addEventListener("touchend", function (e) {
          return _this.handler(e.changedTouches[0].screenX, e.changedTouches[0].screenY, e);
        });
      }
      /**
       * Добавить запуск функции на событие ()
       * @param {string} eventName - название события
       * @param {Function} callback - функция для запуска. При срабатывании ей будет передан объект стандартного событие первым параметром и название события вторым
       */
    }, {
      key: "addEventListener",
      value: function addEventListener(eventName, callback) {
        this.setEventGroup(eventName, function (EventGroup) {
          EventGroup.push(callback);
        });
        return this;
      }
      /**
       * Удаляет добавленное событие
       * @param {string} eventName - название события
       * @param {Function} callback - тело функции
       */
    }, {
      key: "removeEventListener",
      value: function removeEventListener(eventName, callback) {
        this.setEventGroup(eventName, function (EventGroup) {
          EventGroup.splice(EventGroup.indexOf(callback), 1);
        });
        return this;
      }
    }, {
      key: "setEventGroup",
      value: function setEventGroup(eventName, groupEditorCallback) {
        var EventGroup = this.eventCallbacks[eventName];
        if (EventGroup === undefined) {
          console.log("\u041D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u0441 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C ".concat(eventName, ". \u0421\u043F\u0438\u0441\u043E\u043A \u0438\u043C\u0435\u044E\u0449\u0438\u0445\u0441\u044F \u0441\u043E\u0431\u044B\u0442\u0438\u0439: ").concat(this.eventsName()));
          return false;
        }
        groupEditorCallback(EventGroup);
        return this;
      }
    }, {
      key: "triggerEvent",
      value: function triggerEvent(eventName, event) {
        var _this$eventCallbacks$;
        (_this$eventCallbacks$ = this.eventCallbacks[eventName]) === null || _this$eventCallbacks$ === void 0 ? void 0 : _this$eventCallbacks$.forEach(function (callback) {
          callback(event, eventName);
        });
      }
    }, {
      key: "handler",
      value: function handler(x, y, event) {
        var _this2 = this;
        var events = [];
        if (x < this.start.x - this.offset) events.push("swipeLeft");else if (x > this.start.x + this.offset) events.push("swipeRight");
        if (y < this.start.y - this.offset) events.push("swipeUp");else if (y > this.start.y + this.offset) events.push("swipeDown");
        if (y === this.start.y) events.push("tap");
        events.forEach(function (eventName) {
          return _this2.triggerEvent(eventName, event);
        });
      }
    }, {
      key: "eventsName",
      value: function eventsName() {
        var str = "";
        for (var key in this.eventCallbacks) {
          if (Object.hasOwnProperty.call(this.eventCallbacks, key)) {
            str += this.eventCallbacks[key];
          }
        }
        return str;
      }
    }]);
    return SimpleSwipeController;
  }();

  var LangRu = {
    errors: {
      noImages: "Не найдены изображения по селектору",
      initFailed: "Не удалось настроить галерею!",
      simpleTapController: {
        notFound: "SimpleSwipeController не подключен. Свайпы не активны",
        initError: "Не удалось подключить свайпы"
      }
    }
  };

  var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

  var css = "@keyframes dev-galery-fade-left {\r\n    0% {\r\n        transform: translate(0%, 0);\r\n        opacity: 1;\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate(-100%, 0);\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes dev-galery-fade-right {\r\n    0% {\r\n        transform: translate(0%, 0);\r\n        opacity: 1;\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate(100%, 0);\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes dev-galery-fade-in-right {\r\n    0% {\r\n        transform: translate(100%, 0);\r\n        opacity: 0;\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate(0%, 0);\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes dev-galery-fade-in-left {\r\n    0% {\r\n        transform: translate(-100%, 0);\r\n        opacity: 0;\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate(0%, 0);\r\n        opacity: 1;\r\n    }\r\n}\r\n.dev-galery-fade-left {\r\n    animation-name: dev-galery-fade-left;\r\n}\r\n.dev-galery-fade-right {\r\n    animation-name: dev-galery-fade-right;\r\n}\r\n.dev-galery-fade-in-right {\r\n    animation-name: dev-galery-fade-in-right;\r\n} \r\n.dev-galery-fade-in-left {\r\n    animation-name: dev-galery-fade-in-left;\r\n}\r\n\r\n#dev-galery__screen * {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#dev-galery__screen {\r\n    --color-background-modal: rgba(240, 240, 240, 0.9);\r\n\r\n    --color-background-button: #003a72;\r\n    --color-background-button-hover: white;\r\n    --color-text-button:white;\r\n    --color-text-button-hover: #003a72;\r\n\r\n    --color-background-button-download: #007252; \r\n    --color-text-button-download-hover: #007252;\r\n\r\n    --z-index: 10;\r\n    --border-radius-img: 20px;\r\n    --border-radius-button: 10%;\r\n\r\n    --button-size: 50px;\r\n    --button-gap: 10px;\r\n    --button-base-offset: 10px;\r\n}\r\n\r\n.dev-galery__screen_show {\r\n    opacity: 1 !important;\r\n}\r\n\r\n\r\n#dev-galery__screen {\r\n    position: fixed;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    top: 0;\r\n    left: 0;\r\n    background: var(--color-background-modal);\r\n    z-index: var(--z-index);\r\n    text-align: center;\r\n    opacity: 0;\r\n    transition: opacity .2s linear;\r\n}\r\n\r\n\r\n#dev-galery__screen .dev-galery__image {\r\n    height: 100%;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    animation-timing-function: ease-out;\r\n    animation-duration: .3s;\r\n\r\n} \r\n\r\n#dev-galery__screen .dev-galery__image img {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    box-shadow: 0px 0px 30px #8a8a8a;\r\n    margin: 0 auto;\r\n    border-radius: var(--border-radius-img);\r\n    user-select: none;\r\n\r\n}\r\n\r\n\r\n\r\n#dev-galery__screen .dev-galery__btn {\r\n    user-select: none;\r\n    border-radius: var(--border-radius-button);\r\n    width: var(--button-size);\r\n    height: var(--button-size);\r\n    text-align: center;\r\n    line-height: var(--button-size);\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: background .2s ease, opacity .5s linear;\r\n    font-size: calc(var(--button-size) / 2);\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n    box-shadow: 1px 1px 10px #8a8a8a;\r\n    color: var(--color-text-button);\r\n    background: var(--color-background-button);\r\n    opacity: 1;\r\n}\r\n\r\n#dev-galery__screen .dev-galery__btn:hover {\r\n\r\n    background: var(--color-background-button-hover);\r\n    color: var(--color-text-button-hover);\r\n}\r\n\r\n#dev-galery__screen .dev-galery__close,\r\n#dev-galery__screen .dev-galery__download {\r\n    top: var(--button-base-offset);\r\n}\r\n\r\n#dev-galery__screen .dev-galery__close,\r\n#dev-galery__screen .dev-galery__next {\r\n    right: var(--button-base-offset)\r\n}\r\n\r\n#dev-galery__screen .dev-galery__prev,\r\n#dev-galery__screen .dev-galery__download {\r\n    right: calc(var(--button-size) + var(--button-base-offset) + var(--button-gap));\r\n}\r\n\r\n#dev-galery__screen .dev-galery__prev,\r\n#dev-galery__screen .dev-galery__next {\r\n    bottom: var(--button-base-offset)\r\n}\r\n\r\n#dev-galery__screen .dev-galery__download {\r\n    background-color: var(--color-background-button-download);\r\n}\r\n\r\n#dev-galery__screen .dev-galery__download:hover {\r\n    color: var(--color-text-button-download-hover);\r\n}";
  n(css,{});

  /**
   * Создаёт галерею при клике на изображение. Изображения собираются по селлектору.
   * В стилях в самом начале есть все настройки отображения.
   *
   * На document.body создаёт события:
   * - smartGalleryOpen:  при открытии окна
   * - smartGalleryClose: при закрытии окна
   */
  var SmartImgGallery = /*#__PURE__*/function () {
    /**
     * @param settings - настройки галереи
     * @param {string} [settings.containerSelector="body"] - селектор места под модальное окно
     * @param {string} [settings.imagesSelector="img"] - селектор для сбора изображений
     * @param {boolean} [settings.showDownloadButton=false] - отображение кнопки загрузки
     * @param {boolean} [settings.displayCopies=true] - отображать ли копии в галереи (проверка по совпадению пути)
     * @param {number} [settings.animationDuration=0.3] - длительность анимации перехода изображений
     * @param {boolean} [settings.init=true] - проводить инициализацию сразу после создания экземпляра (можно будет вызвать метод .init() )
     */
    function SmartImgGallery(_ref) {
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
      _classCallCheck(this, SmartImgGallery);
      // селекторы
      _defineProperty(this, "rootSelector", "body, html");
      _defineProperty(this, "containerSelector", void 0);
      _defineProperty(this, "imagesSelector", void 0);
      //классы и события
      _defineProperty(this, "modalId", "dev-galery__screen");
      _defineProperty(this, "showClass", "dev-galery__screen_show");
      _defineProperty(this, "modalElements", {
        imageContainer: {
          class: "dev-galery__image",
          show: true
        },
        close: {
          class: "dev-galery__close dev-galery__btn",
          content: "✕",
          show: true,
          click: function click() {
            _this.hide();
          }
        },
        prev: {
          class: "dev-galery__prev dev-galery__btn",
          content: "◀",
          show: true,
          click: function click() {
            _this.prev();
          }
        },
        next: {
          class: "dev-galery__next dev-galery__btn",
          content: "▶",
          show: true,
          click: function click() {
            _this.next();
          }
        },
        download: {
          class: "dev-galery__download dev-galery__btn",
          content: "▼",
          show: true,
          click: function click() {
            _this.downloadCurrent();
          }
        }
      });
      _defineProperty(this, "events", {
        name: {
          open: "smartGalleryOpen",
          close: "smartGalleryClose"
        },
        html: document.body
      });
      _defineProperty(this, "keyControlCallback", function (e) {
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
      });
      this.translate = LangRu;
      this.containerSelector = containerSelector;
      this.imagesSelector = imagesSelector;
      this.displayCopies = displayCopies;
      this.modalElements.download.show = showDownloadButton;
      this.animationDuration = animationDuration;
      if (init) this.init();
    }
    /**
     * Подготовка галереи к работе.
     * Устанавливает события клика на изображения, сохраняет место размещения, удаляет копии (если нужно)
     * @returns {boolean}
     */
    _createClass(SmartImgGallery, [{
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
          if (!this.displayCopies) filеrRejected = this.filterCopies();
          this.images.forEach(function (img, i) {
            var addEL = function addEL(el) {
              return el.addEventListener("click", function () {
                return _this2.show(i);
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
      key: "filterCopies",
      value: function filterCopies() {
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
    }, {
      key: "show",
      value: function show(id) {
        this.nowId = id;
        var bg = this.createBackground();
        this.bgContainer = bg;
        this.container.append(bg);
        this.animation(true);
        this.createElements(bg);
        this.modalElements.imageContainer.html.style.animationDuration = this.animationDuration;
        this.addButtonsEvents();
        this.updateImg();
        this.updateArrows();
        this.startKeyControl();
        this.dispatchEvents("open");
      }
    }, {
      key: "dispatchEvents",
      value: function dispatchEvents(eventName) {
        this.events.html.dispatchEvent(new Event(this.events.name[eventName]));
      }
    }, {
      key: "animation",
      value: function animation(a, callback) {
        var _this3 = this;
        if (a) {
          setTimeout(function () {
            _this3.bgContainer.classList["add"](_this3.showClass);
          }, 10);
        } else {
          this.bgContainer.classList["remove"](this.showClass);
          this.bgContainer.addEventListener("transitionend", function (e) {
            callback(e);
          }, false);
        }
      }
    }, {
      key: "startKeyControl",
      value: function startKeyControl() {
        document.body.addEventListener("keydown", this.keyControlCallback);
      }
    }, {
      key: "stopKeyControl",
      value: function stopKeyControl() {
        document.body.removeEventListener("keydown", this.keyControlCallback);
      }
    }, {
      key: "getArrows",
      value: function getArrows() {
        return {
          next: this.modalElements.next.html,
          prev: this.modalElements.prev.html
        };
      }
    }, {
      key: "getCurrentImg",
      value: function getCurrentImg() {
        return this.images[this.nowId];
      }
    }, {
      key: "createElements",
      value: function createElements(destination) {
        for (var key in this.modalElements) {
          if (Object.hasOwnProperty.call(this.modalElements, key)) {
            var element = this.modalElements[key];
            if (!element.show) continue;
            element.html = this.createEl(element.class);
            if (element.content !== undefined) {
              element.html.appendChild(document.createTextNode(element.content));
            }
            destination.appendChild(element.html);
          }
        }
      }
    }, {
      key: "createBackground",
      value: function createBackground() {
        var bg = this.createEl();
        bg.id = this.modalId;
        this.modal = bg;
        return bg;
      }
    }, {
      key: "createImgEl",
      value: function createImgEl(src) {
        var img = this.createEl("", "img");
        img.src = src;
        return img;
      }
    }, {
      key: "putImg",
      value: function putImg(img) {
        img.addEventListener("click", function (e) {
          e.stopPropagation();
          e.cancelBubble = true;
        });
        this.addSwipe(img);
        var html = this.modalElements.imageContainer.html;
        this.removeChilds(html);
        html.appendChild(img);
      }
    }, {
      key: "addButtonsEvents",
      value: function addButtonsEvents() {
        var _this4 = this;
        var self = this;
        var closeEvent = function closeEvent(e) {
          self.hide();
        };
        this.modal.addEventListener("click", closeEvent);
        var _loop = function _loop() {
          if (Object.hasOwnProperty.call(_this4.modalElements, name)) {
            var e = _this4.modalElements[name];
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
    }, {
      key: "addSwipe",
      value: function addSwipe(el) {
        var _this5 = this;
        if (_typeof(SimpleSwipeController) === undefined) {
          console.log(this.translate.errors.simpleTapController.notFound);
          return;
        }
        try {
          new SimpleSwipeController(el, 2).addEventListener("swipeLeft", function () {
            _this5.next();
          }).addEventListener("swipeRight", function () {
            _this5.prev();
          });
        } catch (error) {
          console.log(this.translate.errors.simpleTapController.initError, error);
        }
      }
    }, {
      key: "downloadCurrent",
      value: function downloadCurrent(e) {
        var a = document.createElement("a");
        var url = this.getCurrentImg().src;
        a.href = url;
        a.download = url.split("/").pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    }, {
      key: "updateArrows",
      value: function updateArrows() {
        var _this$getArrows = this.getArrows(),
          next = _this$getArrows.next,
          prev = _this$getArrows.prev;
        prev.style.opacity = "1";
        next.style.opacity = "1";
        if (this.nowId <= 0) {
          prev.style.opacity = "0";
        }
        if (this.nowId >= this.images.length - 1) {
          next.style.opacity = "0";
        }
      }
    }, {
      key: "updateImg",
      value: function updateImg() {
        this.putImg(this.createImgEl(this.getCurrentImg().src));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this6 = this;
        this.animation(false, function () {
          _this6.root.style.overflow = "auto";
          _this6.modal.remove();
          _this6.stopKeyControl();
          _this6.dispatchEvents("close");
        });
      }
    }, {
      key: "prev",
      value: function prev() {
        var _this7 = this;
        if (this.nowId <= 0 || this.prevAStarted) return;
        this.animationOut("dev-galery-fade-right", function () {
          _this7.nowId--;
          _this7.update("dev-galery-fade-in-left");
        });
      }
    }, {
      key: "next",
      value: function next() {
        var _this8 = this;
        if (this.nowId >= this.images.length - 1) return;
        this.animationOut("dev-galery-fade-left", function () {
          _this8.nowId++;
          _this8.update("dev-galery-fade-in-right");
        });
      }
    }, {
      key: "animationOut",
      value: function animationOut(className, callback) {
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
    }, {
      key: "update",
      value: function update(a) {
        var _this10 = this;
        this.updateImg();
        if (a) {
          this.animationOut(a, function () {
            _this10.updateArrows();
          });
        } else this.updateArrows();
      }
    }, {
      key: "createEl",
      value: function createEl() {
        var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";
        var element = document.createElement(type);
        element.className = className;
        return element;
      }
    }, {
      key: "removeChilds",
      value: function removeChilds(el) {
        while (el.firstChild) {
          el.removeChild(el.lastChild);
        }
      }
    }]);
    return SmartImgGallery;
  }();

  exports.SmartImgGallery = SmartImgGallery;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});

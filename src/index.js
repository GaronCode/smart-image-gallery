import { SimpleSwipeController } from "./simpleSwipe";
import { LangRu } from "./lang/ru";
import style from "./style.css";
/**
 * Создаёт галерею при клике на изображение. Изображения собираются по селлектору.
 * В стилях в самом начале есть все настройки отображения.
 *
 * На document.body создаёт события:
 * - smartGalleryOpen:  при открытии окна
 * - smartGalleryClose: при закрытии окна
 */
export class SmartImgGallery {
    // селекторы
    rootSelector = "body, html";
    containerSelector;
    imagesSelector;
    //классы и события
    modalId = "dev-galery__screen";
    showClass = "dev-galery__screen_show";
    modalElements = {
        imageContainer: { class: "dev-galery__image", show: true },
        close: {
            class: "dev-galery__close dev-galery__btn",
            content: "✕",
            show: true,
            click: () => {
                this.hide();
            },
        },
        prev: {
            class: "dev-galery__prev dev-galery__btn",
            content: "◀",
            show: true,
            click: () => {
                this.prev();
            },
        },
        next: {
            class: "dev-galery__next dev-galery__btn",
            content: "▶",
            show: true,
            click: () => {
                this.next();
            },
        },
        download: {
            class: "dev-galery__download dev-galery__btn",
            content: "▼",
            show: true,
            click: () => {
                this.downloadCurrent();
            },
        },
    };
    events = {
        name: { open: "smartGalleryOpen", close: "smartGalleryClose" },
        html: document.body,
    };

    /**
     * @param settings - настройки галереи
     * @param {string} [settings.containerSelector="body"] - селектор места под модальное окно
     * @param {string} [settings.imagesSelector="img"] - селектор для сбора изображений
     * @param {boolean} [settings.showDownloadButton=false] - отображение кнопки загрузки
     * @param {boolean} [settings.displayCopies=true] - отображать ли копии в галереи (проверка по совпадению пути)
     * @param {number} [settings.animationDuration=0.3] - длительность анимации перехода изображений
     * @param {boolean} [settings.init=true] - проводить инициализацию сразу после создания экземпляра (можно будет вызвать метод .init() )
     */
    constructor({
        containerSelector = "body",
        imagesSelector = "img",
        showDownloadButton = false,
        displayCopies = true,
        init = true,
        animationDuration = 0.3,
    }) {
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
    init() {
        try {
            this.root = document.querySelector(this.rootSelector);
            this.container = document.querySelector(this.containerSelector);
            this.images = [...document.querySelectorAll(this.imagesSelector)];

            const s = document.createElement("style");
            s.innerText = style;
            document.head.appendChild(s);

            if (this.images.length < 1) {
                console.log(
                    `${this.translate.errors.noImages} ${this.imagesSelector}`
                );
                return;
            }
            let filеrRejected = {};
            if (!this.displayCopies) filеrRejected = this.filterCopies();

            this.images.forEach((img, i) => {
                const addEL = (el) =>
                    el.addEventListener("click", () => this.show(i));

                if (filеrRejected[img.src]) {
                    filеrRejected[img.src].forEach((img) => addEL(img));
                }
                addEL(img);

                return true;
            });
        } catch (error) {
            console.log(this.translate.errors.initFailed, error);
            return false;
        }
    }

    filterCopies() {
        let srcs = {},
            imgs = {};
        this.images = this.images.filter((img) => {
            if (srcs[img.src] === undefined) {
                return (srcs[img.src] = true);
            }

            imgs[img.src] === undefined
                ? (imgs[img.src] = [img])
                : imgs[img.src].push(img);
            return false;
        });
        return imgs;
    }

    show(id) {
        this.nowId = id;

        let bg = this.createBackground();
        this.bgContainer = bg;
        this.container.append(bg);

        this.animation(true);

        this.createElements(bg);

        this.modalElements.imageContainer.html.style.animationDuration =
            this.animationDuration;

        this.addButtonsEvents();

        this.updateImg();

        this.updateArrows();

        this.startKeyControl();

        this.dispatchEvents("open");
    }

    dispatchEvents(eventName) {
        this.events.html.dispatchEvent(new Event(this.events.name[eventName]));
    }

    keyControlCallback = (e) => {
        switch (e.keyCode) {
            case 39:
                this.next();
                break;
            case 37:
                this.prev();
                break;
            case 27:
                this.hide();
                break;
            default:
                break;
        }
    };

    animation(a, callback) {
        if (a) {
            setTimeout(() => {
                this.bgContainer.classList["add"](this.showClass);
            }, 10);
        } else {
            this.bgContainer.classList["remove"](this.showClass);
            this.bgContainer.addEventListener(
                "transitionend",
                (e) => {
                    callback(e);
                },
                false
            );
        }
    }

    startKeyControl() {
        document.body.addEventListener("keydown", this.keyControlCallback);
    }

    stopKeyControl() {
        document.body.removeEventListener("keydown", this.keyControlCallback);
    }

    getArrows() {
        return {
            next: this.modalElements.next.html,
            prev: this.modalElements.prev.html,
        };
    }
    getCurrentImg() {
        return this.images[this.nowId];
    }

    createElements(destination) {
        for (const key in this.modalElements) {
            if (Object.hasOwnProperty.call(this.modalElements, key)) {
                const element = this.modalElements[key];
                if (!element.show) continue;
                element.html = this.createEl(element.class);
                if (element.content !== undefined) {
                    element.html.appendChild(
                        document.createTextNode(element.content)
                    );
                }
                destination.appendChild(element.html);
            }
        }
    }

    createBackground() {
        const bg = this.createEl();
        bg.id = this.modalId;
        this.modal = bg;
        return bg;
    }

    createImgEl(src) {
        const img = this.createEl("", "img");
        img.src = src;
        return img;
    }

    putImg(img) {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            e.cancelBubble = true;
        });

        this.addSwipe(img);

        let html = this.modalElements.imageContainer.html;
        this.removeChilds(html);
        html.appendChild(img);
    }
    addButtonsEvents() {
        let self = this;
        let closeEvent = function (e) {
            self.hide();
        };

        this.modal.addEventListener("click", closeEvent);

        for (const name in this.modalElements) {
            if (Object.hasOwnProperty.call(this.modalElements, name)) {
                const e = this.modalElements[name];
                if (!e.html || !e.show || !e.click) continue;
                e.html.addEventListener("click", (event) => {
                    event.stopPropagation();
                    e.click();
                });
            }
        }
    }

    addSwipe(el) {
        if (typeof SimpleSwipeController === undefined) {
            console.log(this.translate.errors.simpleTapController.notFound);
            return;
        }
        try {
            new SimpleSwipeController(el, 2)
                .addEventListener("swipeLeft", () => {
                    this.next();
                })
                .addEventListener("swipeRight", () => {
                    this.prev();
                });
        } catch (error) {
            console.log(
                this.translate.errors.simpleTapController.initError,
                error
            );
        }
    }

    downloadCurrent(e) {
        const a = document.createElement("a");
        let url = this.getCurrentImg().src;
        a.href = url;
        a.download = url.split("/").pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    updateArrows() {
        let { next, prev } = this.getArrows();

        prev.style.opacity = "1";
        next.style.opacity = "1";

        if (this.nowId <= 0) {
            prev.style.opacity = "0";
        }
        if (this.nowId >= this.images.length - 1) {
            next.style.opacity = "0";
        }
    }

    updateImg() {
        this.putImg(this.createImgEl(this.getCurrentImg().src));
    }

    hide() {
        this.animation(false, () => {
            this.root.style.overflow = "auto";
            this.modal.remove();
            this.stopKeyControl();
            this.dispatchEvents("close");
        });
    }

    prev() {
        if (this.nowId <= 0 || this.prevAStarted) return;

        this.animationOut("dev-galery-fade-right", () => {
            this.nowId--;
            this.update("dev-galery-fade-in-left");
        });
    }

    next() {
        if (this.nowId >= this.images.length - 1) return;

        this.animationOut("dev-galery-fade-left", () => {
            this.nowId++;
            this.update("dev-galery-fade-in-right");
        });
    }

    animationOut(className, callback) {
        if (this.isAnimating) {
            return;
        }
        const modalImg = this.modalElements.imageContainer.html;
        modalImg.classList.add(className);
        this.isAnimating = true;

        const removeCallback = () => {
            modalImg.classList.remove(className);
            this.isAnimating = false;
            modalImg.removeEventListener("animationend", removeCallback);
            callback();
        };
        modalImg.addEventListener("animationend", removeCallback);
    }

    update(a) {
        this.updateImg();
        if (a) {
            this.animationOut(a, () => {
                this.updateArrows();
            });
        } else this.updateArrows();
    }

    createEl(className = "", type = "div") {
        let element = document.createElement(type);
        element.className = className;
        return element;
    }

    removeChilds(el) {
        while (el.firstChild) {
            el.removeChild(el.lastChild);
        }
    }
}

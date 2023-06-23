


/**
 * Создаёт галерею при клике на изображение. Изображения собираются по селлектору.
 * В стилях в самом начале есть все настройки отображения.
 */
class smartImgGallery {

    rootSelector = "body, html";
    containerSelector;
    imagesSelector;
    name;
    modalId = "dev-galery__screen";
    showClass = "dev-galery__screen_show";
    modalElements = {
        imageContainer: { class: "dev-galery__image", show: true, },
        close: { class: "dev-galery__close dev-galery__btn", content: "✕", show: true, click: ()=>{this.hide()} },
        prew: { class: "dev-galery__prev dev-galery__btn", content: "◀", show: true, click: (e)=>{this.prew()} },
        next: { class: "dev-galery__next dev-galery__btn", content: "▶", show: true, click: (e)=>{this.next()}  },
        download: { class: "dev-galery__download dev-galery__btn", content: '▼', show: true, click: (e)=>{this.downloadCurrent()}  },
    }
    /**
     * @param settings - настройки галереи
     * @param {string} settings.containerSelector - селектор места под модальное окно (обязательно)
     * @param {string} settings.imagesSelector - селектор для сбора изображений (обязательно)
     * @param {boolean} settings.showDownloadButton - отображение кнопки загрузки. default: false
     */
    constructor({ containerSelector, imagesSelector, showDownloadButton = false }) {
        
        this.containerSelector = containerSelector;
        this.imagesSelector = imagesSelector;
        this.modalElements.download.show = showDownloadButton;
    }

    init() {
        this.root = document.querySelector(this.rootSelector);
        this.container = document.querySelector(this.containerSelector);
        this.images = document.querySelectorAll(this.imagesSelector);



        if (this.images.length < 1) {
            console.log(`Не найдены изображения по селектору ${this.imagesSelector}`);
            return;
        }

        this.images.forEach((img, i) => {
            img.addEventListener("click", () => this.show(i));
        })
    }

    show(id) {

        this.nowId = id;

        


        let bg = this.createBackground();
        this.bgContainer = bg;
        this.container.append(bg);

        this.animation(true);

        

        this.createElements(bg);

        this.addButtonsEvents();

        this.updateImg();

        this.updateArrows();


        this.startKeyControl();

    }

    keyControlCallback = (e) => {
        switch (e.keyCode) {
            case 39:
                this.next();
                break;
            case 37:
                this.prew();
                break;
            case 27:
                this.hide();
                break;
            default:
                break;
        }
    }

    animation(a, callback) {

        if (a) {
            setTimeout(()=>{
                this.bgContainer.classList["add"](this.showClass)
            }, 10)
        } else {
            this.bgContainer.classList["remove"](this.showClass);
            this.bgContainer.addEventListener('transitionend', (e)=>{
                
                callback(e);
                
            }, false)
        }


    }

    startKeyControl() {

        document.body.addEventListener('keydown', this.keyControlCallback);

    }

    stopKeyControl() {
        document.body.removeEventListener('keydown', this.keyControlCallback)
    }



    getArrows() {
        return {
            next: this.modalElements.next.html,
            prew: this.modalElements.prew.html,
        }
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
                    element.html.appendChild(document.createTextNode(element.content))
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
        img.addEventListener('click', (e) => {
            e.stopPropagation()
            e.cancelBubble = true;
        });

        this.addSwipe(img);


        let html = this.modalElements.imageContainer.html;
        this.removeChilds(html)
        html.appendChild(img);
    }
    addButtonsEvents() {
        let self = this;
        let closeEvent = function (e) {
            self.hide();
        }

        this.modal.addEventListener("click", closeEvent);


        for (const name in this.modalElements) {
            if (Object.hasOwnProperty.call(this.modalElements, name)) {
                const e = this.modalElements[name];
                if (!e.html || !e.show || !e.click) continue
                e.html.addEventListener('click', event => {
                    event.stopPropagation();
                    e.click();
                })
            }
        }

    

        

    }

    addSwipe(el) {
        if (!SimpleTapController) {
            console.log('SimpleTapController не подключен. Свайпы не активны');
            return;
        }
        try {
            
           new SimpleTapController(el, 2).addEventListener("swipeLeft", ()=>{this.next()}).addEventListener("swipeRight", ()=>{this.prew()})
        } catch (error) {
            console.log('Не удалось подключить свайпы');
        }
        
    }

    downloadCurrent(e) {
        const a = document.createElement('a')
            let url = this.getCurrentImg().src;
            a.href = url
            a.download = url.split('/').pop()
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
    }

    updateArrows() {
        let { next, prew } = this.getArrows();

        prew.style.opacity = "1";
        next.style.opacity = "1";

        if (this.nowId <= 0) {
            prew.style.opacity = "0";
        }
        if (this.nowId >= this.images.length - 1) {
            next.style.opacity = "0";
        }
    }

    updateImg() {
        this.putImg(this.createImgEl(this.getCurrentImg().src));
    }

    hide() {
        this.animation(false, ()=>{
            this.root.style.overflow = 'auto';
            this.modal.remove();
            this.stopKeyControl()
        });
        
    }

    prew() {
        if (this.nowId <= 0 || this.prewAStarted) return;
        
        this.animationOut('dev-galery-fade-right', ()=>{this.nowId--;this.update('dev-galery-fade-in-left')});
    }

    next() {
        if (this.nowId >= this.images.length - 1) return;
        
        this.animationOut('dev-galery-fade-left', ()=>{this.nowId++; this.update('dev-galery-fade-in-right')});

    }

    animationOut(className, callback) {
        if (this.isAnimating) {
            return;
        }
        const modalImg = this.modalElements.imageContainer.html
        modalImg.classList.add(className);
        this.isAnimating= true;
        
        const removeCallback = ()=>{
            modalImg.classList.remove(className);
            this.isAnimating = false;
            modalImg.removeEventListener('animationend', removeCallback)
            callback();
        }
        modalImg.addEventListener('animationend', removeCallback)
    }


    update(a) {
        this.updateImg();
        if (a) {
            
            this.animationOut(a, ()=>{this.updateArrows()} );
            
        }
        else this.updateArrows();
        
        
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
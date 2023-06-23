/**
 * Библиотека для удобного создания событий свайпов и тапов на любой html элемент
 * Поддерживаемые события:
 * - swipeLeft
 * - swipeRight
 * - swipeUp
 * - swipeDown
 * - tap
 */
class SimpleTapController {

    start = {x: 0, y: 0}
    eventCallbacks = {
        swipeLeft: [],
        swipeRight: [],
        swipeUp: [],
        swipeDown: [],
        tap: []
    }
    /**
     * Применть библиотеку к элементу
     * @param {HTMLElement} element - любой HTML элемент
     * @param {number} offset - зона не срабатывания событий в пикселях (кроме события tap)
     */
    constructor(element, offset = 0) {
        this.element = element;
        this.offset = offset;
        this.init()
    }

    init() {
        this.element.addEventListener('touchstart',  e =>{
            this.start.x = e.changedTouches[0].screenX;
            this.start.y = e.changedTouches[0].screenY;
        });

        this.element.addEventListener('touchend', e => 
            this.handler(e.changedTouches[0].screenX,e.changedTouches[0].screenY, e)
        );
    }
    /**
     * Добавить запуск функции на событие ()
     * @param {string} eventName - название события
     * @param {Function} callback - функция для запуска. При срабатывании ей будет передан объект стандартного событие первым параметром и название события вторым
     */
    addEventListener(eventName, callback) {

  
        this.setEventGroup(eventName, (EventGroup)=>{
            EventGroup.push(callback);
        })

        return this;

    }
    /**
     * Удаляет добавленное событие
     * @param {string} eventName - название события
     * @param {Function} callback - тело функции
     */
    removeEventListener(eventName, callback) {

        this.setEventGroup(eventName, (EventGroup)=>{
            EventGroup.splice(EventGroup.indexOf(callback), 1);
        })
        return this;
    }

    setEventGroup(eventName, groupEditorCallback) {
        const EventGroup = this.eventCallbacks[eventName];
        if (EventGroup === undefined) {
            console.log(`Не существует события с названием ${eventName}. Список имеющихся событий: ${this.eventsName()}`);
            return false;
        }
        groupEditorCallback(EventGroup);
        return this;
    }


    triggerEvent(eventName, event) {
        this.eventCallbacks[eventName]?.forEach(callback => {
            callback(event, eventName)
        });
    }


    handler(x,y, event) {
            let events = [];
            if (x < this.start.x - this.offset) 
                events.push('swipeLeft')
            
            else if (x > this.start.x + this.offset) 
                events.push('swipeRight')
            
            if (y < this.start.y - this.offset) 
                events.push('swipeUp')
            
            else if (y > this.start.y + this.offset) 
                events.push('swipeDown')
            
            if (y === this.start.y) 
                events.push('tap')
            
            events.forEach(eventName => this.triggerEvent(eventName, event))
    }

    eventsName() {
        let str = '';
        for (const key in this.eventCallbacks) {
            if (Object.hasOwnProperty.call(this.eventCallbacks, key)) {
                str += this.eventCallbacks[key];
                
            }
        }
        return str;
    }

}



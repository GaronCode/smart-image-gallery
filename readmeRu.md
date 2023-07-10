

## Использование
1. Разместите изображения на странице любым удобным для вас способом
2. Нужно удостовериться, что для их поиска есть уникальный CSS селектор
    Например вложить в контейнер с классом `gallery` (селектор `.gallery img`)
    ```html
    <div class="gallery">
        <img src="..." >
        ...
    </div>
    ```
    или добавить всем нужным изображениям класс `show-img` (селектор `.show-img`)
    ```html
    <img src="..." class="show-img">
    <img src="..." class="show-img">
    ...
    ```
    Место расположения на странице не важно, главное, чтобы все нужные изображения подподали под выбраный селектор

3. Далее нужно подключить галерею одним из методов

   -  как ES модуль
    ```html
    <script type="module">
    import {SmartImgGallery} from "./smartImageGallery.esm.js";
    const Settings = { ... }
    const Gallery = new SmartImgGallery( Settings );
    </script>
    ```
   - если по каким-то причинам вы не хотите использовать модули
    ```html
    <script src="smartImageGallery.iife.js"></script>
    <script>
    const Settings = { ... }
    const Gallery = new SIG.SmartImgGallery( Settings );
    </script>
    ```
4. Далее настраиваем галерею (объект **Settings**)
   (указаны настройки по-умолчанию)
    ```js
    const Settings = {
        //  селектор место для встраивания модального окна
        containerSelector: "body", 
        // селектор для поиска отображаемых изображений
        imagesSelector: ".gallery img", 
        // флаг отображения кнопки загрузки
        showDownloadButton: false,
        // флаг отображения копий изображений (копия определяется идентичным адресом)
        displayCopies: false,
        // скорость перехода при переключении (0 - без переходов)
        animationDuration: 0.3,
        // флаг инициализации всех обработчиков и событий сразу при создании
        init: true,
    }
    ```
    Если не было инифиализации при создании, необходимо воспользоваться методом `init` (`Gallery.init()`)
5. Всё. Галерея работает. При клике на изображение должно появляться окно.


## Методы
| метод | действие |
| --- | --- |
| hide() | скрывает окно |
| prev() | показать предыдущее изображение |
| next() | показать следующее изображение |
| init() | инициализация обработчиков и событий для работы скрипта |

## События
На document.body скрипт триггерет следующие события:
- **smartGalleryOpen**:  при открытии окна
- **smartGalleryClose**: при закрытии окна
Пример использования:
```js
document.body.addEventListener("smartGalleryOpen", () =>
    ...
);

document.body.addEventListener("smartGalleryClose", () =>
    ...
);
```
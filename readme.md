# Smart Image Gallery
Creates a pop-up gallery when an image is clicked. Images are collected by a selector.
## [Live preview](https://garoncode.github.io/smart-image-gallery/)
## Usage
1. place images on the page in any way. You need to make sure that there is a unique CSS selector to search them
   
2. **Include Gallery**.
    If you want use as:
    - via **NPM**
    install package
    ```bash
    npm i smart-image-gallery
    ```
    include
    ```js
    import { SmartImageGallery } from "smart-image-gallery";
    ```
    - **module**
    copy file from dist folder to your project (full or minify version)
    ```html
    <script type="module">
    // for minify version 
    // import { SmartImageGallery } from "./smartImageGallery.esm.mini.js";

    import { SmartImageGallery } from "./smartImageGallery.esm.js";
    </script>
    ```
    - **iife-style** (you need use global object `SIG`)
    ```html
    <!--
        For minify version
        <script src="smartImageGallery.iife.mini.js"></script>
    -->
    <script src="smartImageGallery.iife.js"></script>
    ```
3. Setting up the gallery (object **Settings**)
   (default settings)
    ```js
    const Settings = {
        //  selector a place for embedding a modal window
        containerSelector: "body", 
        // selector to search for displayed images
        imagesSelector: ".gallery img", 
        // flag for displaying the download button
        showDownloadButton: false,
        // flag for displaying copies of images (a copy is determined by an identical src)
        displayCopies: false,
        // transition speed (0 - no transitions)
        animationDuration: 0.3,
        // flag for initializing all handlers and events at once when creating
        init: true,
    }
    const Gallery = new SmartImageGallery( Settings );
    ```
    If there was no initialization during creation, you need to use the method `init` (`Gallery.init()`)

5. If you want change styles, you can change classes before init
    ```js
    const Gallery = new SmartImageGallery({ init: false });
    Gallery
    ```
6. Done. When you click on the image, a window should appear.


## Methods
| method | action |
| --- | --- |
| hide() | hide modal |
| prev() | show previous img |
| next() | show next img |
| init() | initialization of handlers and events for script |

## Addition Events
On `document.body` script triggers the following events:
- **smartgalleryopen**:  on open
- **smartgalleryclose**: on close
Usage example:
```js
document.body.addEventListener("smartgalleryopen", () =>
    ...
);

document.body.addEventListener("smartgalleryclose", () =>
    ...
);
```

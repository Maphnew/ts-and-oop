import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        const image = new ImageComponent("image title", "https://picsum.photos/600/300");
        this.page.attachTo(appRoot);
        image.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));

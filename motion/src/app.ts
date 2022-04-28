import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    const image = new ImageComponent("image title", "https://picsum.photos/600/300");
    this.page.attachTo(appRoot);
    image.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);

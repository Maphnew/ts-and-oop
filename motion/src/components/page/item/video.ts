import { BaseComponent } from "../../base.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
    <h2 class="video__title"></h2>
    <div class="video__player">
    <iframe class="video__iframe"></iframe>
    </div>
  </section>`);
    const titleElement = this.element.querySelector(".video__title")! as HTMLHeadingElement;
    const srcElement = this.element.querySelector(".video__iframe")! as HTMLIFrameElement;
    titleElement.textContent = title;
    srcElement.src = url;
  }
}

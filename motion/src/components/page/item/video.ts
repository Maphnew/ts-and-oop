import { BaseComponent } from "../../base.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
    <div class="video__player">
    <iframe class="video__iframe"></iframe>
    </div>
    <h3 class="page-item__title video__title"></h3>
  </section>`);

    const titleElement = this.element.querySelector(".video__title")! as HTMLHeadingElement;
    const srcElement = this.element.querySelector(".video__iframe")! as HTMLIFrameElement;
    titleElement.textContent = title;
    srcElement.src = this.convertToEmbeddedURL(url);
  }
  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}

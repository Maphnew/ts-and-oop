export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML = `<section class="image">
    <div class="image__holder">
      <img class="image__thumnail" />
      <p class="image__title"></p>
    </div>
  </section>`;

    this.element = template.content.firstElementChild! as HTMLElement;
    const imageElement = this.element.querySelector(".image__thumnail")! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;
    const titleElement = this.element.querySelector(".image__title")! as HTMLParagraphElement;
    titleElement.textContent = title;
    // this.element = document.createElement("img");
    // this.element.setAttribute("class", "image");
    // this.element.setAttribute("src", "https://picsum.photos/200/300");
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}

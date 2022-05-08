import { BaseComponent, Component } from "../base.js";
import { Composable } from "../page/page.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface MediaData {
  readonly title: string;
  readonly url: string;
}

export interface TextData {
  readonly title: string;
  readonly body: string;
}

export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;
  constructor() {
    super(`<dialog class="dialog">
        <div class="dialog__container">
          <button class="close">&times;</button>
          <div class="dialog__body"></div>
          <button class="dialog__submit">ADD</button>
        </div>
      </dialog>`);
    const close = this.element.querySelector(".close")! as HTMLButtonElement;
    const submit = this.element.querySelector(".dialog__submit")! as HTMLButtonElement;
    close.onclick = () => {
      this.closeListener && this.closeListener();
    };
    submit.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component): void {
    const body = this.element.querySelector(".dialog__body")! as HTMLElement;
    child.attachTo(body);
  }
}

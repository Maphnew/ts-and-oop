import { InputDialog } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent } from "./components/page/page.js";
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.dialogRoot = dialogRoot;
        this.bindElementToDialog("#new-image", MediaSectionInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog("#new-video", MediaSectionInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog("#new-note", TextSectionInput, (input) => new NoteComponent(input.title, input.body));
        this.bindElementToDialog("#new-todo", TextSectionInput, (input) => new TodoComponent(input.title, input.body));
        this.page.addChild(new ImageComponent("Image Title", "https://picsum.photos/600/300"));
        this.page.addChild(new VideoComponent("Video Title", "https://www.youtube.com/embed/5qap5aO4i9A"));
        this.page.addChild(new NoteComponent("Note Title", "Note Body~!"));
        this.page.addChild(new TodoComponent("Note Title", "Work out!"));
        this.page.addChild(new ImageComponent("Image Title", "https://picsum.photos/600/300"));
        this.page.addChild(new VideoComponent("Video Title", "https://www.youtube.com/embed/5qap5aO4i9A"));
        this.page.addChild(new NoteComponent("Note Title", "Note Body~!"));
        this.page.addChild(new TodoComponent("Note Title", "Work out!"));
    }
    bindElementToDialog(selector, InputComponent, makeSection) {
        const btnElement = document.querySelector(selector);
        btnElement.addEventListener("click", () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const image = makeSection(input);
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}
new App(document.querySelector(".document"), document.body);

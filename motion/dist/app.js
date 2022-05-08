import { InputDialog } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent } from "./components/page/page.js";
class App {
    constructor(appRoot, dialogRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const note = new NoteComponent("note title", "note body");
        this.page.addChild(note);
        const todo = new TodoComponent("todo title", "todo");
        this.page.addChild(todo);
        const video = new VideoComponent("video title", "https://www.youtube.com/embed/5qap5aO4i9A");
        this.page.addChild(video);
        const imgBtn = document.querySelector("#new-image");
        imgBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            const mediaSection = new MediaSectionInput();
            dialog.addChild(mediaSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const image = new ImageComponent(mediaSection.title, mediaSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
        });
    }
}
new App(document.querySelector(".document"), document.body);

import { InputDialog } from "./components/dialog.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const image = new ImageComponent("image title", "https://picsum.photos/600/300");
        this.page.addChild(image);
        const note = new NoteComponent("note title", "note body");
        this.page.addChild(note);
        const todo = new TodoComponent("todo title", "todo");
        this.page.addChild(todo);
        const video = new VideoComponent("video title", "https://www.youtube.com/embed/5qap5aO4i9A");
        this.page.addChild(video);
        const imgBtn = document.querySelector("#new-image");
        imgBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.attachTo(document.body);
        });
    }
}
new App(document.querySelector(".document"));

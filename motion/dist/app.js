import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        const image = new ImageComponent("image title", "https://picsum.photos/600/300");
        const note = new NoteComponent("note title", "note body");
        const todo = new TodoComponent("todo title", "todo");
        const video = new VideoComponent("video title", "https://www.youtube.com/embed/5qap5aO4i9A");
        this.page.attachTo(appRoot);
        image.attachTo(appRoot, "beforeend");
        note.attachTo(appRoot, "beforeend");
        todo.attachTo(appRoot, "beforeend");
        video.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));

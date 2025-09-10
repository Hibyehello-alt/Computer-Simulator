import { BaseApp } from "./app.js";

export class devConsole extends BaseApp {
    constructor() {
        super("devConsole-new", "45vh", "40vw");
        this.displayType = "flex"
        this.appDiv.classList.add("window-App");
        this.appDiv.classList.add("resizable-win");
        this.appDiv.style.top = "0";
        this.appDiv.style.flexDirection = "column";

        this.createHeader("fft");
        this.appHeader.style.background = "gray";
        this.appHeader.style.display = "flex";
        this.appHeader.style.justifyContent = "flex-end";

        registerApp(this);
    }
}
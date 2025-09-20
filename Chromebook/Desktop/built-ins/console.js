import { BaseApp } from "./app.js";

export class devConsole extends BaseApp {
    constructor() {
        super("devConsole-new", "45vh", "40vw");
        this.displayType = "flex"
        this.appDiv.classList.add("window-App");
        this.appDiv.classList.add("resizable-win");
        this.appDiv.style.top = "0";
        this.appDiv.style.flexFlow = "column";
        this.appDiv.style.background = "#000000C8";
        this.appDiv.style.backdropFilter = "blur(5px)";

        this.createHeader("fft", true);
        this.appHeader.style.background = "white";

        this.createIcon("img/terminal_35dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.png");
    }

    initalizeConsole() {
        
    }
}

    //   <div id="devConsole" class="dev-console resizable-win">
    //     <div id="devConsole-header" class="app-menu">
    //       <p>Dev Console</p>
    //       <img class="app-menu-close" src="img/close_black_24dp.svg" onclick="closeApp('devConsole');">
    //     </div>
    //     <div class="dev-text-container">
    //       <p id="devText"><span class="help">--- Type <b><i>@help</i></b> to get help ---</span><br></p>
    //     </div>
    //     <div class="dev-input-container">
    //       <input id="devInput" type="text" onchange="devConsoleInput();">
    //       <h3 onclick="devConsoleClear();">Clear</h3>
    //     </div>
    //   </div>
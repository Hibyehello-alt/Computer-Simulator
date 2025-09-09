export class BaseApp {
    appHeader;

    constructor(name, height, width) {
        this.appDiv = document.createElement("div");
        this.appDiv.addEventListener("mouseup", this.focusApp);
        this.id = name;
        this.appDiv.id = name;
        this.appDiv.style.height = height;
        this.appDiv.style.width = width;
        this.displayType = "flex";
        this.open = false;
        this.icon = null;
        this.small_icon = null;
        this.installed = false;
    }

    openApp() {
        this.open = true;
        this.appDiv.style.display = this.displayType;
        document.body.appendChild(this.appDiv);

        if(this.appHeader.onmousedown == null) { 
            dragElement(this.appDiv);
        }
        this.focusApp()
    }

    minimizeApp() {
        this.appDiv.style.display = "none";
    }
    
    maximizeApp() {
        console.log("TODO: Implement maximize");
    }

    closeApp() {
        this.open = false;
        document.body.removeChild(this.appDiv);
    }

    addClassName(className) {
        this.appDiv.classList.add(className);
    }

    createHeader(showButtons=true) {
        this.appHeader = document.createElement("div");
        this.appHeader.id = this.appDiv.id + "-header";

        this.appHeader.addEventListener("click", this.focusApp);
        

        if(showButtons) {
            this.appHeader.appendChild(this.createWindowMenu())
        }

        this.appDiv.appendChild(this.appHeader);
    }

    createWindowMenu() {
        var windowMenu = document.createElement("table");

    { // Minimize
        var Button = document.createElement("td");
        Button.classList.add("settings-option");
        Button.addEventListener("mouseup", this.minimizeApp );
        var minImg = document.createElement("img");
        minImg.src = "img/minimize_black_24dp.svg";
        Button.appendChild(minImg);

        windowMenu.appendChild(Button);
    }

    { // Fullscreen
        var Button = document.createElement("td");
        Button.classList.add("settings-option");
        Button.addEventListener("mouseup", this.maximizeApp );
        var maxImg = document.createElement("img");
        maxImg.src = "img/fullscreen_black_24dp.svg";
        Button.appendChild(maxImg);

        windowMenu.appendChild(Button);
    }

    { // Close
        var Button = document.createElement("td");
        Button.classList.add("settings-option");
        Button.addEventListener("mouseup", this.closeApp );
        var closeImg = document.createElement("img");
        closeImg.src = "img/close_black_24dp.svg";
        Button.appendChild(closeImg);

        windowMenu.appendChild(Button);
    }



        return windowMenu
    }

    focusApp() {
        if(this.open)
            console.log(this.appDiv.id, "focused");
    }

    createIcon(iconPath) {
        this.icon = document.createElement("img");
        this.small_icon = document.createElement("img");

        this.icon.src = iconPath;
        this.icon.classList.add("icon");

        this.small_icon.src = iconPath;
        this.small_icon.classList.add("small-icon");

        //onmouseover="changeHoverMenu('Chrome <br> <b>Exit: Ctrl+W</b>', 'open')" onmouseleave="changeHoverMenu('', 'close')"

        this.icon.addEventListener("click", this.openApp)
        this.small_icon.addEventListener("click", this.openApp)
    }

    InstallApp() {
        if(this.installed) {
            console.error(this.appDiv.id, "is already installed!")
            return;
        }
        document.getElementById("Apps-Container").appendChild(this.icon);
        this.addDesktopMenuIcon();
        registerApp(this);
        this.installed = true;
    }

    addDesktopMenuIcon() {
        document.getElementById("desktopMenu-Center").appendChild(this.small_icon);
    }
}
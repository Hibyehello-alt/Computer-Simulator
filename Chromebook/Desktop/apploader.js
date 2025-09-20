const InstalledModules = new Map()

async function loadApp(path) {
    let moduleName = path.match(/[^/]+(?=(?:\.[^.]+)?$)/)[0];
    moduleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1, moduleName.length - 3);
    
    console.log(moduleName);

    InstalledModules.set(moduleName, await import(path));
}

function FocusApp(element) {

  let oldFocused = focusedApp; 

  focusedApp = element;

  if(oldFocused != null) {
    oldFocused.classList.remove("window-App-On-Top");
    oldFocused.blur();
  }

  element.classList.add("window-App-On-Top");

  console.log("FocusApp:", focusedApp);

  return true;
}

function addIcons(node) {
  for(let i = 1; i <= num; i++) {
    var icon = document.createElement('div');
    icon.classList.add("icon");

    document.getElementById("Apps-Container").appendChild(icon);
  }
}
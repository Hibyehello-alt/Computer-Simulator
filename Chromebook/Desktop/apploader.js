const InstalledModules = new Map()

async function loadApp(path) {
    let moduleName = path.match(/[^/]+(?=(?:\.[^.]+)?$)/)[0];
    moduleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1, moduleName.length - 3);
    
    console.log(moduleName);

    InstalledModules.set(moduleName, await import(path));
}
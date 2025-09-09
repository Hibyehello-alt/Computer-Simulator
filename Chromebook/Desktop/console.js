var _Log = console.log;
var _Info = console.info;
var _Warn = console.warn;
var _Error = console.error;

console.log = function(...args) {
    var devText = document.getElementById("devText");
    var log = document.createElement("span");
    log.classList.add("log");
    log.innerText = "System Log: " + args.toString().replace(/,/g, " ");

    devText.appendChild(log);
    devText.appendChild(document.createElement("br"));

    _Log.apply(console, args);
}

console.info = function(...args) {
    var devText = document.getElementById("devText");
    var log = document.createElement("span");
    log.classList.add("info");
    log.innerText = "System Info: " + args.toString().replace(/,/g, " ");

    devText.appendChild(log);
    devText.appendChild(document.createElement("br"));

    _Info.apply(console, args);
}

console.warn = function(...args) {
    var devText = document.getElementById("devText");
    var log = document.createElement("span");
    log.classList.add("warn");
    log.innerText = "System Warn: " + args.toString().replace(/,/g, " ");

    devText.appendChild(log);
    devText.appendChild(document.createElement("br"));

    _Warn.apply(console, args);
}

console.error = function(...args) {
    var devText = document.getElementById("devText");
    var log = document.createElement("span");
    log.classList.add("error");
    log.innerText = "System Error: " + args.toString().replace(/,/g, " ");

    devText.appendChild(log);
    devText.appendChild(document.createElement("br"));

    _Error.apply(console, args);
}
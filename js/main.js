var currentTheme = 0;
var themes = ['light', 'dark'];
var link = '../css/theme/obscene.min.css';

function toggleLandscape(button) {
    var button = document.getElementById("toggleLandscape");
    if (device.classList.contains("landscape")) {
        device.classList.remove("landscape");
        button.innerHTML = "Toggle Landscape";
    } else {
        device.classList.add("landscape");
        button.innerHTML = "Toggle Portrait";
    }
}

function toggleTheme() {
    var headLink = document.getElementById("app").contentDocument.head.childNodes[11];
    currentTheme = (currentTheme >= themes.length - 1 ? 0 : ++currentTheme);
    headLink.href = link.replace('theme', themes[currentTheme]);
}

function toggleIPad() {
    var button = document.getElementById("toggleIPad");
    if (device.classList.contains("iphone5s")) {
        device.classList.remove("iphone5s");
        device.classList.add("ipad");
        button.innerHTML = "Toggle iPhone";
    } else {
        device.classList.add("iphone5s");
        device.classList.remove("ipad");
        button.innerHTML = "Toggle iPad";
    }
}
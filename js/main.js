var currentTheme = 0;
var themes = ['light', 'dark'];
var link = '../css/theme/obscene.min.css';

function toggleLandscape() {
    if (iphone5s.classList.contains("landscape")) {
        iphone5s.classList.remove("landscape");
    } else {
        iphone5s.classList.add("landscape");
    }
}

function toggleTheme() {
    var headLink = document.getElementById("app").contentDocument.head.childNodes[11];

    currentTheme = (currentTheme >= themes.length - 1 ? 0 : ++currentTheme);
    headLink.href = link.replace('theme', themes[currentTheme]);
}
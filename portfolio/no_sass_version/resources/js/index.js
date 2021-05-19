/*jslint devel: true, browser: true, white: true */

/*property
    backgroundSize, getElementById, length, maxHeight, scrollHeight, src, style
*/

var x = -1;



function displayNextImage() {
    x = ((x === images.length - 1) ? 0 : x + 1);
    var img_el = document.getElementById("project-img");
    img_el.style.backgroundSize = "cover";
    img_el.src = "resources/img/projects/" + images[x];
}

function displayPreviousImage() {
    x = ((x <= 0) ? images.length - 1 : x - 1);
    var img_el = document.getElementById("project-img");
    img_el.style.backgroundSize = "cover";
    img_el.src = "resources/img/projects/" + images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [
    "nnb.png",
    "csa.png",
    "gwi.png",
    "shopping_bot.png",
    "announce_flask.png",
    "gogame_java.png",
    "scrabble_hack.png",
    "gpa.png",
    "woe.jpg",
    "portfolio.png"
];
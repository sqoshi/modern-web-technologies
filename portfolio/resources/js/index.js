function toggle_menu() {
  var coll = document.getElementById("menu-icon");
  var i;
  var content = document.getElementById('menu-links');
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}


function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("project-img").style.backgroundSize = 'cover'
  document.getElementById("project-img").src = "resources/img/projects/" + images[x];
}

function displayPreviousImage() {
  x = (x <= 0) ? images.length - 1 : x - 1;
  document.getElementById("project-img").style.backgroundSize = 'cover'
  document.getElementById("project-img").src = "resources/img/projects/" + images[x];
}

function startTimer() {
  setInterval(displayNextImage,3000);
}

var images = [
  'nnb.png',
    'csa.png',
    'gwi.png',
    'shopping_bot.png',
    'announce_flask.png',
    'gogame_java.png',
    'scrabble_hack.png',
    'gpa.png',
    'woe.jpg',
    'portfolio.png',
  ],
  x = -1;

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
  document.getElementById("project-img").src = images[x];
}

function displayPreviousImage() {
  x = (x <= 0) ? images.length - 1 : x - 1;
  document.getElementById("project-img").style.backgroundSize = 'cover'
  document.getElementById("project-img").src = images[x];
}

function startTimer() {
  setInterval(displayNextImage, 6000);
}

var images = ['resources/img/projects/nnb.png',
    'resources/img/projects/csa.png',
    'resources/img/projects/gwi.png',
    'resources/img/projects/shopping_bot.png',
    'resources/img/projects/announce_flask.png',
    'resources/img/projects/gogame_java.png',
    'resources/img/projects/scrabble_hack.png',
    'resources/img/projects/gpa.png',
    'resources/img/projects/woe.jpg',
  ],
  x = -1;

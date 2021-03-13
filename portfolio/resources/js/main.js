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
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 6000);
}

var images = [], x = -1;
images[0] = "https://raw.githubusercontent.com/sqoshi/global-warming-investigator/master/static/images/world_map.png";
images[1] = "https://raw.githubusercontent.com/sqoshi/neural-network-designer/master/static/images/results_example.png";
images[2] = "https://raw.githubusercontent.com/sqoshi/zalando-shopping-bot/master/features/screenshots/panelbot.png";

/*jslint browser */
/*global process */
var markedImage = "resources/img/high_quality/1.jpg"


function getPath(name, quality = "LOW") {
  var path = null;
  if (quality == "LOW") {
    path = "resources/img/low_quality/" + name + ".jpg";
  } else {
    path = "resources/img/high_quality/" + name + ".jpg";
  }
  return path
}

function loadImage(path) {
  return new Promise((resolve) => {
    var img = new Image();
    img.src = path
    img.addEventListener('load', e => resolve(path))
  });
}

function loadImagesAll() {
  for (let i = 1; i < 13; i++) {
    var path = getPath(i);
    var hq_path = getPath(i, quality = "HIGH");

    var container = document.createElement("div");
    container.classList.add("image-container");
    // container.id = `image-container${i}`;

    var el = document.createElement("div");
    el.classList.add("image");
    el.id = `image${i}`;
    el.onclick = function() {
      handle_image_click(this);
    };

    container.appendChild(el);
    document.getElementById("gallery").appendChild(container);

    insertImage(path, i);
    loadImage(path).then(loadImage(hq_path)).then(insertImage(hq_path, i))
    if (i == 1) {
      markImage(el);
    }
  }
}

function insertImage(path, i) {
  var img = document.getElementById(`image${i}`)
  img.style.background = `url(${path})`;
  img.style.backgroundSize = "cover";
  img.style.backgroundRepeat = "no-repeat";
  img.style.cursor = "pointer";
}


function handle_image_click(element) {
  markImage(element);

}

function markImage(element) {
  var image_containers = document.getElementsByClassName('image');
  for (let container of image_containers) {
    container.style.boxShadow = "0 0 5px rgba(35, 173, 278, 1)";
  }

  element.style.boxShadow = "0 0 16px rgba(35, 173, 278, 1)";
  markedImage = element.id.substring(5);
}



function open_puzzle() {
  var imagePath = getPath(markedImage, quality = "HIGH");
  var columnsNumber = document.getElementById("columns").value;
  var rowsNumber = document.getElementById("rows").value;


  sessionStorage.setItem("rowsNumber", rowsNumber);
  sessionStorage.setItem("columnsNumber", columnsNumber);
  sessionStorage.setItem("imagePath", imagePath);

  window.location = "puzzle.html";
}

// Not using below code, but can be used in future extension

function hide_gallery() {
  toggle_element(document.getElementById("rows"));
  toggle_element(document.getElementById("columns"));
  toggle_element(document.getElementById("rows-label"));
  toggle_element(document.getElementById("columns-label"));


  var image_containers = document.getElementsByClassName('image-container');
  for (let container of image_containers) {
    toggle_element(container);
  }

  var inputs = document.getElementsByClassName('inputs');
  for (let el of inputs) {
    toggle_input(el);
  }

}



function toggle_element(element) {
  if (!element.style.maxHeight) {
    element.style.maxHeight = 0;
  } else {
    element.style.maxHeight = element.scrollHeight + "px";

  }
}

function toggle_input(element) {
  if (element.style.display == "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

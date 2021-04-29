/*jslint browser */
/*global process */



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

    var el = document.createElement("div");
    el.classList.add("image");
    el.id = `image${i}`;
    el.onclick = function() {
      handleImageClick(this);
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


function handleImageClick(element) {
  markImage(element);
}

function setupToggle() {
  var el = document.getElementById("setup-panel");
  if (el.style.display == "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

function markImage(element) {
  isPlaying = false;
  var image_containers = document.getElementsByClassName('image');
  for (let container of image_containers) {
    container.style.boxShadow = "0 0 9px #151515";
  }

  element.style.boxShadow = "0 0 25px white";
  var imagePath = getPath(element.id.substring(5), quality = "HIGH");

  sessionStorage.setItem("imagePath", imagePath);
  console.log(sessionStorage.getItem("rowsNumber"));

  setUpGame();
  onScalerChange();

}

function onScalerChange() {
  isPlaying = false;
  var columnsNumber = document.getElementById("columns").value;
  var rowsNumber = document.getElementById("rows").value;

  sessionStorage.setItem("rowsNumber", rowsNumber);
  sessionStorage.setItem("columnsNumber", columnsNumber);

  setUpGame();
  reset();
}

/*jslint browser */
/*global process */

function setupToggle() {
  var el = document.getElementById("setup-panel");
  if (el.style.display == "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

function markImage(element) {
  var image_containers = document.getElementsByClassName('image');
  for (let container of image_containers) {
    container.style.boxShadow = "0 0 9px #151515";
  }

  element.style.boxShadow = "0 0 25px white";
  var imagePath = getPath(element.id.substring(5), quality = "HIGH");


  sessionStorage.setItem("imagePath", imagePath);

  setUpGame();
  reset();
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

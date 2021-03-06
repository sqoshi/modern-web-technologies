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

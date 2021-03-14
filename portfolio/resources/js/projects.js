function toggle_menu() {
  var content = document.getElementById('menu-links');
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

function toggle_project_info(element) {
  var parent = element.parentNode.parentNode;
  var content = parent.querySelector('.project-info');
  if (content.style.maxHeight) {
        parent.style.bottom = null;
    content.style.visibility = 'collapse';
    content.style.maxHeight = null;
  } else {
    parent.style.bottom = '-5rem';
    content.style.visibility = 'visible';
    content.style.maxHeight = content.scrollHeight + "px";

  }
}

file_path = 'file:///home/piotr/Documents/studies/modern_www_technologies/portfolio/resources/test.html'

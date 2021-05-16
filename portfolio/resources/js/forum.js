function setImage(filename = "woe.jpg") {
    var img_el = document.getElementById('project-preview')

    console.log(img_el)

    img_el.src = "resources/img/projects/" + filename
    img_el.alt = filename

    document.getElementById('input-project').value = filename
}
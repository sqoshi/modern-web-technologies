function setImage() {
    let url = new URLSearchParams(window.location.search);
    let c = url.get("image-name");
    if (c != null)
        project = c
    var img_el = document.getElementById('project-preview')
    img_el.src = "resources/img/projects/" + c;
    document.getElementById('input-project').value = c;
}
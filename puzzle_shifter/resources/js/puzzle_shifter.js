/*jslint devel: true, browser: true, white: true */

function getPath(name, quality = "LOW") {
    var path = null;
    if (quality == "LOW")
        path = "resources/img/low_quality/" + name + ".jpg"
    else
        path = "resources/img/high_quality/" + name + ".jpg"
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
        // el.addEventListener('click', hide_gallery());
        el.onclick = hide_gallery;

        container.appendChild(el);
        document.getElementById("gallery").appendChild(container);

        insertImage(path, i);
        loadImage(path).then(loadImage(hq_path)).then(insertImage(hq_path, i))

    }
}

function insertImage(path, i) {
    var img = document.getElementById(`image${i}`)
    img.style.background = `url(${path})`;
    img.style.backgroundSize = "cover";
    img.style.backgroundRepeat = "no-repeat";
    img.style.cursor = "pointer";
}


function hide_gallery() {
    // var content = document.getElementById("gallery-container");
    // content.style.maxHeight = null;

    var cols = document.getElementsByClassName('image');
    for (i = 0; i < cols.length; i++) {
        console.log(cols[i])
        cols[i].style.minHeight = "0px";
        cols[i].style.height = "0px";


    }

}
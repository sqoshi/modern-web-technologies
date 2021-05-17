x = 0

function setImage() {
    let url = new URLSearchParams(window.location.search);
    let c = url.get("image-name");
    console.log("setImage", c)

}
function openFullscreenImage(imageUrl) {
    var container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.cursor = "pointer";

    var img = document.createElement("img");
    img.src = imageUrl;
    img.style.maxWidth = "90%"; 
    img.style.maxHeight = "90vh";

    container.addEventListener("click", function (event) {
        if (event.target === container) {
            document.body.removeChild(container);
        }
    });

    var closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.style.position = "absolute";
    closeButton.style.top = "20px";
    closeButton.style.right = "20px";
    closeButton.style.fontSize = "30px";
    closeButton.style.color = "#fff";
    closeButton.style.cursor = "pointer";

    closeButton.onclick = function () {
        document.body.removeChild(container);
    };

    container.appendChild(img);
    container.appendChild(closeButton);
    document.body.appendChild(container);
}

function isMobile() {
    return window.innerWidth <= 768;
}

var images = document.querySelectorAll(".section-img, .img-fluid");
images.forEach(function (image) {
    image.addEventListener("click", function () {
        var imageUrl = image.src;
        openFullscreenImage(imageUrl);
        if (isMobile()) {
            document.querySelector("img[src='" + imageUrl + "']").style.maxWidth = "90%";
            document.querySelector("img[src='" + imageUrl + "']").style.maxHeight = "90vh";
        }
    });
});
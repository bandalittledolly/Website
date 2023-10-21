$(document).ready(function () {
    function openFullscreenImage(imageUrl) {
        var container = $("<div>").addClass("fullscreen-image");
        var img = $("<img>").attr("src", imageUrl);
        container.click(function (event) {
            if (event.target === this) {
                $(this).remove();
            }
        });

        var closeButton = $("<span>").html("&times;").addClass("close-button");
        closeButton.click(function () {
            container.remove();
        });

        closeButton.css("cursor", "pointer"); // Defina o cursor apenas para o botão "X"

        container.append(img, closeButton);
        $("body").append(container);
    }

    function isMobile() {
        return $(window).width() <= 768;
    }

    var images = $(".section-img, .img-fluid");
    images.click(function () {
        var imageUrl = $(this).attr("src");
        openFullscreenImage(imageUrl);
        if (isMobile()) {
            $("img[src='" + imageUrl + "']").css({ "max-width": "90%", "max-height": "90vh" });
        }
    });
});

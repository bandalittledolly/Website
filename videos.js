document.addEventListener("DOMContentLoaded", function () {
    const videosContainer = document.getElementById("videos-container");
    fetch("videos.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(video => {
                const videoCard = document.createElement("div");
                videoCard.classList.add("col-md-4", "mb-4");

                // Adicione &autoplay=1 à URL para reprodução automática
                const embedURL = `${video.videoURL}`;

                // Remova &pp= da URL
                const cleanURL = removePPParameter(embedURL);

                videoCard.innerHTML = `
                    <div class="card">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="${cleanURL}" allowfullscreen></iframe>
                        </div>
                        <div class="card-body bg-secondary text-white">
                            <h5 class="card-title">${video.title}</h5>
                            <p class="card-text">${video.description}</p>
                        </div>
                    </div>
                `;

                videosContainer.appendChild(videoCard);
            });
        })
        .catch(error => console.error("Erro ao carregar os vídeos:", error));

    function removePPParameter(url) {
        // Remove &pp= da URL
        return url.replace(/&pp=[^&]*/g, "");
    }
});
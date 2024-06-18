document.addEventListener("DOMContentLoaded", function() {
    const playerElement = document.getElementById('player');
    const playlistElement = document.getElementById('playlist');

    // Initialize Clappr player
    const player = new Clappr.Player({
        source: playlist[0].videoUrl,
        parentId: playerElement,
        width: '100%',
        height: '400px',
        autoPlay: false,
    });

    // Create playlist items
    playlist.forEach(video => {
        const playlistItem = document.createElement('div');
        playlistItem.classList.add('playlist-item');

        const thumbnail = document.createElement('img');
        thumbnail.src = video.poster;
        thumbnail.alt = video.name;

        const info = document.createElement('div');
        info.innerHTML = `<h3>${video.name}</h3><p>${video.description}</p>`;

        playlistItem.appendChild(thumbnail);
        playlistItem.appendChild(info);

        // Handle click on playlist item
        playlistItem.addEventListener('click', function() {
            player.load(video.videoUrl);
            player.play();
        });

        playlistElement.appendChild(playlistItem);
    });
});

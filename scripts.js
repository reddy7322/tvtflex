document.addEventListener("DOMContentLoaded", function() {
    const videoPlaylist = document.getElementById('video-playlist');

    // Example data for movies and web series
    const videos = [
        {
            title: 'Movie 1',
            description: 'This is a movie description.',
            poster: 'https://via.placeholder.com/300x200',
            source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Example YouTube video
        },
        {
            title: 'Web Series Episode 1',
            description: 'First episode of a web series.',
            poster: 'https://via.placeholder.com/300x200',
            source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Example YouTube video
        },
        // Add more videos as needed
    ];

    // Loop through the videos array and create video cards
    videos.forEach(video => {
        const card = document.createElement('div');
        card.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');
        card.innerHTML = `
            <div class="card">
                <img src="${video.poster}" class="card-img-top" alt="${video.title}">
                <div class="card-body">
                    <h5 class="card-title">${video.title}</h5>
                    <p class="card-text">${video.description}</p>
                    <a href="#" class="btn btn-primary btn-block watch-video" data-source="${video.source}">Watch Now</a>
                </div>
            </div>
        `;
        videoPlaylist.appendChild(card);
    });

    // Initialize Clappr player when 'Watch Now' button is clicked
    videoPlaylist.addEventListener('click', function(event) {
        event.preventDefault();
        if (event.target.classList.contains('watch-video')) {
            const source = event.target.getAttribute('data-source');
            const playerElement = document.createElement('div');
            playerElement.classList.add('clappr-video-container', 'mb-4');
            event.target.parentNode.parentNode.appendChild(playerElement);

            const player = new Clappr.Player({
                source: source,
                parentId: playerElement,
                width: '100%',
                height: '360px',
                autoPlay: true,
                mute: false,
                hideMediaControl: false
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const videoList = document.getElementById('videoList');

    // Sample video data
    const videos = [
        {
            name: 'As Good as Dead (2022)',
            poster: 'https://m.media-amazon.com/images/M/MV5BZjcxMWVlMTQtZWRmZS00ZGE0LTliNzEtYTIyNmQxZTA1ZTcxXkEyXkFqcGdeQXVyNzEwMjYxMjQ@._V1_.jpg',
            description: 'As Good as Dead (2022) telugu Movie'
        },
        {
            name: 'Srimannarayana (2012)',
            poster: 'https://m.media-amazon.com/images/M/MV5BYjEzYjA5MTItMjUzOC00OTZkLWE5OTEtNWJlNGFjMGQ1NDZjXkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_FMjpg_UX1000_.jpg',
            description: 'Srimannarayana (2012) telugu movie'
        },
        {
            name: 'Video 3',
            poster: 'https://via.placeholder.com/150',
            description: 'Watch this video to learn more about the topic.'
        }
        // Add more videos as needed
    ];

    // Function to create video list items
    function createVideoListItem(video) {
        const listItem = document.createElement('div');
        listItem.classList.add('video-item');

        const thumbnail = document.createElement('img');
        thumbnail.src = video.poster;
        thumbnail.alt = video.name;
        listItem.appendChild(thumbnail);

        const videoInfo = document.createElement('div');
        videoInfo.classList.add('video-info');

        const title = document.createElement('div');
        title.classList.add('video-title');
        title.textContent = video.name;
        videoInfo.appendChild(title);

        const description = document.createElement('div');
        description.classList.add('video-description');
        description.textContent = video.description;
        videoInfo.appendChild(description);

        listItem.appendChild(videoInfo);

        // Add click event listener to play video (using Clappr for simplicity)
        listItem.addEventListener('click', function() {
            playVideo(video);
        });

        return listItem;
    }

    // Function to play video
    function playVideo(video) {
        const playerElement = document.createElement('div');
        const player = new Clappr.Player({
            source: 'http://starshare.live:8080/movie/rvdgdf7647564/bvchgfd235454/315952.mp4',  // Replace with actual video URL
            parentId: playerElement,
            width: '100%',
            height: '360px',
            autoPlay: true,
        });
        videoList.innerHTML = ''; // Clear video list
        videoList.appendChild(playerElement);
    }

    // Initialize the video playlist
    function init() {
        videos.forEach(video => {
            const listItem = createVideoListItem(video);
            videoList.appendChild(listItem);
        });
    }

    init();
});

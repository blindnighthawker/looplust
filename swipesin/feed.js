document.addEventListener('DOMContentLoaded', () => {
    const videoFeed = document.getElementById('video-feed');
    const createVideoBtn = document.getElementById('create-video');

    // Simulated data for videos
    const videos = [
        { id: 1, src: 'video1.mp4', user: '@user1', caption: 'First Video!' },
        { id: 2, src: 'video2.mp4', user: '@user2', caption: 'Cool dance moves' },
        // More video entries here...
    ];

    // Function to create video item
    function createVideoItem(video) {
        const div = document.createElement('div');
        div.className = 'video-item';
        div.innerHTML = `
            <video controls loop>
                <source src="${video.src}" type="video/mp4">
            </video>
            <div class="video-info">
                <h3>${video.user}</h3>
                <p>${video.caption}</p>
                <div class="video-actions">
                    <button class="like">❤</button>
                    <button class="comment">💬</button>
                    <button class="share">🔁</button>
                </div>
            </div>
        `;
        return div;
    }

    // Populate video feed
    videos.forEach(video => videoFeed.appendChild(createVideoItem(video)));

    // Infinite scroll
    let currentPage = 1;
    const itemsPerPage = 10;
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
            loadMoreVideos();
        }
    });

    function loadMoreVideos() {
        // Simulating fetching more videos
        const newVideos = videos.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
        newVideos.forEach(video => videoFeed.appendChild(createVideoItem(video)));
        currentPage++;
    }

    // Navigation
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`Navigate to ${e.target.dataset.page}`);
            // Here you would load content dynamically or change views
        });
    });

    // Create Video Button
    createVideoBtn.addEventListener('click', () => {
        alert('Open video creation modal here');
    });

    // Toggle Sidebar on Mobile
    const sidebar = document.querySelector('.sidebar');
    document.querySelector('.logo').addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});
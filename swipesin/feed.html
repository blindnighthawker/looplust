document.addEventListener('DOMContentLoaded', () => {
    const videoFeed = document.getElementById('video-feed');
    const createVideoBtn = document.getElementById('create-video');

    // Simulated data for videos with added user profile picture
    const videos = [
        { id: 1, src: '/photos/video1.mp4', user: '@Corinna', caption: 'First Video!', profilePic: '/photos/corina.png' },
        { id: 2, src: '/photos/video1.mp4', user: '@Corinna', caption: 'Cool dance moves', profilePic: '/photos/corina.png' },
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
                <div class="user-profile">
                    <img src="${video.profilePic}" alt="${video.user}" class="profile-pic">
                    <span class="username">${video.user}</span>
                </div>
                <p class="caption">${video.caption}</p>
                <div class="video-actions">
                    <button class="like" title="Like"><i class="fa-solid fa-heart"></i></button>
                    <button class="comment" title="Comment"><i class="fa-solid fa-comment"></i></button>
                    <button class="share" title="Share"><i class="fa-solid fa-share"></i></button>
                    <button class="save" title="Save"><i class="fa-solid fa-bookmark"></i></button>
                </div>
            </div>
        `;
        return div;
    }

    // Populate video feed
    videos.forEach(video => videoFeed.appendChild(createVideoItem(video)));

    // Infinite scroll (left as is for simplicity)
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

    // Navigation (left as is)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`Navigate to ${e.target.dataset.page}`);
            // Here you would load content dynamically or change views
        });
    });

    // Create Video Button (left as is)
    createVideoBtn.addEventListener('click', () => {
        alert('Open video creation modal here');
    });

    // Toggle Sidebar on Mobile (left as is)
    const sidebar = document.querySelector('.sidebar');
    document.querySelector('.logo').addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});

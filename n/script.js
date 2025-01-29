// Rolagem suave para os banners
document.addEventListener("DOMContentLoaded", function () {
    const banners = document.querySelectorAll(".fullscreen-banner");
    let currentBanner = 0;
  
    function showBanner(index) {
      banners.forEach((banner, i) => {
        banner.style.display = i === index ? "flex" : "none";
      });
    }
  
    function nextBanner() {
      currentBanner = (currentBanner + 1) % banners.length;
      showBanner(currentBanner);
    }
  
    // Mostrar o primeiro banner ao carregar a página
    showBanner(currentBanner);
  
    // Alternar banners a cada 5 segundos
    setInterval(nextBanner, 5000);
  });
  document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    let response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    let data = await response.json();
    if (data.token) {
        localStorage.setItem('jwt', data.token);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
});
function showTab(tabName) {
    // ... existing tab functionality ...
}
function showTab(tabName) {
    // ... existing tab functionality ...
}

// Function to scroll to the next post
function scrollToNextPost() {
    var currentPost = document.querySelector('.video-post:not(.hidden)');
    var nextPost = currentPost.nextElementSibling;
    if (nextPost && nextPost.classList.contains('video-post')) {
        nextPost.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Function to scroll to the previous post
function scrollToPrevPost() {
    var currentPost = document.querySelector('.video-post:not(.hidden)');
    var prevPost = currentPost.previousElementSibling;
    if (prevPost && prevPost.classList.contains('video-post')) {
        prevPost.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
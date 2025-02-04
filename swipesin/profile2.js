document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.querySelector('.subscribe-btn');
    const facetimeBtn = document.querySelector('.facetime-btn');
    const blurryImgs = document.querySelectorAll('.blurry-img');

    // Subscribe Button Functionality
    subscribeBtn.addEventListener('click', () => {
        alert('Você precisa se inscrever para ver o conteúdo exclusivo.');
        blurryImgs.forEach(img => {
            img.style.filter = 'none';
            img.src = img.dataset.src; // Reveal the clear image
        });
        subscribeBtn.textContent = 'Assinatura Ativa';
        subscribeBtn.disabled = true;
    });

    // FaceTime Button Functionality
    facetimeBtn.addEventListener('click', () => {
        alert('Iniciando chamada de vídeo 1x1. Este é um exemplo, na prática você integraria com um serviço de vídeo.');
    });
});
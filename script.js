document.addEventListener('DOMContentLoaded', () => {
    const playlistItems = document.querySelectorAll('#playlist li');
    const player = document.getElementById('main-player');
    const titleArea = document.getElementById('current-title');
    const descArea = document.getElementById('current-desc');

    playlistItems.forEach(item => {
        item.addEventListener('click', () => {
            // Atualiza Destaque na Lista
            playlistItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Pega os dados
            const videoId = item.getAttribute('data-video');
            const title = item.getAttribute('data-title');
            const desc = item.getAttribute('data-desc');

            // Muda o Vídeo com Autoplay
            player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

            // Muda o Texto embaixo com efeito simples
            titleArea.textContent = title;
            descArea.textContent = desc;

            // No celular, volta para o topo do player ao escolher música
            if (window.innerWidth < 950) {
                window.scrollTo({
                    top: document.querySelector('.player-section').offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const playlistItems = document.querySelectorAll('#playlist li');
    const player = document.getElementById('main-player');
    const title = document.getElementById('current-title');
    const desc = document.getElementById('current-desc');

    playlistItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove destaque do anterior
            playlistItems.forEach(i => i.classList.remove('active'));
            
            // Ativa o novo item
            item.classList.add('active');

            // Muda o vídeo (com autoplay)
            const videoId = item.getAttribute('data-video');
            player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

            // Atualiza textos
            title.innerText = item.getAttribute('data-title');
            desc.innerText = item.getAttribute('data-desc');

            // Scroll suave para o topo no mobile ao clicar em uma música
            if (window.innerWidth < 768) {
                window.scrollTo({ top: 150, behavior: 'smooth' });
            }
        });
    });
});
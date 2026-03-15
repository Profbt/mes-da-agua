document.addEventListener('DOMContentLoaded', () => {
    const playlistItems = document.querySelectorAll('#playlist li');
    const player = document.getElementById('main-player');
    const title = document.getElementById('current-title');
    const desc = document.getElementById('current-desc');

    playlistItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove classe ativa de todos
            playlistItems.forEach(i => i.classList.remove('active'));
            
            // Adiciona ao clicado
            item.classList.add('active');

            // Atualiza o Vídeo
            const videoId = item.getAttribute('data-video');
            player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

            // Atualiza Textos
            title.innerText = item.getAttribute('data-title');
            desc.innerText = item.getAttribute('data-desc');
        });
    });
});
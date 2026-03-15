document.addEventListener('DOMContentLoaded', () => {
    const playlistItems = document.querySelectorAll('#playlist li');
    const player = document.getElementById('main-player');
    const title = document.getElementById('current-title');
    const desc = document.getElementById('current-desc');

    playlistItems.forEach(item => {
        item.addEventListener('click', () => {
            // 1. Atualiza visual da lista
            playlistItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // 2. Captura dados dos atributos data-
            const videoId = item.getAttribute('data-video');
            const newTitle = item.getAttribute('data-title');
            const newDesc = item.getAttribute('data-desc');

            // 3. Atualiza o Player (com autoplay)
            player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

            // 4. Atualiza os Textos embaixo do player
            title.textContent = newTitle;
            desc.textContent = newDesc;

            // 5. Scroll para o player se for celular
            if (window.innerWidth < 900) {
                window.scrollTo({
                    top: document.querySelector('.player-section').offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});
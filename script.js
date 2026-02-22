document.addEventListener('DOMContentLoaded', () => {
    const episodeGrid = document.getElementById('episode-grid');
    const mainVideo = document.getElementById('main-video');
    const episodeTitle = document.getElementById('episode-title');
    const currentEpDisplay = document.getElementById('current-ep-display');
    const playerPlaceholder = document.getElementById('player-placeholder');
    const totalEpisodes = 131;

    // Link video từ S3
    const getEpisodeLink = (epNumber) => {
        // Đảm bảo số tập luôn có 3 chữ số (001, 002, ...)
        const formattedNumber = String(epNumber).padStart(3, '0');
        return `https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-${formattedNumber}.mp4`;
    };

    const loadEpisode = (number, retryWithFix = false) => {
        const formattedNumber = String(number).padStart(3, '0');
        const link = `https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-${formattedNumber}${retryWithFix ? '-fix' : ''}.mp4`;

        // Hiện trạng thái loading
        playerPlaceholder.style.display = 'flex';
        playerPlaceholder.innerHTML = `<div class="loader"></div><p>Đang tải video tập <span id="current-ep-display">${number}</span>...</p>`;
        mainVideo.style.opacity = '0.5';

        // Cập nhật tiêu đề
        episodeTitle.textContent = `Đang xem: Tập ${number}${retryWithFix ? ' (Fix)' : ''}`;

        // Cập nhật link cho thẻ video
        mainVideo.src = link;
        mainVideo.load();

        // Thử tự động phát
        const playPromise = mainVideo.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => { }).catch(e => console.log("Autoplay blocked"));
        }

        // Khi video đã sẵn sàng phát
        mainVideo.oncanplay = () => {
            playerPlaceholder.style.display = 'none';
            mainVideo.style.opacity = '1';
        };

        // Khi có lỗi tải video (Xử lý fallback 404)
        mainVideo.onerror = () => {
            if (!retryWithFix) {
                console.log(`Tập ${number} không tìm thấy link chuẩn, đang thử link -fix...`);
                loadEpisode(number, true); // Thử lại với -fix
            } else {
                playerPlaceholder.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <p style="color: #ff4444; font-weight: bold; margin-bottom: 10px;">Lỗi: Không tìm thấy video tập ${number}</p>
                        <p style="font-size: 0.8rem; color: var(--text-muted);">Đã thử cả 2 nguồn nhưng đều thất bại.</p>
                    </div>
                `;
            }
        };

        // Cập nhật nút active
        document.querySelectorAll('.ep-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.number == number) {
                btn.classList.add('active');
            }
        });

        // Lưu tiến trình
        localStorage.setItem('dbs_last_watched', number);
    };

    // Tự động chuyển tập khi kết thúc
    mainVideo.onended = () => {
        const current = parseInt(localStorage.getItem('dbs_last_watched') || 1);
        if (current < totalEpisodes) {
            loadEpisode(current + 1);
        }
    };

    // Generate episode buttons
    for (let i = 1; i <= totalEpisodes; i++) {
        const btn = document.createElement('button');
        btn.className = 'ep-btn';
        btn.textContent = i;
        btn.dataset.number = i;
        btn.onclick = () => loadEpisode(i);
        episodeGrid.appendChild(btn);
    }

    // Load last watched or episode 1
    const lastWatched = localStorage.getItem('dbs_last_watched') || 1;
    loadEpisode(parseInt(lastWatched));
});

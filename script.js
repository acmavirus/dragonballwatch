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
        return `https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-${formattedNumber}-fix.mp4`;
    };

    const loadEpisode = (number) => {
        const link = getEpisodeLink(number);

        // Hiện trạng thái loading
        playerPlaceholder.style.display = 'flex';
        currentEpDisplay.textContent = number;
        mainVideo.style.opacity = '0.5';

        // Cập nhật tiêu đề
        episodeTitle.textContent = `Đang xem: Tập ${number}`;

        // Cập nhật link cho thẻ video
        mainVideo.src = link;
        mainVideo.load();

        // Thử tự động phát (có thể bị trình duyệt chặn nếu không mute)
        const playPromise = mainVideo.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Tự động phát thành công
            }).catch(error => {
                // Tự động phát bị chặn, chờ user click
                console.log("Autoplay prevented");
            });
        }

        // Khi video đã sẵn sàng phát
        mainVideo.oncanplay = () => {
            playerPlaceholder.style.display = 'none';
            mainVideo.style.opacity = '1';
        };

        // Khi có lỗi tải video
        mainVideo.onerror = () => {
            playerPlaceholder.innerHTML = `<p style="color: #ff4444;">Lỗi: Không thể tải video tập ${number}</p>`;
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

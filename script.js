document.addEventListener('DOMContentLoaded', () => {
    const episodeGrid = document.getElementById('episode-grid');
    const mainVideo = document.getElementById('main-video');
    const episodeTitle = document.getElementById('episode-title');
    const currentEpDisplay = document.getElementById('current-ep-display');
    const playerPlaceholder = document.getElementById('player-placeholder');
    const skipIntroBtn = document.getElementById('skip-intro-btn');
    const prevEpBtn = document.getElementById('prev-ep-btn');
    const nextEpBtn = document.getElementById('next-ep-btn');
    const totalEpisodes = 131;

    let currentEpisodeNumber = 1;

    // Skip Intro (1:20 = 80 seconds)
    skipIntroBtn.onclick = () => {
        if (mainVideo) {
            mainVideo.currentTime = 80;
            mainVideo.play();
        }
    };

    // Next/Prev Buttons
    prevEpBtn.onclick = () => {
        if (currentEpisodeNumber > 1) {
            loadEpisode(currentEpisodeNumber - 1);
        }
    };

    nextEpBtn.onclick = () => {
        if (currentEpisodeNumber < totalEpisodes) {
            loadEpisode(currentEpisodeNumber + 1);
        }
    };

    // Link video từ S3
    const getEpisodeLink = (epNumber) => {
        // Đảm bảo số tập luôn có 3 chữ số (001, 002, ...)
        const formattedNumber = String(epNumber).padStart(3, '0');
        return `https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-${formattedNumber}.mp4`;
    };

    const loadEpisode = (number, retryWithFix = false) => {
        currentEpisodeNumber = number;
        const formattedNumber = String(number).padStart(3, '0');
        const link = `https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-${formattedNumber}${retryWithFix ? '-fix' : ''}.mp4`;

        // Cập nhật trạng thái nút điều hướng
        prevEpBtn.disabled = number <= 1;
        nextEpBtn.disabled = number >= totalEpisodes;

        // Hiện trạng thái loading
        playerPlaceholder.style.display = 'flex';
        playerPlaceholder.innerHTML = `<div class="loader"></div><p>Đang tải video tập <span id="current-ep-display">${number}</span>...</p>`;
        mainVideo.style.opacity = '0.5';

        // Cập nhật tiêu đề
        episodeTitle.textContent = `Đang xem: Tập ${number}${retryWithFix ? ' (Fix)' : ''}`;

        // Cập nhật link cho thẻ video
        mainVideo.src = link;
        mainVideo.volume = 0.5; // Mặc định âm thanh 50%
        mainVideo.load();

        // Thử tự động phát
        const playPromise = mainVideo.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => { }).catch(e => console.log("Autoplay blocked"));
        }

        // Khi video đã sẵn sàng phát
        let hasSkippedIntro = false;
        mainVideo.oncanplay = () => {
            playerPlaceholder.style.display = 'none';
            mainVideo.style.opacity = '1';

            // Tự động nhảy tới 1:20 (80s) khi bắt đầu tập mới
            if (!hasSkippedIntro) {
                mainVideo.currentTime = 80;
                hasSkippedIntro = true;
            }
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

        // Gán lại event check 21:40 cho mỗi tập mới
        mainVideo.ontimeupdate = checkTimeSkip;

        // Lưu tiến trình
        localStorage.setItem('dbs_last_watched', number);
    };

    function checkTimeSkip() {
        // 21:40 = 1300 seconds
        if (mainVideo.currentTime >= 1300) {
            const next = currentEpisodeNumber + 1;
            if (next <= totalEpisodes) {
                mainVideo.ontimeupdate = null; // Tránh gọi lặp lại
                loadEpisode(next);
            }
        }
    }

    // Tự động chuyển tập khi kết thúc hoặc đạt tới 21:40 (1300s)
    mainVideo.onended = () => {
        const next = currentEpisodeNumber + 1;
        if (next <= totalEpisodes) {
            loadEpisode(next);
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

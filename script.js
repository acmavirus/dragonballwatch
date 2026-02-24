document.addEventListener('DOMContentLoaded', () => {
    const episodeGrid = document.getElementById('episode-grid');
    const mainVideo = document.getElementById('main-video');
    const episodeTitle = document.getElementById('episode-title');
    const playerPlaceholder = document.getElementById('player-placeholder');
    const skipIntroBtn = document.getElementById('skip-intro-btn');
    const prevEpBtn = document.getElementById('prev-ep-btn');
    const nextEpBtn = document.getElementById('next-ep-btn');
    
    // Sử dụng biến EPISODES_DATA từ file episodes.js
    let episodesData = typeof EPISODES_DATA !== 'undefined' ? EPISODES_DATA : [];
    let currentEpisodeNumber = 1;
    let hls = null;

    if (episodesData.length === 0) {
        console.error('Lỗi: Không tìm thấy dữ liệu tập phim từ episodes.js');
        playerPlaceholder.innerHTML = `<p style="color: #ff4444;">Không thể tải danh sách tập phim. Vui lòng kiểm tra file episodes.js.</p>`;
        return;
    }

    initApp();

    function initApp() {
        const totalEpisodes = episodesData.length;
        
        // Cập nhật tổng số tập trong UI
        const statsElement = document.querySelector('.stats');
        if (statsElement) {
            statsElement.textContent = `Tổng số: ${totalEpisodes} tập`;
        }

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

        // Tạo danh sách nút tập phim từ dữ liệu JSON
        episodesData.forEach(ep => {
            const btn = document.createElement('button');
            btn.className = 'ep-btn';
            btn.textContent = ep.number;
            btn.dataset.number = ep.number;
            btn.onclick = () => loadEpisode(ep.number);
            episodeGrid.appendChild(btn);
        });

        // Load tập cuối cùng đã xem hoặc tập 1
        const lastWatched = localStorage.getItem('dbs_last_watched') || 1;
        loadEpisode(parseInt(lastWatched));
    }

    function loadEpisode(number, retryWithFix = false) {
        const episode = episodesData.find(ep => ep.number === number);
        if (!episode) return;

        currentEpisodeNumber = number;
        const link = retryWithFix ? episode.url_fix : episode.url;

        // Cập nhật trạng thái nút điều hướng
        prevEpBtn.disabled = number <= 1;
        nextEpBtn.disabled = number >= episodesData.length;

        // Hiện trạng thái loading
        playerPlaceholder.style.display = 'flex';
        playerPlaceholder.innerHTML = `<div class="loader"></div><p>Đang tải video tập <span id="current-ep-display">${number}</span>...</p>`;
        mainVideo.style.opacity = '0.5';

        // Cập nhật tiêu đề
        episodeTitle.textContent = `Đang xem: ${episode.title}${retryWithFix ? ' (Fix)' : ''}`;

        // Hủy instance HLS cũ nếu có
        if (hls) {
            hls.destroy();
            hls = null;
        }

        // Kiểm tra định dạng link
        const isHLS = link.includes('.m3u8');

        if (isHLS) {
            if (Hls.isSupported()) {
                hls = new Hls();
                hls.loadSource(link);
                hls.attachMedia(mainVideo);
                hls.on(Hls.Events.MANIFEST_PARSED, function() {
                    mainVideo.play().catch(e => console.log("Autoplay blocked"));
                });
                
                // Xử lý lỗi cho HLS
                hls.on(Hls.Events.ERROR, function (event, data) {
                    if (data.fatal) {
                        handleVideoError(number, retryWithFix);
                    }
                });
            } else if (mainVideo.canPlayType('application/vnd.apple.mpegurl')) {
                // Hỗ trợ native HLS (Safari)
                mainVideo.src = link;
                mainVideo.play().catch(e => console.log("Autoplay blocked"));
            } else {
                playerPlaceholder.innerHTML = `<p style="color: #ff4444;">Trình duyệt của bạn không hỗ trợ phát HLS (m3u8).</p>`;
            }
        } else {
            // Phát MP4 bình thường
            mainVideo.src = link;
            mainVideo.load();
            mainVideo.play().catch(e => console.log("Autoplay blocked"));
        }

        mainVideo.volume = 0.5; // Mặc định âm thanh 50%

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

        // Khi có lỗi tải video
        mainVideo.onerror = () => {
            handleVideoError(number, retryWithFix);
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
    }

    function handleVideoError(number, retryWithFix) {
        if (!retryWithFix) {
            console.log(`Tập ${number} lỗi, đang thử link dự phòng...`);
            loadEpisode(number, true); // Thử lại với link dự phòng
        } else {
            playerPlaceholder.style.display = 'flex';
            playerPlaceholder.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <p style="color: #ff4444; font-weight: bold; margin-bottom: 10px;">Lỗi: Không tìm thấy hoặc không thể phát video tập ${number}</p>
                    <p style="font-size: 0.8rem; color: var(--text-muted);">Vui lòng thử lại sau hoặc chuyển sang tập khác.</p>
                </div>
            `;
        }
    }

    function checkTimeSkip() {
        // 21:40 = 1300 seconds
        if (mainVideo.currentTime >= 1300) {
            const next = currentEpisodeNumber + 1;
            if (next <= episodesData.length) {
                mainVideo.ontimeupdate = null; // Tránh gọi lặp lại
                loadEpisode(next);
            }
        }
    }

    // Tự động chuyển tập khi kết thúc
    mainVideo.onended = () => {
        const next = currentEpisodeNumber + 1;
        if (next <= episodesData.length) {
            loadEpisode(next);
        }
    };
});

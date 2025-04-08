document.addEventListener('DOMContentLoaded', function() {
    const musicBtn = document.getElementById('toggleMusic');
    const bgMusic = document.getElementById('bgMusic');
    const video = document.querySelector('.video-container video');
    let isPlaying = true;

    // Function to toggle music
    function toggleMusic() {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            bgMusic.play();
            musicBtn.innerHTML = '<i class="fas fa-music"></i>';
        }
        isPlaying = !isPlaying;
    }

    // Toggle music on button click
    musicBtn.addEventListener('click', toggleMusic);

    // Stop music when video starts playing
    video.addEventListener('play', function() {
        bgMusic.pause();
        isPlaying = false;
        musicBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    });

    // Resume music when video is paused
    video.addEventListener('pause', function() {
        if (isPlaying) {
            bgMusic.play();
        }
    });

    // Handle autoplay restrictions
    bgMusic.play().catch(function(error) {
        console.log("Audio autoplay failed:", error);
        isPlaying = false;
        musicBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    });
}); 
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
            playMusic();
            musicBtn.innerHTML = '<i class="fas fa-music"></i>';
        }
        isPlaying = !isPlaying;
    }

    // Function to play music with proper error handling
    function playMusic() {
        // Set volume to 0 first to avoid sudden loud sound
        bgMusic.volume = 0;
        
        const playPromise = bgMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Playback started successfully
                isPlaying = true;
                musicBtn.innerHTML = '<i class="fas fa-music"></i>';
                
                // Fade in the volume
                let vol = 0;
                const fadeIn = setInterval(() => {
                    if (vol < 0.5) {
                        vol += 0.1;
                        bgMusic.volume = vol;
                    } else {
                        clearInterval(fadeIn);
                    }
                }, 100);
            }).catch(error => {
                // Auto-play was prevented
                console.log("Audio autoplay failed:", error);
                isPlaying = false;
                musicBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                
                // Try again with user interaction
                document.addEventListener('click', function forcePlay() {
                    playMusic();
                    document.removeEventListener('click', forcePlay);
                }, { once: true });
            });
        }
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
            playMusic();
        }
    });

    // Try to play music immediately when page loads
    playMusic();
    
    // Add event listener for page visibility changes
    // document.addEventListener('visibilitychange', function() {
    //     if (document.hidden) {
    //         // Page is hidden, pause music
    //         bgMusic.pause();
    //     } else {
    //         // Page is visible again, resume music if it was playing
    //         if (isPlaying) {
    //             playMusic();
    //         }
    //     }
    // });
    
    // Try to play music after a short delay (helps with autoplay policies)
    setTimeout(playMusic, 1000);
    
    // Try to play music on any user interaction
    // document.addEventListener('click', function() {
    //     if (!isPlaying) {
    //         playMusic();
    //     }
    // }, { once: true });
}); 
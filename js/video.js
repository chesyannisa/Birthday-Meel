document.addEventListener('DOMContentLoaded', function() {
    // Get all video thumbnails
    const videoThumbnails = document.querySelectorAll('.video-thumbnail video');
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeModal = document.querySelector('.close-modal');

    // Start muted preview for all videos
    videoThumbnails.forEach(video => {
        video.play();
    });

    // Function to play video in modal
    window.playVideo = function(thumbnail) {
        const video = thumbnail.querySelector('video');
        const videoSrc = video.src;
        
        modalVideo.src = videoSrc;
        modal.style.display = 'flex';
        
        // Trigger reflow to ensure transition works
        modal.offsetHeight;
        
        // Add active class for animation
        modal.classList.add('active');
        
        // Play video with sound
        modalVideo.muted = false;
        modalVideo.play();
    }

    // Function to close modal with animation
    function closeModalWithAnimation() {
        modal.classList.remove('active');
        
        // Wait for animation to complete before hiding
        setTimeout(() => {
            modal.style.display = 'none';
            modalVideo.pause();
            modalVideo.src = '';
            modalVideo.muted = true;
        }, 300);
    }

    // Close modal when clicking the close button
    closeModal.addEventListener('click', closeModalWithAnimation);

    // Close modal when clicking outside the video
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalWithAnimation();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModalWithAnimation();
        }
    });
}); 
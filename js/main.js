// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const audioControl = document.getElementById('toggleMusic');
const audio = new Audio('assets/birthday-music.mp3');
const videoItems = document.querySelectorAll('.video-item');
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');
const closeModal = document.querySelector('.close-modal');

// Sample video URLs - Replace with your actual videos
const videoUrls = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual YouTube video ID
    'https://www.youtube.com/embed/ZbZSe6N_BXs', // Replace with actual YouTube video ID
    'https://www.youtube.com/embed/kXYiU_JCYtU'  // Replace with actual YouTube video ID
];

// Navigation Toggle
navToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
        
        // Scroll to target
        target.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Update active link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Audio Control
audioControl.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
        audioControl.classList.add('playing');
    } else {
        audio.pause();
        audioControl.innerHTML = '<i class="fas fa-music"></i>';
        audioControl.classList.remove('playing');
    }
});

// Set audio to loop
audio.loop = true;
audio.volume = 0.5;

// Add animation delay when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add staggered animation to nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach((link, index) => {
        link.style.animationDelay = `${0.1 * index}s`;
        link.classList.add('fade-in');
    });
});

// Create Floating Balloons
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    
    // Random position
    balloon.style.left = Math.random() * 100 + 'vw';
    
    // Random color
    balloon.style.backgroundColor = getRandomColor();
    
    // Random size
    const size = Math.random() * 30 + 30;
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.2}px`;
    
    // Random animation duration
    balloon.style.animationDuration = (Math.random() * 5 + 5) + 's';
    
    document.querySelector('.floating-balloons').appendChild(balloon);

    // Remove balloon after animation
    balloon.addEventListener('animationend', () => {
        balloon.remove();
    });
}

// Generate random colors for balloons
function getRandomColor() {
    const colors = ['#ff69b4', '#4a90e2', '#ffd700', '#ff6b6b', '#4ecdc4', '#a78bfa', '#f97316'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Create balloons periodically
setInterval(createBalloon, 1000);

// Initial balloons
for (let i = 0; i < 5; i++) {
    setTimeout(createBalloon, i * 100);
}

// Video Modal Functionality
videoItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Set the video URL
        videoFrame.src = videoUrls[index];
        
        // Show modal
        videoModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeModal.addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        closeVideoModal();
    }
});

function closeVideoModal() {
    videoModal.classList.remove('show');
    document.body.style.overflow = 'auto';
    // Stop video
    videoFrame.src = '';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('show')) {
        closeVideoModal();
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Navigation
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add video modal styles
const modalStyle = document.createElement('style');
modalStyle.textContent = `
    .video-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    
    .video-modal.show {
        opacity: 1;
        visibility: visible;
    }
    
    .modal-content {
        position: relative;
        width: 90%;
        max-width: 800px;
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    
    .close-modal {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 28px;
        cursor: pointer;
        color: #666;
        z-index: 1;
        transition: color 0.3s ease;
    }
    
    .close-modal:hover {
        color: var(--primary-color);
    }
    
    .video-container-modal {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
    }
    
    .video-container-modal iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
    
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .fade-in {
        animation: fade-in 0.5s ease forwards;
    }
    
    .audio-control.playing {
        animation: pulse 2s infinite;
    }
`;

document.head.appendChild(modalStyle); 
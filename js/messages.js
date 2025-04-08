// Sample messages data - Replace with your actual messages
const messagesData = [
    {
        name: "John Doe",
        message: "Happy Birthday! You're an amazing friend who always brings joy to everyone around you. Wishing you a day filled with happiness and a year filled with joy!",
        date: "2024-01-01",
        avatar: "assets/avatars/avatar1.jpg"
    },
    {
        name: "Jane Smith",
        message: "May your birthday be as special as you are! Your friendship has been a blessing in my life. Here's to many more adventures together! 🎉",
        date: "2024-01-01",
        avatar: "assets/avatars/avatar2.jpg"
    },
    {
        name: "Michael Johnson",
        message: "Another year older, another year wiser! Cherish every moment of this special day. You deserve all the happiness in the world!",
        date: "2024-01-02",
        avatar: "assets/avatars/avatar3.jpg"
    },
    {
        name: "Sarah Williams",
        message: "Sending you warmest wishes on your special day. May all your dreams come true! Thanks for being such an incredible friend through thick and thin.",
        date: "2024-01-03",
        avatar: "assets/avatars/avatar4.jpg"
    },
    {
        name: "David Brown",
        message: "Happy Birthday to my amazing friend! Your kindness and positivity inspire everyone around you. Here's to many more years of friendship!",
        date: "2024-01-04",
        avatar: "assets/avatars/avatar5.jpg"
    },
    {
        name: "Emily Parker",
        message: "Cheers to another trip around the sun! I'm so grateful to have you in my life. May your day be filled with laughter and love!",
        date: "2024-01-05",
        avatar: "assets/avatars/avatar6.jpg"
    }
];

// Initialize testimonials grid
function initializeTestimonials() {
    const messagesSection = document.querySelector('.messages');
    
    // Create testimonial grid container
    const gridHTML = `
        <div class="testimonial-grid">
            <div class="testimonial-container" id="testimonialContainer"></div>
        </div>
    `;
    
    // Replace the old messages container
    const oldContainer = document.querySelector('.messages-container');
    if (oldContainer) {
        oldContainer.remove();
    }
    
    // Replace any carousel if it exists
    const oldCarousel = document.querySelector('.wish-carousel');
    if (oldCarousel) {
        oldCarousel.remove();
    }
    
    // Insert grid before the message form (if it exists)
    const messageForm = document.querySelector('.message-form');
    if (messageForm) {
        messageForm.remove(); // Remove the form as requested
    }
    
    // Add the grid after the heading
    const heading = document.querySelector('.messages h2');
    heading.insertAdjacentHTML('afterend', gridHTML);
    
    // Create testimonial cards
    const testimonialContainer = document.getElementById('testimonialContainer');
    
    messagesData.forEach((message) => {
        const date = new Date(message.date);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Create testimonial card
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        
        testimonialCard.innerHTML = `
            <div class="testimonial-quote-mark"><i class="fas fa-quote-left"></i></div>
            <p class="testimonial-message">${message.message}</p>
            <div class="testimonial-footer">
                <div class="testimonial-avatar">
                    <img src="${message.avatar}" alt="${message.name}" onerror="this.src='assets/avatars/default-avatar.jpg'">
                </div>
                <div class="testimonial-author">
                    <h3>${message.name}</h3>
                    <span class="testimonial-date">${formattedDate}</span>
                </div>
            </div>
        `;
        
        testimonialContainer.appendChild(testimonialCard);
    });
    
    // Add animation to testimonial cards
    animateTestimonials();
}

// Animate testimonials on scroll
function animateTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    testimonialCards.forEach(card => {
        observer.observe(card);
    });
}

// Add CSS for testimonials
const style = document.createElement('style');
style.textContent = `
    .testimonial-grid {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
    }
    
    .testimonial-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
    }
    
    .testimonial-card {
        background: white;
        border-radius: 20px;
        padding: 2rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        position: relative;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(30px);
    }
    
    .testimonial-card.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .testimonial-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }
    
    .testimonial-quote-mark {
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
        font-size: 2rem;
        color: var(--primary-color);
        opacity: 0.2;
    }
    
    .testimonial-message {
        margin-bottom: 1.5rem;
        line-height: 1.7;
        font-size: 1rem;
        color: #444;
        position: relative;
        z-index: 1;
    }
    
    .testimonial-footer {
        display: flex;
        align-items: center;
        border-top: 1px solid #eee;
        padding-top: 1.5rem;
    }
    
    .testimonial-avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 1rem;
        border: 3px solid var(--primary-color);
    }
    
    .testimonial-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .testimonial-author h3 {
        margin: 0;
        font-size: 1.1rem;
        color: var(--text-color);
    }
    
    .testimonial-date {
        font-size: 0.8rem;
        color: #888;
    }
    
    /* Style to make some cards stand out */
    .testimonial-card:nth-child(3n+1) {
        border-top: 5px solid var(--primary-color);
    }
    
    .testimonial-card:nth-child(3n+2) {
        border-top: 5px solid var(--secondary-color);
    }
    
    .testimonial-card:nth-child(3n+3) {
        border-top: 5px solid var(--accent-color);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .testimonial-container {
            grid-template-columns: 1fr;
        }
    }
`;

document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTestimonials();
    
    // Create default avatars folder if needed
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            e.target.src = 'assets/avatars/default-avatar.jpg';
        }
    }, true);
}); 
// Sample gallery data - Replace with your actual images
const galleryData = [
    {
        image: 'assets/gallery/Diwali.jpg',
        caption: 'Sundar & Sushil'
    },
    {
        image: 'assets/gallery/Bros.jpeg',
        caption: 'Special moments'
    },
    {
        image: 'assets/gallery/Bross.jpeg',
        caption: 'Kuch Yadein'
    },
    {
        image: 'assets/gallery/Sunrise.jpeg',
        caption: 'Ur_first_Sunrise'
    },
    {
        image: 'assets/gallery/Me_Her.jpg',
        caption: 'Diwali'
    },
    {
        image: 'assets/gallery/GT_Bros.jpeg',
        caption: 'GT with Bros'
    },
    {
        image: 'assets/gallery/besties.jpeg',
        caption: 'Besties'
    },
    {
        image: 'assets/gallery/Aiman_Room.jpeg',
        caption: 'Hall_Days'
    },
    {
        image: 'assets/gallery/Independence_Day.jpeg',
        caption: 'JVM'
    },
    {
        image: 'assets/gallery/Smiling.jpeg',
        caption: 'Lastly_You'
    },
    // Add more images as needed
];

// Initialize gallery
function initializeGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.caption}">
            <div class="gallery-caption">
                <p>${item.caption}</p>
            </div>
        `;
        
        // Add click event for lightbox
        galleryItem.addEventListener('click', () => {
            openLightbox(item);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Lightbox functionality
function openLightbox(item) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img src="${item.image}" alt="${item.caption}">
            <p class="lightbox-caption">${item.caption}</p>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Close lightbox on click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.className === 'close-lightbox') {
            lightbox.remove();
        }
    });
    
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
    
    // Add animation class
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 10);
}

// Add CSS for lightbox
const style = document.createElement('style');
style.textContent = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .lightbox.active {
        opacity: 1;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90vh;
    }
    
    .lightbox-content img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
    }
    
    .lightbox-caption {
        color: white;
        text-align: center;
        margin-top: 1rem;
    }
    
    .close-lightbox {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
    }
    
    .gallery-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 0.5rem;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .gallery-item:hover .gallery-caption {
        opacity: 1;
    }
`;

document.head.appendChild(style);

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeGallery); 
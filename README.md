# Birthday Celebration Website

A beautiful, interactive birthday celebration website featuring a countdown timer, photo gallery, video section, and birthday wishes. Perfect for creating a special digital celebration for your loved ones.

## Features

- 🎉 Interactive countdown timer to the birthday
- 📸 Photo gallery with lightbox functionality
- 🎥 Video section for sharing special moments
- 💌 Birthday wishes section with message submission
- 🎵 Background music with play/pause control
- 🎈 Floating balloons animation
- 📱 Fully responsive design
- ✨ Smooth animations and transitions

## Getting Started

1. Clone this repository
2. Customize the content:
   - Update the birthday date in `js/countdown.js`
   - Add your photos to the `assets/gallery` directory
   - Add your videos to the `assets/videos` directory
   - Customize messages in `js/messages.js`
   - Update the friend's name in `index.html`

## Customization

### Changing Colors
The color scheme can be modified in `css/style.css`:
```css
:root {
    --primary-color: #ff69b4;
    --secondary-color: #4a90e2;
    --accent-color: #ffd700;
    /* ... other colors ... */
}
```

### Adding Photos
1. Add your photos to the `assets/gallery` directory
2. Update the `galleryData` array in `js/gallery.js`:
```javascript
const galleryData = [
    {
        image: 'assets/gallery/your-image.jpg',
        caption: 'Your caption here'
    },
    // Add more images...
];
```

### Adding Videos
1. Add your videos to the `assets/videos` directory
2. Update the video section in `index.html` with your video sources

### Customizing Messages
Update the `messagesData` array in `js/messages.js` with your pre-written messages:
```javascript
const messagesData = [
    {
        name: 'Friend Name',
        message: 'Your message here',
        date: '2024-01-01'
    },
    // Add more messages...
];
```

## Assets Required

Create the following directory structure and add your assets:
```
assets/
├── gallery/
│   ├── image1.jpg
│   ├── image2.jpg
│   └── ...
├── videos/
│   ├── video1.mp4
│   └── ...
├── birthday-music.mp3
├── celebration.mp3
├── hero-bg.jpg
└── favicon.ico
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
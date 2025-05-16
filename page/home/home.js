document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const playIcon = document.querySelector('.video-play-icon');
    const pauseIcon = document.querySelector('.video-pause-icon');
    const videoContainer = document.querySelector('.video-container');

    // Update icon visibility based on video state
    const updateIcons = () => {
        if (video.paused) {
            playIcon.classList.add('active');
            pauseIcon.classList.remove('active');
        } else {
            playIcon.classList.remove('active');
            pauseIcon.classList.add('active');
        }
    };

    // Add event listeners for play and pause
    video.addEventListener('play', updateIcons);
    video.addEventListener('pause', updateIcons);

    // Add hover event to toggle icons
    videoContainer.addEventListener('mouseenter', updateIcons);
    videoContainer.addEventListener('mouseleave', () => {
        playIcon.classList.remove('active');
        pauseIcon.classList.remove('active');
    });

    // Initialize icon state
    updateIcons();
});
//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('meditation-video');
    const audio = document.getElementById('meditation-audio');
    const display = document.getElementById('display');
    const playPauseBtn = document.getElementById('play-pause');

    // Variables for controlling timer
    let timer;
    let time = 10 * 60; // Initial time in seconds
    let isPlaying = false;

    // Update the time display
    function updateTime() {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Start the timer
    function startTimer(duration) {
        time = duration;
        timer = setInterval(function() {
            if (time > 0) {
                time--;
                updateTime();
            } else {
                clearInterval(timer);
                isPlaying = false;
                playPauseBtn.textContent = 'Play';
            }
        }, 1000);
    }

    // Event listeners for play/pause button
    playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            video.pause();
            clearInterval(timer);
            isPlaying = false;
            playPauseBtn.textContent = 'Play';
        } else {
            audio.play();
            video.play();
            startTimer(time);
            isPlaying = true;
            playPauseBtn.textContent = 'Pause';
        }
    });

    // Event listener for time buttons
    const timeButtons = document.querySelectorAll('.time-buttons button');
    timeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const timeStr = button.textContent.split(' ')[0];
            const minutes = parseInt(timeStr);
            if (!isNaN(minutes)) {
                time = minutes * 60;
                updateTime();
            }
        });
    });

    // Event listener for sound picker buttons
    const soundButtons = document.querySelectorAll('.sound-picker button');
    soundButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const soundFile = button.id === 'sound-1' ? 'beach.mp3' : 'rain.mp3';
            audio.src = `sounds/${soundFile}`;
            audio.play();
        });
    });
});
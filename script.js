// script.js

let videoElement = document.getElementById('meditation-video');
let audioElement = document.getElementById('meditation-audio');
let playPauseButton = document.getElementById('play-pause-button');
let timeDisplay = document.querySelector('.time-display');
let timer;
let duration = 600;  // 10 minutes in seconds

function updateTimer() {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function switchToMeditationA() {
    videoElement.src = 'Sounds/beach.mp4';
    audioElement.src = 'Sounds/beach.mp3';
    videoElement.play();
    audioElement.play();
}

function switchToMeditationB() {
    videoElement.src = './Sounds/rain.mp4';
    audioElement.src = './Sounds/rain.mp3';
    videoElement.play();
    audioElement.play();
}

document.getElementById('smaller-mins').addEventListener('click', function() {
    duration = 120;  // 2 minutes in seconds
    updateTimer();
});

document.getElementById('medium-mins').addEventListener('click', function() {
    duration = 300;  // 5 minutes in seconds
    updateTimer();
});

document.getElementById('long-mins').addEventListener('click', function() {
    duration = 600;  // 10 minutes in seconds
    updateTimer();
});

playPauseButton.addEventListener('click', function() {
    if (videoElement.paused) {
        videoElement.play();
        audioElement.play();
        playPauseButton.textContent = 'Pause';
        timer = setInterval(function() {
            duration--;
            updateTimer();
            if (duration <= 0) {
                clearInterval(timer);
                videoElement.pause();
                audioElement.pause();
                playPauseButton.textContent = 'Play';
            }
        }, 1000);
    } else {
        videoElement.pause();
        audioElement.pause();
        clearInterval(timer);
        playPauseButton.textContent = 'Play';
    }
});

// Set initial video and audio
switchToMeditationA();
updateTimer();

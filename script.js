//your JS code here. If required.
const app = document.getElementById('app');
const video = document.getElementById('meditationVideo');
const audio = document.getElementById('meditationAudio');
const soundPicker = document.querySelector('.sound-picker');
const timeDisplay = document.querySelector('.time-display');
let timer;

function switchSound(sound) {
    audio.src = `Sounds/${sound}.mp3`;
    video.src = `video/${sound}.mp4`;
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        video.play();
        updateTimer();
    } else {
        audio.pause();
        video.pause();
        clearInterval(timer);
    }
}

function setTime(minutes) {
    clearInterval(timer);
    const totalSeconds = minutes * 60;
    let seconds = totalSeconds;
    
    updateTimer();

    timer = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(timer);
            audio.pause();
            video.pause();
        } else {
            seconds--;
            updateTimer();
        }
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');
    timeDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
}

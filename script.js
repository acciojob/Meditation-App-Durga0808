// script.js
document.addEventListener("DOMContentLoaded", function () {
  const videoPlayer = document.getElementById("videoPlayer");
  const audioPlayer = document.getElementById("audioPlayer");
  const timeDisplay = document.querySelector(".time-display");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const soundButtons = document.querySelectorAll(".sound-button");
  const timeButtons = document.querySelectorAll(".time-select button");

  let isPlaying = false;
  let intervalId;
  let timeLeft = 600;

  function updateTimeDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  function switchVideo(videoSrc, audioSrc) {
    videoPlayer.src = `video/${videoSrc}.mp4`;
    audioPlayer.src = `audio/${audioSrc}.mp3`;
  }

  function startTimer(duration) {
    clearInterval(intervalId);
    timeLeft = duration;
    updateTimeDisplay();
    intervalId = setInterval(function () {
      timeLeft--;
      updateTimeDisplay();
      if (timeLeft === 0) {
        clearInterval(intervalId);
        isPlaying = false;
        playPauseBtn.textContent = "Play";
      }
    }, 1000);
  }

  playPauseBtn.addEventListener("click", function () {
    if (isPlaying) {
      videoPlayer.pause();
      audioPlayer.pause();
      clearInterval(intervalId);
      isPlaying = false;
      playPauseBtn.textContent = "Play";
    } else {
      videoPlayer.play();
      audioPlayer.play();
      isPlaying = true;
      playPauseBtn.textContent = "Pause";
    }
  });

  soundButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.id === "sound1") {
        switchVideo("beach", "beach");
      } else if (button.id === "sound2") {
        switchVideo("rain", "rain");
      }
      if (isPlaying) {
        videoPlayer.play();
        audioPlayer.play();
      }
    });
  });

  timeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.id === "smaller-mins") {
        startTimer(120);
      } else if (button.id === "medium-mins") {
        startTimer(300);
      } else if (button.id === "long-mins") {
        startTimer(600);
      }
      if (!isPlaying) {
        videoPlayer.play();
        audioPlayer.play();
        isPlaying = true;
        playPauseBtn.textContent = "Pause";
      }
    });
  });
});
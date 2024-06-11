document.addEventListener("DOMContentLoaded", function () {
  const videoPlayer = document.getElementById("videoPlayer");
  const audioPlayer = document.getElementById("audioPlayer");
  const timeDisplay = document.querySelector(".time-display");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const soundButtons = document.querySelectorAll(".sound-button");
  const timeButtons = document.querySelectorAll(".time-select button");

  let isPlaying = false;
  let intervalId;
  let timeLeft = 600; // Default to 10 minutes

  // Initialize display with required format "10:00"
  timeDisplay.textContent = "10:0";

  function updateTimeDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes}:${seconds}`;
  }


  function switchVideo(videoSrc, audioSrc) {
    videoPlayer.src = `sounds/${videoSrc}.mp4`;
    audioPlayer.src = `sounds/${audioSrc}.mp3`;
    videoPlayer.load(); // Ensure the new video is loaded
    audioPlayer.load(); // Ensure the new audio is loaded
  }

   function startTimer(duration) {
    clearInterval(intervalId);
    timeLeft = duration;
    updateTimeDisplay();
    intervalId = setInterval(function () {
      timeLeft--;
      updateTimeDisplay();
      if (timeLeft <= 0) {
        clearInterval(intervalId);
        isPlaying = false;
        playPauseBtn.textContent = "Play";
        videoPlayer.pause();
        audioPlayer.pause();
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
      videoPlayer.play().catch(handlePlayError);
      audioPlayer.play().catch(handlePlayError);
      isPlaying = true;
      playPauseBtn.textContent = "Pause";
      if (!intervalId) {
        startTimer(timeLeft);
      }
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
        videoPlayer.play().catch(handlePlayError);
        audioPlayer.play().catch(handlePlayError);
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
        videoPlayer.play().catch(handlePlayError);
        audioPlayer.play().catch(handlePlayError);
        isPlaying = true;
        playPauseBtn.textContent = "Pause";
      }
    });
  });

  function handlePlayError(error) {
    console.error("Play error:", error);
    if (error.name === "AbortError") {
      console.warn("The play() request was interrupted by a call to pause()");
    } else {
      console.error("Unhandled play error:", error);
    }
  }

  // Set initial video and audio
  switchVideo("beach", "beach");
});

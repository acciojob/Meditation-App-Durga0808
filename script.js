//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
	const sound1 = document.getElementById("sound1");
	const sound2 = document.getElementById("sound2");
	const app = document.getElementById("app");
	const playButton = document.querySelector(".circle .play");

	const music = document.getElementById("meditationAudio");
	const video = document.getElementById("meditationVideo");

	let currentMusic;
	let currentVideo;

	sound1.addEventListener("click", function () {

		if(currentMusic) currentMusic.pause();
		if(currentVideo) currentVideo.pause();

		currentMusic = music;
		currentVideo = video;
		currentMusic.src= "C:\\Users\\user\\Downloads\\mixkit-sea-waves-with-birds-loop-1185.wav";
		currentVideo.src= "C:\\Users\\user\\Downloads\\stock-footage-phuket-thailand-tropical-beach-aerial-drone-top-down-view-bird-eye-view-of-sea-blue-waves-break-on.mp4";

		currentMusic.play();
		currentVideo.play();
	});

	sound2.addEventListener("click", function () {

		if(currentMusic) currentMusic.pause();
		if(currentVideo) currentVideo.pause();

		currentMusic = music;
		currentMusic = video;

		currentMusic.src = "C:\\Users\\user\\Downloads\\LVBN9P3-sunrise-birds.mp3";
		currentVideo.src = "C:\\Users\\user\\Downloads\\stock-footage--k-loop-rain-drops-falling-alpha-real-rain-high-quality-slow-rain-thunder-speedy-night.webm";

		currentMusic.play();
		currentVideo.play();
		
	});

	playButton.addEventListener("click", function () {
            if (currentVideo.paused && currentMusic.paused) {
                currentVideo.play();
				currentMusic.play();
            } else {
                currentVideo.pause();
				currentMusic.pause();
            }
    });
})
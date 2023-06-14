const video = document.getElementsByClassName('backgroundclip')[0];
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const increaseSpeedButton = document.getElementById('increase-speed-button');
const showTimeButton = document.getElementById('show-time-button');
const timeTakenSpan = document.getElementById('time-taken');
let startTime = 0;

function playVideo() {
  video.play();
  startTime = new Date().getTime();
  playButton.style.display = 'none';
  pauseButton.style.display = 'inline-block';
  stopButton.style.display = 'inline-block';
}

function pauseVideo() {
  video.pause();
  playButton.style.display = 'inline-block';
  pauseButton.style.display = 'none';
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
  playButton.style.display = 'inline-block';
  pauseButton.style.display = 'none';
  stopButton.style.display = 'none';
}

function increaseSpeed() {
  if (video.playbackRate < 2.0) {
    video.playbackRate += 0.5;
  }
}

function showTimeTaken() {
  const endTime = new Date().getTime();
  const timeDiff = endTime - startTime;
  const seconds = (timeDiff / 1000).toFixed(2);
  timeTakenSpan.textContent = `${seconds} seconds`;
}

playButton.addEventListener('click', playVideo);
pauseButton.addEventListener('click', pauseVideo);
stopButton.addEventListener('click', stopVideo);
increaseSpeedButton.addEventListener('click', increaseSpeed);
showTimeButton.addEventListener('click', showTimeTaken);

// Add touch event listeners
let xDown = null;
let yDown = null;

video.addEventListener('touchstart', handleTouchStart);
video.addEventListener('touchmove', handleTouchMove);

function handleTouchStart(event) {
  xDown = event.touches[0].clientX;
  yDown = event.touches[0].clientY;
}

function handleTouchMove(event) {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = event.touches[0].clientX;
  const yUp = event.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      /* left swipe */
    } else {
      /* right swipe */
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
      increaseSpeed();
    } else {
      /* down swipe */
      showTimeTaken();
    }
  }

  /* reset values */
  xDown = null;
  yDown = null;
}

/* JavaScript code */
const videos = document.querySelector('video');
const pause_button = document.getElementById('pause-button');

function togglePlayback() {
  if (video.paused) {
    video.play();
    pauseButton.innerHTML = '<i class="fa fa-pause"></i> Pause';
  } else {
    video.pause();
    pauseButton.innerHTML = '<i class="fa fa-play"></i> Play';
  }
}

pauseButton.addEventListener('click', togglePlayback);


var startTime = Date.now();
var countDownAmount = 1200000; // ms
var countDownEnd = startTime + countDownAmount;
var timerElm = document.getElementById("timer");
var frameCount = 0;
var tickAudio = new Audio('https://freesound.org/data/previews/254/254316_4062622-lq.mp3');

function formatTime(ms) {
    var mseconds = String(ms % 1000);
    while (mseconds.length < 3) {
        mseconds = "0" + mseconds;
    }

    var seconds = String(Math.floor(ms / 1000) % 60);
    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }

    var minutes = String(Math.floor(ms / (60 * 1000)) % 60);
    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }

    var hours = String(Math.floor(ms / (60 * 60 * 1000)));

    return hours + "h  " + minutes + "m  " + seconds + "s  " + mseconds + "ms";
}

function updateTimer() {
    var remainingTime = countDownEnd - Date.now();
    if (remainingTime < 0) {
        remainingTime = 0;
    }

    timerElm.innerHTML = formatTime(remainingTime);

    if(frameCount % 60 === 0) {
        tickAudio.play();
    }

    if (remainingTime){
        requestAnimationFrame(updateTimer);
        frameCount++;
    }
}

updateTimer();

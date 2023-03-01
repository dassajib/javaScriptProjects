let timerDisplay = document.querySelector(".timer-display");
let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let resetButton = document.getElementById("reset-button");

let miliSec = 00;
let sec = 00;
let min = 00;

let timerId = null;


startButton.addEventListener("click", function () {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});

stopButton.addEventListener("click", function () {
  clearInterval(timerId);
});

resetButton.addEventListener("click", function () {
  clearInterval(timerId);
  timerDisplay.innerHTML = `00 : 00: 00`;
  miliSec = sec = min = 00;
});

function startTimer() {
  miliSec++;

  if (miliSec == 100) {
    miliSec = 0;
    sec++;

    if (sec == 60) {
      sec = 0;
      min++;
    }
  }

  let miliSecString = miliSec < 10 ? `0${miliSec}` : miliSec;
  let secString = sec < 10 ? `0${sec}` : sec;
  let minString = min < 10 ? `0${min}` : min;

  timerDisplay.innerHTML = `${minString} : ${secString} : ${miliSecString}`;
}

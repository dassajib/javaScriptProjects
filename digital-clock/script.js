function clock() {
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");
  let currentHourTime = new Date().getHours();
  let currentMinuteTime = new Date().getMinutes();
  let curentSecondTime = new Date().getSeconds();
  hour.innerHTML = currentHourTime;
  minute.innerHTML = currentMinuteTime;
  second.innerHTML = curentSecondTime;
}

// The setInterval() method calls a function at specified intervals (in milliseconds).
let interval = setInterval(clock, 1000);

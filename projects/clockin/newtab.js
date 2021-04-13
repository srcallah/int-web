var h3 = document.getElementsByTagName('h3')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    seconds = 0, minutes = 0, hours = 0,
    t,
    timestamp,
    x = document.getElementById('infoBox'),
    clockin = document.getElementById('clockin');


function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    h3.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}

function timer() {
    t = setTimeout(add, 1000);
  }


start.onclick = function(){
  timer();
  timestamp = Date.now();
  console.log(timestamp);
  chrome.storage.local.set({"timestamp":timestamp}, function(){
  console.log("saved to storage timestamp" + timestamp);
})
}

stop.onclick = function() {
    clearTimeout(t);
}


clockin.onclick = function(){
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

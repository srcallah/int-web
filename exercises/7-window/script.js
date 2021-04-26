let today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

console.log("Hours = " + hours);
console.log("Minutes = " + minutes);
console.log("Seconds = " + seconds);


function beginSunset() {
   if (hours < 5) {
    document.getElementById('colorChange').style.backgroundColor = "#00042e";
    document.getElementById('fade1').style.opacity = ".1";
    document.getElementById('fade2').style.opacity = ".1";
    document.getElementById('window-reflection').style.backgroundColor = "#f7ec6a";
  }

else if (hours > 19)  {
    document.getElementById('colorChange').style.backgroundColor = "#00042e";
    document.getElementById('fade1').style.opacity = ".1";
    document.getElementById('fade2').style.opacity = ".1";
  }

else if (hours === 19)  {
    document.getElementById('colorChange').style.backgroundColor = "#f7b36a";

  }

};

document.onload = beginSunset();

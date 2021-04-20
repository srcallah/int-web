var loadTime,
    timestamp,
    timeElapsed;


  function randomQuarter(){
  setInterval(function(){
    var quarter = document.createElement('img');
    quarter.setAttribute("style", "position:absolute;");
    quarter.setAttribute("src", "https://cdn.glitch.com/fd88396b-2d41-4027-8588-cbf9fc6a5960%2Fquarter.png?v=1617739605777");
    quarter.setAttribute("height", "100");
    document.body.appendChild(quarter);
    var xy = getRandomPosition(quarter);
    quarter.style.top = xy[0] + 'px';
    quarter.style.left = xy[1] + 'px';
  }, 60000);

  }

function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
  }

  loadTime = Date.now();
  console.log(loadTime);
// chrome.storage.local.get([“timestamp”], function(data) {
//   console.log(data[“timestamp”]);
//   });

  chrome.storage.local.get(['timestamp'], function(result) {
    console.log('Value currently is ' + result.timestamp);
    timestamp = parseInt(result.timestamp);
    timeElapsed = (loadTime - timestamp)/1000;
    console.log(timeElapsed);
    for (i=0;
    i<timeElapsed;
    i++){
        var quarter = document.createElement('img');
        quarter.setAttribute("style", "position:absolute;");
        quarter.setAttribute("src", "https://cdn.glitch.com/fd88396b-2d41-4027-8588-cbf9fc6a5960%2Fquarter.png?v=1617739605777");
        quarter.setAttribute("height", "100");
        document.body.appendChild(quarter);
        var xy = getRandomPosition(quarter);
        quarter.style.top = xy[0] + 'px';
        quarter.style.left = xy[1] + 'px';
        console.log("added a quarter!");
        }
  });



document.onload = randomQuarter();

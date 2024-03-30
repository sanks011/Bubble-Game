function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 279; i++) {
    var n = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${n}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1> Game Over ! 
       <br> 
      Refresh to Start Over </h1>`;
    }
  }, 1000);
}

var hitrn = 0;
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNum = Number(details.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
makeBubble();
getNewHit();

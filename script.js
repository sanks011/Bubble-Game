function makeBubble(){
    var clutter = "";

    for(var i = 1; i<=279; i++){
        var n = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${n}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;

}
var timer = 60;
function runTimer(){
    setInterval(function(){
        if (timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
       
    }, 1000);
}
runTimer();
makeBubble();
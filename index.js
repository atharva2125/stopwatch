const timeDisplay=document.querySelector("#timeDisplay");
const startBtn=document.querySelector("#startBtn");
const stopBtn=document.querySelector("#stopBtn");
const resetBtn=document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true; 
let intervalId;
let hrs=0;
let mins=0;
let secs=0;

startBtn.addEventListener("click", () => {
    if(paused)
    {
        paused=false;
        startTime=Date.now()-elapsedTime;
        //date.now() gives current date and time in milliseconds.
        intervalId=setInterval(updateTime,75);
        //updateTime is a callback.
    }
});
stopBtn.addEventListener("click", () =>{
    if(!paused)
    {
        paused=true;
        elapsedTime=Date.now()-startTime;
        clearInterval(intervalId);
        //The clearInterval function in JavaScript is used to stop the execution of a function that was previously started by setInterval.When you use setInterval, it repeatedly calls a function or executes a code snippet at specified intervals (in milliseconds) until clearInterval is called to stop it. clearInterval takes the ID returned by setInterval as its parameter, effectively clearing the interval set by setInterval.
    }
});
resetBtn.addEventListener("click", () =>{
     paused=true;
     clearInterval(intervalId);
     startTime = 0;
     elapsedTime = 0;
     currentTime = 0;
     paused = true; 
     intervalId;
     hrs=0;
     mins=0;
     secs=0;
     secs=pad(secs);
     mins=pad(mins);
     hrs=pad(hrs);
     timeDisplay.textContent=`${hrs}:${mins}:${secs}`;
     function pad(unit){
        return(("0")+unit).length > 2 ? unit : "0" + unit;
    }

});

function updateTime(){
    elapsedTime=Date.now()-startTime;
    secs=Math.floor((elapsedTime/1000)%60);
    mins=Math.floor((elapsedTime/(1000*60))%60);
    hrs=Math.floor((elapsedTime/(1000*60*60))%60);
    
    //timeContent represents text within an element
    secs=pad(secs);
    mins=pad(mins);
    hrs=pad(hrs);

    timeDisplay.textContent=`${hrs}:${mins}:${secs}`;

    function pad(unit){
        return(("0")+unit).length > 2 ? unit : "0" + unit;
    }
}

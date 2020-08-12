var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var interval;
var flag=0;

function setTimer(){
   

    ++milliseconds;
    
    if(milliseconds==100){
        ++seconds;
        milliseconds = 0
    }
    if(seconds==60){
        ++minutes;
        seconds = 0;
    }
    if(minutes==60){
        ++hours;
        minutes = 0;
    }


    document.getElementById("hrs").innerText=leadingZeros(hours);
    document.getElementById("mins").innerText=leadingZeros(minutes);
    document.getElementById("secs").innerText=leadingZeros(seconds);
    document.getElementById("millisecs").innerText=leadingZeros(milliseconds);

}

function startStop(){
    
    if(flag==0){
        document.getElementById("startstop-btn").innerHTML="Stop";
        start();
        flag=1;
    }
    else if(flag==1){
        document.getElementById("startstop-btn").innerHTML="Start";
        stop();
        flag=0;
    }
}

function start(){
    interval = setInterval(() => {
        setTimer()
     }, 10);
}

function stop(){
    clearInterval(interval);
}

function reset(){
   
    document.getElementById("startstop-btn").innerHTML="Start";
        stop();
        flag=0;
    
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    
    document.getElementById("hrs").innerText="00";
    document.getElementById("mins").innerText="00";
    document.getElementById("secs").innerText="00";
    document.getElementById("millisecs").innerText="00";
}

function leadingZeros(time){
    if(time<10){
        return "0"+time;
    }
    else{
        return time;
    }
}

let startButton = document.getElementById("startstop-btn");
startButton.addEventListener('click',()=>{
   startStop();
})

let resetButton = document.getElementById("reset-btn");
resetButton.addEventListener('click',() =>{
   reset();   
})


const mode = document.getElementById("page_mode");
const body = document.body;
const icon = mode.querySelector("i");

mode.addEventListener("click", function () {
    body.classList.toggle("lightMode");

    if (body.classList.contains("lightMode")) {
        icon.classList.replace("fa-sun", "fa-moon");
    } else {
        icon.classList.replace("fa-moon", "fa-sun");
    }
});

const circle = document.getElementById("circle");
const playButton = document.getElementById("start");
const playIcon = document.getElementById("play");

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

let hours = 1;
let minutes = 59;
let seconds = 59;
let timer;
let isRunning = false;

function updateDisplay() {
    hour.textContent = String(hours).padStart(2, "0");
    minute.textContent = String(minutes).padStart(2, "0");
    second.textContent = String(seconds).padStart(2, "0");
}

function timerUpdate() {
    if (hours ===0 && minutes ===0 && seconds ===0){

    
        clearInterval(timer);
        isRunning = false;
        playIcon.classList.replace("fa-pause","fa-play");
        return;
    }

    seconds--;
    if (seconds< 0){
        seconds= 59;
        minutes--;
        if(minutes<0){
            minutes= 59;
            hours--;
        }
    }


    updateDisplay();
}

playButton.addEventListener("click", function(){

    if (!isRunning) {
        timer =setInterval(timerUpdate, 1000);
        isRunning= true;
        playIcon.classList.replace("fa-play", "fa-pause");
        circle.classList.add("bordered");
    } else {
        clearInterval(timer);
        isRunning= false;
        playIcon.classList.replace("fa-pause", "fa-play");
        circle.classList.remove("bordered");
    }
});

updateDisplay();


const tenSecButton = document.getElementById("tenSec");
const tenMinButton = document.getElementById("tenMin");
const sixHourButton = document.getElementById("sixHour");
const endbutton = document.getElementById("end");

tenSecButton.addEventListener("click",function(){
    hours = 0;
    minutes = 0;
    seconds = 10;

    updateDisplay();
    updateDisplayTimer()

    clearInterval(timer);
    timer = setInterval(timerUpdate,1000);
    isRunning = true;

    playIcon.classList.replace("fa-play", "fa-pause");
    circle.classList.add("bordered");

})

tenMinButton.addEventListener("click",function(){
    hours = 0;
    minutes = 10;
    seconds = 0;

    updateDisplay();
    updateDisplayTimer()

    clearInterval(timer);
    timer = setInterval(timerUpdate,1000);
    isRunning = true;

    playIcon.classList.replace("fa-play", "fa-pause");
    circle.classList.add("bordered");

})

sixHourButton.addEventListener("click",function(){
    hours = 6;
    minutes = 0;
    seconds = 0;

    updateDisplay();
    updateDisplayTimer()

    clearInterval(timer);
    timer = setInterval(timerUpdate,1000);
    isRunning = true;

    playIcon.classList.replace("fa-play", "fa-pause");
    circle.classList.add("bordered");

})

endbutton.addEventListener("click",function(){
    hours = 0;
    minutes = 0;
    seconds = 0;

    updateDisplay();
    updateDisplayTimer()

    clearInterval(timer);
    timer = setInterval(timerUpdate,1000);
    isRunning = false;

    playIcon.classList.replace("fa-pause", "fa-play");
    circle.classList.remove("bordered");

})

const totalHour = document.getElementById("totalHour");
const totalMin = document.getElementById("totalMin");
const totalSec = document.getElementById("totalSec");

function updateDisplayTimer(){
    totalHour.textContent = `${String(hours).padStart(2, "0")} hour${hours !== 1 ? "s" : ""}`;
    totalMin.textContent = `${String(minutes).padStart(2, "0")} minute${minutes !== 1 ? "s" : ""}`;
    totalSec.textContent = `${String(seconds).padStart(2, "0")} second${seconds !== 1 ? "s" : ""}`;
}
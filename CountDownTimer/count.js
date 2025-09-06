const mode = document.getElementById("page_mode");
const body = document.body;
const icon = mode.querySelector("i");

window.addEventListener("DOMContentLoaded", () => {
    setCustomboxAppear();
    setCustomButtonAppear();
    timerBoxDisappear();
    
});

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

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
let isRunning = false;

function updateDisplay() {
    hour.textContent = String(hours).padStart(2, "0");
    minute.textContent = String(minutes).padStart(2, "0");
    second.textContent = String(seconds).padStart(2, "0");
}

function timerUpdate() {
    if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
        isRunning = false;
        playIcon.classList.replace("fa-pause", "fa-play");
        circle.classList.remove("bordered");
        alarmSound.play();
        triggerAnimation();
        return;
    }

    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
    }


    updateDisplay();
}


playButton.addEventListener("click", function(){
    const playIcon = document.getElementById("play");

    timerBoxAppear();
    setCustomboxDisappear();
    
    if (!isRunning ) {
        timer = setInterval(timerUpdate, 1000);
        isRunning = true;
        playIcon.classList.replace("fa-play", "fa-pause");
        circle.classList.add("bordered");
    } else {
        clearInterval(timer);
        isRunning = false;
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
    updateDisplayTimer();
    setCustomboxDisappear();
    timerBoxAppear();
    setCustomButtonDisappear();
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
    updateDisplayTimer();
    timerBoxAppear();
    setCustomButtonDisappear();
    setCustomboxDisappear();
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
    updateDisplayTimer();
    timerBoxAppear();
    setCustomboxDisappear();
    setCustomButtonDisappear();
    clearInterval(timer);
    timer = setInterval(timerUpdate,1000);
    isRunning = true;

    playIcon.classList.replace("fa-play", "fa-pause");
    circle.classList.add("bordered");
})

endbutton.addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;

    alarmSound.pause();
    alarmSound.currentTime = 0;

    circle.classList.remove("bordered");
    circle.classList.remove("blinking-border");
    playIcon.classList.replace("fa-pause", "fa-play");

    hours = 0;
    minutes = 0;
    seconds = 0;

    updateDisplay();
    updateDisplayTimer();
    timerBoxDisappear();
    setCustomboxAppear();
    setCustomButtonAppear();
});


function timerBoxDisappear(){
    const timer = document.getElementById("timer");

    timer.style.display = "none";
}

function timerBoxAppear(){
    const timer = document.getElementById("timer");

    timer.style.display = "flex";
}

const totalHour = document.getElementById("totalHour");
const totalMin = document.getElementById("totalMin");
const totalSec = document.getElementById("totalSec");

function updateDisplayTimer(){
    totalHour.textContent = `${String(hours).padStart(2, "0")} hour${hours !== 1 ? "s" : ""}`;
    totalMin.textContent = `${String(minutes).padStart(2, "0")} minute${minutes !== 1 ? "s" : ""}`;
    totalSec.textContent = `${String(seconds).padStart(2, "0")} second${seconds !== 1 ? "s" : ""}`;
}

let animationInterval;


function triggerAnimation() {
    circle.classList.add("blinking-border");
}



const alarmSound = new Audio("alarm.wav");
function timerUpdate() {
    if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
        isRunning = false;
        playIcon.classList.replace("fa-pause", "fa-play");
        circle.classList.remove("bordered");

        alarmSound.play();
        appearStopButton();
        triggerAnimation();

        return;
    }
    
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
    }

    updateDisplay();
}

np
const inputHour = document.getElementById("inputHour");
const inputMinute = document.getElementById("inputMinute");
const inputSecond = document.getElementById("inputSecond");
const setCustomTime = document.getElementById("setCustomTime");

setCustomTime.addEventListener("click", function () {
    const h = parseInt(inputHour.value) || 0;
    const m = parseInt(inputMinute.value) || 0;
    const s = parseInt(inputSecond.value) || 0;

    hours = h;
    minutes = m;
    seconds = s;

    if(h === 0 && m === 0 && s === 0){
        isRunning = false;
    }else{
        updateDisplay();
        updateDisplayTimer();
        timerBoxAppear();
        setCustomboxDisappear();
        clearInterval(timer);
        setCustomButtonDisappear();
        timer = setInterval(timerUpdate, 1000);
        isRunning = true;
        circle.classList.add("bordered");
    }


    playIcon.classList.replace("fa-play", "fa-pause");
});

setCustomTime.addEventListener("mouseover", function () {
    const h = parseInt(inputHour.value) || 0;
    const m = parseInt(inputMinute.value) || 0;
    const s = parseInt(inputSecond.value) || 0;

    hours = h;
    minutes = m;
    seconds = s;

    if(h === 0 && m === 0 && s === 0){
        setCustomTime.classList.add('disable');
    }else{
        setCustomTime.classList.remove('disable');
    }    
})    

function setCustomboxDisappear(){
    const customTimer = document.getElementById("custom-time-inputs");

    customTimer.style.display = "none";
}

function setCustomboxAppear(){
    const customTimer = document.getElementById("custom-time-inputs");

    customTimer.style.display = "flex";
}

function setCustomButtonDisappear(){
    const setCustomButton = document.getElementById("setCustomTime");
    const startbutton = document.getElementById("start");


    setCustomButton.style.display = "none";
    endbutton.style.display = "flex";
    startbutton.style.display = "flex";
    
}



function setCustomButtonAppear(){
    const setCustomButton = document.getElementById("setCustomTime");
    const stopButton = document.getElementById("STOP");
    const startbutton = document.getElementById("start");

    setCustomButton.style.display = "flex";
    endbutton.style.display = "none";
    startbutton.style.display = "none";
    stopButton.style.display = "none";

}

function NeededDiv(){
    const noNeed = document.getElementById("noNeed");

    noNeed.style.display = "flex";
}

function noNeededDiv(){
    const noNeed = document.getElementById("noNeed");

    noNeed.style.display = "none";
}

function appearStopButton() {
    const stopButton = document.getElementById("STOP");
    const startbutton = document.getElementById("start");

    endbutton.style.display = "none";
    startbutton.style.display = "none";
    tenSecButton.style.display = "none";
    tenMinButton.style.display = "none";
    sixHourButton.style.display = "none";
    stopButton.style.display = "flex";
    setCustomButtonDisappear();
    noNeededDiv();
}

const stopButton = document.getElementById("STOP");

stopButton.addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;

    alarmSound.pause();
    alarmSound.currentTime = 0;

    circle.classList.remove("bordered");
    circle.classList.remove("blinking-border");
    playIcon.classList.replace("fa-pause", "fa-play");

    hours = 0;
    minutes = 0;
    seconds = 0;

    updateDisplay();
    updateDisplayTimer();
    timerBoxDisappear();
    setCustomboxAppear();
    setCustomButtonAppear();
    NeededDiv();
    tenMinButton.style.display = "flex";
    tenSecButton.style.display = "flex";
    sixHourButton.style.display = "flex";
});
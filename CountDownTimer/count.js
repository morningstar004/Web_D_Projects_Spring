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

let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function paddingStart(value) {
    return String(value).padStart(2, "0");
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${paddingStart(minutes)}:${paddingStart(seconds)}`;
}

function timer() {
    secondsElapsed++;
    setTime()
}
 
function startClock() {
    if (interval) resetClock();
    interval = setInterval(timer, 1000);
}


function stopClock() {
    clearInterval(interval)
    let isStopped = true;
    return isStopped;
}

let tempInterval = interval;

function continueClock() {
    let isStopped = stopClock();
    if(isStopped) {
        interval = tempInterval;
        startClock();
        isStopped = false;
    }
}

function resetClock() {
    stopClock();
    secondsElapsed = 0;
    setTime();
}

const body = document.getElementsByTagName("body")[0];
const SWTitle = document.getElementById("watch-id");
const stopWatch = document.getElementById("time");

function setColor(name) {
    body.style.backgroundColor = name;
    body.style.transition = `0.3s`;
    
    if (name == "#36454F") {
        SWTitle.classList.replace("stop-watch", "newTextColor");
        stopWatch.classList.replace("stop-watch", "newTextColor");
    }
    else {
        SWTitle.classList.replace("newTextColor", "stop-watch");
        stopWatch.classList.replace("newTextColor", "stop-watch");
    }
}

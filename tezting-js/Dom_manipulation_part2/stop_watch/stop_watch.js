// Variables for buttons

const startStopBtn = document.querySelector("#startStopBtn");
const reset = document.querySelector("#resetBtn");


//Variables for time values; sconds, minutes and hour
let seconds = 0;
let minutes = 0;
let hours = 0;

//Variables for leading 0, the 0 in front of the first counting 0 for each time value
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for setInterval and Timer status
let timerInterval = null;
let timerStatus = "stopped";

// Stop Watch function
function stopWatch() {
    seconds++

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++
        }
    }



    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString(); // "toSting()" here makes the leading seconds 0 a character not an interger if seconds  is less than 10

    } else {
        leadingSeconds = seconds;
    }

    if(minutes < 10){
        leadingMinutes = "0"  + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if(hours < 10){
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    // So therefore we need to change the displayTimer below to reflect leading variables



    // To display the above time values in their appropriate place i.e timer on the html document we have to do the following below

    // let displayTimer = document.getElementById("timer").innerText = hours + ":" + minutes + ":" + seconds;

    let displayTimer = (document.getElementById("timer").innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);

}

// window.setInterval(stopWatch, 1000); // Note 1000 here refers to 1000 milli seconds which makes 1second

startStopBtn.addEventListener("click", function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`; // Here we are chnaging the icon from play icon to pause icon dynamically using innerHtml because we clicked on the play button already and the timer has started counting so the only other thing to do with the startStopBtn is pause it, remember we already styled the pause id(#pause) in the css file.
        timerStatus = "started"; // Here we change the timerStatus to indicate that we have started the timer
    } else {
        window.clearInterval(timerInterval); // clearInterval here stops the interval of 1000ms from running but it doesn't remove the already counted time in timer
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`; // Since it's been paused here we need to display the play button
        timerStatus = "stopped"; // We indicate timerStatus has stopped because we clicked on the pause button
    }
});


resetBtn.addEventListener("click", function(){
    window.clearInterval(timerInterval); // Here we use clearInterval to stop the interval from running and then set all the time values to 0 as seen below
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("timer").innerText = "00:00:00"; // we display the timer as a string using innerText
    document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-play" id="play"></i>`; //We change the icon to play because we reset the timer so the only other thing to do is play it again
    timerStatus = "stopped"; // Here we indicate that timer has stopped since we clicked on reset
})



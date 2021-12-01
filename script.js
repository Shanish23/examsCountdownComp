const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const exams = "13 Dec 2021";

function countdown() {
    const examsDate = new Date(exams);
    const currentDate = new Date();

    const totalSeconds = (examsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    days.innerHTML = days;
    hours.innerHTML = formatTime(hours);
    mins.innerHTML = formatTime(mins);
    seconds.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

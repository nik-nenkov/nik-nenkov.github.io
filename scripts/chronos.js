const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

const checkedTimeInSeconds = 1659214800;
const halloweenTimeInSeconds = 1667167200;
const christmasTimeInSeconds = 1671832800;
const birthdayTimeInSeconds = 1689109200;

function getCurrentTimeInSeconds() {
    return Math.floor(new Date().getTime() / 1000);
}

function showTime() {
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("display-time-now").textContent = h + ":" + m + ":" + s + " ";

    setTimeout(showTime, 1000);
}

function showPassed() {
    document.getElementById("display-last-check").innerText = "🚭" +
        getStringBySecondsPassed(getCurrentTimeInSeconds() - checkedTimeInSeconds);
}

function showHalloween() {
    document.getElementById("display-halloween").innerText = "🎃" +
        getStringBySecondsPassed(getCurrentTimeInSeconds() - halloweenTimeInSeconds);
}

function showChristmas() {
    document.getElementById("display-christmas").innerText = "🎄" +
        getStringBySecondsPassed(getCurrentTimeInSeconds() - christmasTimeInSeconds);
}

function showBirthDay() {
    document.getElementById("display-birthday").innerText = "🎂" +
        getStringBySecondsPassed(getCurrentTimeInSeconds() - birthdayTimeInSeconds);
}

function getStringBySecondsPassed(secondsPassed) {
    const days = Math.floor(secondsPassed / day) + "d";
    const hours = Math.abs(Math.floor(secondsPassed % day / hour)) + "h";
    const minutes = Math.abs(Math.floor(secondsPassed % hour / minute)) + "m";
    return days.padStart(6, ' ') + hours.padStart(4, ' ') + minutes.padStart(4, ' ')
}
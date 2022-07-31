const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

const checkedTimeInSeconds = 1659214800;
const halloweenTimeInSeconds = 1667167200;
const christmasTimeInSeconds = 1671832800;
const birthdayTimeInSeconds = 1689109200;

function getCurrentTimeInSeconds(){
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

    const secondsPassed = getCurrentTimeInSeconds() - checkedTimeInSeconds;

    document.getElementById("display-last-check").textContent = "🚭 " +
        Math.floor(secondsPassed / day) + "d " +
        Math.floor(secondsPassed % day / hour) + "h " +
        Math.floor(secondsPassed % hour / minute) + "m ";

    setTimeout(showPassed, 20000);
}
function showHalloween() {

    const secondsPassed = getCurrentTimeInSeconds() - halloweenTimeInSeconds;

    document.getElementById("display-halloween").textContent = "🎃 " +
        Math.floor(secondsPassed / day) + "d " +
        Math.abs( Math.floor(secondsPassed % day / hour)) + "h " +
        Math.abs(Math.floor(secondsPassed % hour / minute)) + "m ";

    setTimeout(showPassed, 20000);
}
function showChristmas() {

    const secondsPassed = getCurrentTimeInSeconds() - christmasTimeInSeconds;

    document.getElementById("display-christmas").textContent = "🎄 " +
        Math.floor(secondsPassed / day) + "d " +
        Math.abs(Math.floor(secondsPassed % day / hour)) + "h " +
        Math.abs(Math.floor(secondsPassed % hour / minute)) + "m ";

    setTimeout(showPassed, 20000);
}
function showBirthDay() {
    const secondsPassed = getCurrentTimeInSeconds() - birthdayTimeInSeconds;

    document.getElementById("display-birthday").textContent = "🎂 " +
        Math.floor(secondsPassed / day) + "d " +
        Math.abs(Math.floor(secondsPassed % day / hour)) + "h " +
        Math.abs(Math.floor(secondsPassed % hour / minute)) + "m ";

    setTimeout(showPassed, 20000);
}

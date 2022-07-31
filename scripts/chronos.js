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
    const str = getStringBySecondsPassed(getCurrentTimeInSeconds() - checkedTimeInSeconds);
    document.getElementById("display-last-check").innerText = "🚭 " + str.padStart(14, ' ');
}

function showHalloween() {
    const str = getStringBySecondsPassed(getCurrentTimeInSeconds() - halloweenTimeInSeconds);
    document.getElementById("display-halloween").innerText = "🎃 " + str.padStart(14, ' ');
}

function showChristmas() {
    const str = getStringBySecondsPassed(getCurrentTimeInSeconds() - christmasTimeInSeconds);
    document.getElementById("display-christmas").innerText = "🎄 " + str.padStart(14, ' ');
}

function showBirthDay() {
    const str = getStringBySecondsPassed(getCurrentTimeInSeconds() - birthdayTimeInSeconds);
    document.getElementById("display-birthday").innerText = "🎂 " + str.padStart(14, ' ');
}

function getStringBySecondsPassed(secondsPassed){
    return Math.floor(secondsPassed / day) + "d " +
        Math.abs(Math.floor(secondsPassed % day / hour)) + "h " +
        Math.abs(Math.floor(secondsPassed % hour / minute)) + "m";
}
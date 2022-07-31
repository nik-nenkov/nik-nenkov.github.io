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

function getStringBySecondsPassed(secondsPassed) {
    const days = Math.floor(secondsPassed / day) + "d";
    const hours = Math.abs(Math.floor(secondsPassed % day / hour)) + "h";
    const minutes = Math.abs(Math.floor(secondsPassed % hour / minute)) + "m";
    return days.padStart(6, ' ') + hours.padStart(4, ' ') + minutes.padStart(4, ' ')
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

function showTimers() {
    timers.forEach(value => {
        document.getElementById(value.elementId)
            .innerText = value.elementIcon +
            getStringBySecondsPassed(getCurrentTimeInSeconds() - value.elementTime);
    });
}

const timers = [{
    elementId: "display-last-check", elementIcon: "🚭", elementTime: checkedTimeInSeconds
}, {
    elementId: "display-halloween", elementIcon: "🎃", elementTime: halloweenTimeInSeconds
}, {
    elementId: "display-christmas", elementIcon: "🎄", elementTime: christmasTimeInSeconds
}, {
    elementId: "display-birthday", elementIcon: "🎂", elementTime: birthdayTimeInSeconds
}]
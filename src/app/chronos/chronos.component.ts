import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronos',
  templateUrl: './chronos.component.html',
  styleUrls: ['./chronos.component.sass']
})
export class ChronosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showDate()
    this.showTime()
    this.showTimers()
  }

  minute = 60;
  hour = this.minute * 60;
  day = this.hour * 24;
  space = ' ';

  timers = [{
    elementId: "display-last-check", elementIcon: "🚭", elementTime: 1659348000
  }, {
    elementId: "display-halloween", elementIcon: "🎃", elementTime: 1667167200
  }, {
    elementId: "display-christmas", elementIcon: "🎄", elementTime: 1671832800
  }, {
    elementId: "display-birthday", elementIcon: "🎂", elementTime: 1689109200
  }]

  getCurrentTimeInSeconds = () => {
    return Math.floor(new Date().getTime() / 1000);
  }

  getStringBySecondsPassed = (secondsPassed: number) => {
    const days = Math.floor(secondsPassed / this.day) + "d";
    const hours = Math.abs(Math.floor(secondsPassed % this.day / this.hour)) + "h";
    const minutes = Math.abs(Math.floor(secondsPassed % this.hour / this.minute)) + "m";
    return days.padStart(6, this.space) + hours.padStart(4, this.space) + minutes.padStart(4, this.space)
  }

  showDate = () => {

    let t = document.getElementById("display-date-now");
    if(t)
    t.textContent = new Date().toLocaleString('default', {
      weekday: 'short', month: 'short', day: 'numeric', year: "numeric"
    }).toUpperCase();

    setTimeout(this.showDate, 1000);
  }

  showTime = () => {
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hours = (h < 10) ? "0" + h : h;
    let minutes = (m < 10) ? "0" + m : m;
    let seconds = (s < 10) ? "0" + s : s;

    let t = document.getElementById("display-time-now");
    if(t)
      t.textContent = hours + ":" + minutes + ":" + seconds + " ";

    setTimeout(this.showTime, 1000);
  }

  showTimers = () => {
    this.timers.forEach(value => {
      let t =document.getElementById(value.elementId)
        if(t) t.innerText = value.elementIcon + this.getStringBySecondsPassed(this.getCurrentTimeInSeconds() - value.elementTime);
    });
  }

}

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, cb) {
    if(!(time && cb)) {
      throw new Error('Отсутствуют обязательные аргументы');
     }
    
    if(this.alarmCollection.includes((item) => item.time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      callback: cb,
      time: time,
      canCall: true
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, 5);
  }

  start() {
    if(this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((item) => {
        if((item.time === this.getCurrentFormattedTime()) && item.canCall === true) {
          item.canCall = false;
          item.callback();
        }
      })
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((item) => {
      item.canCall = true
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(beginTime, cb) {
    if(!(beginTime && cb)) {
      throw new Error('Отсутствуют обязательные аргументы');
     }

    
    if(this.alarmCollection.find((item) => this.alarmCollection.item.time === beginTime)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      callback: cb,
      time: beginTime,
      canCall: true
    });
  }

  removeClock(time) {
    return this.alarmCollection.filter((item) => this.alarmCollection.item.time !== time);
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, 5);
  }

  start() {
    if(this.intervalId) return;

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((item) => {
        if(this.alarmCollection.item.time === getCurrentFormattedTime() && this.alarmCollection.item.canCall) {
          this.alarmCollection.item.canCall = false;
          this.alarmCollection.item.callback();
        }
      })
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((item) => this.alarmCollection.item.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

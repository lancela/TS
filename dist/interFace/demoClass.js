"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员
class Clock {
    currentTime;
    setTime(d) {
        this.currentTime = d;
    }
    constructor(h, m) {
        this.currentTime = new Date();
        this.currentTime.setHours(h);
        this.currentTime.setMinutes(m);
    }
}
var clock = new Clock(12, 17);
console.log(clock);

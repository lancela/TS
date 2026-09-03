"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clock {
    currentTime;
    constructor(h, m) {
        this.currentTime = new Date();
        this.currentTime.setHours(h);
        this.currentTime.setMinutes(m);
    }
}
var clock = new Clock(12, 17);
console.log(clock);

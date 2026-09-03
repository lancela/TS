// 接口描述类
interface ClockInterface {
  currentTime: Date; // TypeScript也能够用它来明确的强制一个类去符合某种契约(属性)
  setTime(d: Date); // 在接口中描述一个方法，在类里实现它
}
// 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员
class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {
    this.currentTime = new Date();
    this.currentTime.setHours(h);
    this.currentTime.setMinutes(m);
  }
}

var clock = new Clock(12, 17);
console.log(clock);

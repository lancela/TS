//  会报错的代码
// interface ClockConstructor {
//   new (hour: number, minute: number);
// }

// class Clock implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) {
//     this.currentTime = new Date();
//     this.currentTime.setHours(h);
//     this.currentTime.setMinutes(m);
//   }
// }
// let a = new Clock(12, 17);
// console.log(a);

// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface; // 构造签名，返回实例类型
// }
// interface ClockInterface {
//     tick(); // 实例方法
// }

// function createClock(
//     ctor: ClockConstructor,  // 参数要求是一个满足构造签名的类
//     hour: number,
//     minute: number
// ): ClockInterface {
//     return new ctor(hour, minute); // 调用构造函数创建实例
// }

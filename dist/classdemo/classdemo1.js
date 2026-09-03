"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Greeter {
    greeting; // 属性
    constructor(message) {
        // 构造函数
        this.greeting = message;
    }
    greet() {
        //  方法
        return 'Hello, ' + this.greeting;
    }
}
let greeter = new Greeter('world'); // 用new关键字（构造函数）创建类的实例，创建一个 Greeter类型的新对象，并执行构造函数初始化它
console.log(greeter);
console.log(greeter.greet);

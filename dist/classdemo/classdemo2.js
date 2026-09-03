"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Greeter {
    greeting;
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
let greeter; // Greeter类的实例 的类型是 Greeter
greeter = new Greeter('world');
console.log(greeter.greet());

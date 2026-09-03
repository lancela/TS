"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(theName) {
        this.name = theName;
    }
    // 基类 、超类
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    name2;
    // 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数
    constructor(name1) {
        // 在构造函数里访问 this的属性之前，必须先调用 super()
        super(name1);
        this.name2 = name1;
    }
    // 派生类 子类
    move(distanceInMeters = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    // 派生类 子类
    constructor(name2) {
        super(name2);
    }
    move(distanceInMeters = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}
let sam = new Snake('Sammy the Python');
let tom = new Horse('Tommy the Palomino');
console.log(sam);
console.log(tom);
sam.move();
tom.move(34);

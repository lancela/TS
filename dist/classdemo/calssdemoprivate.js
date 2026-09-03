"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(theName) {
        this.name = theName;
    }
    getName() {
        return this.name; // 现在 name 被读取了
    }
}
let cat = new Animal('Cat');
console.log(cat.getName()); // 输出: Cat
console.log(cat); // 输出: Cat
// console.log(cat.name); // 错误: 'name' 是私有的.
// new Animal('Cat').name; // 错误: 'name' 是私有的.
// Property 'name' is private and only accessible within class 'Animal'.
// 属性“name”是私有的，只能在类“Animal”内访问。

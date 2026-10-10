"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//使用number类型来定义函数：
function identity(arg) {
    return arg;
}
const result = identity(5);
console.log(result);
//使用any类型来定义函数：
function identity2(arg) {
    return arg;
}
const result2 = identity2(5);
console.log(result2);

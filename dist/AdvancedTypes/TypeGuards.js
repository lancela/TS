"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleUser(user) {
    if ('permissions' in user) {
        console.log(user.permissions);
    }
    else {
        console.log(user.visitCount);
    }
}
// pet is Fish 如果这个函数返回 true，就把 pet 当成 Fish 处理。
// pet is Fish 不是普通的布尔返回类型，而是类型谓词。判断逻辑必须与真实数据相符，否则只是让编译器相信你，并不能保证运行时安全。
function isFish(pet) {
    return 'swim' in pet;
}
function move(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
// 可以为 null 的类型：处理空值问题
let username = null;
username = '张三';
username = null;
// 错误：username 没有声明允许 undefined
username = undefined; // Type 'undefined' is not assignable to type 'string | null'.

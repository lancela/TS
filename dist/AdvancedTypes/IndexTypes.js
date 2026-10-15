"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 此时 UserKeys 相当于
// type UserKeys = 'name' | 'age' | 'email';
// 编写安全的对象取值函数
function getProperty(obj, key) {
    return obj[key];
}
const user = {
    name: '张三',
    age: 29,
    email: 'zhangsan@example.com',
};
const name = getProperty(user, 'name');
const age = getProperty(user, 'age');
const email = getProperty(user, 'email');
getProperty(user, 'email'); //TypeScript 就会报错，因为 email 不属于这个对象的已知属性。

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myArray;
myArray = ['Bob', 'Fred'];
// 启用了 TypeScript 的 noUncheckedIndexedAccess 编译选项
// 所有索引访问（包括数组、对象、甚至带有索引签名的接口）都会在结果类型中自动追加 undefined，即使你显式声明了索引签名只返回 string
// let myStr: string | undefined = myArray[0]; // 修改变量类型为 string | undefined（如果允许缺失）
// let myStr: string = myArray[0]!; // 使用非空断言（!）—— 确信索引一定存在时
// let myStr: string = myArray[0] as string; // 使用类型断言（as）—— 告诉 TypeScript 你确信索引一定存在时
let myStr; // 显式检查 undefined（最安全）
if (myArray[0] !== undefined) {
    myStr = myArray[0]; // 此时类型收窄为 string
}
else {
    // 处理越界情况
    myStr = 'default';
}
console.log(myStr);
// 使用示例
let obj = {
    name: 'Alice',
    age: '25', // 值必须是 string，因为索引签名要求 string
};
console.log(obj);
// 同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
// 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。
class Animal {
    name;
}
class Dog extends Animal {
    breed;
}
let NotOkay = {
    0: { name: 'Buddy', breed: 'Golden Retriever' }, // 数字索引返回 Dog
    1: { name: 'Max', breed: 'Labrador' }, // 数字索引返回 Dog
};
let NotOkay2 = {
    0: { name: 'Buddy', breed: 'Golden Retriever' },
    1: { name: 'Max', breed: 'Labrador' },
}; // 数字索引返回 Dog
let NotOkay3 = {
    0: { name: 'Buddy', breed: 'Golden Retriever' },
    1: { name: 'Max', breed: 'Labrador' },
};
console.log(NotOkay);
console.log(NotOkay2);
console.log(NotOkay3);
let NumberDictionary = {
    length: 10,
    name: 'MyDictionary', // 错误，`name`的类型与索引类型返回值的类型不匹配
};
console.log(NumberDictionary);
let myArray2 = ['Alice', 'Bob'];
myArray2[2] = 'Mallory'; // error!

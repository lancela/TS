"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
// let result1 = buildName('Bob'); // error, An argument for 'lastName' was not provided.
// let result2 = buildName('Bob', 'Adams', 'Sr.'); // error, too many parameters
let result3 = buildName('Bob', 'Adams'); // ah, just right
// console.log(result1);
// console.log(result2);
console.log(result3);
// 函数的完整类型
let myAdd = function (x, y) {
    return x + y;
};
myAdd(1, 3);

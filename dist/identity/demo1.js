"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identity(arg) {
    // console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
let result = identity('myString'); // type of output will be 'string'
let result2 = identity('myString'); // type of output will be 'string'
console.log(result);
console.log(result2);

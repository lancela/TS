"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fn1 = (a) => {
    console.log(a);
};
let fn2 = (a, b) => {
    console.log(a, b);
};
// fn1 = fn2; // 报错 // Type 'TwoParams' is not assignable to type 'OneParam'. Target signature provides too few arguments. Expected 2 or more, but got 1.
fn2 = fn1; // 在 strictFunctionTypes 下可以

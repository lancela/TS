"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 1001;
id = 'CUS-1001';
// 错误：布尔值不在允许范围内
// id = true; // Type 'boolean' is not assignable(可转让的) to type 'CustomerId'.
function printId(id) {
    // 用类型保护解决这个问题
    //   console.log(id.toUpperCase());  // Property 'toUpperCase' does not exist on type 'number'.
    if (typeof id === 'number') {
        console.log(id.toFixed(2));
    }
    else {
        console.log(id.toUpperCase());
    }
}
printId(1001); // "1001.00"
printId('cus-1001'); // "CUS-1001"

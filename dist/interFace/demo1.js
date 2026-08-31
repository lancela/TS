"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
// let myObj: { label: string } = { size: 10, label: 'Size 10 Object' };
let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
// printLabel({ size: 10, label: 'Size 10 Object' });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let passcode = 'secret passcode';
class Employee {
    _fullName;
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode == 'secret passcode') {
            this._fullName = newName;
        }
        else {
            console.log('Error: Unauthorized update of employee!');
        }
    }
}
let employee = new Employee();
// employee.fullName = 'Bob Smith';
employee.fullName = '';
if (employee.fullName) {
    console.log(employee.fullName);
}

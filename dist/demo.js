"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    firstName;
    middleInitial;
    lastName;
    fullName;
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
let user = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greeter(user);

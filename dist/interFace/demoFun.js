"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    console.log(result);
    console.log(result > -1);
    return result > -1;
};
mySearch('Hello, world!', 'world');

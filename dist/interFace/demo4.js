"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createSquare(config) {
    return {
        color: config.color || 'white',
        area: config.width ? config.width * config.width : 100,
    };
}
let mySquare = createSquare({ width: 100, color: 'red' });
console.log(mySquare);

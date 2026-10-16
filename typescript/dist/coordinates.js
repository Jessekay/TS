"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCoordinates() {
    return [23, 18];
}
const [s, y] = getCoordinates();
console.log([s, y]);
function person([username, age]) {
    console.log(`${username} is ${age} old`);
}
console.log(person(["Jonathan", 23]));
//# sourceMappingURL=coordinates.js.map
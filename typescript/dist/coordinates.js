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
// labeling nested loop
outerLoop: for (let i = 0; i < 3; i++) {
    innerLoop: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
const bottle = [8000, 9800];
console.log(bottle);
var FruitPrices;
(function (FruitPrices) {
    FruitPrices[FruitPrices["applePrice"] = 10] = "applePrice";
    FruitPrices["peachPrice"] = "Jesse";
    FruitPrices[FruitPrices["price"] = 1] = "price";
})(FruitPrices || (FruitPrices = {}));
const fruitOne = FruitPrices.applePrice;
const fruitTwo = FruitPrices.peachPrice;
const fruitThree = FruitPrices.price;
console.log(fruitOne, fruitTwo, fruitThree);
//# sourceMappingURL=coordinates.js.map
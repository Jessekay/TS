"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let strictValue = "Hello";
strictValue = 50;
if (typeof strictValue === "number")
    console.log(strictValue + 1);
function handleStatus(status) {
    if (status === "success") {
        console.log("All good!");
    }
    else if (status === "error") {
        console.log("Something is not right!");
    }
    else {
        const neverValue = status;
    }
}
handleStatus("error");
let numbers = [2, 3, 53, 5, 7, 5];
numbers.push(9);
let person = ["Jesse", 25];
person = ["bob", 34];
var EnumStatus;
(function (EnumStatus) {
    EnumStatus["Success"] = "SUCCESS";
    EnumStatus["Failure"] = "FAILED";
})(EnumStatus || (EnumStatus = {}));
let currentStatus = EnumStatus.Success;
console.log(currentStatus);
//# sourceMappingURL=variable.js.map
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
//# sourceMappingURL=variable.js.map
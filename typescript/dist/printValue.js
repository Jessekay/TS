"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printValue(value) {
    if (typeof value === "string") {
        return `String: ${value}`;
    }
    else if (typeof value === "number") {
        return `Number: ${value}`;
    }
    else if (typeof value === "boolean") {
        return `Boolean: ${value} `;
    }
    return value;
}
//# sourceMappingURL=printValue.js.map
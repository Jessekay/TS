"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students = [
    { id: 1, name: "Amina", scores: [90, 85, 77] },
    { id: 2, name: "Kofi", scores: [60, 70, 65] },
    { id: 3, name: "Zawadi", scores: [] },
    { id: 4, name: "Jean", scores: [100, 95] },
];
const levels = ["fail", "pass", "merit", "distinction"];
function average(scores) {
    if (scores.length === 0)
        return 0;
    const total = scores.reduce((sum, n) => sum + n, 0);
    return total / scores.length;
}
function findStudent(students, id) {
    return students.find(s => s.id === id);
}
const found = findStudent(students, 1);
if (found) {
    console.log(found.name);
}
else {
    console.log('Not found');
}
console.log(findStudent(students, 9));
//# sourceMappingURL=grades.js.map
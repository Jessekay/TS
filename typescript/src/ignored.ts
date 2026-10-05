type Callback = () => void;

const cb: Callback = () => 42;

const nums = [1,3,4,4]
const out: number[] = [];
nums.forEach(n => out.push(n));

console.log(out);

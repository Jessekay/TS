function getCoordinates(): [number, number] {
  return [23, 18];
}

const [s, y] = getCoordinates();
console.log([s, y]);

function person([username, age]:[string, number]) {
  console.log(`${username} is ${age} old`);
}

console.log(person(["Jonathan", 23]));
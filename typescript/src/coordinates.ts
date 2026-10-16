function getCoordinates(): [number, number] {
  return [23, 18];
}

const [s, y] = getCoordinates();
console.log([s, y]);

function person([username, age]:[string, number]) {
  console.log(`${username} is ${age} old`);
}

console.log(person(["Jonathan", 23]));

// labeling nested loop

outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for(let j = 0; j < 3; j++){
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
// labeling tuple

type details = [number, number];

type price = [discount: number, actualPrice: number];

const bottle: price = [8000, 9800];

console.log(bottle);


let greeter: (name: string) => void;

greeter = function(firstName: string){
  console.log(`Hello ${firstName}`)
};

type describableFunction = {
  name: string,
  (someArg: number): boolean
}

function doSomething(fn:describableFunction) {
  console.log();
  
}

type Multiple = {
  (x: number, y: number): number
}

let multiplyNumber = (a:number, b:number) => {
  return a*b;
}

console.log(multiplyNumber(10, 5));

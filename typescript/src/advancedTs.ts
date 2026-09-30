function greet(name: string, age?:number): string {
  return `Hello ${name}! you are ${age? age:'unknown'} years old`
}

console.log(greet("Jesse", 90));

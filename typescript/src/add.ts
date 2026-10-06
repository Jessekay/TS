function add(a: any, b: any) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if(typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("Invalid arguments");
}

console.log(add("Rc", "Rc"));
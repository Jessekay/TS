function processValue( value: string | null): void {
  if (value !== null) {
    console.log(value.toUpperCase());
  } else {
    console.log("Value is null");
    
  }
}

console.log(processValue('hello'));

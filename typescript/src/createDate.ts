function createDate(Timestamp: number): Date;
function createDate(year: number, month: number, day: number): Date;
function createDate(a: number, b?: number, c?: number): Date {
  if (b !== "undefined" && c !== "undefined") {
    return new Date(a, b, c);
  }
  return new Date(a);
}

createDate(170000000)
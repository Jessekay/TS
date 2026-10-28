function printValue(value:unknown): unknown {
  if (typeof value === "string") {
    return `String: ${value}`
  } else if (typeof value === "number") {
    return `Number: ${value}`
  } else if (typeof value === "boolean") {
    return `Boolean: ${value} `;
  }
  return value
}
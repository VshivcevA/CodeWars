function doubleChar(str) {
  return str
    .split("")
    .map((i) => i + i)
    .join("");
}

console.log(doubleChar("String"));

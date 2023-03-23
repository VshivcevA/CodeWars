function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0])
    .join(".")
    .toUpperCase();
}

console.log(abbrevName("Sam Harris"));

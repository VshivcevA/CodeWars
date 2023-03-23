function fakeBin(x) {
  return Array.from("" + x)
    .map((i) => (i >= 5 ? 1 : 0))
    .join("");
}

console.log(fakeBin(45385593107843568));
//45385593107843568
//01011110001100111

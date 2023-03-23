function digitize(n) {
  return Array.from('' + n).reverse().map(Number)
}
console.log(digitize(321))

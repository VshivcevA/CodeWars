function findOdd(A) {
  // return [...new Set(A)];
  return A.map((i, j) => {
    let current = 0;
    A.map((n, m) => {
      if (i === m) {
        console.log(i);
      }
      return n;
    });
    return n;
  });
}
console.log(findOdd([0]), 0);
console.log(findOdd([1, 1, 2]), 2);
// console.log(findOdd([0, 1, 0, 1, 0]), 0);
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4);

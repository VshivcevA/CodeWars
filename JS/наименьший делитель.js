const smallestDivisor = (num) => {
  // if (num === 1) return 1;
  // if (num % 2 === 0) return 2;
  // function iter(i, acc) {
  //   if (i % acc === 0) return acc;
  //   return iter(i, acc + 1);
  // }
  ///////
  // return iter(num, 3);
  // function iter(acc) {
  //   if (acc > num / 2) return num;
  //   if (num % acc === 0) return acc;
  //   return iter(acc + 1);
  // }
  // return iter(2);
  ////////
  if (num < 1) return NaN;
  if (num === 1) return num;
  let x = 2;
  while (num % x !== 0) x++;
  return x;
};
console.log(smallestDivisor(0), "= NaN");
console.log(smallestDivisor(1), "= 1");
console.log(smallestDivisor(-2), "= NaN");
console.log(smallestDivisor(4), "= 2");
console.log(smallestDivisor(15), "= 3");
console.log(smallestDivisor(17), "= 17");

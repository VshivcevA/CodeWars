function map(
  numbers: number[],
  // callback: (n: number, index: number) => number
  callback: (n: number, index?: number) => number
): number[] {
  return numbers.map(callback);
}

//index?: number в ts не всегда хорошо

// console.log(map([2, 3, 9], (n, index) => index + 1));
console.log(map([2, 3, 9], (n) => n + 1));

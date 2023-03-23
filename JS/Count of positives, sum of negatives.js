function countPositivesSumNegatives(input) {
  let result = [];
  if (input === null || input === undefined) {
    return result;
  } else if (input.length > 0) {
    result[0] = input.filter((i) => i > 0).length;
    result[1] = input.filter((i) => i <= 0).reduce((acc, i) => acc + i);
  }

  return result;
}
let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
let testZero = [];
let testUndefined = undefined;
let testNull = null;
console.log(countPositivesSumNegatives(testZero));
console.log(countPositivesSumNegatives(testUndefined));
console.log(countPositivesSumNegatives(testNull));
console.log(countPositivesSumNegatives(testData));

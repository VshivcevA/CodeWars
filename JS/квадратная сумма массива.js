function squareSum(numbers) {
  return numbers.length
    ? numbers.map((i) => Math.pow(i, 2)).reduce((sum, i) => sum + i)
    : 0;
}

console.log(squareSum([1, 2]));

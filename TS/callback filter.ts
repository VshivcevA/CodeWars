function filter(numbers: number[], callback: (n: number) => boolean) {
  return numbers.filter(callback);
}

console.log(filter([1, -5, 2, 3, 4, 133], (n) => n > 3));

function sumMix(x) {
  return x.map((i) => Number(i)).reduce((acc, i) => acc + i);
}

console.log(sumMix([9, 3, "7", "3"])); //22

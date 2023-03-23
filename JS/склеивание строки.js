function countSheep(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result = result.concat(i + " sheep...");
  }
  return result;
}
console.log(countSheep(5));

let res = 0;
function addDigits(num) {
  if (num < 10) return num;
  let str = num.toString();
  if (str.length > 1) {
    res = 0;
    for (let i = 0; i < str.length; i++) {
      res += Number(str[i]);
    }
    addDigits(res);
  }
  return res;
}

console.assert(addDigits(38) === 2);
console.assert(addDigits(5) === 5);
console.assert(addDigits(1259) === 8);

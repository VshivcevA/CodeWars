function accum(s) {
  let arr = [];
  let str;
  s.toLowerCase()
    .split("")
    .map((i, j) => {
      str = i.repeat(j + 1).split("");
      str.map((i) => {
        str[0] = str[0].toUpperCase();
      });
      arr[j] = str.join("");
    });
  return arr.join("-");
}

console.log(accum("aBcd"));

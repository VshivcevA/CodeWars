function longest(s1, s2) {
  // return (s1 + s2)
  //   .split("")
  //   .filter((a, i, w) => {
  //     if (w.indexOf(a) === i) return a;
  //   })
  //   .sort()
  //   .join("");
  return [...new Set(s1 + s2)].sort().join("");
}
let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
console.log(longest(a, b));

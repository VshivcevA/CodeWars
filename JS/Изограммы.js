function isIsogram(str) {
  // return (
  //   str
  //     .toLowerCase()
  //     .split("")
  //     .filter((i, index, arr) => arr.indexOf(i) !== index).length === 0
  // );
  return new Set(str.toUpperCase()).size === str.length;
}

console.log(isIsogram("abcdfg"));
console.log(isIsogram("abBbbc"));

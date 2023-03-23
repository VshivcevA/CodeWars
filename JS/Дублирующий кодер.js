function duplicateEncode(word) {
  let a = word.split("");
  // for (i = 0; i < a.length; i++) {
  //   for (j = i + 1; j < a.length; j++) {
  //     if (a[i] === a[j]) return a[i];
  //   }
  // }

  // for (let i = 0; i < a.length; i++) {
  //   for (let j = i + 1; j < a.length; j++) {
  //     if (a[i] === a[j]) {
  //       return (a[i] = ")");
  //     } else if (a[i] !== a[j]) {
  //       return (a[i] = "(");
  //     }
  //   }
  // }

  // return word.split("").map((i, index, arr) => {
  //   if (word.indexOf(i) === index) {
  //     return "(";
  //   } else {
  //     return ")";
  //   }
  // });
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) === w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");

function getCount(str) {
  // let count = 0;
  // let vowel = ["a", "e", "i", "o", "u"];
  // str.split("").map((i) =>
  //   vowel.map((j) => {
  //     if (i === j) count++;
  //   })
  // );
  // return count;
  return str.match(/[aeiou]/g).length;
}

console.log(getCount("abracadabra")); //5
console.log(getCount("pear tree")); //4

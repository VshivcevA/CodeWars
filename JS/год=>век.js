function century(year) {
  // let arr = Array.from("" + year).map((i) => +i);
  // return +arr.slice(-arr.length + 3, arr.length).join("") % 100 > 0
  //   ? +arr.slice(0, arr.length - 2).join("") + 1
  //   : +arr.slice(0, arr.length - 2).join("");
  return Math.ceil(year / 100);
}

console.log(century(47), 1); //1
console.log(century(100), 1); //1
console.log(century(147), 2); //2
console.log(century(1700), 17); //18
console.log(century(1703), 18); //18
console.log(century(524891), 5249); //5249

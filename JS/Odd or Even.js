function oddOrEven(array) {
  // let sum = 0;
  // array.map((i) => {
  //   sum = sum + i;
  // });

  // if (sum % 2) {
  //   return "odd";
  // } else {
  //   return "even";
  // }

  // return sum % 2 ? "odd" : "even";
  return array.reduce((acc, i) => acc + i, 0) % 2 ? "odd" : "even";
}

function XO(str) {
  let result = {
    x: 0,
    o: 0,
  };
  str
    .toLowerCase()
    .split("")
    .map((i) => {
      switch (i) {
        case "x":
          result.x++;
          break;
        case "o":
          result.o++;
          break;
        default:
          return true;
      }
      // if (i === "x") {
      //   result.x++;
      // }
      // if (i === "y") {
      //   result.y++;
      // }
      // if (result.x === 0 && result.y === 0) {
      //   return true;
      // }
    });
  return result.x === result.o;
}

console.log(XO("xo"));

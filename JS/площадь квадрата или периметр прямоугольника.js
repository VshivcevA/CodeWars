const areaOrPerimeter = function (l, w) {
  // if (l === w) {
  //   return Math.pow(l, 2);
  // }
  // if (l !== w) {
  //   return (l + w) * 2;
  // }
  return l === w ? Math.pow(l, 2) : (l + w) * 2;
};
console.log(areaOrPerimeter(3, 3));

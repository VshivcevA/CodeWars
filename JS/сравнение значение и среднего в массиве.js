function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, i) => acc + i) / classPoints.length < yourPoints
  );
}

// console.log(betterThanAverage([1, 2, 3], 3));

function findAverage(array) {
  // if (array.length === 0) {
  //   return 0;
  // } else {
  //   return array.reduce((acc, i) => acc + i) / array.length;
  // }
  return array.length === 0
    ? 0
    : array.reduce((acc, i) => acc + i) / array.length;
}

console.log(findAverage([]));

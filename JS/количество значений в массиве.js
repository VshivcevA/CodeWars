const array = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
]; //17
function countSheeps(arrayOfSheep) {
  // let sheepCount = 0;
  // arrayOfSheep.map((i) => {
  //   if (i === true) {
  //     sheepCount++;
  //   }
  // });
  // return sheepCount;
  return arrayOfSheep.filter(Boolean).length;
}

console.log(countSheeps(array));

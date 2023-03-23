const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // let distanceOnTank = fuelLeft * mpg;
  // if (distanceOnTank >= distanceToPump) {
  //   return true;
  // } else {
  //   return false;
  // }
  return fuelLeft * mpg >= distanceToPump;
};
console.log(zeroFuel(100, 50, 1));

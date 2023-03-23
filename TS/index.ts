function bmi(weight: number, height: number): string {
  console.log(weight, height);
  let index = weight / height ** 2;
  console.log(index);
  if (index <= 18.5) return "Underweight";
  if (index <= 25) return "Normal";
  if (index <= 30.0) return "Overweight";
  if (index > 30) return "Obese";
  throw new Error("The method or operation is not implemented.");
}

console.log(bmi(70, 180));

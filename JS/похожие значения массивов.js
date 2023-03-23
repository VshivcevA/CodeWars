// Найти неповторяющиеся числа в массиве
// const arr = [2, 3, 1, 4, 5, 9, 9, 1, 2, 3, 4, 6, 4, 10];
const array = [2, 2, 3, 1, 4, 5, 9, 9, 1, 2, 3, 4, 6, 4, 10];
function originalNumbers(array) {
  let result = array.filter((number, index, newArray) => {
    return newArray.indexOf(number) === index;
  });
  console.log(result);
}

originalNumbers(array);

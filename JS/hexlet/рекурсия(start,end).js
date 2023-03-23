const sequenceSum = (start, end) => {
  if (start > end) return NaN;
  if (start === end) return start;
  return end + sequenceSum(start, end - 1);
};
console.log(sequenceSum(4, 10), 49);

function quarterOf(month) {
  // if (month <= 3) return 1;
  // if (month <= 6) return 2;
  // if (month <= 9) return 3;
  // if (month <= 12) return 4;
  return Math.ceil(month / 3);
}

console.log(quarterOf(9));

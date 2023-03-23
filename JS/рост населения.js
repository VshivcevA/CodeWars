function nbYear(p0, percent, aug, p) {
  let years;
  let lastYear = p0;
  for (years = 0; lastYear < p; years++) {
    lastYear = Math.floor(lastYear + (lastYear * percent) / 100 + aug);
  }
  return years;
}

console.log(nbYear(1000, 2, 50, 1214));

function past(h, m, s) {
  let result = 0;
  let base = {
    s: 1000,
  };
  base.m = 60 * base.s;
  base.h = 60 * base.m;
  result = h * base.h + m * base.m + s * base.s;
  console.log(result);

  return result;
}
past(1, 0, 0);

function descendingOrder(n) {
  return Number(
    Array.from("" + n)
      .map(Number)
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(descendingOrder(11));

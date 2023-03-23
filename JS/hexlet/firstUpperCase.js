function firstUpperCase(str) {
  return str
    .split(" ")
    .map((i) => {
      if (i.length)
        return i[0].toUpperCase() + i.split("").splice(1, i.length).join("");
    })
    .join(" ");
}
console.log(
  firstUpperCase("hello, world!") // Hello, World!
);
console.log(
  firstUpperCase("  hello,   world!") // Hello, World!
);

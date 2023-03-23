function isPlainObject(value: unknown) {
  return value instanceof Object && !Array.isArray(value);
}

console.log(isPlainObject(1));
console.log(isPlainObject([1, 8]));
console.log(isPlainObject({ name: "code-basics" }));
console.log(isPlainObject("str"));
console.log(isPlainObject({}));

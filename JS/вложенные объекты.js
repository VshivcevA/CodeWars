// реализовать функцию
// namespace(‘a.b.c.d.e’) => {‘a’: {‘b’: {‘c’: {‘d’: {‘e’: {}}}}}
const string = "a.b.c.d.e";
let test = { a: { b: { c: { d: { e: {} } } } } };
function namespace(string) {
  console.clear();
  let object = {};
  let currentObject = {};
  string
    .split(".")
    .reverse()
    .forEach((i) => {
      object = { [i]: currentObject };
      currentObject = object;
    });
  return console.log(object, test);
}
namespace(string);

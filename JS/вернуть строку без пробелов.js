function noSpace(x) {
  // return x.split(" ").join("");
  return x.replace(/ /g, "");
}

console.log(noSpace("8j 8   mBliB8g  imjB8B8  jl  B"));

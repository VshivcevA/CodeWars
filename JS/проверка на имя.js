function areYouPlayingBanjo(name) {
  // if (name[0].toLowerCase() === "r") {
  //   name = name + " plays banjo";
  // } else {
  //   name = name + " does not play banjo";
  // }
  // return name;

  return name[0].toLowerCase() === "r"
    ? name.concat(" plays banjo")
    : name.concat(" does not play banjo");
}

console.log(areYouPlayingBanjo("Adam"));

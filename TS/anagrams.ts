function filterAnagrams(str: string, arr: string[]) {
  const base = str.split("").sort().join("");
  return arr.filter((i) => base === i.split("").sort().join(""));
}
console.log(
  filterAnagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])
);

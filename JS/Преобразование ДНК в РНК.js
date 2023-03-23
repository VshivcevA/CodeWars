// create a function which returns an RNA sequence from the given DNA sequence
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

console.log(DNAtoRNA("TTTT"));

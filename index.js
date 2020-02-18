function makeInt(string) {
  parseInt('7', 10);
  return makeInt(string);
}

function preserveDecimal(string) {
  parseFloat('9.183');
  return preserveDecimal(string);
}

makeInt(string);
preserveDecimal(string);
/* exported union */
function union(first, second) {
  let output = first.concat(second);
  output = [...new Set(output)];
  return output;
}

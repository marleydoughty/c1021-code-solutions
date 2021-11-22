/* exported difference */
function difference(first, second) {
  return first.filter(x => !second.includes(x)).concat(second.filter(x => !first.includes(x)));
}

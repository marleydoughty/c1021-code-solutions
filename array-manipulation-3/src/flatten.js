/* exported flatten */
function flatten(array) {
  var flatArray = [].concat.apply([], array);
  return flatArray;
}

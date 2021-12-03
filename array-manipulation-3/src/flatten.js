/* exported flatten */
function flatten(array) {
  var arr = [];
  if (array.length === 0) {
    return arr;
  }
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      arr.push(...array[i]);
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
}

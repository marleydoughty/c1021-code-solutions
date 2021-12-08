/* exported zip */
function zip(first, second) {
  var arrayLength = Math.min(first.length, second.length);
  var newArray = [];
  for (var i = 0; i < arrayLength; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}

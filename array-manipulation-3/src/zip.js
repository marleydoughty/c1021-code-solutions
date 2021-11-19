/* exported zip */
function zip(first, second) {
  var newArray = first.map(function (e, i) {
    return [e, second[i]];
  });
  return newArray;
}

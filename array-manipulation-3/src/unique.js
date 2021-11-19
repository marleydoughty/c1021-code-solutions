/* exported unique */
function unique(array) {
  var newArray = array.filter(function (item, i, array) {
    return array.indexOf(item) === i;
  });
  return newArray;
}

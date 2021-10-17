/* exported compact */
function compact(array) {
  var values = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      values.push(array[i]);
    }
  } return values;

}

/* exported compact */
/* create a space to store values for new array;
look at each value in the array starting from the beginning;
determine if the value in teh array is truthy;
if so, then add value of the index to the new array;
return teh value of the new array; */
function compact(array) {
  var values = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      values.push(array[i]);
    }
  } return values;

}

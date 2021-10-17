/* exported reverse */
// create a space for new array to go to;
// look at each index starting at the last index and go down from there;
// add value of the array at index [i] into the empty array;
// return the value of the array;
function reverse(array) {
  var revArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    revArr.push(array[i]);
  } return revArr;
}

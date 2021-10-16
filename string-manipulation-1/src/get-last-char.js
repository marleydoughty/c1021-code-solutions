/* exported getLastChar */

// create storage for output (empty string);
// look at each character in string starting with the first index;
// once reached the last index, assign that value to the output;
// return value of the output;
function getLastChar(string) {
  var output = '';
  // for (var i = 0; i < string.length; i++) {
  output = string[string.length - 1];

  return output;
}

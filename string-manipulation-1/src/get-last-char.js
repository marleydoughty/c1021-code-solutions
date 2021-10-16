/* exported getLastChar */

// create storage for output (empty string);
// once reached the last index, assign that value to the output;
// return value of the output;
function getLastChar(string) {
  var output = '';
  output = string[string.length - 1];
  return output;
}

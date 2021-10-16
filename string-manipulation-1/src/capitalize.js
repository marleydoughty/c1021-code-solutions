/* exported capitalize */
// create a storage space for the output(empty string);
// make all characters lowercase;
// split the first character from the rest;
// make first character uppercase;
// put letters back together;
// return value to the output;
function capitalize(word) {
  var output = '';
  word = word.toLowerCase();
  word.slice(0, 1);
  output = word.slice(0, 1).toUpperCase() + word.slice(1);
  return output;
}

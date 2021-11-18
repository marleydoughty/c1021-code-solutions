/* exported reverseWords */
/**
 * split up at the spaces
 * look at each character in each word starting at the last
 * add the characters to a new array
 * return the output
 */
function reverseWords(string) {
  var output = '';
  var newStr = string.split(' ');
  for (var i = newStr[newStr.length - 1]; i > 0; i--) {
    output += (newStr[i]);
  }
  return output;
}

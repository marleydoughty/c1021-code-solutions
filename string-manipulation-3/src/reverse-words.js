/* exported reverseWords */
/**
 * split up at the spaces
 * look at each character in each word starting at the last
 * add the characters to a new array
 * return the output
 */
function reverseWords(string) {
  var output = '';
  var currentWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord = string[i] + currentWord;
    } else {
      output += currentWord + ' ';
      currentWord = '';
      output += currentWord;

    }
  }
  return output;
}

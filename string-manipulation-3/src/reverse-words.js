/* exported reverseWords */
/**
 * split up at the spaces
 * look at each character in each word starting at the last
 * add the characters to a new array
 * return the output
 */
function reverseWords(string) {
  return string.split('').reverse().join('').split(' ').reverse().join(' ');
}

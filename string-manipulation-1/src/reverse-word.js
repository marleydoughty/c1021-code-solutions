/* exported reverseWord */
/* create a storage space for the output (empty string);
look at each Character, starting at the last index;
go through each index until reached the first one;
add each value of the current index to the output
return value of the output */

function reverseWord(word) {
  var output = '';
  for (var i = word.length - 1; i >= 0; i--) {
    output += word[i];
  }
  return output;
}

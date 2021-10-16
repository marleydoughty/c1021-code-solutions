/* exported isLowerCased */
// look at each character in the word;
// if the character is capitalized then stop and retun false
// if it is NOT, then keep going until end of word length;
// if all are lowercase then return true;
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

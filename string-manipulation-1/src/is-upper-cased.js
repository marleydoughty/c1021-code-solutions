/* exported isUpperCased */
// look at each character in the word;
// if the character is NOT capitalized then stop and retun false
// if it IS, then keep going until end of word length;
// if all are capitalized then return true;
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

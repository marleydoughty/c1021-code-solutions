/* exported isPalindromic */
/**
 * look at each index in the string
 * take the last index of each string and put add it to a new string
 * compare new string and original string
 * if === then return true, else return false
 */
function isPalindromic(string) {
  var newString = string.replaceAll(' ', '');
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] !== newString[newString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

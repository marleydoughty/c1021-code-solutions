/* exported isPalindromic */
/**
 * look at each index in the string
 * take the last index of each string and put add it to a new string
 * compare new string and original string
 * if === then return true, else return false
 */
function isPalindromic(string) {
  var re = /[^A-Za-z0-9]/g;
  string = string.toLowerCase().replace(re, '');
  var length = string.length;
  for (var i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

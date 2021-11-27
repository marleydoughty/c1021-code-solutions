/* exported isPalindromic */

function isPalindromic(string) {
  var newString = string.replaceAll(' ', '');
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] !== newString[newString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var string1 = firstString.replaceAll(' ', '');
  var string2 = secondString.replaceAll(' ', '');
  if (string1.length !== string2.length) {
    return false;
  } else {
    var string11 = string1.split('').sort().join('');
    var string22 = string2.split('').sort().join('');
    if (string11 === string22) {
      return true;
    } else {
      return false;
    }
  }
}

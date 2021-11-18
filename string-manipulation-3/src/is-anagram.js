/* exported isAnagram */
function isAnagram(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    return false;
  } else {
    // firstString.split('').sort().join('');
    // secondString.split('').sort().join('');

    var string1 = firstString.split('').sort().join('');
    var string2 = secondString.split('').sort().join('');
    if (string1 === string2) {
      return true;
    }
  }
}

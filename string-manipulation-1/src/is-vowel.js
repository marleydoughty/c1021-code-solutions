/* exported isVowel */
/*
*/
function isVowel(character) {
  var lowChar = character.toLowerCase();
  if (lowChar === 'a' || lowChar === 'e' || lowChar === 'i' || lowChar === 'o' || lowChar === 'u') {
    return true;

  } else {
    return false;
  }
}

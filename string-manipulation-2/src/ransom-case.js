/* exported ransomCase */
/* make the word all lowercase;
look at each letter in the word and capiltalize every other letter starting at teh second letter;
return the output of the new word */
function ransomCase(string) {
  var newString = string.toLowerCase();
  for (var i = 1; i < string.length; i += 2) {
    newString = newString.substring(0, i) + newString[i].toUpperCase() + newString.substring(i + 1);
  }
  return newString;
}

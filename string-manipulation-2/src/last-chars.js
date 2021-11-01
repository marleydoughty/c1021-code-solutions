/* exported lastChars */
/* find length of string and set it to a variable;
create a variable for the starting point (length of string minus the number given)
check to make sure starting point is at zero (number of characters isnt more than the length of string);
break up characters at teh starting point and go until the end of the string */
function lastChars(length, string) {
  var stringLength = string.length;
  var startingIndex = stringLength - length;
  if (startingIndex < 0) {
    startingIndex = 0;
  }
  return string.slice(startingIndex, stringLength);
}

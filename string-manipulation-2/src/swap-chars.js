/* exported swapChars */
/* create a variable for the firstindex
create a varibale for the second index
split the string into parts based on the values of the first index and second index;
build a new string based off of the splits */
function swapChars(firstIndex, secondIndex, string) {
  var first = firstIndex;
  var second = secondIndex;
  return string.slice(0, first) + string[second] + string.slice(first + 1, second) +
  string[first] + string.slice(second + 1);
}

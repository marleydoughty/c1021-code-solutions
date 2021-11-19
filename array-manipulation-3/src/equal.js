/* exported equal */
/**
 *check to see if lengths of each array are the same, if not then answer is immediately false;
 if true, then look at each index in the array(can use first array bc length of each array is the same)
 at some index, compare the index result of the first array to that of the second array;
 if it doesn't match, then return false
 if it does match, then continue all the way through each index and return true if all match
 */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

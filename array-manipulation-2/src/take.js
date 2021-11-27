/* exported take */
/* starting at the beginning of the array, move down the line until the number of inputs matches
 the number that is put in the count parameter;
*/
function take(array, count) {
  return array.slice(0, count);
}

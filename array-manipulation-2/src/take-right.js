/* exported takeRight */
/* split up the array, starting from the end of the elements and working way toward the beginning */
function takeRight(array, count) {
  return array.slice((-count));
}

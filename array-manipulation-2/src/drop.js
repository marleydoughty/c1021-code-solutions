/* exported drop */
/* start at the element that corresponds to the number assigned in the count parameter,
\and go down the the whole length of the array */
function drop(array, count) {
  return array.slice(count, array.length);
}

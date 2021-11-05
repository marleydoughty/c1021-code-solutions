/* exported dropRight */
/* starting at the end of the elements, move toward the front the amount of times
that is assigned in the varibale count and return the elements in the array up to that point */
function dropRight(array, count) {
  return array.slice(array, (-count));
}

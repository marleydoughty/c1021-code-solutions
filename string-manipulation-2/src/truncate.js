/* exported truncate */
/* look at each index in the string starting at index 0;
at a certain index length- stop and replace the rest of the string with an elipses;
return the output */

function truncate(length, string) {
  return string.slice(0, length) + '...';
}

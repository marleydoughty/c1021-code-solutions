/* exported includes */
/* look at each item in the array and compare it to the value that is given;
if the value matches what's in the array then its true that the value exists;
if its not true, then the value does not exist */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}

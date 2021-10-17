/* exported initial */
/* create a storage space for empty array
look at each index starting at the first one
go up until reached the last index
add values of array at index[i] into empty array
return value of array */
function initial(array) {
  var tailArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    tailArr.push(array[i]);

  } return tailArr;
}

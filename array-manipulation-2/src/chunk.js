/* exported chunk */
/* create an empty array as the output;
create an index that starts at zero(the beginning);
while the index is less than the length of the current array;
split up the array from the index to the size+index and add it to the output;
return the value of the new array
*/
function chunk(array, size) {
  var output = [];
  var index = 0;
  while (index < array.length) {
    output.push(array.slice(index, size + index));
    index += size;
  }
  return output;
}

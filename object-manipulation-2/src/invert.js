/* exported invert */
/* create an empty storage space for the output;
look at the key values in source varibale
set the value of the source at a certain key to be the kay value of the result
return the value of the result  */
function invert(source) {
  var result = {};
  for (var key in source) {
    result[source[key]] = key;
  }
  return result;
}

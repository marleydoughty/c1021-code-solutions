/* exported omit */
function omit(source, keys) {
  /* create an empty storage space for the output;
  look at each key value in the source variable
  if the key value does not include the keys listed
  then that value is the one ot be put into the storage space
  return the value of the storage space */
  var newObject = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}

/* exported getValues */
// create a storage space for the value to be put in (empty array);
// look at each property in the object
// take the values of each of the properties and add them to the storage space
// the result of the storage space is the new output * /
function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

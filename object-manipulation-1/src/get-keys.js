/* exported getKeys */
/* create a storage space (empty array);
look at each of the properties in the object;
add each of the property names to the stoarge space;
the result is the new output; */
function getKeys(object, key) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
  return keys;
}

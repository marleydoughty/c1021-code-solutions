/* exported toObject */

// create a storage space for the key
// create a storage space for the value
// create a storage space for the output (empty object);
// set the object to the value of the key and the value of the value;
// the output is the result of the pair
function toObject(keyValuePair) {
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  var object = {};
  object[key] = value;
  return object;
}

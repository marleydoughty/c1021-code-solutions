/* exported getValue */
/*
create a storage space for the value to be put in (empty string);
locate that value within the object and set it equal to the storage space
the result of the storage space is the new output   */
function getValue(object, key) {
  var output = '';
  output = (object[key]);
  return output;
}

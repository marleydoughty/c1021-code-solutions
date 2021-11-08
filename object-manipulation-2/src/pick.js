/* exported pick */
/* create a storage spcae for the output;
look at each key value in the source variable
if the key listed exist within the keys varibale but do NOT exist in the source variable
then those values are stored in te=he output
return the value of the output */
function pick(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}

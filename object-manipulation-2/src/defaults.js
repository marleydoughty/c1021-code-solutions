/* exported defaults */
/* look at key values in source variable
if there are values in the target source that are not defined
then take those values from the soure variable */
function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}

/* exported difference */

function checkIfIncludes(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }
  return false;
}
function difference(first, second) {
  const output = [];
  for (let i = 0; i < first.length; i++) {
    if (!checkIfIncludes(second, first[i])) {
      output.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (!checkIfIncludes(first, second[j])) {
      output.push(second[j]);
    }
  }
  return output;
}

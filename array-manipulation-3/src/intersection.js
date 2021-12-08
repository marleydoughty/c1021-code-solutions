/* exported intersection */
function intersection(first, second) {
  const output = first.filter(value => second.includes(value));
  return output;
}

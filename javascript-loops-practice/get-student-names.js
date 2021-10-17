/* exported getStudentNames */
function getStudentNames(students) {
  var output = [];
  for (var i in students) {
    output.push(students[i].name);
  }
  return output;
}

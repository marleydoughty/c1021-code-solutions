var colors = ['red', 'white', 'blue'];
console.log('value of index[0]:', colors[0]);
console.log('value of index[1]:', colors[1]);
console.log('value of index[2]:', colors[2]);
console.log('America is', colors[0] + ', ' + colors[1] + ', and ' + colors[2]);
colors[2] = 'green';
console.log('value of index[2]:', colors[2]);
console.log('Mexico is', colors[0] + ', ' + colors[1] + ', and ' + colors[2]);
console.log('value of colors:', colors);

var students = [
  'Marley', 'Matt', 'Max', 'Jonathan', 'David'
];
var numberOfStudents = students.length;
console.log('Number of students:', numberOfStudents);
var lastIndex = numberOfStudents - 1;
console.log('value of lastIndex:', lastIndex);
var lastStudent = students[lastIndex];
console.log('The last student in the array is:', lastStudent);

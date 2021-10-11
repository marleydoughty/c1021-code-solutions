var student = {
  firstName: 'Marley',
  lastName: 'Doughty',
  age: '24'
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Behavior Technician';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: '2005'
};
vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);

var pet = {
  name: 'Lucifer',
  type: 'Shepard-lab mix'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);

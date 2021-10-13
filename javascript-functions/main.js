function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log('minutes to seconds result:', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name + '!';
  return greeting;
}
console.log('greeting result:', greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('result of area:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log('value of firstName:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
console.log('value of lastElement:', getLastElement(['propane', 'and', 'propane', 'accessories']));

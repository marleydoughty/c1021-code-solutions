/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var input = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return input;
}
getDescriptionOfPerson({
  name: 'Ada Lovelace',
  occupation: 'countess',
  birthPlace: 'London, England'
});

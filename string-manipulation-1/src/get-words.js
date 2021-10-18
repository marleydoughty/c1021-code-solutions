/* exported getWords */

// create storage space for myArr to empty Array;
// if string is empty-return empty array;
// if string is string then split up at spaces;
// add value of split sting into myArr storage
// return value of myArr;
function getWords(string) {
  var myArr = [];
  if (string === '') {
    return [];
  }
  myArr = string.split(' ');
  return myArr;
}

/* exported getWords */
// create a storage space for output to empty string;
// create storage space for myArr to empty Array;
// look at each character one at a time from the beginning;
// if character is NOT a space, then add it myArr storage;
// if character IS a space, then take myArr storage and put into output;
// clear out myArr storage;
// return the value of the output;
function getWords(string) {
  var myArr = [];
  if (string === '') {
    return [];
  }
  string.split(' ');
  myArr = string.split(' ');
  return myArr;
}

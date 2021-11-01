/* exported numVowels */
/*
make the string lowercase
create a variable for the number of vowels counted, start at 0
look at each character in the string and compare it to the condition of vowels
add one to the vowels counted each time a vowel is found
return the value of all the vowels counted */
function numVowels(string) {
  var vowelCount = 0;
  var newString = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (newString[i] === 'a' || newString[i] === 'e' || newString[i] === 'i' || newString[i] === 'o' || newString[i] === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}

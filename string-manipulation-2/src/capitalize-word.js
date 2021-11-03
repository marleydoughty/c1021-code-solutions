/* exported capitalizeWord */
/* make all words lowercase;
take that new word and target first character and capitalize
if the word is javascript, then return the correct casing */

function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  if (newWord === 'javascript') {
    return 'JavaScript';
  } else {
    return newWord[0].toUpperCase() + newWord.slice(1);
  }
}

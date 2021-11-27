/* exported titleCase */
const lowLetters = ['or', 'the', 'a', 'an', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'and', 'to', 'nor', 'but'];
const knownCases = ['JavaScript', 'API'];
function titleCase(title) {
  return title.split(' ').map((word, ii, arr) => {
    if (lowLetters.includes(word)) {
      return word;
    }
    const foundKnownWord = knownCases.find(knownWord => knownWord.toLowerCase() === word.toLowerCase());
    if (foundKnownWord) {
      return foundKnownWord;
    }
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

/* exported capitalizeWords */
/* make the entire string lowercase;
separate words by the spaces;
after each space, capitalize the first letter only
*/

function capitalizeWords(string) {
  var sentence = string.toLowerCase();
  var words = sentence.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  } return words.join(' ');
}

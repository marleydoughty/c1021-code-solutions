/* exported titleCase */
function titleCase(title) {
  var output = [];
  var lowLetters = ['or', 'the', 'a', 'an', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'and', 'to', 'nor', 'but'];
  var titleArray = [];
  var hyphenArray = [];
  var words = title.toLowerCase().split(' ');

  for (var i = 0; i < words.length; i++) {
    if (i === 0 || words[i - 1][words[i - 1].length - 1] === ':') {
      titleArray.push(words[i][0].toUpperCase() + words[i].slice(1));
    } else if (lowLetters.includes(words[i])) {
      titleArray.push(words[i]);
    } else if (words[i].toLowerCase() === 'javascript') {
      titleArray.push('JavaScript');
    } else if (words[i].toLowerCase() === 'api') {
      titleArray.push('API');
    } else if (i > 0) {
      titleArray.push(words[i][0].toUpperCase() + words[i].slice(1));
    }
  }
  for (var x = 0; x < titleArray.length; x++) {
    if (titleArray[x].includes('-')) {
      var includesHyphen = titleArray[x].split('-');
      includesHyphen = includesHyphen[0][0].toUpperCase() + includesHyphen[0].slice(1) + '-' + includesHyphen[1][0].toUpperCase() + includesHyphen[1].slice(1);
      hyphenArray.push(includesHyphen);
    } else {
      hyphenArray.push(titleArray[x]);
    }
  }
  for (var z = 0; z < hyphenArray.length; z++) {
    if (hyphenArray[z] === 'Javascript:') {
      output.push('JavaScript:');
    } else if (hyphenArray[z] === 'api:') {
      output.push('API:');
    } else {
      output.push(hyphenArray[z]);
    }
  }
  output = output.join(' ');
  return output;
}

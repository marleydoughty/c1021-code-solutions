const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const prices = numbers.map(num => '$' + num.toFixed(2));
console.log(prices);

const uppercase = languages.map(str => str.toUpperCase());
console.log(uppercase);

const firstLetters = languages.map(str => str.charAt(0));
console.log(firstLetters);

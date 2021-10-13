var small = 1;
var medium = 2;
var large = 3;

var maximumValue = Math.max(small, medium, large);
console.log('maximumValue:', maximumValue);

var heroes = ['batman', 'superman', 'aquaman', 'wonderwoman'];
var randomNumber = Math.random();
randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);
var library = [
  {
    title: 'LOTR',
    author: 'Tolkien'
  },
  {
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    title: '12 rules for life',
    author: 'Jordan Peterson'
  }

];
var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Marley Doughty';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);

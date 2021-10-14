/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {

  if (number < 5) {
    return true;
  } else {
    return false;
  }

}

function isEven(number) {

  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }

}

function startsWithJ(string) {

  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }

}
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
var gwenna = {
  name: 'gwenna',
  age: 12
};
isOldEnoughToDrink(gwenna.age);

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
var cody = {
  name: 'cody',
  age: 1
};
isOldEnoughToDrive(cody.age);
function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
var marley = {
  name: 'marley',
  age: 24
};
isOldEnoughToDrinkAndDrive(marley);
function categorizedAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
categorizedAcidity(7);

function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    return 'We are the warner brothers!';
  } else if (name === 'dot') {
    return 'I am cute~';
  } else {
    return 'Goodnight everybody!';
  }
}
introduceWarnerBro('dot');

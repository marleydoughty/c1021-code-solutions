const add = require('./add');
const subtract = require('./subract');
const multiply = require('./multiply');
const divide = require('./divide');

const args = process.argv;
const firstInput = Number(args[2]);
const secondInput = args[3];
const thirdInput = Number(args[4]);

if (secondInput === 'plus') {
  console.log('result:', add(firstInput, thirdInput));
}
if (secondInput === 'minus') {
  console.log('result:', subtract(firstInput, thirdInput));
}
if (secondInput === 'times') {
  console.log('result:', multiply(firstInput, thirdInput));
}
if (secondInput === 'over') {
  console.log('result:', divide(firstInput, thirdInput));
}

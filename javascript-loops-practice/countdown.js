/* exported countdown */

// function countdown(number) {
//   var numbers = [];
//   var currentNumber = 10;
//   while (currentNumber >= 0) {
//     numbers.push(currentNumber);
//     currentNumber--;
//   }
// }
function countdown(number) {
  var numbers = [];

  for (var i = 10; i >= 0; i--) {
    numbers.push(i);

  }
  return numbers;
}

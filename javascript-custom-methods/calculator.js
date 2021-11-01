/* exported calculator */
var calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
  square: function (number) {
    return number * number;
  },
  sumAll: function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  },
  getAverage: function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    var average = sum / array.length;
    return average;
  }

};

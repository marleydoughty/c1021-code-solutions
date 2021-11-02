/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
  this.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
  this.getIntroduction = function () {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  };
}

var newStudent = new Student('marley', 'doughty', 'web dev');
// console.log(newStudent);

var getFullName = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};
var getIntroduction = {
  intro: function () {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
Object.setPrototypeOf(newStudent, getFullName);
Object.setPrototypeOf(newStudent, getIntroduction);

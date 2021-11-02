function ExampleConstructor() {

}
console.log('value of prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype property of ExampleConstructor:', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();
console.log('value of newExampleConstructor:', newExampleConstructor);

var isInstanceOf = newExampleConstructor instanceof ExampleConstructor;
console.log('is instanceOf:', isInstanceOf);

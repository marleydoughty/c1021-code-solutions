/* define a function named handleFocus with parameter(event);
logs "focus" when event is fired;
logs "event.target.name";
document.querySelector for element with ID user-name
create variable for that element;
use variable for addEventListener */

/* define a function named handleBlue with parameter(event);
logs"blur" when blur event fired;
logs "event.target.name";
use variable for addEventListener */

/* define a function named handleInput with parameter(event);
logs "event.target.name";
logs "event.target.value";
use variable for addEventListener */

function handleFocus(event) {
  console.log('focus event fired:', event);
  console.log('event.target.name:', event.target.name);
}
var $userName = document.querySelector('#user-name');
$userName.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log('blur event fired:', event);
  console.log('event.target.name:', event.target.name);
}
$userName.addEventListener('blur', handleBlur);

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('event.target.value:', event.target.value);
}
$userName.addEventListener('input', handleInput);

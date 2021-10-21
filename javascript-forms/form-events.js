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
var $userName = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');

function handleFocus(event) {
  console.log('focus event fired:', event);
  console.log('event.target.name:', event.target.name);
}
$userName.addEventListener('focus', handleFocus);
$email.addEventListener('focus', handleFocus);
$message.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log('blur event fired:', event);
  console.log('event.target.name:', event.target.name);
}
$userName.addEventListener('blur', handleBlur);
$email.addEventListener('blur', handleFocus);
$message.addEventListener('blur', handleFocus);

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('event.target.value:', event.target.value);
}
$userName.addEventListener('input', handleInput);
$email.addEventListener('input', handleFocus);
$message.addEventListener('input', handleFocus);

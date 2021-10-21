/* use querySelector to find contact-form element;
create variable that hold the contact-form element;
create a function that responds when submit event occurs;
create an object that hold the values of the forms elements
log those values in the console
reset the form */
var $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var formData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('formData:', formData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);

/* create variable for class hot-button;
create variable for class click-count;
 increment the button click by one
 assign counter clicks to the click-count variable
 */

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
var counter = 1;

function incrementClick() {
  $clickCount.textContent = 'Clicks: ' + counter;
  counter++;
  if (counter < 4) {
    $hotButton.classList.add('cold');
  } else if (counter >= 4 || counter < 7) {
    $hotButton.classList.add('cool');
  } else if (counter >= 7 || counter < 10) {
    $hotButton.classList.add('tepid');
  } else if (counter >= 10 || counter < 13) {
    $hotButton.classList.add('warm');
  } else if (counter >= 13 || counter < 16) {
    $hotButton.classList.add('hot');
  } else {
    $hotButton.classList.add('nuclear');
  }
}
$hotButton.addEventListener('click', incrementClick);

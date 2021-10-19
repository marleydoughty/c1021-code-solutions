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
    $hotButton.className = 'hot-button cold';
  } else if (counter >= 4 || counter < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (counter >= 7 || counter < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (counter >= 10 || counter < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (counter >= 13 || counter < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', incrementClick);

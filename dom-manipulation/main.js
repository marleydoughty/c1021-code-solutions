/* create variable for class hot-button;
create variable for class click-count;
 */

// var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function incrementClick(event) {
  var counter = 0;
  return counter++;
}
$clickCount.addEventListener('click', incrementClick);

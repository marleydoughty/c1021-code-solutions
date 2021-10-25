var $characters = document.querySelectorAll('span');
var currentIndex = 0;
function typeKey(event) {
  var wantedChar = $characters[currentIndex].textContent;
  if (wantedChar === event.key || (event.key = ' ' && wantedChar.charCodeAt(0) === 160)) {
    $characters[currentIndex].className = 'correct';
    currentIndex++;
    $characters[currentIndex].className = 'active';
  } else {
    $characters[currentIndex].className = 'active incorrect';
  }
}
document.addEventListener('keydown', typeKey);

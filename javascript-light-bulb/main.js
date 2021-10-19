var $buttonOn = document.querySelector('.button-on');
var $buttonOff = document.querySelector('.button-off');
var $containerOn = document.querySelector('.container.on');
var lightOn = true;

function toggle(event) {
  if (lightOn === true) {
    $buttonOn.className = 'button-on';
    $containerOn.className = 'container on';
    lightOn = false;
  } else if (lightOn === false) {
    $buttonOn.className = 'button-off';
    $containerOn.className = 'container off';
    lightOn = true;
  }
}
$buttonOn.addEventListener('click', toggle);
$buttonOff.addEventListener('click', toggle);

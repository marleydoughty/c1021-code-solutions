var $buttons = document.querySelectorAll('[data-link]');
var $tabView = document.querySelectorAll('[data-view]');

function activeView(event) {
  var viewContent = event.target.getAttribute('data-link');
  changeView(viewContent);

}
function changeView(viewContent) {
  for (var i = 0; i < $tabView.length; i++) {
    if ($tabView[i].getAttribute('data-view') !== viewContent) {
      $tabView[i].classList.add('hidden');
    } else {
      $tabView[i].classList.remove('hidden');
    }
  }
}
for (var i = 0; i < $buttons.length; i++) {
  $buttons[i].addEventListener('click', activeView);
}

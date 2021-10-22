var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

function activeTab(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
  }
  if (event.target.matches('.tab.active')) {
    var dataView = event.target.getAttribute('data-view');
    for (var vi = 0; vi < $views.length; vi++) {
      if ($views[vi].getAttribute('data-view') === dataView) {
        $views[vi].className = 'view';
      } else {
        $views[vi].className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', activeTab);

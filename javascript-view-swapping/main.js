var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
// var $view = document.querySelectorAll('.view');

function activeTab(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        event.target.className = 'tab-active';
      } else {
        event.target.className = 'tab-inactive';
      }
    }
  }
  // if (event.target.matches('.tab-active')) {
  //   for (var i = 0; i < $view.length; i++) {
  //     if ($tab[i] === 'tab-active'){

  //     }
  //   }
  // }
}

$tabContainer.addEventListener('click', activeTab);

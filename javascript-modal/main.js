var $openModal = document.querySelector('#openModal');
var $closeModal = document.querySelector('#closeModal');
var $modalOuter = document.querySelector('.modal-outer');

function openModal(event) {
  $modalOuter.className = 'modal-outer';
}
function closeModal(event) {
  $modalOuter.className = 'modal-outer hidden';
}

$openModal.addEventListener('click', openModal);
$closeModal.addEventListener('click', closeModal);

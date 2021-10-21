var $taskList = document.querySelector('.task-list');

function handleClick(event) {
  console.log('it clicked:', event);
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var $taskListItem = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', $taskListItem);
    $taskListItem.remove();
  }
}
$taskList.addEventListener('click', handleClick);

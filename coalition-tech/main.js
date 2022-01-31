
var circles = document.querySelectorAll('.fa-circle');

function handleClick() {
  // eslint-disable-next-line no-console
  console.log('hi');
}
// for (const circle of circles) {
//   circle.addEventListener('click', handleClick);
// }
circles.forEach(circle => circle.addEventListener('click', handleClick));

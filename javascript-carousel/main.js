var $container = document.querySelector('.container');
// var leftArrow = document.querySelector('.fa-angle-left');
// var rightArrow = document.querySelector('.fa-angle-right');
// var circles = document.querySelectorAll('.fa-circle');
var image = document.querySelector('img');

// function renderPokemonImage(entry) {

var $row = document.createElement('div');
$row.className = 'row justify-content align-center';
$container.appendChild($row);

var $leftArrow = document.createElement('i');
$leftArrow.className = 'fas fa-angle-left';
$row.appendChild($leftArrow);

var $image = document.createElement('img');
$image.setAttribute('src', event.target.value);
$row.appendChild($image);

var $rightArrow = document.createElement('i');
$rightArrow.className = 'fas fa-angle-right';
$row.appendChild($rightArrow);

var $circleRow = document.createElement('div');
$circleRow.className = 'row justify-content';
$container.appendChild($circleRow);

var $circle1 = document.createElement('i');
$circle1.className = 'far fa-circle';
$circleRow.appendChild($circle1);

var $circle2 = document.createElement('i');
$circle2.className = 'far fa-circle';
$circleRow.appendChild($circle2);

var $circle3 = document.createElement('i');
$circle3.className = 'far fa-circle';
$circleRow.appendChild($circle3);

var $circle4 = document.createElement('i');
$circle4.className = 'far fa-circle';
$circleRow.appendChild($circle4);

var $circle5 = document.createElement('i');
$circle5.className = 'far fa-circle';
$circleRow.appendChild($circle5);
// return $container;
// }
// console.log(renderPokemonImage);
// function handleLeftClick(event) {
//   console.log('left-arrow-clicked', leftArrow);
// }
// function handleRightClick(event) {
//   console.log('right-arrow-clicked', rightArrow);

// }
var counter = setInterval(automaticCarousel, 3000);
// var count = 0;
function automaticCarousel() {
  image.setAttribute('src', 'images/001.png');
  // image.setAttribute('src', 'images/004.png');
  clearInterval(counter);

}

// function handleCircleClicks(event) {
//   console.log('cirles clicked');
// }

// rightArrow.addEventListener('click', handleRightClick);
// leftArrow.addEventListener('click', handleLeftClick);
// circles.addEventListener('click', handleCircleClicks);

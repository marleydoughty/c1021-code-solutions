// var $container = document.querySelector('.container');
var leftArrow = document.querySelector('.fa-angle-left');
var rightArrow = document.querySelector('.fa-angle-right');
var image = document.querySelector('img');
var $circleRow = document.querySelector('.circles');

var allImages = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var currentImageIndex = 0;

// function renderPokemonImage(entry) {

for (var i = 0; i < allImages.length; i++) {
  var circles = document.createElement('i');
  circles.className = 'far fa-circle';
  $circleRow.appendChild(circles);
}
// }
// $container.appendChild($circleRow);
// return $container;
// }

function handleLeftClick(event) {
  // console.log('left-arrow-clicked', leftArrow);
}
function handleRightClick(event) {
  // console.log('right-arrow-clicked', rightArrow);

}
function handleCircleClicks(event) {
  // console.log('cirles clicked');
  circles.closest('.circles');
}
function automaticCarousel() {
  image.setAttribute('src', nextImage());
}
setInterval(automaticCarousel, 3000);

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % allImages.length;
  return allImages[currentImageIndex];
}

rightArrow.addEventListener('click', handleRightClick);
leftArrow.addEventListener('click', handleLeftClick);
$circleRow.addEventListener('click', handleCircleClicks);

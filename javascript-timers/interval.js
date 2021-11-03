var $heading = document.querySelector('h1');
var countdown = 4;
var counter = setInterval(timer, 1000);

function timer() {
  countdown--;
  $heading.textContent = countdown;
  if (countdown === 0) {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(counter);
  }
}

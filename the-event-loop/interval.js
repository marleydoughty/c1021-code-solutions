let currentCount = 3;
const countdown = setInterval(timer, 1000);

function timer() {
  console.log(currentCount--);
  if (currentCount === 0) {
    console.log('BLAST OFF!');
    clearInterval(countdown);
  }
}

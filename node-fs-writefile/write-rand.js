const fs = require('fs');
const randomContent = Math.random();
fs.writeFile('./random.txt', randomContent.toString() + '\n', err => {
  if (err) throw err;
});

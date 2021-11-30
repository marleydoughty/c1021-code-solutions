// const fs = require('fs');
const fileObj = require('./data.json');

const args = process.argv;
const firstInput = args[2];
// const secondInput = args[3];
// const thirdInput = args[4];

const readCommand = () => {
  for (const [key, value] of Object.entries(fileObj.notes)) {
    console.log(`${key}: ${value}`);
  }
};

if (firstInput === 'read') {
  readCommand();
// } else if (firstInput === 'create') {
//   createCommand();
// } else if (firstInput === 'update') {
//   updateCommand();
// } else if (firstInput === 'delete') {
//   deleteCommand();
// } else {
//   console.log('Invalid command');
}

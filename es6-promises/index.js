const takeAChance = require('./take-a-chance');

const returnedPromise = takeAChance('Marley');

returnedPromise.then(resolve => console.log(resolve)).catch(error => console.log(error.message));

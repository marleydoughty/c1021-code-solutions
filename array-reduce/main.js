const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];
const sum = numbers.reduce((prev, curr) => {
  return prev + curr;
}, 0);
console.log('sum:', sum);

const product = numbers.reduce((prev, curr) => {
  return prev * curr;
}, 1);
console.log('product:', product);

const balance = account.reduce((prev, curr) => {
  if (curr.type === 'deposit') {
    return curr.amount + prev;
  } else {
    return prev - curr.amount;
  }
}, 0);
console.log('balance:', balance);

const composite = traits.reduce((prev, curr) => {
  return Object.assign(prev, curr);
}, {});
console.log('composite:', composite);

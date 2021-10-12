var orderHistory = [
  {
    orderPlaced: 'August 4th, 2020',
    totalCost: 34.00,
    shipRecipient: 'JS Masher',
    orderNumber: '# 114-3941689-8772232',
    deliveryDate: 'August 8th, 2020',
    returnWindow: 'Septemeber 7th, 2020',
    itemDescription: [{
      type: 'book',
      title: 'javaScript for impatient programmers',
      author: 'Dr. Axel Raschmayer',
      price: 31.55,
      productImage: ''
    }]
  },
  {
    orderPlaced: 'July 19th, 2020',
    totalCost: 44.53,
    shipRecipient: 'JS Masher',
    orderNumber: '# 113-9984268-1280257',
    deliveryDate: 'July 20th, 2020',
    returnWindow: 'August 19th, 2020',
    itemDescription: [{
      type: 'book',
      title: 'The Timeless Way of Building',
      author: 'Christopher Alexander',
      price: 41.33,
      productImage: ''
    }]
  },
  {
    orderPlaced: 'July 4th, 2020',
    totalCost: 17.22,
    shipRecipient: 'JS Masher',
    orderNumber: '# 114-2875557-9059409',
    deliveryDate: 'July 7th, 2020',
    returnWindow: 'August 5th, 2020',
    itemDescription: [{
      type: 'electronic',
      title: 'Gamecube Controller adapter',
      price: 15.98,
      productImage: ''
    }]
  },
  {
    orderPlaced: 'July 3rd, 2020',
    totalCost: 138.93,
    shipRecipient: 'JS Masher',
    orderNumber: '# 113-2883177-2648248',
    deliveryDate: 'July 5h, 2020',
    returnWindow: 'August 4th, 2020',
    itemDescription: [{
      type: 'electronic',
      title: 'GameCube controller',
      price: 94.95,
      productImage: ''
    },
    {
      type: 'book',
      title: 'The Art of SQL',
      author: 'Stephane Faroult',
      price: 33.99,
      productImage: ''
    }]
  }

];
console.log('order[0] itemDescription type:', orderHistory[0].itemDescription[0].type);
console.log('order[0] orderPlaced:', orderHistory[0].orderPlaced);
console.log('order[0]returnWindow:', orderHistory[0].returnWindow);
console.log('order[1] itemDescription author:', orderHistory[1].itemDescription[0].author);
console.log('order[2] itemDescription type:', orderHistory[2].itemDescription[0].type);
console.log('order[3] itemDescription[1] author:', orderHistory[3].itemDescription[1].author);
console.log('order[3] itemDescription[1] price:', orderHistory[3].itemDescription[1].price);

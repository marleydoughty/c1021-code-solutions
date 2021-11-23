const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryId: 3353
};
const { title } = book1;
const { author } = book1;
const { libraryId } = book1;
console.log(`The title of the book is ${title}, the author is ${author}, and the library id is ${libraryId}`);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryId: 2345
};
const { title: title2 } = book2;
const { author: author2 } = book2;
const { libraryId: libraryId2 } = book2;
console.log(`The title of the book is ${title2}, the author is ${author2}, and the library id is ${libraryId2}`);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryId: 1233
  }
];

const [first, second, third, last] = library;
console.log('book3:', first);
console.log('book4:', second);
console.log('book5:', third);
console.log('book6:', last);

var books = [
  {
    title: '12 rules for life',
    author: 'Jordan Peterson',
    isbn: '1234567'
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    isbn: '89101112'
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding',
    isbn: '1314151617'
  }
];
console.log('books:', typeof books);
console.log('JSON stringify books:', JSON.stringify(books));
console.log('JSON stringify typeof:', typeof JSON.stringify(books));

var student = '[{"name":"marley","id": "1234"}]';
console.log('student:', student);
console.log('student typeof:', typeof student);
console.log('JSON parse:', JSON.parse(student));
console.log('JSON parse typeof:', typeof JSON.parse(student));

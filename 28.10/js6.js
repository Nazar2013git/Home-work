const obj = {a: 1, b: 2, c: 3, d: 4};

const sum = Object.values(obj).reduce((acc, val) => acc + val, 0);
console.log(sum);
Нәтиже: 10;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const combinedObj = {...obj1, ...obj2};
console.log(combinedObj);


const students = [
  {id: 1, name: "A"},
  {id: 2, name: "A"},
  {id: 3, name: "A"},
  {id: 4, name: "A"},
  {id: 5, name: "A"},
];

const evenStudents = students.filter(student => student.id % 2 === 0);
const oddStudents = students.filter(student => student.id % 2 !== 0);

console.log(evenStudents); 
console.log(oddStudents);


[{id: 2, name: "A"}, {id: 4, name: "A"}];
[{id: 1, name: "A"}, {id: 3, name: "A"}, {id: 5, name: "A"}];


const library = {
  name: 'Alatau HUB',
  books: [
    { name: 'book A', pages: 300 },
    { name: 'book B', pages: 100 },
    { name: 'book C', pages: 340 },
    { name: 'book D', pages: 1000 },
  ],
};

const averagePages = library.books.reduce((acc, book) => acc + book.pages, 0) / library.books.length;
console.log(averagePages); 

const minBook = library.books.reduce((min, book) => book.pages < min.pages ? book : min);
const maxBook = library.books.reduce((max, book) => book.pages > max.pages ? book : max);

console.log(minBook); 
console.log(maxBook);

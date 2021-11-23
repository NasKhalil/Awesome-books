const id = null;
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const books = document.querySelector('#books-list');
const addBtn = document.getElementById('form');
let booksArray = [
  {title: 'test', author: 'test'},
  {title: 'test2', author: 'test2'},
];

const data = localStorage.getItem('booksList');
if (data === null) {
  booksArray = [];
} else {
  booksArray = JSON.parse(data);
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  displayBooks() {
    let htmlCode = "";
    booksArray.forEach((item, index) => {
      htmlCode += `<div>
    <h2>${item.title}</h2>
    <p>${item.author}</p>
    <button onclick='removeBook(${index})' id='remove-btn'>remove</button>
    <hr>
    </div>`;
    });
    books.innerHTML = htmlCode;
  }

   addBook(title, author) {
    booksArray.push({
      title,
      author,
    });

    localStorage.booksList = JSON.stringify(booksArray);
    displayBooks();
  }
}


// function displayBooks() {
//   let htmlCode = '';
//   booksArray.forEach((item, index) => {
//     htmlCode += `<div>
//     <h2>${item.title}</h2>
//     <p>${item.author}</p>
//     <button onclick='removeBook(${index})' id='remove-btn'>remove</button>
//     <hr>
//     </div>`;
//   });
//   books.innerHTML = htmlCode;
// }

// displayBooks();
// function addBook(title, author) {
//   booksArray.push({
//     title,
//     author,
//   });

//   localStorage.booksList = JSON.stringify(booksArray);
//   displayBooks();
// }

// addBtn.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const titleInput = bookTitle.value;
//   const authorInput = bookAuthor.value;

//   addBook(titleInput, authorInput);
// });

// function removeBook(index) {
//   const data = localStorage.booksList;
//   booksArray = JSON.parse(data);
//   booksArray.splice(index, 1);
//   localStorage.setItem('booksList', JSON.stringify(booksArray));
//   displayBooks();
// }

// window.addEventListener('load', () => {
//   displayBooks();
//   removeBook(id);
// });
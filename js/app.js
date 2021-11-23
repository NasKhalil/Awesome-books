const id = null;
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const books = document.querySelector('#books-list');
const addBtn = document.getElementById('form');
let booksArray = [];

class Book {
  constructor(title, author) {
    const data = localStorage.getItem('booksList');
    if (data === null) {
      booksArray = [];
    } else {
      booksArray = JSON.parse(data);
    }
    this.title = title;
    this.author = author;
  }

  static displayBooks() {
    let htmlCode = '';
    booksArray.forEach((item, index) => {
      htmlCode += `<div>
      <h2>${item.title}</h2>
      <p>${item.author}</p>
      <button onclick='Book.removeBook(${index})' id='remove-btn'>remove</button>
      <hr>
      </div>`;
    });
    books.innerHTML = htmlCode;
  }

  static addBook(title, author) {
    booksArray.push({
      title,
      author,
    });

    localStorage.booksList = JSON.stringify(booksArray);
    Book.displayBooks();
  }

  static removeBook(index) {
    const data = localStorage.booksList;
    booksArray = JSON.parse(data);
    booksArray.splice(index, 1);
    localStorage.setItem('booksList', JSON.stringify(booksArray));
    Book.displayBooks();
  }
}

addBtn.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleInput = bookTitle.value;
  const authorInput = bookAuthor.value;

  Book.addBook(titleInput, authorInput);
});

window.addEventListener('load', () => {
  Book.displayBooks();
  Book.removeBook(id);
});
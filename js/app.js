/* eslint-disable max-classes-per-file */

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const books = document.querySelector('#books-list');
const addBtn = document.getElementById('form');

class Book {
  constructor(title, author) {
    this.id = Math.random();
    this.title = title;
    this.author = author;
  }
}
class Books {
  constructor() {
    this.data = [];
  }

  static displayBooks() {
    this.data = localStorage.getItem('booksList');
    let getData = this.data;
    if (getData === null) {
      getData = [];
    } else {
      getData = JSON.parse(getData);
    }
    let htmlCode = '';
    getData.forEach((item) => {
      htmlCode += `<div class="book-container">
      <div class="book-item">
      <h2>${item.title}</h2>
      <span>by</span>
      <p>${item.author}</p>
      </div>
      <button onclick='Books.removeBook(${item.id})' id='remove-btn'>remove</button>
      </div>`;
    });
    books.innerHTML = htmlCode;
  }

  static addBook(book) {
    this.data = localStorage.getItem('booksList');
    let getData = this.data;
    if (getData === null) {
      getData = [];
    } else {
      getData = JSON.parse(getData);
    }
    this.data = getData.concat(book);
    localStorage.setItem('booksList', JSON.stringify(this.data));
    Books.displayBooks();
  }

  static removeBook(id) {
    const data = localStorage.getItem('booksList');
    this.data = JSON.parse(data);
    this.data = this.data.filter((bookObj) => bookObj.id !== id);
    localStorage.setItem('booksList', JSON.stringify(this.data));
    Books.displayBooks();
  }
}

addBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = bookTitle.value;
  const authorInput = bookAuthor.value;
  const book = new Book(titleInput, authorInput);
  Books.addBook(book);
  bookAuthor.value = '';
  bookTitle.value = '';
});

window.addEventListener('load', () => {
  Books.displayBooks();
});

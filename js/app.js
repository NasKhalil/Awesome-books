const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const books = document.querySelector('#books-list');
const addBtn = document.getElementById('form');

let booksArray ;

function displayBooks () {
    let data = localStorage.booksList;
    if (data === null){
        booksArray = [];
    } else {
        booksArray = JSON.parse(data)
    }

    console.log(booksArray)
    let htmlCode = "";
    booksArray.forEach((item,index) => {
    htmlCode += `<div>
          <h2>${item.title}</h2>
          <p>${item.author}</p>
          <button onclick='removeBook(${index})' id='remove-btn'>remove</button>
      </div>`;
    });
    books.innerHTML = htmlCode;
}

displayBooks();

function addBook(title, author) {

    let data = localStorage.booksList;
    if (data === null){
        booksArray = [];
    } else {
        booksArray = JSON.parse(data)
    }

    booksArray.push({
        title: title,
        author: author
    })
   
    localStorage.booksList = JSON.stringify(booksArray);
    displayBooks();
}

addBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleInput = bookTitle.value;
    const authorInput = bookAuthor.value;

    addBook(titleInput, authorInput);
})

function removeBook (index) {
   booksArray.splice(index, 1);
   console.log(booksArray);
   displayBooks();
}

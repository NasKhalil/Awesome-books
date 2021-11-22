const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const books = document.querySelector('#books-list');
const addBtn = document.getElementById('form');
const data = JSON.stringify(localStorage.booksArray);

const booksArray = [
    {
        title: 'this is the book title',
        author: 'Adigun oni',
    },
];

function displayBooks () {
    let htmlCode = "";
    booksArray.forEach((item) => {
    htmlCode += `<div>
          <h2>${item.title}</h2>
          <p>${item.author}</p>
          <button>delete</button>
      </div>`
    });
    books.innerHTML = htmlCode;
}

displayBooks();

function addBook(title, author) {
    booksArray.push({
        title: title,
        author: author
    })

    displayBooks();
}

addBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleInput = bookTitle.value;
    const authorInput = bookAuthor.value;

    addBook(titleInput, authorInput);

    console.log(booksArray)
})



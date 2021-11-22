const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const books = document.getElementsByClassName('books-list');
const addBtn = document.getElementById('form');

let booksArray = [
    {
        title: 'this is the book title',
        author: 'Adigun oni'
    },
];




function addBook(title, author) {
    booksArray.push({
        title: title,
        author: author
    })
}

addBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleInput = bookTitle.value;
    const authorInput = bookAuthor.value;

    addBook(titleInput, authorInput);

    console.log(booksArray)
})

function displayBooks() {
    let htmlContent ="";
  booksArray.forEach((item) => {
    htmlContent += `
    <div>
        <h2>${item.title}</h2>
        <p>${item.author}</p>
        <button>delete</button>
    </div>
    `
  })

  books.innerHTML = htmlContent;
}

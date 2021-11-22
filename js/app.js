const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const books = document.querySelector('#books-list');
const addBtn = document.getElementById('form');
const data = JSON.stringify(localStorage.booksArray);
const removeBtn = document.getElementById('remove-btn');

const booksArray = [
    {
        title: 'this is the book title',
        author: 'Adigun oni',
    },
];

function displayBooks () {
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

function removeBook (index) {
   booksArray.splice(index, 1);
   console.log(booksArray);
   displayBooks();
}


// removeBtn.addEventListener('click', (e)=>{
//      booksArray.shift();
// }) 



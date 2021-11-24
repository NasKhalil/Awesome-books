const DateTime = luxon.DateTime;
const date = document.querySelector('.current-time');

date.innerHTML = DateTime.now().toFormat("MMMM dd yyyy, tt a");

const heading = document.getElementById('section-heading');
const add = document.getElementById('section-add');
const contact = document.getElementById('contact');
const headingBtn = document.getElementById('heading-id');
const btnAdd = document.getElementById('add-id');
const contactBtn = document.getElementById('contact-id');

headingBtn.addEventListener('click', () => {
    heading.style.display = 'block';
    add.style.display = 'none';
    contact.style.display = 'none';
})

btnAdd.addEventListener('click', () => {
    heading.style.display = 'none';
    add.style.display = 'block';
    contact.style.display = 'none';
})


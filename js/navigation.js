var DateTime = luxon.DateTime;

const date = document.querySelector('.current-time');

date.innerHTML = DateTime.now()
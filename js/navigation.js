const DateTime = luxon.DateTime;
const date = document.querySelector('.current-time');

date.innerHTML = DateTime.now().toFormat("MMMM dd yyyy, tt a")
function highlight(table) {
  let table = document;
  for (let td of table.querySelectorAll('dataset.available')) {
    let status = td.getAttribute(dataset.available);
    if (status === 'false') {
      td.classList.add('unavailable');
      console.log(td);
    } else {
      td.classList.add('available');
    }
  }
  for (let td of table.querySelectorAll('td')) {
    let hidden = td.getAttribute('dataset.available');
    if (!hidden) {
      td.setAttribute('hidden', true);
    }
  }
  for (let td of table.querySelectorAll('td')) {
    if (td.textContent === 'm') {
      td.classList.add('male');
    } else if (td.textContent === 'f') {
      td.classList.add('female');
    }
  }
  for (let td of document.querySelectorAll('td')) {
    if (+(td.textContent) < 18) {
      td.style.textDecoration = 'line-through';
    }
  }
};

function highlight(table) {
  for (let tr of table.querySelectorAll('tr')) {
    let status = tr.querySelectorAll('td');
    let filterd = status.forEach((td, index, arr) => {
      if (td.dataset.available === 'true') {
        tr.classList.add('available');
      } else if (td.dataset.available === 'false') {
        tr.classList.add('unavailable');
      } else if (td.textContent === 'm') {
        tr.classList.add('male');
      } else if (td.textContent === 'f') {
        tr.classList.add('female');
      } else if (+(td.textContent) < 18) {
        tr.style.textDecoration = 'line-through';
      }
    });
    let hidden = tr.querySelector('td[data-available]');
    if (!hidden) {
      tr.setAttribute('hidden', 'hidden');
    }
    tr.parentElement.tagName === 'THEAD' && tr.removeAttribute('hidden');
  }
}

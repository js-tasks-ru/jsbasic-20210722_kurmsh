function toggleText() {
  document.querySelector('.toggle-text-button')
    .addEventListener('click', function () {
      let id = document.getElementById("text");
      let hidden = id.getAttribute('hidden');
      if (hidden) {
        id.removeAttribute('hidden');
      } else
        id.setAttribute('hidden', 'hidden');
    })
}



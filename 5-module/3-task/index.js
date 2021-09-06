function initCarousel() {

  //картинки из карусели
  let carousel = document.querySelector('.carousel__inner');
  let images = carousel.querySelectorAll('.carousel__slide');
  //счетчик хорошая практика записывать переменные в начале.
  let currentIndex = 0;
  let width = images[currentIndex].offsetWidth;
  //кнопки
  let btnNext = document.querySelector('.carousel__arrow_right');
  let btnPrev = document.querySelector('.carousel__arrow_left');

  btnPrev.style.display = 'none';

  btnNext.addEventListener('click', () => {
    currentIndex++;
    carousel.style.transform = `translateX(${-width * currentIndex}px)`;

    if (currentIndex >= (images.length - 1)) {
      btnNext.style.display = 'none';

    } else {
      btnPrev.style.display = '';
    }
  });

  btnPrev.addEventListener('click', () => {
    currentIndex--;
    carousel.style.transform = `translateX(${-width * currentIndex}px)`;

    if (currentIndex === 0) {
      btnPrev.style.display = 'none';

    } else {
      btnNext.style.display = '';
    }
  });
}


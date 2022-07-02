function initCarousel() {


  let elem = document.querySelector('[data-carousel-holder]');
  let sliderList = elem.querySelector('.carousel__inner');
  let btnPrev = document.getElementsByClassName('carousel__arrow carousel__arrow_left')[0];
  let btnNext = document.getElementsByClassName('carousel__arrow carousel__arrow_right')[0];

  let position = 0;
  let allSlides = 4;

  elem.onclick = ({target}) => {
    if (target.closest('.carousel__arrow_right')) {
      right();
    }

    if (target.closest('.carousel__arrow_left')) {
      left();
    }
  };

  function right() {
    position++;
    update();
  }

  function left() {
    position--;
    update();
  }

  function update() {
    let offSet = -sliderList.offsetWidth * position; 
    sliderList.style.transform = `translateX(${offSet}px)`;

    if (position == allSlides - 1) {
      btnNext.style.display = 'none';
    }
    else {
      btnNext.style.display = '';
    }

    if (position == 0) {
      btnPrev.style.display = 'none';
    }
    else {
      btnPrev.style.display = '';
    }

  }

  update();

}
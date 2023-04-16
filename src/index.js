import './styles/main.scss';

const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');
const carouselLine = document.querySelector('.carousel__line');


const lineWidth = carouselLine.scrollWidth;
const slideGap = parseInt(getComputedStyle(carouselLine).gap);
const countOfSlides = carouselLine.children.length;
const slideWidth = (lineWidth - slideGap * (countOfSlides - 1)) / countOfSlides;

const getOffset = () => parseInt(getComputedStyle(carouselLine).left);

const changeStateButton = () => {
  const currentOffset = getOffset();
  btnPrev.disabled = currentOffset === 0;
  btnNext.disabled = (lineWidth + currentOffset) <= (3 * slideWidth + 2 * slideGap);
}
changeStateButton();

const moveRight = () => {
  carouselLine.style.left = getOffset() + slideWidth + slideGap + 'px';
  btnPrev.removeEventListener('click', moveRight);
  btnNext.removeEventListener('click', moveLeft);
}

const moveLeft = () => {
  carouselLine.style.left = getOffset() - slideWidth - slideGap + 'px';
  btnPrev.removeEventListener('click', moveRight);
  btnNext.removeEventListener('click', moveLeft);
}

btnPrev.addEventListener('click', moveRight)

btnNext.addEventListener('click', moveLeft)

carouselLine.addEventListener('transitionend', () => {
  changeStateButton();
  btnPrev.addEventListener('click', moveRight);
  btnNext.addEventListener('click', moveLeft);
});

import {getGap, getOffsetLeft} from "./utils";

const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');
const carouselLine = document.querySelector('.carousel__line');

const lineWidth = carouselLine.scrollWidth;
const slideGap = getGap(carouselLine);
const countOfSlides = carouselLine.children.length;
const slideWidth = (lineWidth - slideGap * (countOfSlides - 1)) / countOfSlides;

const changeStateButton = () => {
  const currentOffset = getOffsetLeft(carouselLine);
  btnPrev.disabled = currentOffset === 0;
  btnNext.disabled = (lineWidth + currentOffset) <= (3 * slideWidth + 2 * slideGap);
}

const handleBtnPrevClick = () => {
  carouselLine.style.left = getOffsetLeft(carouselLine) + slideWidth + slideGap + 'px';
  removeBtnListener();
}

const handleBtnNextClick = () => {
  carouselLine.style.left = getOffsetLeft(carouselLine) - slideWidth - slideGap + 'px';
  removeBtnListener()
}

const removeBtnListener = () => {
  btnPrev.removeEventListener('click', handleBtnPrevClick);
  btnNext.removeEventListener('click', handleBtnNextClick);
}

const addBtnListener = () => {
  btnPrev.addEventListener('click', handleBtnPrevClick)
  btnNext.addEventListener('click', handleBtnNextClick)
}

carouselLine.addEventListener('transitionend', () => {
  changeStateButton();
  addBtnListener();
});

export {changeStateButton, addBtnListener, carouselLine}
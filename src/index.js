import './styles/main.scss';
import Slider from "./scripts/slider";

const carouselBtnNext = document.querySelector('#next');
const carouselBtnPrev = document.querySelector('#prev');
const carouselLine = document.querySelector('.carousel__line');
const mobileWidthMediaQuery = window.matchMedia('(max-width: 900px)');
const carousel = new Slider(carouselBtnNext, carouselBtnPrev, carouselLine, mobileWidthMediaQuery);
carousel.changeStateButton();
carousel.addBtnListener();

const toursBtnNext = document.querySelector('#tours-next');
const toursBtnPrev = document.querySelector('#tours-prev');
const toursLine = document.querySelector('.tours__line');
const toursCarousel = new Slider(toursBtnNext, toursBtnPrev, toursLine, mobileWidthMediaQuery);
toursCarousel.changeStateButton();
toursCarousel.addBtnListener();


const btnRoundLikeList = document.querySelectorAll('.card__button');
btnRoundLikeList.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.currentTarget.classList.toggle('card__button_active');
    evt.currentTarget.querySelector('.btn-round-like').classList.toggle('btn-round-like_active');
  })
})

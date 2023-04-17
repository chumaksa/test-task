import './styles/main.scss';
import {addBtnListener, changeStateButton, carouselLine} from "./scripts/carousel";

changeStateButton();
addBtnListener();

carouselLine.addEventListener('transitionend', () => {
  changeStateButton();
  addBtnListener();
});

const btnRoundLikeList = document.querySelectorAll('.card__button');
btnRoundLikeList.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.currentTarget.classList.toggle('card__button_active');
    evt.currentTarget.querySelector('.btn-round-like').classList.toggle('btn-round-like_active');
  })
})
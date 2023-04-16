import './styles/main.scss';
import {addBtnListener, changeStateButton, carouselLine} from "./scripts/carousel";

changeStateButton();
addBtnListener();

carouselLine.addEventListener('transitionend', () => {
  changeStateButton();
  addBtnListener();
});

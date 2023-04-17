import {getGap, getOffsetLeft} from "./utils";

let copyHandleBtnNextClick;
let copyHandleBtnPrevClick;

class Slider {
  constructor(btnNext, btnPrev, sliderLine, mobileWidthMediaQuery) {
    this.btnNext = btnNext;
    this.btnPrev = btnPrev;
    this.sliderLine = sliderLine;
    this.lineWidth = this.sliderLine.scrollWidth;
    this.slideGap = getGap(this.sliderLine);
    this.countOfSlides = this.sliderLine.children.length;
    this.slideWidth = (this.lineWidth - this.slideGap * (this.countOfSlides - 1)) / this.countOfSlides;
    this.mobileWidthMediaQuery = mobileWidthMediaQuery;
    this.sliderLine.addEventListener('transitionend', () => {
      this.changeStateButton();
      this.addBtnListener();
    });
  }

  changeStateButton() {
    this.currentOffset = getOffsetLeft(this.sliderLine);
    this.btnPrev.disabled = this.currentOffset === 0;
    if (this.mobileWidthMediaQuery.matches) {
      this.btnNext.disabled = (this.lineWidth + this.currentOffset) <= this.slideWidth;
    } else {
      this.btnNext.disabled = (this.lineWidth + this.currentOffset) <= (3 * this.slideWidth + 2 * this.slideGap);
    }
  }

  handleBtnNextClick(evt) {
    evt.currentTarget.disabled = true;
    this.removeBtnListener();
    this.sliderLine.style.left = getOffsetLeft(this.sliderLine) - this.slideWidth - this.slideGap + 'px';
  }

  handleBtnPrevClick(evt) {
    evt.currentTarget.disabled = true;
    this.removeBtnListener();
    this.sliderLine.style.left = getOffsetLeft(this.sliderLine) + this.slideWidth + this.slideGap + 'px';
  }

  removeBtnListener() {
    this.btnPrev.removeEventListener('click', copyHandleBtnPrevClick);
    this.btnNext.removeEventListener('click', copyHandleBtnNextClick);
  }

  addBtnListener() {
    copyHandleBtnNextClick = this.handleBtnNextClick.bind(this);
    copyHandleBtnPrevClick = this.handleBtnPrevClick.bind(this);
    this.btnPrev.addEventListener('click', copyHandleBtnPrevClick)
    this.btnNext.addEventListener('click', copyHandleBtnNextClick)
  }
}

export default Slider;
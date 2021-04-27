const contentSlider = () => {
  const breakpointSm = window.matchMedia('(max-width: 767px)');
  const contentSliderElem = document.querySelector('.content-slider__list');

  if (!contentSliderElem) {
    return;
  }

  // let delayContainer = document.querySelector('*[data-delay]');
  // let delayValue;

  // if (!delayContainer) {
  //   delayValue = 5000;
  // } else {
  //   delayValue = delayContainer.dataset.delay;
  // }

  const contentSliderSettings = {
    slidesPerView: 'auto',
    spaceBetween: 8,
    // loop: true,
    // loopedSlides: 3,

    // autoplay: {
    //   delay: delayValue,
    // },

    pagination: {
      el: '.slider-pagination',
      type: 'bullets',
      clickable: true,
    },

    navigation: {
      nextEl: '.slider-controls-btn--next',
      prevEl: '.slider-controls-btn--prev',
      disabledClass: 'slider-controls-btn--disabled',
    },

    breakpoints: {
      1023: {
        slidesPerView: 3,
        spaceBetween: 33,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 33,
      },
      320: {
        slidesPerView: 'auto',       
      },
    },

    slideClass: 'content-slider__item',
    slideActiveClass: 'content-slider__item--active',
    slideNextClass: 'content-slider__item--next',
    slidePrevClass: 'content-slider__item--prev',
    wrapperClass: 'content-slider__wrap',
  };

  window.sliderContent = new Swiper(contentSliderElem, contentSliderSettings);

  const breakpointChecker = () => {
    window.sliderContent.destroy();
    window.sliderContent = new Swiper(contentSliderElem, contentSliderSettings);
  };
  breakpointSm.addListener(breakpointChecker);
  breakpointChecker();
};


export {contentSlider};

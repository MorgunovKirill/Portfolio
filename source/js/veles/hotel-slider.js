const hotelSlider = () => {
    const breakpointSm = window.matchMedia('(max-width: 767px)');
    const hotelSliderElem = document.querySelector('.hotel-slider__list');
  
    if (!hotelSliderElem) {
      return;
    }
   
    const hotelSliderSettings = {
      slidesPerView: 1,   
  
      pagination: {
        el: '.slider-pagination',
        type: 'bullets',
        clickable: true,
      },
  
      // navigation: {
      //   nextEl: '.slider-controls-btn--next',
      //   prevEl: '.slider-controls-btn--prev',
      //   disabledClass: 'slider-controls-btn--disabled',
      // },
  
    //   breakpoints: {      
    //     768: {
    //       slidesPerView: 2,
    //       spaceBetween: 33,
    //     },
    //     320: {
    //       slidesPerView: 'auto',
    //       pagination: {
    //         el: '.slider-pagination',
    //         type: 'progressbar',
    //       },
    //     },
    //   },
  
      slideClass: 'hotel-slider__item',
      slideActiveClass: 'hotel-slider__item--active',
      slideNextClass: 'hotel-slider__item--next',
      slidePrevClass: 'hotel-slider__item--prev',
      wrapperClass: 'hotel-slider__wrap',
    };
  
    window.hotelSlider = new Swiper(hotelSliderElem, hotelSliderSettings);
  
    const breakpointChecker = () => {
      window.hotelSlider.destroy();
      window.hotelSlider = new Swiper(hotelSliderElem, hotelSliderSettings);
    };
    breakpointSm.addListener(breakpointChecker);
    breakpointChecker();
  };
  
  
  export {hotelSlider};
  
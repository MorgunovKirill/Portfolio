const initRange = () => {
  const rangeSliders = document.querySelectorAll('.range-slider');

  if (!rangeSliders.length) {
    return;
  }

  rangeSliders.forEach((slider) => {
    const unit = slider.dataset.unit;
    const min = parseFloat(slider.dataset.min);
    const max = parseFloat(slider.dataset.max);
    const leftHandlePosition = parseFloat(slider.dataset.leftHandle);
    const rightHandlePosition = parseFloat(slider.dataset.rightHandle);
    const uiSlider = slider.querySelector('.range-slider__slider');
    const sliderStep = parseFloat(slider.dataset.step);
    const valueElements = slider.querySelectorAll('.range-slider__value');
    const unitElements = slider.querySelectorAll('.range-slider__unit');
    const inputs = slider.querySelectorAll('.range-slider__input');

    // const nodes = [
    //   slider.querySelector('.range-slider__lower'), // 0
    //   slider.querySelector('.range-slider__upper'),  // 1
    // ];

    unitElements.forEach((container) => {
      container.innerHTML = unit;
    });

    const changeEvt = new Event('change');

    const rangeParams = {
      start: [leftHandlePosition, rightHandlePosition],
      connect: true,
      margin: sliderStep,
      behaviour: 'tap',
      step: sliderStep,
      range: {
        'min': min,
        'max': max,
      },
    };

    const createSlider = () => {
      noUiSlider.create(uiSlider, rangeParams);

      uiSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = parseFloat(values[handle]);
        inputs[handle].dispatchEvent(changeEvt);
        valueElements[handle].innerHTML = parseFloat(values[handle]).toString().replace(/\./g, ',');
      });
    };

    const resetSliderToInitial = () => {
      uiSlider.noUiSlider.destroy();
      inputs[0].value = leftHandlePosition;
      inputs[1].value = rightHandlePosition;

      valueElements[0].innerText = leftHandlePosition;
      valueElements[1].innerText = rightHandlePosition;

      createSlider();
    };

    inputs.forEach((input) => {
      input.addEventListener('input', resetSliderToInitial);
    });


    createSlider();
  });
};

export {initRange};

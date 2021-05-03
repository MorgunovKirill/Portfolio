let items = Array.prototype.slice.call(document.querySelectorAll('.select__link'));

const select = () => {
  if (!items.length) {
    return;
  }

  if (items) {
    items.forEach(function (el) {
      el.addEventListener('click', function () {
        items.forEach(function (elem) {
          elem.closest('.select__item').classList.remove('select__item--active');
        });
        el.closest('.select__item').classList.add('select__item--active');
      });
    });
  }
};

export {select};


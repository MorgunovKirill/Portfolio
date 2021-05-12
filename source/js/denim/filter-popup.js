const filterPopup = document.querySelector('.filter__popup');

const initfilterPopup = () => {
  if (!filterPopup) {
    return;
  }

  const btn = document.querySelector('.js__toggle');

  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.blur();
      const maxHeight = filterPopup.style.height;

      if (maxHeight) {
        filterPopup.style.height = null;
        btn.classList.remove('active');
        filterPopup.classList.remove('active');
      } else {
        filterPopup.style.height = 'auto';
        btn.classList.add('active');
        filterPopup.classList.add('active');
      }
    });
  }
};

export {initfilterPopup};

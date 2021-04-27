const breakpointLg = window.matchMedia('(min-width: 1024px)');
const breakpointSm = window.matchMedia('(max-width: 767px)');

const header = document.querySelector('.header');
const isHeaderOpened = () => {
  return header.classList.contains('header--opened');
};

const closeMenu = (men) => {
  header.classList.remove('header--opened');
  window.enableBodyScroll(men);
  setTimeout(() => {
    document.activeElement.blur();
  }, 300);
};

const initHeader = () => {
  if (!header) {
    return;
  }

  const toggle = header ? header.querySelector('.header__toggle') : null;  
  const menu = header ? header.querySelector('.main-navigation') : null;
  const close = header ? header.querySelector('.main-navigation__close') : null;

  
  toggle.addEventListener('click', () => {
    if (!isHeaderOpened()) {
      header.classList.add('header--opened');
      window.disableBodyScroll(menu);

      setTimeout(() => {
        document.activeElement.blur();
      }, 300);
    }
  });

  close.addEventListener('click', () => {
    if (isHeaderOpened()) {
      closeMenu(menu);
    }     
  });  
};

export {initHeader};


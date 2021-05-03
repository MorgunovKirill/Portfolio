let pageHeader = document.querySelector('.page-header');

const script = () => {
  if (!pageHeader) {
    return;
  }

  let headerToggle = document.querySelector('.page-header__toggle');
  let overlayMenu = document.querySelector('.overlay-menu');
  let footer = document.querySelector('.page-footer');
  let body = document.querySelector('body');

  pageHeader.classList.remove('page-header--nojs');

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('page-header--closed')) {
      pageHeader.classList.remove('page-header--closed');
      pageHeader.classList.add('page-header--opened');
      headerToggle.style.backgroundImage = 'url(\'../img2/close.svg\')';
      overlayMenu.classList.add('modal-show');
      footer.style.display = 'flex';
      body.classList.add('overflow-hidden');
    } else {
      pageHeader.classList.add('page-header--closed');
      pageHeader.classList.remove('page-header--opened');
      headerToggle.style.backgroundImage = 'url(\'../img2/burger.svg\')';
      overlayMenu.classList.remove('modal-show');
      footer.style.display = 'none';
      body.classList.remove('overflow-hidden');
    }
  });
};

export {script};

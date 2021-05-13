const updateActiveAccotdion = () => {
  const activeContent = document.querySelectorAll('.accordion__content.active');
  if (activeContent.length) {
    activeContent.forEach((el) => {
      el.style.transition = 'none';
      el.style.maxHeight = el.scrollHeight + 'px';

      setTimeout(() => {
        el.style.transition = null;
      }, 300);
    });
  }
};

const initAccordionAction = (accordion) => {
  const breakpointSm = window.matchMedia('(max-width: 767px)');
  const breakpointMd = window.matchMedia('(max-width: 1024px)');
  const btn = accordion.querySelector('.accordion__btn');
  const contents = accordion.querySelectorAll('.accordion__content');

  contents.forEach((content) => {
    const parent = accordion.closest('.accordion__content');

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.blur();
        const maxHeight = content.style.maxHeight;

        if (maxHeight) {
          content.style.maxHeight = null;
          btn.classList.remove('active');
          content.classList.remove('active');
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          btn.classList.add('active');
          content.classList.add('active');
        }
        if (parent) {
          parent.style.maxHeight = parent.scrollHeight + content.scrollHeight + 'px';
        }
      });
    }

    if (accordion.dataset.resolution === 'only-mobile') {
      const breakpointChecker = () => {
        if (breakpointSm.matches) {
          btn.removeAttribute('tabindex');
          btn.style.pointerEvents = 'auto';
        } else {
          btn.setAttribute('tabindex', '-1');
          btn.style.pointerEvents = 'none';
        }
      };
      breakpointSm.addListener(breakpointChecker);

      breakpointChecker();
    }

    if (accordion.dataset.resolution === 'only-tablet') {
      const breakpointChecker = () => {
        if (breakpointMd.matches) {
          btn.removeAttribute('tabindex');
          btn.style.pointerEvents = 'auto';
        } else {
          btn.setAttribute('tabindex', '-1');
          btn.style.pointerEvents = 'none';
        }
      };
      breakpointMd.addListener(breakpointChecker);

      breakpointChecker();
    }
  });
};

const initAccordion = () => {
  const accordions = document.querySelectorAll('.accordion');
  if (accordions.length) {
    updateActiveAccotdion();
    window.addEventListener('resize', updateActiveAccotdion);
    accordions.forEach((accordion) => initAccordionAction(accordion));
  }
};

export {initAccordion};

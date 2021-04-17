import MoveTo from '../vendor/move-to';

const initMove = () => {
    const navList = document.querySelectorAll('.header__link');
  
    if (navList.length) {
      navList.forEach(function (trigger) {
        const moveTo = new MoveTo({
          // tolerance: 120,
          duration: 1500,
        });
  
        moveTo.registerTrigger(trigger);
      });
    }
}

export {initMove};
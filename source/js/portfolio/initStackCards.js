const stackCards = document.querySelectorAll('.stack__info');

const initStackCards = () => {
   if (!stackCards.length) {
       return;
   }    

   stackCards.forEach((card) => {
    const btn = card.closest('.stack__item').querySelector('.stack__btn'); 
    console.log(btn);
    
    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.blur();
            const maxHeight = card.style.maxHeight;

            if (maxHeight) {
                card.style.maxHeight = null;
                btn.classList.remove('active');
                card.classList.remove('active');
            } else {
                card.style.maxHeight = card.scrollHeight + 'px';
                btn.classList.add('active');
                card.classList.add('active');
            }
       })
    } 
   })

 
}

export {initStackCards};
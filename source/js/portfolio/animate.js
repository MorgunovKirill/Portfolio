const animate = () => {
    const animItems = document.querySelectorAll('.anim-items');

    if (animItems.length) {
        window.addEventListener('scroll', animOnScroll);
    
        function offset(el) {
            const rect = el.getBoundingClientRect();
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top : rect.top + scrollTop, left: rect.left + scrollLeft}    
        }
    
        function animOnScroll() {
            for(let i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top
                const ANIM_START  = 4;
    
                let animItemPoint = window.innerHeight - animItemHeight / ANIM_START;
    
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight = window.innerHeight / ANIM_START;
                }
    
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('anim-active');
                } else {
                    if (!animItem.classList.contains('anim-no-hide')) {
                        animItem.classList.remove('anim-active');
                    }
                }
            }
        }
        setTimeout(() => {
            animOnScroll();
        }, 300)
    }
}

export {animate};
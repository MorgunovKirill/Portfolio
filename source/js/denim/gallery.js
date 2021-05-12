const gallery = document.querySelector('.gallery__gallery');

const initGallery = () => {
  if (!gallery) {
    return;
  }

  let mainImage = gallery.querySelector('.gallery__main-image').querySelector('img');
  let images = gallery.querySelectorAll('.gallery__image');
 
  images.forEach((item) => {
      item.addEventListener('click', () => {
        let newMainSrc = item.querySelector('img').src;
        let oldMainSrc = mainImage.src;

        mainImage.src = newMainSrc;
        item.querySelector('img').src = oldMainSrc;
      });
  })
};

export {initGallery};

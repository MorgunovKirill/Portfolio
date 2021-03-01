const themes = () => {
  const dot1 = document.querySelector('.jsDot1');
  const dot2 = document.querySelector('.jsDot2');
  const dot3 = document.querySelector('.jsDot3');
  const image1 = document.querySelector('.intro__main-image--cream');
  const image2 = document.querySelector('.intro__main-image--chocolate');
  const image3 = document.querySelector('.intro__main-image--strawberry');
  const heading = document.querySelector('.intro__heading');
  const body = document.querySelector('body');

  dot1.addEventListener('click', function () {
    dot1.classList.add('themes__dot--active');
    dot2.classList.remove('themes__dot--active');
    dot3.classList.remove('themes__dot--active');
    image1.style.display = 'block';
    image2.style.display = 'none';
    image3.style.display = 'none';
    heading.textContent = 'Крем-брюле и пломбир с малиновым джемом';
    body.style.backgroundColor = '#849d8f';
  });

  dot2.addEventListener('click', function () {
    dot2.classList.add('themes__dot--active');
    dot1.classList.remove('themes__dot--active');
    dot3.classList.remove('themes__dot--active');
    image1.style.display = 'none';
    image2.style.display = 'block';
    image3.style.display = 'none';
    heading.textContent = 'Шоколадный пломбир и лимонный сорбет';
    body.style.backgroundColor = '#8996a6';
  });

  dot3.addEventListener('click', function () {
    dot3.classList.add('themes__dot--active');
    dot1.classList.remove('themes__dot--active');
    dot2.classList.remove('themes__dot--active');
    image1.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'block';
    heading.textContent = 'Пломбир с помадкой и клубничный щербет';
    body.style.backgroundColor = '#9d8b84';
  });
};

export {themes};

const questslist = document.querySelector('.select__list');

const filter = () => {
  if (!questslist) {
    return;
  }

  const filterByType = (item, type) => {
    return type.includes('all') ? true : item.dataset.type.split(' ').includes(type);
  };

  const filterQuests = (array, type) => {
    let filtered = [];

    for (let i = 0; i < array.length; i++) {
      if (
        filterByType(array[i], type)
      ) {
        filtered.push(array[i]);
      }
    }

    return filtered;
  };

  const questsTypes = questslist.querySelectorAll('.select__link');
  const gallery = document.querySelector('.gallery');
  const quests = gallery.querySelectorAll('.gallery__item');

  questsTypes.forEach((element) => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      gallery.innerHTML = '';
      let filteredQuests = filterQuests(quests, element.closest('.select__item').dataset.type);
      filteredQuests.forEach((el) => {
        gallery.append(el);
      });
    });
  });

};

export {filter};

import {modal} from './escaperoom/modal';
import {script} from './escaperoom/script';
import {select} from './escaperoom/select';
import {filter} from './escaperoom/filter';

// Utils
// ---------------------------------


// Modules
// ---------------------------------

document.addEventListener('DOMContentLoaded', () => {
  modal();
  script();
  select();
  filter();
});

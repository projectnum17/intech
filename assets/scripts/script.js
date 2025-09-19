'use strict';

import { headerFlow as header } from './modules/headerFlow.js';
import { productGallery as slider } from './modules/productGallery.js';
import { feedBackForm as form } from './modules/feedBackForm.js';
import helpers from './modules/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
    header();
    slider();
    form();
    helpers();
});

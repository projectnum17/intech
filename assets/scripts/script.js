'use strict';

import { headerFlow as header } from './modules/headerFlow.js';
import { productGallery as slider } from './modules/productGallery.js';
import { feedBackForm as form } from './modules/feedBackForm.js';
import { faqBoxes as faq } from './modules/faqBoxes.js';
import mapHandler from './modules/mapHandler.js';
import vacancyModal from './modules/vacancyModal.js';
import helpers from './modules/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
    header();
    slider();
    form();
    faq();
    mapHandler();
    vacancyModal();
    helpers();
});

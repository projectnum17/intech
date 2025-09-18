'use strict';

import { headerFlow as header } from './modules/headerFlow.js';
import helpers from './modules/helpers.js';
import feedBackForm from './modules/feedBackForm.js';

document.addEventListener('DOMContentLoaded', () => {
    header();
    helpers();
    feedBackForm();
});

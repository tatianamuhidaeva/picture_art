window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  require('es6-promise').polyfill();
  require('formdata-polyfill');
  let requestAnimationFrame = require('./parts/RequestAnimationFrame.js'),
    mainSlider = require('./parts/mainSlider.js'),
    popupDesign = require('./parts/popupDesign.js'),
    popupGift = require('./parts/popupGift.js'),
    popupConsultation = require('./parts/popupConsultation.js'),
    moreStyles = require('./parts/moreStyles.js'),
    calc = require('./parts/calc.js'),
    filterPhoto = require('./parts/filterPhoto.js');


  requestAnimationFrame();
  mainSlider();
  popupDesign();
  popupGift();
  popupConsultation();
  moreStyles();
  calc();
  filterPhoto();
});
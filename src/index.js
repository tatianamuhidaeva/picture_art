window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  require('es6-promise').polyfill();
  require('formdata-polyfill');
  let requestAnimationFrame = require('./parts/RequestAnimationFrame.js'),
      mainSlider = require('./parts/mainSlider.js');

  requestAnimationFrame();
  mainSlider();
});
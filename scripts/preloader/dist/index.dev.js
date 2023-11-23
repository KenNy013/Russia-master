"use strict";

ninelines.Preloader.init(5000).then(function () {
  document.querySelector('.preloader').style.display = 'none';
  document.querySelector('body').style.overflowY = 'scroll';
});
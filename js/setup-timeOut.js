'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var onAddHiddenWidthKeydown = function (evt) {
  if (evt.keyCode === 27) {
    setup.classList.add('hidden');
  }
};
var onRemoweHiddenWidthKeydown = function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove('hidden');
  }
  window.addEventListener('keydown', onAddHiddenWidthKeydown);
};
var onRemoveHiddenInSetapOpen = function () {
  setup.classList.remove('hidden');
  window.addEventListener('keydown', onAddHiddenWidthKeydown);
};
setupOpen.addEventListener('click', onRemoveHiddenInSetapOpen);
var setupClose = setup.querySelector('.setup-close');
var onCloseSetup = function () {
  setup.classList.add('hidden');
};
setupOpen.addEventListener('keydown', onRemoweHiddenWidthKeydown);
setupClose.addEventListener('click', onCloseSetup);


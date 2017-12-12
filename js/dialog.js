'use strict';
(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var getCoatColor = function () {
    var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    return wizardCoatColor[Math.floor(Math.random() * wizardCoatColor.length)];
  };
  var getWizardEyes = function () {
    var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
    return wizardEyesColor[Math.floor(Math.random() * wizardEyesColor.length)];
  };
  var getWizardFireball = function () {
    var wizardFireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    return wizardFireballColor[Math.floor(Math.random() * wizardFireballColor.length)];
  };
  document.querySelector('.setup-similar').classList.remove('hidden');
  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };
  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var userNameInput = setup.querySelector('.setup-user-name');
  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.toShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.toLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });
  var wizardCoat = document.querySelector('.wizard-coat');
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = getCoatColor();
  });
  var wizardEyes = document.querySelector('.wizard-eyes');
  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = getWizardEyes();
  });
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.background = getWizardFireball();
  });
  userNameInput.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      evt.stopPropagation();
    }
  });
})();
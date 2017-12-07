'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var getFullName = function () {
  var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var name = wizardsNames[Math.floor(Math.random() * wizardsNames.length)];
  var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var familes = wizardsSurnames[Math.floor(Math.random() * wizardsSurnames.length)];
  var arr;
  if (name === familes) {
    arr = name;
  } else {
    arr = name + familes;
  }
  return arr;
};
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
var getWizards = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: getFullName(),
      coatColor: getCoatColor(),
      eyesColor: getWizardEyes()
    };
  }
  return wizards;
};
var addTemplate = function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardFragment = document.createDocumentFragment();
  for (var j = 0; j < getWizards().length; j++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = getWizards()[j].name;
    wizardElement.querySelector('.wizard-coat').style.fill = getWizards()[j].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = getWizards()[j].eyesColor;
    wizardFragment.appendChild(wizardElement);
  }
  document.querySelector('.setup-similar-list').appendChild(wizardFragment);
};
addTemplate();
document.querySelector('.setup-similar').classList.remove('hidden');
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
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
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});
setupClose.addEventListener('click', function () {
  closePopup();
});
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name');
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
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
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
});

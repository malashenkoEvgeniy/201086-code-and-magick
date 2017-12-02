'use strict';
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


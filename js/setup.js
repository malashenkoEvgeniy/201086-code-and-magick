'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var wizardFullName = function (names, familes) {
  var arr = [];
  for (var i = 0; i < 4; i++) {
    var k = Math.floor(Math.random() * 10);
    if ((k % 2) === 0) {
      arr.push(names[Math.floor(Math.random() * names.length)] + ' ' + familes[Math.floor(Math.random() * familes.length)]);
    } else {
      arr.push(familes[Math.floor(Math.random() * familes.length)] + ' ' + names[Math.floor(Math.random() * names.length)]);
    }
  }
  return arr;
};
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var coat = function (colorCoat) {
  var randomColor = [];
  for (var i = 0; i < 4; i++) {
    randomColor.push(colorCoat[Math.floor(Math.random() * colorCoat.length)]);
  }
  return randomColor;
};
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardEyes = function (colorEyes) {
  var randomColor = [];
  for (var i = 0; i < 4; i++) {
    randomColor.push(colorEyes[Math.floor(Math.random() * colorEyes.length)]);
  }
  return randomColor;
};
var wizards = [];
for (var i = 0; i < 4; i++) {
  wizards[i] = {
    name: wizardFullName(wizardsNames, wizardsSurnames)[i],
    coatColor: coat(wizardCoatColor)[i],
    eyesColor: wizardEyes(wizardEyesColor)[i]
  };
}
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
for (var j = 0; j < wizards.length; j++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;//????????
  similarListElement.appendChild(wizardElement);
}
document.querySelector('.setup-similar').classList.remove('hidden');

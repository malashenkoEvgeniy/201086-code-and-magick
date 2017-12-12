'use strict';
(function () {
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
})();

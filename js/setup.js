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
  var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var fillElement = function (element, color) {
    element.style.fill = color;
  };
  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  var getWizards = function () {
    var wizards = [];
    for (var i = 0; i < 4; i++) {
      wizards[i] = {
        name: getFullName()
      };
    }
    return wizards;
  };
  wizardCoat.addEventListener('click', function () {
    window.colorizeElement(wizardCoat, wizardCoatColors, fillElement);
  });
  wizardEyes.addEventListener('click', function () {
    window.colorizeElement(wizardEyes, wizardEyesColor, fillElement);
  });
  wizardFireball.addEventListener('click', function () {
    window.colorizeElement(wizardFireball, wizardFireballColors, changeElementBackground);
  });
  var addTemplate = function () {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
    var wizardFragment = document.createDocumentFragment();
    for (var j = 0; j < getWizards().length; j++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = getWizards()[j].name;
      window.colorizeElement(wizardElement.querySelector('.wizard-coat'), wizardCoatColors, fillElement);
      window.colorizeElement(wizardElement.querySelector('.wizard-eyes'), wizardEyesColor, fillElement);
      wizardFragment.appendChild(wizardElement);
    }
    document.querySelector('.setup-similar-list').appendChild(wizardFragment);
  };
  addTemplate();
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  });
  shopElement.addEventListener('dragend', function () {
    artifactsElement.style.outline = '';
  });

  var artifactsElement = document.querySelector('.setup-artifacts');

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem.cloneNode(true));
    evt.preventDefault();
  });


  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

})();

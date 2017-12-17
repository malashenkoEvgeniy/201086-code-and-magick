'use strict';
(function () {
  window.colorizeElement = function(element, colors, callback) {
    var color = colors[Math.floor(Math.random() * colors.length)];
    if (typeof callback === 'function') {
      callback(element, color);
    }
  };
})();

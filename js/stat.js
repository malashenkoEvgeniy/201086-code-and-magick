'use strict';

var getMaxElement = function (arr) {
  var max = -1;
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px Mono';
  ctx.fillText('Ура вы победили!', 170, 40);
  ctx.fillText('Список результатов:', 170, 70);
  var histogramHeight = 150;
  var step = -histogramHeight / getMaxElement(times);
  var indent = 50;
  var initialX = 150;
  var columnWidth = 40;
  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
    }
    ctx.fillRect(initialX, 240, columnWidth, times[i] * step);
    ctx.fillStyle = '#000';
    ctx.font = '16px Mono';
    ctx.fillText(names[i], initialX, 260);
    initialX = initialX + indent + columnWidth;
  }
};

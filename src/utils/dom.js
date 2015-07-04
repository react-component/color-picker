'use strict';

let utils = require('dom-align/lib/utils');

function getRegion(node) {
  let offset, w, h;
  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    let win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

function getAlignOffset(targetRegion, referRegion, align, offset) {
  let x, y;

  x = referRegion.left;
  y = referRegion.top;

  if (align === 'right') {
    x += referRegion.width;
  } else if (align === 'left') {
    x -= targetRegion.width + offset[0] * 2;
  }

  return {
    left: x + offset[0],
    top: y + offset[1]
  };
}

function getAlign(targetNode, referNode, align, offset = [0, 0]) {
  let referRegion = getRegion(referNode);
  let targetRegion = getRegion(targetNode);
  return getAlignOffset(targetRegion, referRegion, align, offset);
}

module.exports = {
  getRegion, getAlign
};

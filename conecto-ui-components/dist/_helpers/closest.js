"use strict";

exports.__esModule = true;
exports.default = void 0;

function closest(el, selector) {
  var matchesFn // find vendor prefix
  ;
  ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
    if (typeof document.body[fn] == 'function') {
      matchesFn = fn;
      return true;
    }

    return false;
  });
  var parent; // traverse parents

  while (el) {
    parent = el.parentElement;

    if (parent && parent[matchesFn](selector)) {
      return parent;
    }

    el = parent;
  }

  return null;
}

var _default = closest;
exports.default = _default;
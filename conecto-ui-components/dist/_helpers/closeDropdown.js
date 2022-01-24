"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _closest = _interopRequireDefault(require("./closest"));

const closeDropdown = e => {
  Object.keys(window.TO_DROPDOWN_IDS).forEach(dropdownId => {
    if ((0, _closest.default)(e.target, `#${dropdownId}`) === null) {
      window.TO_DROPDOWN_IDS[dropdownId](e);
    }
  });
};

var _default = closeDropdown;
exports.default = _default;
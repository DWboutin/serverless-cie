"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _omit = _interopRequireDefault(require("omit.js"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Label = _interopRequireDefault(require("./Label"));

var _InputError = _interopRequireDefault(require("./InputError"));

const DropdownChoice = ({
  value,
  className,
  selected,
  children,
  onClick
}) => {
  const classes = (0, _classnames.default)({
    'to-dropdown-choice': true,
    selected: selected,
    [`${className}`]: className
  });
  return _react.default.createElement("span", {
    className: classes,
    "data-value": value,
    onClick: onClick
  }, children);
};

DropdownChoice.defaultProps = {};
DropdownChoice.propTypes = {
  children: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  selected: _propTypes.default.bool
};
var _default = DropdownChoice;
exports.default = _default;
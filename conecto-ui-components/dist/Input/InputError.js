"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const InputError = ({
  children
}) => _react.default.createElement("div", {
  className: "to-input-error"
}, children);

InputError.defaultProps = {};
InputError.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired
};
var _default = InputError;
exports.default = _default;
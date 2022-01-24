"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Label = _interopRequireDefault(require("./Label"));

var _InputError = _interopRequireDefault(require("./InputError"));

const CheckboxGroup = ({
  label,
  children,
  error
}) => _react.default.createElement("div", {
  className: "to-checkbox-group"
}, label && _react.default.createElement(_Label.default, {
  className: "to-checkbox-group-label"
}, label), children, error && _react.default.createElement(_InputError.default, null, error));

CheckboxGroup.defaultProps = {};
CheckboxGroup.propTypes = {
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
  error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  children: _propTypes.default.arrayOf(_propTypes.default.element).isRequired
};
var _default = CheckboxGroup;
exports.default = _default;
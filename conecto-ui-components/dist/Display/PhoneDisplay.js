"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _PhoneShape = _interopRequireDefault(require("../SVG/PhoneShape"));

const PhoneDisplay = ({
  className,
  logo,
  button,
  children,
  bottomSvgComponent
}) => {
  const classes = (0, _classnames.default)({
    'to-phone-display': true,
    [`${className}`]: className
  });
  return _react.default.createElement("div", {
    className: classes
  }, _react.default.createElement(_PhoneShape.default, null), _react.default.createElement("div", {
    className: "phone-wrapper"
  }, _react.default.createElement("div", {
    className: "wrapper"
  }, _react.default.createElement("div", {
    className: "header"
  }, _react.default.createElement("div", {
    className: "logo"
  }, logo), _react.default.createElement("div", {
    className: "button"
  }, button)), _react.default.createElement("div", {
    className: "content"
  }, _react.default.createElement("div", {
    className: "text-content"
  }, children), _react.default.createElement("div", {
    className: "bottom-svg"
  }, bottomSvgComponent)))));
};

PhoneDisplay.defaultProps = {};
PhoneDisplay.propTypes = {
  logo: _propTypes.default.element.isRequired,
  button: _propTypes.default.element.isRequired,
  children: _propTypes.default.any.isRequired,
  bottomSvgComponent: _propTypes.default.element.isRequired
};
var _default = PhoneDisplay;
exports.default = _default;
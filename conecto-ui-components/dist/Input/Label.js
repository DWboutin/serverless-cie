"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const Label = ({
  htmlFor,
  className,
  id,
  children
}) => _react.default.createElement("label", {
  htmlFor: htmlFor,
  className: className,
  id: id
}, children);

Label.defaultProps = {};
Label.propTypes = {
  htmlFor: _propTypes.default.string,
  className: _propTypes.default.string,
  id: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired
};
var _default = Label;
exports.default = _default;
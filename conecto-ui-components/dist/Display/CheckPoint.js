"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireWildcard(require("../Icon"));

const CheckPoint = ({
  className,
  iconType,
  children
}) => {
  const classes = (0, _classnames.default)({
    'to-check-point': true,
    [`${className}`]: className
  });
  return _react.default.createElement("div", {
    className: classes
  }, _react.default.createElement("div", {
    className: "circle"
  }, _react.default.createElement("div", {
    className: "icon"
  }, _react.default.createElement(_Icon.default, {
    type: iconType
  }))), _react.default.createElement("span", {
    className: "text"
  }, _react.default.createElement("span", null, children)));
};

CheckPoint.defaultProps = {
  iconType: 'check'
};
CheckPoint.propTypes = {
  iconType: _Icon.IconTypePropTypes,
  className: _propTypes.default.string,
  children: _propTypes.default.string.isRequired
};
var _default = CheckPoint;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

const CardStat = ({
  className,
  type,
  icon,
  title,
  children
}) => {
  const classes = (0, _classnames.default)({
    'to-card': true,
    [`to-card-${type}`]: type,
    'to-card-stat': true,
    [`${className}`]: className
  });
  return _react.default.createElement("div", {
    className: classes
  }, _react.default.createElement("div", {
    className: "header"
  }, _react.default.createElement("span", {
    className: "circle"
  }, icon), _react.default.createElement("span", {
    className: "title"
  }, title)), _react.default.createElement("div", {
    className: "to-card-wrap"
  }, children));
};

CardStat.defaultProps = {
  type: 'bordered'
};
CardStat.propTypes = {
  type: _propTypes.default.oneOf(['bordered', 'shadowed']).isRequired,
  children: _propTypes.default.any.isRequired,
  icon: _propTypes.default.element.isRequired
};
var _default = CardStat;
exports.default = _default;
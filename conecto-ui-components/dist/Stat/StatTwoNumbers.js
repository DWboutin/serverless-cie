"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _omit = _interopRequireDefault(require("omit.js"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCountup = _interopRequireDefault(require("react-countup"));

var _Card = require("../Card");

const StatTwoNumbers = ({
  className,
  icon,
  title,
  number1,
  number2,
  notice1,
  notice2,
  suffix1,
  suffix2,
  disabled1,
  disabled2
}) => {
  const classes = (0, _classnames.default)({
    'to-stat-two-numbers': true,
    [`${className}`]: className
  });
  return _react.default.createElement(_Card.CardStat, {
    className: classes,
    icon: icon,
    title: title
  }, _react.default.createElement("div", {
    className: `number ${disabled1 && 'disabled'}`
  }, _react.default.createElement("div", {
    className: "card"
  }, _react.default.createElement("span", null, _react.default.createElement(_reactCountup.default, {
    end: number1,
    duration: "2"
  }), suffix1)), _react.default.createElement("div", {
    className: "notice"
  }, notice1)), _react.default.createElement("div", {
    className: `number ${disabled2 && 'disabled'}`
  }, _react.default.createElement("div", {
    className: "card"
  }, _react.default.createElement("span", null, _react.default.createElement(_reactCountup.default, {
    end: number2,
    duration: "2"
  }), suffix2)), _react.default.createElement("div", {
    className: "notice"
  }, notice2)));
};

StatTwoNumbers.defaultProps = {
  disabled1: false,
  disabled2: false,
  suffix1: '',
  suffix2: '',
  notice1: '',
  notice2: ''
};
StatTwoNumbers.propTypes = {
  className: _propTypes.default.string,
  icon: _propTypes.default.node.isRequired,
  title: _propTypes.default.string.isRequired,
  number1: _propTypes.default.number.isRequired,
  suffix1: _propTypes.default.string.isRequired,
  notice1: _propTypes.default.string.isRequired,
  disabled1: _propTypes.default.bool.isRequired,
  number2: _propTypes.default.number.isRequired,
  suffix2: _propTypes.default.string.isRequired,
  notice2: _propTypes.default.string.isRequired,
  disabled2: _propTypes.default.bool.isRequired
};
var _default = StatTwoNumbers;
exports.default = _default;
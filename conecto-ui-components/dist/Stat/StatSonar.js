"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCountup = _interopRequireDefault(require("react-countup"));

var _Card = require("../Card");

var _Icon = _interopRequireDefault(require("../Icon"));

const StatSonar = ({
  className,
  icon,
  title,
  number,
  suffix
}) => {
  const classes = (0, _classnames.default)({
    'to-stat-sonar': true,
    [`${className}`]: className
  });
  return _react.default.createElement(_Card.CardStat, {
    className: classes,
    icon: icon,
    title: title
  }, _react.default.createElement("div", {
    className: "sonar"
  }, _react.default.createElement("div", {
    className: "inner-sonar"
  }, _react.default.createElement("div", {
    className: "number"
  }, _react.default.createElement("span", null, _react.default.createElement(_reactCountup.default, {
    end: number,
    duration: "2"
  }), suffix))), _react.default.createElement("div", {
    className: "icon-sonar"
  }, _react.default.createElement("div", {
    className: "icon-sonar-wrap"
  }, _react.default.createElement("span", null, _react.default.createElement(_Icon.default, {
    type: "marker"
  }))))));
};

StatSonar.defaultProps = {};
StatSonar.propTypes = {
  className: _propTypes.default.string,
  icon: _propTypes.default.node.isRequired,
  title: _propTypes.default.string.isRequired,
  number: _propTypes.default.number.isRequired,
  suffix: _propTypes.default.string
};
var _default = StatSonar;
exports.default = _default;
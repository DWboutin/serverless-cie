"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCountup = require("react-countup");

var _Card = require("../Card");

const StatCircle = ({
  className,
  icon,
  title,
  notice,
  number
}) => {
  const {
    countUp
  } = (0, _reactCountup.useCountUp)({
    start: 0,
    end: number,
    delay: 0,
    duration: 2
  });
  const classes = (0, _classnames.default)({
    'to-stat-circle': true,
    [`${className}`]: className
  });
  return _react.default.createElement(_Card.CardStat, {
    className: classes,
    icon: icon,
    title: title
  }, _react.default.createElement("div", {
    className: `progress-circle p${countUp} ${countUp >= 50 && 'over50'}`
  }, _react.default.createElement("span", null, countUp, "%"), _react.default.createElement("div", {
    className: "left-half-clipper"
  }, _react.default.createElement("div", {
    className: "first50-bar"
  }), _react.default.createElement("div", {
    className: "value-bar"
  }))), notice && _react.default.createElement("div", {
    className: "notice"
  }, notice));
};

StatCircle.defaultProps = {};
StatCircle.propTypes = {
  className: _propTypes.default.string,
  icon: _propTypes.default.node.isRequired,
  title: _propTypes.default.string.isRequired,
  number: _propTypes.default.number.isRequired,
  notice: _propTypes.default.string
};
var _default = StatCircle;
exports.default = _default;
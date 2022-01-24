"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

const CTACard = ({
  className,
  children,
  image,
  button,
  withOverlap,
  ...props
}) => {
  const classes = (0, _classnames.default)({
    'to-card': true,
    'to-card-cta': true,
    'with-overlap': withOverlap,
    [`${className}`]: className
  });
  const componentProps = (0, _omit.default)(props, ['className', 'children', 'image', 'button', 'withOverlap']);
  return _react.default.createElement("div", Object.assign({
    className: classes
  }, componentProps), _react.default.createElement("div", {
    className: "content"
  }, children), _react.default.createElement("div", {
    className: "cta"
  }, _react.default.createElement("div", {
    className: "image"
  }, _react.default.createElement("div", {
    className: "image-wrap"
  }, image), button)));
};

CTACard.defaultProps = {
  withOverlap: false
};
CTACard.propTypes = {
  withOverlap: _propTypes.default.bool.isRequired,
  button: _propTypes.default.element.isRequired,
  children: _propTypes.default.any.isRequired,
  image: _propTypes.default.node.isRequired
};
var _default = CTACard;
exports.default = _default;
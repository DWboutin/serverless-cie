"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

const Card = ({
  className,
  withIcon,
  type,
  icon,
  children,
  ...props
}) => {
  const classes = (0, _classnames.default)({
    'to-card': true,
    [`to-card-${type}`]: type,
    ['to-card-with-icon']: withIcon,
    [`${className}`]: className
  });
  const componentProps = (0, _omit.default)(props, ['className', 'withIcon', 'type', 'icon', 'children']);
  return _react.default.createElement("div", Object.assign({
    className: classes
  }, componentProps), withIcon && _react.default.createElement("div", {
    className: "icon-wrapper"
  }, icon), _react.default.createElement("div", {
    className: "to-card-wrap"
  }, children));
};

Card.defaultProps = {
  withIcon: false,
  type: 'bordered'
};
Card.propTypes = {
  type: _propTypes.default.oneOf(['bordered', 'shadowed']).isRequired,
  withIcon: _propTypes.default.bool.isRequired,
  children: _propTypes.default.any.isRequired,
  icon: _propTypes.default.element
};
var _default = Card;
exports.default = _default;
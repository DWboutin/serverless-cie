"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const TabTitle = ({
  className,
  active,
  title,
  onClick,
  clickDisabled,
  index
}) => {
  const classes = (0, _classnames.default)({
    ['to-tabs-title']: true,
    [`${className}`]: className,
    'click-disabled': clickDisabled,
    active: active
  });
  const compProp = {};

  if (!clickDisabled) {
    compProp.onClick = onClick;
  }

  return _react.default.createElement("li", Object.assign({
    className: classes,
    "data-index": index
  }, compProp), _react.default.createElement("span", null, title));
};

TabTitle.defaultProps = {
  clickDisabled: false
};
TabTitle.propTypes = {
  className: _propTypes.default.string,
  active: _propTypes.default.bool,
  clickDisabled: _propTypes.default.bool,
  index: _propTypes.default.number.isRequired,
  title: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
var _default = TabTitle;
exports.default = _default;
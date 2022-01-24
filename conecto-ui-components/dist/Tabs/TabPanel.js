"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const TabPanel = ({
  className,
  children,
  inactive
}) => {
  const classes = (0, _classnames.default)({
    ['to-tabs-panel']: true,
    [`${className}`]: className,
    inactive: inactive
  });
  return _react.default.createElement("div", {
    className: classes
  }, children);
};

TabPanel.defaultProps = {
  clickDisabled: false
};
TabPanel.propTypes = {
  clickDisabled: _propTypes.default.bool.isRequired
};
var _default = TabPanel;
exports.default = _default;
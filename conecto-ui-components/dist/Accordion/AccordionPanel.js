"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _omit = _interopRequireDefault(require("omit.js"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

class AccordionPanel extends _react.default.Component {
  constructor(props) {
    super(props);
    this.classesPrefix = 'to-accordion-panel';
  }

  render() {
    const {
      className,
      onClick,
      isActive,
      title,
      children
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      active: isActive,
      [`${className}`]: className
    });
    const componentProps = (0, _omit.default)(this.props, ['className', 'onClick', 'title', 'isActive']);
    return _react.default.createElement("div", {
      className: classes
    }, _react.default.createElement("div", {
      className: "to-accordion-panel-title",
      onClick: onClick
    }, _react.default.createElement("div", {
      className: "text"
    }, title), _react.default.createElement("div", {
      className: "arrow"
    }, _react.default.createElement(_Icon.default, {
      type: "arrow-down"
    }))), _react.default.createElement("div", {
      className: "to-accordion-panel-content"
    }, _react.default.createElement("div", {
      className: "content-wrap"
    }, children)));
  }

}

AccordionPanel.defaultProps = {
  isActive: false
};
AccordionPanel.propTypes = {
  className: _propTypes.default.string,
  onClick: _propTypes.default.func.isRequired,
  title: _propTypes.default.any.isRequired
};
var _default = AccordionPanel;
exports.default = _default;
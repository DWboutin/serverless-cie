"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _omit = _interopRequireDefault(require("omit.js"));

var _classnames = _interopRequireDefault(require("classnames"));

class Button extends _react.default.Component {
  constructor(props) {
    super(props);
    this.classesPrefix = 'to-btn';
  }

  render() {
    const {
      className,
      disabled,
      htmlType,
      handleClick,
      comp,
      active
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      active: active,
      'is-disabled': disabled,
      [`${this.classesPrefix}-${this.props.type}`]: this.props.type,
      [`${className}`]: className
    });
    const componentProps = (0, _omit.default)(this.props, ['comp', 'handleClick', 'htmlType', 'active']);
    return _react.default.createElement(comp, { ...componentProps,
      type: comp === 'button' ? htmlType : '',
      onClick: handleClick,
      className: classes
    });
  }

}

Button.defaultProps = {
  comp: 'button',
  htmlType: 'button',
  type: 'primary'
};
Button.propTypes = {
  comp: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.symbol]),
  active: _propTypes.default.bool,
  htmlType: _propTypes.default.string,
  type: _propTypes.default.oneOf(['primary', 'bordered', 'ghost', 'underlined', 'menu', 'switch', 'filter', 'account', 'roofing']),
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  handleClick: _propTypes.default.func
};
var _default = Button;
exports.default = _default;
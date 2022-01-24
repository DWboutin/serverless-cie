"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _omit = _interopRequireDefault(require("omit.js"));

var _classnames = _interopRequireDefault(require("classnames"));

var _InputError = _interopRequireDefault(require("./InputError"));

class Switch extends _react.default.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.checked || false,
      focus: props.focused || false
    };
    this.switch = _react.default.createRef();
    this.classesPrefix = 'to-switch';
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFieldBlur = this.handleFieldBlur.bind(this);
    this.handleFieldFocus = this.handleFieldFocus.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps && nextProps.value) {
      return {
        value: nextProps.value
      };
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        value: ''
      });
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.setState({
        value: !this.state.value
      }, () => {
        this.switch.current.dispatchEvent(new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false
        }));
      });
    }
  }

  handleFieldChange(e) {
    const {
      onChange
    } = this.props;
    this.setState({
      value: e.target.checked
    });

    if (onChange) {
      onChange(e);
    }
  }

  handleFieldBlur() {
    this.setState({
      focus: false
    });
  }

  handleFieldFocus() {
    this.setState({
      focus: true
    });
  }

  render() {
    const {
      id,
      name,
      label,
      error,
      className,
      disabled
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      checked: this.state.value,
      focused: this.state.focus,
      disabled: disabled,
      [`${className}`]: className
    });
    const componentProps = (0, _omit.default)(this.props, ['active', 'placeholder', 'autoComplete', 'onChange', 'onBlur', 'onKeyDown', 'label', 'error', 'value', 'focused', 'checked']);
    return _react.default.createElement("label", {
      htmlFor: id,
      className: classes,
      id: `${this.classesPrefix}-${id}`
    }, _react.default.createElement("div", {
      className: "to-switch-wrap"
    }, _react.default.createElement("div", {
      className: "to-switch-btn"
    }, _react.default.createElement("input", Object.assign({
      type: "checkbox",
      name: name,
      id: id,
      className: "to-input-switch"
    }, componentProps, {
      onChange: this.handleFieldChange,
      onKeyDown: this.handleKeyDown,
      onBlur: this.handleFieldBlur,
      onFocus: this.handleFieldFocus,
      checked: this.state.value,
      ref: this.switch,
      "aria-label": label
    }))), label && _react.default.createElement("div", {
      className: "to-switch-label"
    }, label)), error && _react.default.createElement(_InputError.default, null, error));
  }

}

Switch.defaultProps = {};
Switch.propTypes = {
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
  value: _propTypes.default.bool,
  checked: _propTypes.default.bool,
  focused: _propTypes.default.bool,
  error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  autofocus: _propTypes.default.bool,
  readonly: _propTypes.default.bool
};
var _default = Switch;
exports.default = _default;
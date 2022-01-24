"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _omit = _interopRequireDefault(require("omit.js"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Label = _interopRequireDefault(require("./Label"));

var _InputError = _interopRequireDefault(require("./InputError"));

class Input extends _react.default.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
      focus: false
    };
    this.input = _react.default.createRef();
    this.classesPrefix = 'to-input';
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFieldBlur = this.handleFieldBlur.bind(this);
    this.handleFieldFocus = this.handleFieldFocus.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps && nextProps.value && nextProps.value.length > 0) {
      return {
        value: nextProps.value
      };
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value && this.props.value.length === 0) {
      this.setState({
        value: ''
      });
    }
  }

  handleKeyDown(e) {
    const {
      onPressEnter,
      onKeyDown
    } = this.props;

    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  handleFieldChange(e) {
    e.persist();
    const {
      onChange
    } = this.props;
    this.setState({
      value: e.target.value
    });

    if (onChange) {
      onChange(e);
    }
  }

  handleFieldBlur(e) {
    const {
      onBlur
    } = this.props;
    this.setState({
      value: e.target.value.length > 0 ? e.target.value : '',
      focus: false
    });

    if (onBlur) {
      onBlur(e);
    }
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
      type,
      className,
      active
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      active: this.state.value !== '' || active,
      focused: this.state.focus,
      [`${className}`]: className
    });
    const componentProps = (0, _omit.default)(this.props, ['active', 'onChange', 'onBlur', 'label', 'error']);
    return _react.default.createElement("div", {
      className: classes,
      id: `${this.classesPrefix}-${id}`
    }, _react.default.createElement("input", Object.assign({
      type: type,
      name: name,
      id: id,
      className: "to-input-field"
    }, componentProps, {
      onChange: this.handleFieldChange,
      onFocus: this.handleFieldFocus,
      onBlur: this.handleFieldBlur,
      onKeyDown: this.handleKeyDown,
      value: this.state.value,
      ref: this.input,
      "aria-label": label,
      "aria-labelledby": `${this.classesPrefix}-${id}-label`
    })), label && _react.default.createElement(_Label.default, {
      htmlFor: id,
      className: "to-input-label",
      id: `${this.classesPrefix}-${id}-label`
    }, label), error && _react.default.createElement(_InputError.default, null, error));
  }

}

Input.defaultProps = {
  type: 'text'
};
Input.propTypes = {
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  type: _propTypes.default.oneOf(['text', 'email', 'date', 'email', 'hidden', 'password', 'search', 'tel', 'url']),
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  autoComplete: _propTypes.default.string,
  autofocus: _propTypes.default.bool,
  readonly: _propTypes.default.bool
};
var _default = Input;
exports.default = _default;
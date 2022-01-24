"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Label = _interopRequireDefault(require("./Label"));

var _InputError = _interopRequireDefault(require("./InputError"));

var _closeDropdown = _interopRequireDefault(require("../_helpers/closeDropdown"));

class DropdownList extends _react.default.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      value: props.value || '',
      valueComp: null,
      selectedIndex: 0,
      focus: props.focused || false
    };
    this.select = _react.default.createRef();
    this.choiceContainer = _react.default.createRef();
    this.choices = [];
    this.classesPrefix = 'to-dropdown-list';

    this.addChoiceRef = element => {
      this.choices.push(element);
    };

    this.handleDropdownActivation = this.handleDropdownActivation.bind(this);
    this.handleDropdownClose = this.handleDropdownClose.bind(this);
    this.handleValueSelection = this.handleValueSelection.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFieldBlur = this.handleFieldBlur.bind(this);
    this.handleFieldFocus = this.handleFieldFocus.bind(this);
  }

  componentDidMount() {
    const {
      id,
      value,
      children
    } = this.props;
    let selectedValue = null;
    children.forEach(child => {
      if (child.props.selected === true || child.props.value === value) {
        selectedValue = child.props.value;
      }
    });

    if (selectedValue !== null) {
      this.handleValueSelection(selectedValue);
    }

    if (typeof window.TO_DROPDOWN_LISTENER === 'undefined') {
      window.TO_DROPDOWN_LISTENER = true;
      window.TO_DROPDOWN_IDS = {
        [`to-dropdown-${id}`]: this.handleDropdownClose
      };
      document.addEventListener('click', _closeDropdown.default, false);
    } else {
      window.TO_DROPDOWN_IDS[`to-dropdown-${id}`] = this.handleDropdownClose;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.handleValueSelection(this.props.value);
    }
  }

  componentWillUnmount() {
    const {
      id
    } = this.props;
    delete window.TO_DROPDOWN_IDS[`to-dropdown-${id}`];

    if (Object.keys(window.TO_DROPDOWN_IDS).length === 0) {
      delete window.TO_DROPDOWN_LISTENER;
      document.removeEventListener('click', _closeDropdown.default, false);
    }
  }

  handleKeyDown(e) {
    // e.keyCode 38 = up | e.keyCode 40 = down
    if ([13, 38, 40].indexOf(e.keyCode) === -1) {
      return false;
    } else {
      e.preventDefault();
      const {
        active,
        selectedIndex
      } = this.state;

      if (e.keyCode === 13) {
        if (!active) {
          this.setState({
            active: !active
          });
        } else {
          this.select.current.selectedIndex = selectedIndex;
          this.handleValueSelection(this.props.children[selectedIndex].props.value);
        }
      }

      if (e.keyCode === 38 && selectedIndex > 0) {
        this.setState({
          selectedIndex: selectedIndex - 1
        }, () => {
          this.choiceContainer.current.scrollTop = this.choices[this.state.selectedIndex].offsetTop + 40 - this.choiceContainer.current.clientHeight;
        });
      }

      if (e.keyCode === 40 && selectedIndex < this.props.children.length - 1) {
        this.setState({
          selectedIndex: selectedIndex + 1
        }, () => {
          this.choiceContainer.current.scrollTop = this.choices[this.state.selectedIndex].offsetTop + 40 - this.choiceContainer.current.clientHeight;
        });
      }
    }
  }

  handleDropdownActivation() {
    this.setState({
      active: !this.state.active
    });
  }

  handleDropdownClose() {
    this.select.current.blur();
    this.setState({
      active: false
    });
  }

  handleValueSelection(value) {
    let selectedIndex = 0;
    const valueComp = this.props.children.filter((child, index) => {
      if (child.props.value === value) {
        selectedIndex = index;
        return true;
      }

      return false;
    })[0];
    this.setState({
      active: false,
      value: value,
      valueComp: valueComp,
      selectedIndex
    }, () => {
      // trigger change in select tag
      this.select.current.value = value;
      this.select.current.dispatchEvent(new Event('change', {
        view: window,
        bubbles: true,
        cancelable: false
      }));
    });
  }

  handleFieldChange(e) {
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
      active: false,
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
      className,
      error
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      active: this.state.active,
      selected: this.state.value.length > 0,
      focused: this.state.focus && !this.state.active,
      [`${className}`]: className
    });
    return _react.default.createElement("div", {
      className: classes,
      id: `to-dropdown-${id}`
    }, _react.default.createElement("div", {
      className: "to-dropdown-list-wrap",
      onClick: this.handleDropdownActivation
    }, _react.default.createElement("div", {
      className: "text"
    }, this.state.valueComp), _react.default.createElement("select", {
      id: id,
      name: name,
      ref: this.select,
      value: this.state.value,
      onKeyDown: this.handleKeyDown,
      onChange: this.handleFieldChange,
      onFocus: this.handleFieldFocus,
      onBlur: this.handleFieldBlur,
      "aria-label": label,
      "aria-labelledby": `${this.classesPrefix}-${id}-label`
    }, _react.default.Children.map(this.props.children, child => {
      return _react.default.createElement("option", {
        value: child.props.value
      }, child.props.children);
    })), _react.default.createElement("div", {
      className: "arrow"
    }, _react.default.createElement(_Icon.default, {
      type: "arrow-down"
    }))), _react.default.createElement("div", {
      className: "to-dropdown-list-choices",
      ref: this.choiceContainer
    }, _react.default.createElement("ul", null, _react.default.Children.map(this.props.children, (child, index) => _react.default.createElement("li", {
      className: this.state.selectedIndex === index ? 'selected' : '',
      onClick: () => this.handleValueSelection(child.props.value),
      ref: this.addChoiceRef
    }, child)))), label && _react.default.createElement(_Label.default, {
      htmlFor: id,
      className: "to-dropdown-list-label",
      id: `${this.classesPrefix}-${id}-label`
    }, label), error && _react.default.createElement(_InputError.default, null, error));
  }

}

DropdownList.defaultProps = {
  value: ''
};
DropdownList.propTypes = {
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
  value: _propTypes.default.any,
  error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  autofocus: _propTypes.default.bool,
  readonly: _propTypes.default.bool
};
var _default = DropdownList;
exports.default = _default;
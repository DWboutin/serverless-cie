"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _omit = _interopRequireDefault(require("omit.js"));

var _classnames = _interopRequireDefault(require("classnames"));

var _closest = _interopRequireDefault(require("../_helpers/closest"));

var _closeDropdown = _interopRequireDefault(require("../_helpers/closeDropdown"));

class Button extends _react.default.Component {
  constructor(props) {
    super(props);
    this.classesPrefix = 'to-btn';
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    const {
      id
    } = this.props;

    if (typeof window.TO_DROPDOWN_LISTENER === 'undefined') {
      window.TO_DROPDOWN_LISTENER = true;
      window.TO_DROPDOWN_IDS = {
        [`to-dropdown-${id}`]: this.handleClickOutside
      };
      document.addEventListener('click', _closeDropdown.default, false);
    } else {
      window.TO_DROPDOWN_IDS[`to-dropdown-${id}`] = this.handleClickOutside;
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

  handleClickOutside(e) {
    if (this.state.active === true && (0, _closest.default)(e.target, '.to-btn-dropdown-wrapper') === null) {
      this.setState({
        active: false
      });
    }
  }

  handleClick(e) {
    const {
      handleClick
    } = this.props;

    if ((0, _closest.default)(e.target, 'div').className.indexOf('to-btn-dropdown-wrapper') !== -1) {
      this.setState({
        active: !this.state.active
      }, () => {
        if (handleClick) {
          handleClick(e);
        }
      });
    } else {
      e.preventDefault();
    }
  }

  render() {
    const {
      className,
      htmlType,
      comp,
      links
    } = this.props;
    const {
      active
    } = this.state;
    const wrapperClasses = (0, _classnames.default)({
      'to-btn-dropdown-wrapper': true,
      active: active
    });
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      'to-btn-dropdown': true,
      active: active,
      [`${this.classesPrefix}-${this.props.type}`]: this.props.type,
      [`${className}`]: className
    });
    const componentProps = (0, _omit.default)(this.props, ['comp', 'handleClick', 'htmlType', 'active', 'type', 'links']);
    return _react.default.createElement("div", {
      className: wrapperClasses
    }, _react.default.createElement(comp, { ...componentProps,
      type: comp === 'button' ? htmlType : '',
      onClick: this.handleClick,
      className: classes
    }), links && links.length > 0 && _react.default.createElement("div", {
      className: "to-btn-dropdown-menu"
    }, _react.default.createElement("ul", null, links.map((link, index) => _react.default.createElement("li", {
      key: `btn-drop-${index}`
    }, link)))));
  }

}

Button.defaultProps = {
  comp: 'button',
  htmlType: 'button',
  type: 'primary'
};
Button.propTypes = {
  id: _propTypes.default.string.isRequired,
  comp: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.symbol]),
  active: _propTypes.default.bool,
  htmlType: _propTypes.default.string,
  type: _propTypes.default.oneOf(['primary', 'bordered', 'ghost', 'underlined', 'menu', 'account', 'switch', 'filter', 'roofing']),
  className: _propTypes.default.string,
  handleClick: _propTypes.default.func,
  links: _propTypes.default.array.isRequired
};
var _default = Button;
exports.default = _default;
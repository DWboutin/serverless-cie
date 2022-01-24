"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _omit = _interopRequireDefault(require("omit.js"));

var _classnames = _interopRequireDefault(require("classnames"));

class Accordion extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.closed ? null : 0
    };
    this.classesPrefix = 'to-accordion';
    this.handlePanelClick = this.handlePanelClick.bind(this);
  }

  handlePanelClick(index) {
    let newIndexValue = index;

    if (index === this.state.selectedIndex) {
      newIndexValue = null;
    }

    this.setState({
      selectedIndex: newIndexValue
    });
  }

  render() {
    const {
      className,
      children
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      [`${className}`]: className
    });
    const componentProps = (0, _omit.default)(this.props, ['className']);
    return _react.default.createElement("div", Object.assign({
      className: classes
    }, componentProps), _react.default.Children.map(children, (child, index) => _react.default.cloneElement(child, {
      isActive: index === this.state.selectedIndex,
      onClick: () => this.handlePanelClick(index)
    })));
  }

}

Accordion.defaultProps = {
  closed: false
};
Accordion.propTypes = {
  className: _propTypes.default.string,
  closed: _propTypes.default.bool
};
var _default = Accordion;
exports.default = _default;
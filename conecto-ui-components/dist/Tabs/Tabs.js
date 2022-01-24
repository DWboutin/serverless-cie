"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TabTitle = _interopRequireDefault(require("./TabTitle"));

class Tabs extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.focusedIndex
    };
    this.classesPrefix = 'to-tabs';
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      onChangeCallBack
    } = this.props;

    if (prevProps.focusedIndex !== this.props.focusedIndex) {
      this.setState({
        selectedIndex: this.props.focusedIndex
      });
    }

    if (onChangeCallBack && this.state.selectedIndex !== prevState.selectedIndex) {
      onChangeCallBack(this.state.selectedIndex);
    }
  }

  handleTitleClick(e) {
    this.setState({
      selectedIndex: parseInt(e.target.dataset.index)
    });
  }

  renderTitles() {
    const {
      selectedIndex
    } = this.state;
    const {
      children
    } = this.props;
    return _react.default.createElement("nav", null, _react.default.createElement("ul", null, _react.default.Children.map(children, (child, index) => _react.default.createElement(_TabTitle.default, {
      title: child.props.title,
      onClick: this.handleTitleClick,
      index: index,
      active: index === selectedIndex,
      clickDisabled: child.props.clickDisabled
    }))));
  }

  render() {
    const {
      selectedIndex
    } = this.state;
    const {
      className,
      children,
      titlePosition,
      fixedItem
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      [`title-pos-${titlePosition}`]: true,
      [`${className}`]: className
    });
    return _react.default.createElement("div", {
      className: classes
    }, titlePosition === 'top' && this.renderTitles(), _react.default.createElement("div", {
      className: "to-tabs-wrap"
    }, _react.default.createElement("div", {
      className: "to-tabs-panels",
      style: {
        marginLeft: `${selectedIndex * -100}%`
      }
    }, _react.default.Children.map(children, (child, index) => _react.default.cloneElement(child, {
      inactive: index !== this.state.selectedIndex
    }))), fixedItem && _react.default.createElement("div", {
      className: "fixed-item"
    }, _react.default.cloneElement(fixedItem, {
      selectedIndex: this.state.selectedIndex
    }))), titlePosition === 'bottom' && this.renderTitles());
  }

}

Tabs.defaultProps = {
  titlePosition: 'top',
  focusedIndex: 0,
  fixedItem: null
};
Tabs.propTypes = {
  children: _propTypes.default.any.isRequired,
  titlePosition: _propTypes.default.oneOf(['top', 'bottom']).isRequired,
  focusedIndex: _propTypes.default.number.isRequired,
  onChangeCallBack: _propTypes.default.func,
  fixedItem: _propTypes.default.any
};
var _default = Tabs;
exports.default = _default;
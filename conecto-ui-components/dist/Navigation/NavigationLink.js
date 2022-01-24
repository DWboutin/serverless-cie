"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

class NavigationLink extends _react.default.Component {
  constructor(props) {
    super(props);
    this.classesPrefix = 'to-navigation-link';
  }

  render() {
    const {
      className,
      comp,
      hasNotifications,
      isActive
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      active: isActive,
      hasNotifications: hasNotifications,
      [`${className}`]: className
    });
    const componentProps = (0, _omit.default)(this.props, ['className', 'comp', 'hasNotifications', 'isActive']);
    return _react.default.createElement(comp, {
      className: classes,
      ...componentProps,
      children: _react.default.Children.map(this.props.children, child => {
        return _react.default.createElement("span", {
          className: "text-content"
        }, child);
      })
    });
  }

}

NavigationLink.defaultProps = {
  hasNotifications: false,
  isActive: false,
  comp: 'a'
};
NavigationLink.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  hasNotifications: _propTypes.default.bool,
  isActive: _propTypes.default.bool
};
var _default = NavigationLink;
exports.default = _default;
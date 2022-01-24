"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

class Navigation extends _react.default.Component {
  constructor(props) {
    super(props);
    this.classesPrefix = 'to-navigation';
  }

  render() {
    const {
      className,
      vertical
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      vertical: vertical,
      [`${className}`]: className
    });
    return _react.default.createElement("nav", {
      className: classes
    }, _react.default.createElement("ul", null, _react.default.Children.map(this.props.children, child => {
      return _react.default.createElement("li", {
        className: child.props.className
      }, child);
    })));
  }

}

Navigation.defaultProps = {
  vertical: false
};
Navigation.propTypes = {
  children: _propTypes.default.node.isRequired,
  vertical: _propTypes.default.bool.isRequired,
  className: _propTypes.default.string
};
var _default = Navigation;
exports.default = _default;
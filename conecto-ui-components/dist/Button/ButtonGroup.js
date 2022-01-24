"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

class ButtonGroup extends _react.default.Component {
  constructor(props) {
    super(props);
    this.classesPrefix = 'to-btn-group';
  }

  render() {
    const {
      className
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      [`${className}`]: className
    });
    return _react.default.createElement("div", {
      className: classes
    }, this.props.children);
  }

}

ButtonGroup.defaultProps = {};
ButtonGroup.propTypes = {
  children: _propTypes.default.arrayOf(_propTypes.default.element).isRequired
};
var _default = ButtonGroup;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

class Grid extends _react.default.Component {
  constructor(props) {
    super(props);
    this.classesPrefix = 'to-grid';
  }

  render() {
    const {
      children,
      className,
      fluid,
      fullHeight
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      container: !fluid,
      'container-fluid': fluid,
      'container-full-height': fullHeight,
      [`${className}`]: className
    });
    const componentProps = (0, _omit.default)(this.props, ['children', 'className', 'fluid', 'fullHeight']);
    return _react.default.createElement("div", Object.assign({
      className: classes
    }, componentProps), children);
  }

}

Grid.defaultProps = {
  fluid: false,
  fullHeight: false
};
Grid.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  fluid: _propTypes.default.bool,
  fullHeight: _propTypes.default.bool
};
var _default = Grid;
exports.default = _default;
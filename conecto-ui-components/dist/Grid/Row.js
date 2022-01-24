"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

class Row extends _react.default.Component {
  constructor(props) {
    super(props);
    this.classesPrefix = 'row';
  }

  rowClasses(row, size) {
    const classes = {};
    classes[`${row.alignement}-${size}`] = row.alignement;
    classes[`${row.distribution}-${size}`] = row.distribution;
    return classes;
  }

  buildClasses() {
    const {
      className,
      xs,
      sm,
      md,
      lg,
      xl,
      reverse
    } = this.props;
    const xsProps = typeof xs === 'object' ? this.rowClasses(xs, 'xs') : {};
    const smProps = typeof sm === 'object' ? this.rowClasses(sm, 'sm') : {};
    const mdProps = typeof md === 'object' ? this.rowClasses(md, 'md') : {};
    const lgProps = typeof lg === 'object' ? this.rowClasses(lg, 'lg') : {};
    const xlProps = typeof xl === 'object' ? this.rowClasses(xl, 'xl') : {};
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      [`${className}`]: className,
      reverse: reverse,
      ...xsProps,
      ...smProps,
      ...mdProps,
      ...lgProps,
      ...xlProps
    });
    return classes;
  }

  render() {
    const {
      children
    } = this.props;
    const classes = this.buildClasses();
    const componentProps = (0, _omit.default)(this.props, ['children', 'className', 'reverse', 'xs', 'sm', 'md', 'lg', 'xl']);
    return _react.default.createElement("div", Object.assign({
      className: classes
    }, componentProps), children);
  }

}

const sizePropTypes = _propTypes.default.shape({
  alignement: _propTypes.default.oneOf(['start', 'center', 'end', 'top', 'middle', 'bottom']),
  distribution: _propTypes.default.oneOf(['around', 'between'])
});

Row.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  reverse: _propTypes.default.bool,
  xs: sizePropTypes,
  sm: sizePropTypes,
  md: sizePropTypes,
  lg: sizePropTypes,
  xl: sizePropTypes
};
var _default = Row;
exports.default = _default;
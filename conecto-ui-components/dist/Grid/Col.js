"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

class Col extends _react.default.Component {
  colClasses(col, size) {
    const classes = {};
    classes[`col-${size}-${col.span}`] = col.span;
    classes[`col-${size}-offset-${col.offset}`] = col.offset;
    classes[`first-${size}`] = col.first;
    classes[`last-${size}`] = col.last;
    classes[`start-${size}`] = col.start;
    classes[`center-${size}`] = col.center;
    classes[`end-${size}`] = col.end;
    classes[`top-${size}`] = col.top;
    classes[`middle-${size}`] = col.middle;
    classes[`bottom-${size}`] = col.bottom;
    classes[`around-${size}`] = col.around;
    classes[`between-${size}`] = col.between;
    classes[`hidden-${size}`] = col.hidden;
    return classes;
  }

  buildClasses() {
    const {
      className,
      fullHeight,
      alignMiddle,
      reverse,
      xs,
      sm,
      md,
      lg,
      xl
    } = this.props;
    const xsProps = typeof xs === 'object' ? this.colClasses(xs, 'xs') : {};
    const smProps = typeof sm === 'object' ? this.colClasses(sm, 'sm') : {};
    const mdProps = typeof md === 'object' ? this.colClasses(md, 'md') : {};
    const lgProps = typeof lg === 'object' ? this.colClasses(lg, 'lg') : {};
    const xlProps = typeof xl === 'object' ? this.colClasses(xl, 'xl') : {};
    const classes = (0, _classnames.default)({
      col: true,
      'col-xs': !xs,
      'full-height': fullHeight,
      'align-middle': alignMiddle,
      reverse: reverse,
      ...xsProps,
      ...smProps,
      ...mdProps,
      ...lgProps,
      ...xlProps,
      [`${className}`]: className
    });
    return classes;
  }

  render() {
    const {
      children
    } = this.props;
    const classes = this.buildClasses();
    const componentProps = (0, _omit.default)(this.props, ['children', 'className', 'fullHeight', 'alignMiddle', 'reverse', 'xs', 'sm', 'md', 'lg', 'xl']);
    return _react.default.createElement("div", Object.assign({
      className: classes
    }, componentProps), children);
  }

}

const sizePropTypes = _propTypes.default.shape({
  span: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  offset: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  first: _propTypes.default.bool,
  last: _propTypes.default.bool,
  start: _propTypes.default.bool,
  center: _propTypes.default.bool,
  end: _propTypes.default.bool,
  top: _propTypes.default.bool,
  middle: _propTypes.default.bool,
  bottom: _propTypes.default.bool,
  around: _propTypes.default.bool,
  between: _propTypes.default.bool,
  hidden: _propTypes.default.bool
});

Col.defaultProps = {
  fullHeight: false,
  alignMiddle: false,
  reverse: false
};
Col.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  fullHeight: _propTypes.default.bool,
  alignMiddle: _propTypes.default.bool,
  reverse: _propTypes.default.bool,
  xs: sizePropTypes,
  sm: sizePropTypes,
  md: sizePropTypes,
  lg: sizePropTypes,
  xl: sizePropTypes
};
var _default = Col;
exports.default = _default;
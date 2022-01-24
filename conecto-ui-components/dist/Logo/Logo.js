"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Conecto = _interopRequireDefault(require("./Logos/Conecto"));

var _To = _interopRequireDefault(require("./Logos/To"));

var _propTypes = _interopRequireDefault(require("prop-types"));

class Logo extends _react.default.Component {
  constructor(props) {
    super(props);
    this.classesPrefix = 'to-logo';
  }

  logoDefinition(size) {
    switch (size) {
      case 'short':
        return _To.default;

      default:
        return _Conecto.default;
    }
  }

  render() {
    const {
      className,
      size,
      type,
      suffix
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      [`to-logo-${type}`]: type && suffix,
      [`to-logo-${size}`]: size,
      'to-logo-with-suffix': suffix,
      [`${className}`]: className
    });
    const logoToRender = this.logoDefinition(size);
    return _react.default.createElement("div", {
      className: classes
    }, _react.default.createElement("span", {
      className: "to-logo-wrapper"
    }, _react.default.createElement(logoToRender)), suffix && _react.default.createElement("div", {
      className: "to-logo-suffix"
    }, suffix));
  }

}

Logo.defaultProps = {
  size: null,
  type: 'contractor',
  suffix: null
};
Logo.propTypes = {
  size: _propTypes.default.oneOf(['short']),
  type: _propTypes.default.oneOf(['contractor', 'roofing']),
  suffix: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  className: _propTypes.default.string
};
var _default = Logo;
exports.default = _default;
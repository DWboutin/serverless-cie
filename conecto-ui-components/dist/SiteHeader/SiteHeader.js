"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Grid = _interopRequireWildcard(require("../Grid"));

var _Navigation = _interopRequireDefault(require("../Navigation"));

class SiteHeader extends _react.default.Component {
  constructor(props) {
    super(props);
    this.classesPrefix = 'to-site-header';
  }

  render() {
    const {
      className,
      logo,
      buttons,
      fluid,
      vertical
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      [`${className}`]: className
    });
    return _react.default.createElement("div", {
      className: classes
    }, _react.default.createElement(_Grid.default, {
      fullHeight: true,
      fluid: fluid
    }, _react.default.createElement(_Grid.Row, {
      xs: {
        alignement: 'middle'
      }
    }, _react.default.createElement(_Grid.Col, {
      className: "logo-content"
    }, logo), _react.default.createElement(_Grid.Col, {
      fullHeight: true,
      className: "nav-content"
    }, _react.default.createElement(_Navigation.default, {
      vertical: vertical
    }, this.props.children)), _react.default.createElement(_Grid.Col, {
      fullHeight: true,
      alignMiddle: true,
      className: "buttons-content"
    }, buttons))));
  }

}

SiteHeader.defaultProps = {
  type: 'conecto',
  fluid: false,
  vertical: false
};
SiteHeader.propTypes = {
  children: _propTypes.default.node,
  fluid: _propTypes.default.bool,
  vertical: _propTypes.default.bool,
  logo: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  buttons: _propTypes.default.node
};
var _default = SiteHeader;
exports.default = _default;
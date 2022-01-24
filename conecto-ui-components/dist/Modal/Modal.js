"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Button = _interopRequireDefault(require("../Button"));

class Modal extends _react.default.Component {
  constructor(props) {
    super(props);
    this.classesPrefix = 'to-modal';
  }

  renderModal() {
    const {
      className,
      position,
      isOpen,
      handleClose,
      children,
      withBackground
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      open: isOpen,
      [`${className}`]: className
    });
    const cardClasses = (0, _classnames.default)({
      'to-modal-card': true,
      withBackground: withBackground
    });
    return _react.default.createElement("div", {
      className: classes
    }, _react.default.createElement("div", {
      className: "to-modal-overlay",
      onClick: handleClose
    }), _react.default.createElement("div", {
      className: cardClasses,
      style: position
    }, _react.default.createElement(_Button.default, {
      type: "menu",
      className: "to-modal-card__close-btn",
      handleClick: handleClose
    }, _react.default.createElement(_Icon.default, {
      type: "menu",
      className: "active"
    })), _react.default.createElement("div", {
      className: "to-modal-content"
    }, children)));
  }

  render() {
    const {
      isOpen
    } = this.props;
    let comp = null;

    if (isOpen && typeof document !== 'undefined') {
      comp = _reactDom.default.createPortal(this.renderModal(), document.body);
    }

    return comp;
  }

}

Modal.defaultProps = {
  withBackground: false
};
Modal.propTypes = {
  handleClose: _propTypes.default.func.isRequired,
  withBackground: _propTypes.default.bool
};
var _default = Modal;
exports.default = _default;
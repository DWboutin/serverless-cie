"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Modal = _interopRequireDefault(require("./Modal"));

class ModalButton extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      position: {}
    };
    this.classesPrefix = 'to-modal-button';
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(e) {
    const eventPosition = e.target.getBoundingClientRect();
    this.setState({
      open: true,
      position: {
        top: `${eventPosition.y}px`,
        left: `${eventPosition.x}px`
      }
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
    const {
      children,
      button,
      withBackground
    } = this.props;
    const buttonClasses = (0, _classnames.default)({
      [this.classesPrefix]: true,
      [`${button.props.className}`]: button.props.className
    });
    return _react.default.createElement(_react.default.Fragment, null, _react.default.cloneElement(button, {
      handleClick: this.handleOpen,
      className: buttonClasses,
      active: this.state.open
    }), _react.default.createElement(_Modal.default, {
      isOpen: this.state.open,
      position: this.state.position,
      handleClose: this.handleClose,
      withBackground: withBackground
    }, children));
  }

}

ModalButton.defaultProps = {
  withBackground: false
};
ModalButton.propTypes = {
  button: _propTypes.default.element.isRequired,
  children: _propTypes.default.any.isRequired,
  withBackground: _propTypes.default.bool
};
var _default = ModalButton;
exports.default = _default;
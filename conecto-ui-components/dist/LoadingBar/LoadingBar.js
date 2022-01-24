"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const LoadingPercent = ({
  style
}) => _react.default.createElement("div", {
  className: "loading-percent",
  style: { ...style
  }
});

class LoadingBar extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
    this.classesPrefix = 'to-loading-bar';
    this.secondTimer = null;
    this.getRandomValueBetween = this.getRandomValueBetween.bind(this);
  }

  static getDerivedStateFromProps(props) {
    if (props.complete === true) {
      return {
        width: 100
      };
    }

    return null;
  }

  componentDidMount() {
    this.setState({
      width: `${this.getRandomValueBetween(20, 50)}`
    }, () => {
      this.secondTimer = setTimeout(() => {
        this.setState({
          width: `${this.getRandomValueBetween(50, 80)}`
        });
      }, 300);
    });
  }

  componentWillUnmount() {
    clearTimeout(this.secondTimer);
  }

  getRandomValueBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render() {
    const {
      className,
      fixed
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      [`${this.classesPrefix}-${this.props.type}`]: this.props.type,
      [`${className}`]: className
    });
    const style = {
      width: `${this.state.width}%`
    };
    const fixedStyle = fixed ? {
      position: 'fixed'
    } : null;
    return _react.default.createElement("div", {
      className: classes,
      style: fixedStyle
    }, _react.default.createElement(LoadingPercent, {
      style: style
    }));
  }

}

class LoadingBarParent extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      complete: false
    };
    this.timer = null;
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isLoading === false && state.initialized === true) {
      return {
        complete: true
      };
    }

    return null;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isLoading === false && this.state.complete === true && this.state.initialized === true) {
      this.timer = setTimeout(() => {
        this.setState({
          initialized: false
        });
      }, 1000);
    }

    if (prevProps.isLoading === false && this.props.isLoading === true) {
      this.setState({
        initialized: true
      });
    }
  }

  render() {
    const {
      isLoading,
      container,
      fixed,
      className,
      type
    } = this.props;
    const defaultParent = typeof window !== 'undefined' ? window.document.body : null;
    const parent = container ? container : defaultParent;
    let comp = null;

    if (isLoading || this.state.initialized) {
      comp = _reactDom.default.createPortal(_react.default.createElement(LoadingBar, {
        className: className,
        fixed: fixed,
        type: type,
        complete: this.state.complete
      }), parent);
    }

    return comp;
  }

}

LoadingBarParent.defaultProps = {
  isLoading: false,
  fixed: false,
  type: _propTypes.default.oneOf(['primary', 'roofing'])
};
LoadingBarParent.propTypes = {};
var _default = LoadingBarParent;
exports.default = _default;
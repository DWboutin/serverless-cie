"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _swiper = _interopRequireDefault(require("swiper/dist/js/swiper.js"));

require("swiper/dist/css/swiper.min.css");

class CardsSwiper extends _react.default.Component {
  constructor(props) {
    super(props);
    this.classesPrefix = 'to-cards-swiper';
    this.swiper = null;
    this.defaultOptions = {
      speed: 500,
      slidesPerView: 3,
      spaceBetween: 40,
      // simulateTouch: false,
      breakpoints: {
        576: {
          slidesPerView: 'auto',
          spaceBetween: 20
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    };
  }

  componentDidMount() {
    const {
      id
    } = this.props;
    this.swiper = new _swiper.default(`#${id}`, { ...this.defaultOptions,
      ...this.props.options
    });
  }

  componentWillUnmount() {
    this.swiper.destroy(true, true);
  }

  componentDidUpdate() {
    this.swiper.update();
  }

  render() {
    const {
      id,
      className,
      withIcons
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      'swiper-container': true,
      'with-icons': withIcons,
      [`${className}`]: className
    });
    return _react.default.createElement("div", {
      id: id,
      className: classes
    }, _react.default.createElement("div", {
      className: "swiper-wrapper"
    }, _react.default.Children.map(this.props.children, (child, index) => _react.default.createElement("div", {
      className: "swiper-slide"
    }, child))));
  }

}

CardsSwiper.defaultProps = {
  withIcons: false,
  options: {}
};
CardsSwiper.propTypes = {
  id: _propTypes.default.string.isRequired,
  withIcons: _propTypes.default.bool.isRequired,
  options: _propTypes.default.object.isRequired
};
var _default = CardsSwiper;
exports.default = _default;
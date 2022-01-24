"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.IconTypePropTypes = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _To = _interopRequireDefault(require("../Logo/Logos/To"));

var _Menu = _interopRequireDefault(require("./Icons/Menu"));

var _Alert = _interopRequireDefault(require("./Icons/Alert"));

var _ArrowDown = _interopRequireDefault(require("./Icons/ArrowDown"));

var _Bookmark = _interopRequireDefault(require("./Icons/Bookmark"));

var _Check = _interopRequireDefault(require("./Icons/Check"));

var _Close = _interopRequireDefault(require("./Icons/Close"));

var _Cog = _interopRequireDefault(require("./Icons/Cog"));

var _Concurrents = _interopRequireDefault(require("./Icons/Concurrents"));

var _Email = _interopRequireDefault(require("./Icons/Email"));

var _Facebook = _interopRequireDefault(require("./Icons/Facebook"));

var _Flag = _interopRequireDefault(require("./Icons/Flag"));

var _ColoredFlag = _interopRequireDefault(require("./Icons/ColoredFlag"));

var _Marker = _interopRequireDefault(require("./Icons/Marker"));

var _Notification = _interopRequireDefault(require("./Icons/Notification"));

var _Phone = _interopRequireDefault(require("./Icons/Phone"));

var _Search = _interopRequireDefault(require("./Icons/Search"));

var _SMS = _interopRequireDefault(require("./Icons/SMS"));

var _ThumbUp = _interopRequireDefault(require("./Icons/ThumbUp"));

var _User = _interopRequireDefault(require("./Icons/User"));

var _CCAmex = _interopRequireDefault(require("./Icons/CCAmex"));

var _CCDefault = _interopRequireDefault(require("./Icons/CCDefault"));

var _CCDinersClub = _interopRequireDefault(require("./Icons/CCDinersClub"));

var _CCDiscover = _interopRequireDefault(require("./Icons/CCDiscover"));

var _CCJCB = _interopRequireDefault(require("./Icons/CCJCB"));

var _CCMastercard = _interopRequireDefault(require("./Icons/CCMastercard"));

var _CCVisa = _interopRequireDefault(require("./Icons/CCVisa"));

class Icon extends _react.default.Component {
  constructor(props) {
    super(props);
    this.classesPrefix = 'to-icon';
  }

  iconDefinition(type) {
    switch (type) {
      case 'alert':
        return _Alert.default;

      case 'arrow-down':
        return _ArrowDown.default;

      case 'bookmark':
        return _Bookmark.default;

      case 'check':
        return _Check.default;

      case 'close':
        return _Close.default;

      case 'cog':
        return _Cog.default;

      case 'concurrents':
        return _Concurrents.default;

      case 'email':
        return _Email.default;

      case 'facebook':
        return _Facebook.default;

      case 'flag':
        return _Flag.default;

      case 'colored-flag':
        return _ColoredFlag.default;

      case 'marker':
        return _Marker.default;

      case 'menu':
        return _Menu.default;

      case 'notification':
        return _Notification.default;

      case 'phone':
        return _Phone.default;

      case 'search':
        return _Search.default;

      case 'sms':
        return _SMS.default;

      case 'thumb-up':
        return _ThumbUp.default;

      case 'user':
        return _User.default;

      case 'cc-amex':
        return _CCAmex.default;

      case 'cc-default':
        return _CCDefault.default;

      case 'cc-dinersclub':
        return _CCDinersClub.default;

      case 'cc-discover':
        return _CCDiscover.default;

      case 'cc-jcb':
        return _CCJCB.default;

      case 'cc-mastercard':
        return _CCMastercard.default;

      case 'cc-visa':
        return _CCVisa.default;

      case 'conecto':
      default:
        return _To.default;
    }
  }

  render() {
    const {
      className,
      type
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      [`${className}`]: className
    });
    const iconToRender = this.iconDefinition(type);
    return _react.default.createElement("i", {
      className: classes,
      "aria-label": `icon: ${type}`
    }, _react.default.createElement(iconToRender));
  }

}

exports.default = Icon;
Icon.defaultProps = {
  type: 'conecto'
};

const IconTypePropTypes = _propTypes.default.oneOf(['alert', 'arrow-down', 'bookmark', 'check', 'close', 'cog', 'concurrents', 'email', 'facebook', 'flag', 'colored-flag', 'marker', 'menu', 'notification', 'phone', 'search', 'sms', 'thumb-up', 'user', 'cc-amex', 'cc-default', 'cc-dinersclub', 'cc-discover', 'cc-jcb', 'cc-mastercard', 'cc-visa', 'conecto']);

exports.IconTypePropTypes = IconTypePropTypes;
Icon.propTypes = {
  type: IconTypePropTypes,
  className: _propTypes.default.string
};
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _rcNotification = _interopRequireDefault(require("rc-notification"));

var _Icon = _interopRequireDefault(require("../Icon"));

const notificationInstance = {};
let defaultDuration = 4.5;
let defaultTop = 24;
let defaultBottom = 24;
let defaultPlacement = 'topRight';

function setNotificationConfig(options) {
  const {
    duration,
    placement,
    bottom,
    top
  } = options;

  if (duration !== undefined) {
    defaultDuration = duration;
  }

  if (placement !== undefined) {
    defaultPlacement = placement;
  }

  if (bottom !== undefined) {
    defaultBottom = bottom;
  }

  if (top !== undefined) {
    defaultTop = top;
  }
}

function getNotificationInstance(prefixCls, placement, callback) {
  const cacheKey = `${prefixCls}-${placement}`;

  if (notificationInstance[cacheKey]) {
    callback(notificationInstance[cacheKey]);
    return;
  }

  _rcNotification.default.newInstance({
    prefixCls,
    className: `${prefixCls} ${prefixCls}-${placement}`,
    style: {},
    closeIcon: React.createElement("div", {
      className: `${prefixCls}-close-icon`
    }, React.createElement(_Icon.default, {
      type: "close"
    }))
  }, notification => {
    notificationInstance[cacheKey] = notification;
    callback(notification);
  });
}

function notice(args) {
  const outerPrefixCls = 'to-notification';
  const prefixCls = `${outerPrefixCls}-notice`;
  const duration = args.duration === undefined ? defaultDuration : args.duration;
  getNotificationInstance(outerPrefixCls, args.placement || defaultPlacement, notification => {
    notification.notice({
      content: React.createElement("div", null, React.createElement("div", {
        className: `${prefixCls}-message`
      }, args.message), React.createElement("div", {
        className: `${prefixCls}-description`
      }, args.description)),
      duration: duration,
      closable: true,
      onClose: args.onClose,
      onClick: args.onClick,
      key: args.key,
      style: args.style || {},
      className: args.className
    });
  });
}

const api = {
  open: notice,

  close(key) {
    Object.keys(notificationInstance).forEach(cacheKey => notificationInstance[cacheKey].removeNotice(key));
  },

  config: setNotificationConfig,

  destroy() {
    Object.keys(notificationInstance).forEach(cacheKey => {
      notificationInstance[cacheKey].destroy();
      delete notificationInstance[cacheKey];
    });
  }

};
['success', 'info', 'warning', 'error'].forEach(type => {
  api[type] = args => api.open({ ...args,
    type
  });
});
api.warn = api.warning;
var _default = api;
exports.default = _default;
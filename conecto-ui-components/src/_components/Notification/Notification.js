import Notification from 'rc-notification'
import * as React from 'react'

import Icon from '../Icon'

const notificationInstance = {}
let defaultDuration = 4.5
let defaultTop = 24
let defaultBottom = 24
let defaultPlacement = 'topRight'

function setNotificationConfig(options) {
  const { duration, placement, bottom, top } = options
  if (duration !== undefined) {
    defaultDuration = duration
  }
  if (placement !== undefined) {
    defaultPlacement = placement
  }
  if (bottom !== undefined) {
    defaultBottom = bottom
  }
  if (top !== undefined) {
    defaultTop = top
  }
}

function getNotificationInstance(prefixCls, placement, callback) {
  const cacheKey = `${prefixCls}-${placement}`
  if (notificationInstance[cacheKey]) {
    callback(notificationInstance[cacheKey])
    return
  }

  Notification.newInstance(
    {
      prefixCls,
      className: `${prefixCls} ${prefixCls}-${placement}`,
      style: {},
      closeIcon: (
        <div className={`${prefixCls}-close-icon`}>
          <Icon type="close" />
        </div>
      ),
    },
    notification => {
      notificationInstance[cacheKey] = notification
      callback(notification)
    }
  )
}

function notice(args) {
  const outerPrefixCls = 'to-notification'
  const prefixCls = `${outerPrefixCls}-notice`
  const duration = args.duration === undefined ? defaultDuration : args.duration

  getNotificationInstance(
    outerPrefixCls,
    args.placement || defaultPlacement,
    notification => {
      notification.notice({
        content: (
          <div>
            <div className={`${prefixCls}-message`}>{args.message}</div>
            <div className={`${prefixCls}-description`}>{args.description}</div>
          </div>
        ),
        duration: duration,
        closable: true,
        onClose: args.onClose,
        onClick: args.onClick,
        key: args.key,
        style: args.style || {},
        className: args.className,
      })
    }
  )
}

const api = {
  open: notice,
  close(key) {
    Object.keys(notificationInstance).forEach(cacheKey =>
      notificationInstance[cacheKey].removeNotice(key)
    )
  },
  config: setNotificationConfig,
  destroy() {
    Object.keys(notificationInstance).forEach(cacheKey => {
      notificationInstance[cacheKey].destroy()
      delete notificationInstance[cacheKey]
    })
  },
}

;[('success', 'info', 'warning', 'error')].forEach(type => {
  api[type] = args =>
    api.open({
      ...args,
      type,
    })
})

api.warn = api.warning

export default api

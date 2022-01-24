import React from 'react'
import { NetInfo, StyleSheet, View } from 'react-native'
import { injectIntl } from 'react-intl'
import dropWhile from 'lodash.dropwhile'

import Notification from '../_components/Notification'

export const NotificationContext = React.createContext()

class NotificationComponentContext extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      baseTimeout: props.timeout ? props.timeout : 7000,
      netNoticeSent: false,
      isOnline: false,
      notifications: [],
    }
    this.netVerificationInterval = null

    this.addNotification = this.addNotification.bind(this)
    this.dropNotification = this.dropNotification.bind(this)
    this.setNotificationStatusRemoved = this.setNotificationStatusRemoved.bind(
      this
    )
    this.detectOnlineStatus = this.detectOnlineStatus.bind(this)

    this.detectOnlineStatus()
  }

  componentDidMount() {
    if (this.state.isOnline === false) {
      this.netVerificationInterval = setInterval(() => {
        this.detectOnlineStatus()
      }, 1000)
    }
  }

  detectOnlineStatus() {
    const { intl } = this.props

    NetInfo.getConnectionInfo().then(connectionInfo => {
      if (connectionInfo.type !== 'none') {
        this.setState(
          {
            isOnline: true,
          },
          () => {
            if (this.netVerificationInterval !== null) {
              clearInterval(this.netVerificationInterval)
            }
          }
        )
      }
    })
  }

  addNotification(notif) {
    const notificationsStack = this.state.notifications

    notif.status = 'show'
    notif.uuid = `${notificationsStack.length}-${new Date().getTime()}`
    notif.timeout =
      typeof notif.timeout !== 'undefined'
        ? notif.timeout
        : this.state.baseTimeout

    notificationsStack.push(notif)

    this.setState({
      notifications: notificationsStack,
    })
  }

  setNotificationStatusRemoved(notif) {
    const notificationsStack = this.state.notifications

    this.setState({
      notifications: notificationsStack.map(notification => {
        if (
          notification.uuid === notif.uuid &&
          notification.status !== 'removed'
        ) {
          return {
            ...notification,
            status: 'removed',
          }
        }

        return notification
      }),
    })
  }

  dropNotification(notif, cb) {
    this.setState(
      {
        notifications: dropWhile(this.state.notifications, notif),
      },
      () => {
        if (typeof cb === 'function') {
          cb()
        }
      }
    )
  }

  render() {
    const { children } = this.props

    return (
      <NotificationContext.Provider
        value={{
          ...this.state,
          addNotification: this.addNotification,
          dropNotification: this.dropNotification,
          setNotificationStatusRemoved: this.setNotificationStatusRemoved,
        }}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            isOnline: this.state.isOnline,
            addNotification: this.addNotification,
          })
        )}
      </NotificationContext.Provider>
    )
  }
}

export const withNotificationContext = WrappedComponent => {
  return class withNotificationContext extends React.Component {
    static navigationOptions = WrappedComponent.navigationOptions

    constructor(props) {
      super(props)
    }

    render() {
      return (
        <NotificationContext.Consumer>
          {context => (
            <>
              <WrappedComponent {...context} {...this.props} />
              <View style={styles.container}>
                {context.notifications.map((notification, index) => (
                  <Notification
                    key={`notification-${notification.uuid}`}
                    notification={notification}
                    dropNotification={context.dropNotification}
                    setNotificationStatusRemoved={
                      context.setNotificationStatusRemoved
                    }
                    zIndex={100 - index}
                  />
                ))}
              </View>
            </>
          )}
        </NotificationContext.Consumer>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    top: 15,
    flex: 1,
    overflow: 'visible',
    paddingLeft: 15,
    paddingRight: 15,
  },
})

export default injectIntl(NotificationComponentContext)

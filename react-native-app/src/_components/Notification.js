import React from 'react'
import PropTypes from 'prop-types'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {
  StyleSheet,
  Animated,
  Dimensions,
  View,
  Text,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native'
import { withNavigation } from 'react-navigation'

import TouchableItem from '../_components/TouchableItem'

import easing from '../helpers/easing'

class Notification extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      notificationHeight: 0,
      closeButtonWidth: 0,
      timer: null,
      leftAnimation: new Animated.Value(
        Math.round(Dimensions.get('window').width)
      ),
      topAnimation: new Animated.Value(0),
      opacityAnimation: new Animated.Value(1),
    }
    this.swipeable = React.createRef()

    this.renderRightActions = this.renderRightActions.bind(this)
    this.handleNotificationPress = this.handleNotificationPress.bind(this)
    this.handleNotificationClose = this.handleNotificationClose.bind(this)
    this.stopNotificationTimer = this.stopNotificationTimer.bind(this)
    this.activateNotificationTimer = this.activateNotificationTimer.bind(this)
  }

  componentDidMount() {
    Animated.timing(this.state.leftAnimation, {
      toValue: 0,
      easing: easing,
      duration: 600,
    }).start()

    this.activateNotificationTimer()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.notification.status !== this.props.notification.status &&
      this.props.notification.status === 'removed'
    ) {
      Animated.parallel([
        Animated.timing(this.state.topAnimation, {
          toValue: -(this.state.notificationHeight + styles.notif.marginBottom),
          easing: easing,
          duration: 600,
        }),
        Animated.timing(this.state.opacityAnimation, {
          toValue: 0,
          easing: easing,
          duration: 400,
        }),
      ]).start(() => this.props.dropNotification(this.props.notification))
    }
  }

  handleNotificationPress() {
    const {
      notification: { action },
      navigation,
    } = this.props

    if (action) {
      Linking.canOpenURL(action).then(supported => {
        if (supported) {
          Linking.openURL(action)
        } else {
          if (action.indexOf('to:') >= 0) {
            const actionSplitted = action.split(':')

            this.props.dropNotification(this.props.notification, () => {
              navigation.navigate(actionSplitted[1], {
                id: actionSplitted[2],
              })
            })
          }
        }
      })
    }
  }

  handleNotificationClose() {
    if (this.swipeable.current !== null) {
      const { notification, setNotificationStatusRemoved } = this.props

      this.stopNotificationTimer()
      this.swipeable.current.close()

      setNotificationStatusRemoved(notification)
    }
  }

  stopNotificationTimer() {
    if (this.state.timer !== null) {
      clearTimeout(this.state.timer)

      this.setState({
        timer: null,
      })
    }
  }

  activateNotificationTimer() {
    const { notification, setNotificationStatusRemoved } = this.props

    if (notification.timeout !== 0) {
      this.setState({
        timer: setTimeout(() => {
          setNotificationStatusRemoved(notification)
        }, notification.timeout),
      })
    }
  }

  renderRightActions(progress, dragX) {
    const trans = dragX.interpolate({
      inputRange: [-this.state.closeButtonWidth, 0],
      outputRange: [0, 100],
      extrapolateLeft: 'extend',
      extrapolateRight: 'clamp',
    })

    return (
      <TouchableItem
        style={styles.rightPanel}
        onLayout={event => {
          if (this.state.closeButtonWidth === 0) {
            this.setState({
              closeButtonWidth: event.nativeEvent.layout.width,
            })
          }
        }}
        onPress={this.handleNotificationClose}
      >
        <Animated.Text
          style={[
            styles.deleteActionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Close
        </Animated.Text>
      </TouchableItem>
    )
  }

  render() {
    const {
      notification: { title, message },
      zIndex,
    } = this.props

    return (
      <Animated.View
        style={{
          ...styles.notif,
          left: this.state.leftAnimation,
          marginTop: this.state.topAnimation,
          opacity: this.state.opacityAnimation,
          zIndex,
        }}
        onLayout={event => {
          if (this.state.notificationHeight === 0) {
            this.setState({
              notificationHeight: event.nativeEvent.layout.height,
            })
          }
        }}
      >
        <Swipeable
          ref={this.swipeable}
          renderRightActions={this.renderRightActions}
          onSwipeableOpen={this.stopNotificationTimer}
          onSwipeableClose={this.activateNotificationTimer}
        >
          <TouchableWithoutFeedback onPress={this.handleNotificationPress}>
            <View style={styles.content}>
              <View>
                <Text style={styles.title}>{title}</Text>
              </View>
              <Text style={styles.message}>{message}</Text>
            </View>
          </TouchableWithoutFeedback>
        </Swipeable>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  notif: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E1E6',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    zIndex: 100,
  },
  content: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightPanel: {
    padding: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#fe5143',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteActionText: {
    width: '100%',
    fontFamily: 'styrene-a-regular',
    fontSize: 16,
    lineHeight: 16,
    color: '#fff',
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'sailec-regular',
  },
  message: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'sailec-regular',
  },
})

Notification.propTypes = {
  dropNotification: PropTypes.func.isRequired,
  notification: PropTypes.shape({
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    action: PropTypes.string,
  }),
}

export default withNavigation(Notification)

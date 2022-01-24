import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerActions, withNavigation } from 'react-navigation'

import ThreeDots from './svgs/ThreeDots'

const HeaderDotsButton = ({ children, onPress, style, navigation }) => {
  const buttonStyle = StyleSheet.flatten([styles.button, style])

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={() => {
        console.log(navigation.state)
        if (!navigation.state.isDrawerOpen) {
          navigation.dispatch(DrawerActions.openDrawer())
        } else {
          navigation.dispatch(DrawerActions.closeDrawer())
        }
      }}
    >
      <ThreeDots style={styles.dots} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 25,
    width: 25,
    paddingRight: 45,
    justifyContent: 'space-around',
  },
  dots: {
    color: '#572D2D',
  },
})

HeaderDotsButton.defaultProps = {
  style: {},
  onPress: () => {},
}

export default withNavigation(HeaderDotsButton)

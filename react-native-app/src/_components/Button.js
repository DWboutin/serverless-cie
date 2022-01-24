import React from 'react'
import { StyleSheet, Text } from 'react-native'

import TouchableItem from './TouchableItem'

const Button = ({ children, onPress, type }) => {
  const buttonStyle = StyleSheet.flatten([styles.button, styles[type]])

  return (
    <TouchableItem style={buttonStyle} onPress={onPress}>
      <Text style={styles[`${type}Text`]} onPress={onPress}>
        {children}
      </Text>
    </TouchableItem>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 12,
    paddingRight: 20,
    paddingBottom: 2,
    paddingLeft: 20,
    height: 35,
  },
  primary: {
    backgroundColor: '#26B89F',
    borderRadius: 30,
  },
  bordered: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#572D2D',
    borderRadius: 15,
    paddingTop: 10,
    height: 30,
  },
  ghost: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 15,
    paddingTop: 10,
    height: 30,
  },
  underlined: {
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#572D2D',
  },
  disabled: {
    backgroundColor: '#26B89F',
    borderRadius: 30,
    opacity: 0.25,
  },
  primaryText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'sailec-regular',
  },
  borderedText: {
    color: '#572D2D',
    fontSize: 12,
    fontFamily: 'sailec-regular',
  },
  ghostText: {
    color: '#572D2D',
    fontSize: 12,
    fontFamily: 'sailec-regular',
  },
  underlinedText: {
    color: '#572D2D',
    fontSize: 10,
    fontFamily: 'sailec-regular',
  },
  disabledText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'sailec-regular',
  },
})

Button.defaultProps = {
  type: 'primary',
  onPress: () => {},
}

export default Button

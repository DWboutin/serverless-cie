import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const InputError = ({ children }) => (
  <View style={styles.container}>
    <View style={styles.circle}>
      <Text style={styles.circleText}>!</Text>
    </View>
    <Text style={styles.errorText}>{children}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 10,
  },
  circle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#fe514326',
  },
  circleText: {
    height: 16,
    width: 16,
    textAlign: 'center',
    color: '#fe5143',
  },
  errorText: {
    marginLeft: 5,
    color: '#fe5143',
  },
})

export default InputError

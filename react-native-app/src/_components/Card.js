import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = ({ children }) => (
  <View style={StyleSheet.flatten([styles.card, styles.bordered])}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  card: {
    alignSelf: 'stretch',
    paddingTop: 40,
    paddingRight: 30,
    paddingBottom: 40,
    paddingLeft: 30,
    borderRadius: 10,
  },
  bordered: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E1E6',
    borderTopWidth: 1,
    borderTopColor: '#E5E1E6',
    borderLeftWidth: 1,
    borderLeftColor: '#E5E1E6',
    borderRightWidth: 1,
    borderRightColor: '#E5E1E6',
  },
})

export default Card

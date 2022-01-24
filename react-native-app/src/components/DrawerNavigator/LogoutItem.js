import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import LogoutTouchableItem from '../../_components/LogoutTouchableItem'

const LogoutItem = ({ drawerPosition, label }) => {
  return (
    <LogoutTouchableItem style={styles.item}>
      <SafeAreaView
        forceInset={{
          [drawerPosition]: 'always',
          [drawerPosition === 'left' ? 'right' : 'left']: 'never',
          vertical: 'never',
        }}
        style={styles.itemWrap}
      >
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>{label}</Text>
        </View>
      </SafeAreaView>
    </LogoutTouchableItem>
  )
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e5e1e6',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e1e6',
    marginTop: 120,
  },
  itemWrap: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTextContainer: {
    marginTop: 5,
  },
  itemText: {
    color: '#b5a4a0',
    fontSize: 14,
    fontFamily: 'sailec-regular',
  },
})

export default LogoutItem

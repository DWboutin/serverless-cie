import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import TouchableItem from '../../_components/TouchableItem'

const DrawerNavigatorItem = ({
  route,
  label,
  focused,
  options,
  drawerPosition,
  onPress,
}) => {
  const itemWrapStyles = focused
    ? [styles.itemWrap, styles.itemWrap__focused]
    : [styles.itemWrap]
  const itemTextStyles = focused
    ? [styles.itemText, styles.itemText__focused]
    : [styles.itemText]
  const itemWrapStyle = StyleSheet.flatten(itemWrapStyles)
  const itemTextStyle = StyleSheet.flatten(itemTextStyles)

  return (
    <TouchableItem
      accessible
      onPress={onPress}
      delayPressIn={0}
      pressColor="#26B89F"
      style={options.drawerStyle || styles.item}
      activeOpacity={0.5}
    >
      <SafeAreaView
        forceInset={{
          [drawerPosition]: 'always',
          [drawerPosition === 'left' ? 'right' : 'left']: 'never',
          vertical: 'never',
        }}
        style={itemWrapStyle}
      >
        {typeof label === 'string' ? (
          <Text style={itemTextStyle}>{label}</Text>
        ) : (
          label
        )}
      </SafeAreaView>
    </TouchableItem>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 60,
    width: '100%',
    alignItems: 'center',
  },
  itemWrap: {
    flex: 1,
    paddingTop: 12,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#ffffff',
  },
  itemWrap__focused: {
    borderBottomColor: '#572d2d',
  },
  itemText: {
    color: '#b5a4a0',
    fontSize: 14,
    fontFamily: 'sailec-regular',
  },
  itemText__focused: {
    color: '#572d2d',
  },
})

export default DrawerNavigatorItem

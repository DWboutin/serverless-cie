import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import { AuthContext } from '../../contexts/AuthContext'
import TouchableItem from '../../_components/TouchableItem'

import UserIcon from '../../_components/svgs/UserIcon'

const ProfileNavigatorItem = ({
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
      <AuthContext.Consumer>
        {context => (
          <SafeAreaView
            forceInset={{
              [drawerPosition]: 'always',
              [drawerPosition === 'left' ? 'right' : 'left']: 'never',
              vertical: 'never',
            }}
            style={itemWrapStyle}
          >
            <View style={styles.userIconContainer}>
              <UserIcon fill="#ffffff" />
            </View>
            <View style={styles.itemTextContainer}>
              <Text style={itemTextStyle}>{context.fullName}</Text>
            </View>
          </SafeAreaView>
        )}
      </AuthContext.Consumer>
    </TouchableItem>
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
  },
  itemWrap: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemWrap__focused: {
    borderBottomColor: '#572d2d',
  },
  itemTextContainer: {
    marginTop: 5,
  },
  itemText: {
    color: '#b5a4a0',
    fontSize: 14,
    fontFamily: 'sailec-regular',
  },
  itemText__focused: {
    color: '#572d2d',
  },
  userIconContainer: {
    width: 34,
    height: 34,
    backgroundColor: '#26B89F',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
})

export default ProfileNavigatorItem

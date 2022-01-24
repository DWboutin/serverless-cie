import React from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerActions } from 'react-navigation'

import DrawerNavigatorItem from './DrawerNavigatorItem'

const DrawerNavigatorItems = ({
  items,
  activeItemKey,
  activeTintColor,
  activeBackgroundColor,
  inactiveTintColor,
  inactiveBackgroundColor,
  getLabel,
  renderIcon,
  onItemPress,
  itemsContainerStyle,
  itemStyle,
  labelStyle,
  activeLabelStyle,
  inactiveLabelStyle,
  iconContainerStyle,
  drawerPosition,
  descriptors,
  navigation,
}) => (
  <View style={styles.container}>
    {items.map((route, index) => {
      const options = descriptors[route.key].options
      const focused = activeItemKey === route.key
      const scene = { route, index, focused }
      const label = getLabel(scene)
      const propsBag = {
        key: route.key,
        route,
        label,
        focused,
        options,
        drawerPosition,
        onPress: () => {
          navigation.dispatch(DrawerActions.closeDrawer())
          onItemPress({ route, focused })
        },
      }

      if (!options.drawerHidden && !options.customComponent) {
        return <DrawerNavigatorItem {...propsBag} />
      } else if (options.customComponent) {
        const CustomComponent = options.customComponent
        return <CustomComponent {...propsBag} />
      } else {
        return null
      }
    })}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default DrawerNavigatorItems

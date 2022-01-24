import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import FooterBushes from '../_components/svgs/FooterBushes'

import DrawerNavigatorItems from './DrawerNavigator/DrawerNavigatorItems'
import LogoutItem from './DrawerNavigator/LogoutItem'

class DrawerNavigator extends React.Component {
  render() {
    const props = this.props

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <SafeAreaView
            forceInset={{ top: 'always', horizontal: 'never' }}
            style={styles.safeAreaView}
          >
            <DrawerNavigatorItems {...props} />
            <LogoutItem
              drawerPosition={props.drawerPosition}
              label={props.screenProps.intlFormatMessage({
                id: 'layoutDashboard_accountButton_link_logOut',
              })}
            />
          </SafeAreaView>
        </ScrollView>
        <View style={styles.footerBushes}>
          <FooterBushes />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  footerBushes: {
    width: '100%',
  },
})

export default DrawerNavigator

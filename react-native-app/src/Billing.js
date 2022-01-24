import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { withNotificationContext } from './contexts/NotificationContext'

class Billing extends React.Component {
  static navigationOptions = ({ screenProps: { intlFormatMessage } }) => ({
    title: intlFormatMessage({
      id: 'layoutDashboard_accountButton_link_billing',
    }),
  })

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Billing</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default withNotificationContext(Billing)

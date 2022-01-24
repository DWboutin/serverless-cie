import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

import { AuthContext } from './contexts/AuthContext'
import { withNotificationContext } from './contexts/NotificationContext'

import ProfileScreenLayout from './components/ProfileScreenLayout'
import AddressesForm from './components/AddressesForm'

import Button from './_components/Button'
import CardAddress from './_components/CardAddress'

class Addresses extends React.Component {
  static navigationOptions = ({ screenProps: { intlFormatMessage } }) => ({
    title: intlFormatMessage({
      id: 'layoutDashboard_accountButton_link_addresses',
    }),
  })

  constructor(props) {
    super(props)
  }

  componentDidCatch(error, errorInfo) {
    alert(error)
    console.log(error, errorInfo)
  }

  render() {
    const {
      screenProps: { intlFormatMessage },
      addNotification,
    } = this.props

    return (
      <ProfileScreenLayout
        title={intlFormatMessage({
          id: 'layoutDashboard_accountButton_link_myAccount',
        })}
      >
        <AddressesForm />
        <View
          style={{
            marginTop: 21,
          }}
        >
          <AuthContext.Consumer>
            {context => (
              <View>
                <Text style={styles.subTitle}>
                  {intlFormatMessage(
                    { id: 'account_addressesForm_form_cardTitle' },
                    { savedAddresses: context.addresses.length }
                  )}
                </Text>
                {context.addresses.map(address => (
                  <CardAddress
                    key={address.addressId}
                    id={address.addressId}
                    number={address.number}
                    address={address.address}
                    postalCode={address.postal_code}
                    city={address.city}
                    state={address.state}
                    addNotification={addNotification}
                    refreshAddresses={context.refreshAddresses}
                  />
                ))}
              </View>
            )}
          </AuthContext.Consumer>
        </View>
      </ProfileScreenLayout>
    )
  }
}

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: 'styrene-a-medium',
    fontSize: 18,
    color: '#572d2d',
    marginTop: 21,
    marginBottom: 21,
  },
})

export default withNotificationContext(Addresses)

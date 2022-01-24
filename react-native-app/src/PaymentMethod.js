import React from 'react'
import API from '@aws-amplify/api'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { LiteCreditCardInput } from 'react-native-credit-card-input'

import { withNotificationContext } from './contexts/NotificationContext'
import { withAuthContext } from './contexts/AuthContext'

import Button from './_components/Button'
import CardSource from './_components/CardSource'

import ProfileScreenLayout from './components/ProfileScreenLayout'

class PaymentMethod extends React.Component {
  static navigationOptions = ({ screenProps: { intlFormatMessage } }) => ({
    title: intlFormatMessage({
      id: 'layoutDashboard_accountButton_link_payment_method',
    }),
  })

  constructor(props) {
    super(props)

    this.state = {
      isValid: false,
      card: {},
    }

    this.handleSourceFormChange = this.handleSourceFormChange.bind(this)
    this.handleSourceTokenSubmit = this.handleSourceTokenSubmit.bind(this)
  }

  handleSourceFormChange(form) {
    // console.log(form)
    this.setState({
      isValid: form.valid,
      card: form.values,
    })
  }

  async handleSourceTokenSubmit() {
    const expiration = this.state.card.expiry.split('/')
    const cardDetails = {
      'card[number]': this.state.card.number,
      'card[exp_month]': expiration[0],
      'card[exp_year]': expiration[1],
      'card[cvc]': this.state.card.cvc,
    }

    var formBody = []
    for (var property in cardDetails) {
      var encodedKey = encodeURIComponent(property)
      var encodedValue = encodeURIComponent(cardDetails[property])
      formBody.push(encodedKey + '=' + encodedValue)
    }
    formBody = formBody.join('&')

    const token = await fetch('https://api.stripe.com/v1/tokens', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + 'pk_test_LX9xvTNiXSJLJ5XkuQa2D3SX',
      },
      body: formBody,
    })
    const tokenResponse = await token.json()

    const source = await fetch('https://api.stripe.com/v1/sources', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + 'pk_test_LX9xvTNiXSJLJ5XkuQa2D3SX',
      },
      body: `type=card&token=${tokenResponse.id}`,
    })
    const sourceResponse = await source.json()
    const sourceId = sourceResponse.id

    const sourceBinding = await API.post('contractors', '/contact/payment', {
      body: {
        source: sourceId,
      },
    })

    alert(sourceBinding.message)
  }

  render() {
    const {
      screenProps: { intlFormatMessage },
      organization: { customer },
      addNotification,
      refreshContact,
    } = this.props

    return (
      <ProfileScreenLayout
        title={intlFormatMessage({
          id: 'account_paymentMethod_title',
        })}
      >
        <Text style={styles.subTitle}>
          {intlFormatMessage({ id: 'account_paymentMethod_form_title' })}
        </Text>
        <View
          style={{
            marginLeft: -10,
            marginRight: -10,
          }}
        >
          <LiteCreditCardInput
            inputStyle={styles.input}
            labelStyle={styles.label}
            invalidColor="#FE5143"
            cardFontFamily="sailec-regular"
            onChange={this.handleSourceFormChange}
            placeholders={{
              number: intlFormatMessage({
                id: 'account_paymentMethod_card_number',
              }),
              expiry: intlFormatMessage({
                id: 'account_paymentMethod_card_exp',
              }),
              cvc: 'CVC',
            }}
          />
          <View style={styles.buttonsContainer}>
            <Button onPress={this.handleSourceTokenSubmit}>
              {intlFormatMessage({
                id: 'account_paymentMethod_form_submitButton',
              })}
            </Button>
          </View>
        </View>
        <Text style={styles.subTitle}>
          {intlFormatMessage(
            { id: 'account_paymentMethod_form_cardTitle' },
            { savedCards: customer.total_sources }
          )}
        </Text>
        {customer.sources.map(source => (
          <CardSource
            isDefault={source.id === customer.default_source}
            id={source.id}
            brand={source.card.brand}
            exp={`${source.card.exp_month}/${source.card.exp_year}`}
            last4={source.card.last4}
            createdAt={source.created}
            refreshContact={refreshContact}
            addNotification={addNotification}
            key={source.id}
          />
        ))}
      </ProfileScreenLayout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
  },
  subTitle: {
    fontFamily: 'styrene-a-medium',
    fontSize: 18,
    color: '#572d2d',
    marginTop: 21,
    marginBottom: 21,
  },
  input: {
    height: 40,
    minWidth: 80,
    maxWidth: Dimensions.get('window').width * 0.72,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E1E6',
    borderTopWidth: 1,
    borderTopColor: '#E5E1E6',
    borderLeftWidth: 1,
    borderLeftColor: '#E5E1E6',
    borderRightWidth: 1,
    borderRightColor: '#E5E1E6',
    borderRadius: 10,
    paddingTop: 4,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 12,
    fontFamily: 'sailec-regular',
    color: '#572d2d',
  },
  label: {
    backgroundColor: '#ffffff',
    fontFamily: 'sailec-regular',
    fontSize: 12,
    color: '#572d2d',
  },
  buttonsContainer: {
    marginTop: 21,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
})

export default withNotificationContext(withAuthContext(PaymentMethod))

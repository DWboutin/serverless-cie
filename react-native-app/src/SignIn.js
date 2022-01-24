import React from 'react'
import { injectIntl } from 'react-intl'
import { Linking, StyleSheet, View } from 'react-native'

import { withNotificationContext } from './contexts/NotificationContext'
import { withAuthContext } from './contexts/AuthContext'

import Card from './_components/Card'
import Logo from './_components/Logo'
import Button from './_components/Button'
import FormattedMessage from './_components/FormattedMessage'

import SignInForm from './components/SignInForm'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleSignUpClick = this.handleSignUpClick.bind(this)
  }

  async handleFormSubmit(values) {
    await this.props.handleSignIn(
      values.username,
      values.password,
      () => {
        this.props.navigation.navigate('Dashboard')
      },
      e => {
        alert(e)
      }
    )
  }

  async handleSignUpClick() {
    const {
      intl: { locale },
    } = this.props
    const url =
      locale === 'en'
        ? 'https://contractor.conecto.ca/sign-up'
        : 'https://entrepreneur.conecto.ca/sign-up'

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url)
      } else {
        alert('Error opening link')
      }
    })
  }

  render() {
    const { intl } = this.props

    return (
      <View style={styles.container}>
        <View>
          <Logo suffixId="contractor" style={styles.logo} />
          <Card>
            <FormattedMessage style={styles.title} id="signIn_form_title" />
            <SignInForm onSubmit={this.handleFormSubmit} />
          </Card>
        </View>
        <View style={styles.signUpSection}>
          <FormattedMessage
            style={styles.signUpText}
            id="signIn_youDontHaveAnAccount"
            adjustsFontSizeToFit={true}
            numberOfLines={1}
          />
          <Button onPress={this.handleSignUpClick}>
            {intl.formatMessage({ id: 'signIn_button_signUp' })}
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
    width: 200,
  },
  title: {
    color: '#572D2D',
    fontSize: 28,
    lineHeight: 30,
    fontFamily: 'styrene-a-medium',
    letterSpacing: 0.03,
    marginBottom: 20,
  },
  signUpSection: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f1e8',
    borderRadius: 10,
    paddingTop: 20,
    paddingRight: 30,
    paddingBottom: 20,
    paddingLeft: 30,
    marginTop: 20,
  },
  signUpText: {
    fontSize: 12,
    lineHeight: 36,
    fontFamily: 'sailec-regular',
  },
})

export default injectIntl(withNotificationContext(withAuthContext(SignIn)))

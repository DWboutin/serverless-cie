import React from 'react'

import { withNotificationContext } from './contexts/NotificationContext'
import { withAuthContext } from './contexts/AuthContext'

import ProfileScreenLayout from './components/ProfileScreenLayout'

import MyAccountSignInForm from './components/MyAccountSignInForm'
import MyAccountPersonalForm from './components/MyAccountPersonalForm'

class MyAccount extends React.Component {
  static navigationOptions = ({ screenProps: { intlFormatMessage } }) => ({
    title: intlFormatMessage({
      id: 'layoutDashboard_accountButton_link_myAccount',
    }),
  })

  constructor(props) {
    super(props)
  }

  render() {
    const {
      screenProps: { intlFormatMessage },
      attributes,
      contact,
    } = this.props

    return (
      <ProfileScreenLayout
        title={intlFormatMessage({
          id: 'layoutDashboard_accountButton_link_myAccount',
        })}
      >
        <MyAccountSignInForm username={attributes.email} />
        <MyAccountPersonalForm
          firstName={contact.first_name}
          lastName={contact.last_name}
          phone={contact.phone}
        />
      </ProfileScreenLayout>
    )
  }
}

export default withNotificationContext(withAuthContext(MyAccount))

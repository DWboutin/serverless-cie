import React from 'react'
import API from '@aws-amplify/api'

import { withNotificationContext } from './contexts/NotificationContext'
import { withAuthContext } from './contexts/AuthContext'

import ProfileScreenLayout from './components/ProfileScreenLayout'
import MyCompanyForm from './components/MyCompanyForm'

import PhoneNumberTransformer from './helpers/PhoneNumberTransformer'

class MyCompany extends React.Component {
  static navigationOptions = ({ screenProps: { intlFormatMessage } }) => ({
    title: intlFormatMessage({
      id: 'layoutDashboard_accountButton_link_myCompany',
    }),
  })

  constructor(props) {
    super(props)

    this.handleInfosSubmit = this.handleInfosSubmit.bind(this)
  }

  async handleInfosSubmit(values) {
    const {
      screenProps: { intlFormatMessage },
      refreshContact,
      addNotification,
    } = this.props

    const tel = PhoneNumberTransformer.forAwsCognito(values.companyPhone)

    await API.put('contractors', '/company/update-infos', {
      body: {
        name: values.name,
        email: values.companyEmail,
        tel: tel,
        activeForRoofing: values.activeForRoofing,
        locale: values.locale,
      },
    })

    await refreshContact()

    addNotification({
      title: intlFormatMessage({
        id: 'account_myCompanyForm_notice_success_title',
      }),
      message: intlFormatMessage({
        id: 'account_myCompanyForm_notice_success_text',
      }),
      timeout: 7000,
    })
  }

  render() {
    const {
      screenProps: { intlFormatMessage },
      organization,
    } = this.props
    let comp = null

    if (organization !== null) {
      comp = (
        <ProfileScreenLayout
          title={intlFormatMessage({
            id: 'account_myCompanyForm_title',
          })}
        >
          <MyCompanyForm
            name={organization.name}
            email={organization.email}
            phone={organization.phone}
            activeForRoofing={
              organization.custom_fields.activeForRoofing === '1'
            }
            locale={organization.custom_fields.locale}
            onSubmit={this.handleInfosSubmit}
          />
        </ProfileScreenLayout>
      )
    }

    return comp
  }
}

export default withNotificationContext(withAuthContext(MyCompany))

import React from 'react'
import { API, Auth } from 'aws-amplify'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import { LoadingBar, Notification, Row, Col } from 'conecto-ui-components'

import SignInInfosForm from './MyAccountContainer/SignInInfosForm'
import PersonalInfosForm from './MyAccountContainer/PersonalInfosForm'
import PhoneNumberTransformer from '../_helpers/PhoneNumberTransformer'

class MyAccountContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.handleSignInInfosSubmit = this.handleSignInInfosSubmit.bind(this)
    this.handlePersonalInfosSubmit = this.handlePersonalInfosSubmit.bind(this)
  }

  componentDidCatch(error, info) {
    const { intl } = this.props

    this.setState({
      isLoading: false,
    })

    Notification.open({
      message: intl.formatMessage({
        id: 'generic_component_error_title',
      }),
      description: intl.formatMessage(
        { id: 'generic_component_error_description' },
        {
          error: error,
          info: info,
        }
      ),
      duration: 7,
    })
  }

  async handleSignInInfosSubmit(values, setFieldError) {
    const { intl, contact } = this.props

    this.setState({
      isLoading: true,
    })

    const user = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    })

    // to change the email address
    if (values.email !== contact.email) {
      await API.post('contractors', '/contact/change-email', {
        body: {
          email: values.username,
        },
      })
    }

    const newPasswordRequest = await Auth.changePassword(
      user,
      values.oldPassword,
      values.newPassword
    )

    this.setState({
      isLoading: false,
    })

    if (newPasswordRequest === 'SUCCESS') {
      Notification.open({
        message: intl.formatMessage({
          id: 'account_myAccountForm_signInInfos_notice_success_title',
        }),
        description: intl.formatHTMLMessage({
          id: 'account_myAccountForm_signInInfos_notice_success_text',
        }),
        duration: 7,
      })
    } else {
      if (newPasswordRequest.code === 'NotAuthorizedException') {
        setFieldError('oldPassword', 'validationWrongPassword')

        Notification.open({
          message: intl.formatMessage({
            id: 'account_myAccountForm_signInInfos_notice_wrongPassword_title',
          }),
          description: intl.formatHTMLMessage({
            id: 'account_myAccountForm_signInInfos_notice_wrongPassword_text',
          }),
          duration: 7,
        })
      }
    }
  }

  async handlePersonalInfosSubmit(values, resetForm) {
    const { intl, refreshContact } = this.props

    this.setState({
      isLoading: true,
    })

    const tel = PhoneNumberTransformer.forAwsCognito(values.phone)

    await API.put('contractors', '/contact', {
      body: {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: tel,
      },
    })

    this.setState({
      isLoading: false,
    })

    await refreshContact()
    resetForm()

    Notification.open({
      message: intl.formatMessage({
        id: 'account_myAccountForm_personalInfos_notice_success_title',
      }),
      description: intl.formatHTMLMessage({
        id: 'account_myAccountForm_personalInfos_notice_success_text',
      }),
      duration: 7,
    })
  }

  render() {
    const { contact } = this.props

    return (
      <>
        <Row className="my-account-forms">
          <Col
            xl={{
              span: 6,
            }}
            lg={{
              span: 6,
            }}
            md={{
              span: 12,
            }}
            sm={{
              span: 12,
            }}
            xs={{
              span: 12,
            }}
          >
            <SignInInfosForm
              email={contact.email}
              isDisabled={this.state.isLoading}
              onSubmit={this.handleSignInInfosSubmit}
            />
          </Col>
          <Col
            xl={{
              span: 6,
            }}
            lg={{
              span: 6,
            }}
            md={{
              span: 12,
            }}
            sm={{
              span: 12,
            }}
            xs={{
              span: 12,
            }}
          >
            <PersonalInfosForm
              firstName={contact.first_name}
              lastName={contact.last_name}
              phone={contact.phone}
              isDisabled={this.state.isLoading}
              onSubmit={this.handlePersonalInfosSubmit}
            />
          </Col>
        </Row>
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </>
    )
  }
}

MyAccountContainer.propTypes = {
  contact: PropTypes.object.isRequired,
  refreshContact: PropTypes.func.isRequired,
}

MyAccountContainer.defaultProps = {
  contact: {},
}

export default injectIntl(MyAccountContainer)

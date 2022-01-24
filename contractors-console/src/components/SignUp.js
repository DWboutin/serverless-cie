import React from 'react'
import { injectIntl } from 'react-intl'
import { Auth, API } from 'aws-amplify'
import { Notification } from 'conecto-ui-components'

import AmplifyConfigs from '../_helpers/AmplifyConfigs'
import cognitoUsernameExists from '../_helpers/cognitoUsernameExists'
import PhoneNumberTransformer from '../_helpers/PhoneNumberTransformer'
import RBQTransformer from '../_helpers/RBQTransformer'

import SignUpStep1 from './SignUp/SignUpStep1'
import SignUpStep2 from './SignUp/SignUpStep2'

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 1,
      formValues: {},
      modalTOSIsOpen: false,
      modalIsOpen: false,
      isLoading: false,
      resetForm: null,
    }

    AmplifyConfigs()

    this.formAsyncValidation = this.formAsyncValidation.bind(this)
    this.handleSubmitSignUpStep1 = this.handleSubmitSignUpStep1.bind(this)
    this.handleSubmitSignUpStep2 = this.handleSubmitSignUpStep2.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleTOSClose = this.handleTOSClose.bind(this)
    this.handleTOSOpen = this.handleTOSOpen.bind(this)
  }

  componentDidCatch(error, info) {
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

  handleSubmitSignUpStep1(values) {
    this.setState({
      step: 2,
      formValues: {
        ...values,
      },
    })
  }

  async handleSubmitSignUpStep2(values) {
    const { intl } = this.props

    this.setState({
      isLoading: true,
      formValues: {
        ...this.state.formValues,
        ...values,
      },
      modalTOSIsOpen: false,
    })

    try {
      values.tel = PhoneNumberTransformer.forAwsCognito(values.tel)
      values.rbq = RBQTransformer.normalize(values.rbq)

      const userSignup = await Auth.signUp({
        username: values.username.toLowerCase().trim(),
        password: values.password,
        attributes: {
          phone_number: values.tel,
          address:
            values.companyNumber +
            ' ' +
            values.companyAddress +
            ' | ' +
            values.companyCity +
            ' | ' +
            values.companyPostalCode,
          given_name: values.firstName,
          family_name: values.lastName,
        },
      })

      await API.post('contractors', '/contact', {
        body: {
          ...values,
          email: values.username.toLowerCase().trim(),
          companyPostalCode: values.companyPostalCode.toUpperCase(),
          password: null,
          confirmPassword: null,
          companyAddressAuto: null,
          mailing: null,
          firstname: values.firstName,
          lastname: values.lastName,
          subscribeEmail: values.mailing,
          cognitoSub: userSignup.userSub,
          locale: intl.locale,
        },
      })

      this.setState({
        modalIsOpen: true,
        isLoading: false,
      })
    } catch (err) {
      this.setState({
        isLoading: false,
      })

      if (err.code) {
        Notification.open({
          message: intl.formatMessage({
            id: 'signIn_form_notice_error_undefinedCode_title',
          }),
          description: intl.formatMessage(
            { id: 'signIn_form_notice_error_undefinedCode_description' },
            { code: err.code }
          ),
          duration: 7,
        })
      } else {
        Notification.open({
          message: intl.formatMessage({
            id: 'signIn_form_notice_error_undefined_title',
          }),
          description: intl.formatMessage({
            id: 'signIn_form_notice_error_undefined_description',
          }),
          duration: 7,
        })
      }
    }
  }

  handleTOSOpen() {
    this.setState({
      modalTOSIsOpen: true,
    })
  }

  handleModalClose() {
    this.setState({
      modalIsOpen: false,
    })
  }

  handleTOSClose() {
    this.setState({
      modalTOSIsOpen: false,
    })
  }

  formAsyncValidation(values) {
    return cognitoUsernameExists(values.username.toLowerCase().trim())
  }

  render() {
    return this.state.step === 1 ? (
      <SignUpStep1
        onSubmit={this.handleSubmitSignUpStep1}
        asyncValidation={this.formAsyncValidation}
      />
    ) : (
      <SignUpStep2
        id="signup-step2"
        onSubmit={this.handleSubmitSignUpStep2}
        handleTOSOpen={this.handleTOSOpen}
        asyncValidation={this.formAsyncValidation}
        handleModalClose={this.handleModalClose}
        handleTOSClose={this.handleTOSClose}
        modalTOSIsOpen={this.state.modalTOSIsOpen}
        modalIsOpen={this.state.modalIsOpen}
        isLoading={this.state.isLoading}
        values={this.state.formValues}
      />
    )
  }
}

SignUp.propTypes = {}

export default injectIntl(SignUp)

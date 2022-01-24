import React from 'react'
import { Auth, API } from 'aws-amplify'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import { LoadingBar, Notification } from 'conecto-ui-components'

import EmployeesForm from './EmployeesContainer/EmployeesForm'
import cognitoUsernameExists from '../_helpers/cognitoUsernameExists'
import PhoneNumberTransformer from '../_helpers/PhoneNumberTransformer'
import EmployeesDisplay from './EmployeesDisplay'

class EmployeesContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.formAsyncValidation = this.formAsyncValidation.bind(this)
    this.handleEmployeeSubmit = this.handleEmployeeSubmit.bind(this)
  }

  componentDidMount() {
    this.props.refreshEmployees()
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

  async handleEmployeeSubmit(values) {
    const { intl, refreshEmployees } = this.props

    this.setState({
      isLoading: true,
    })

    const tel = PhoneNumberTransformer.forAwsCognito(values.tel)

    const userSignup = await Auth.signUp({
      username: values.username,
      password: values.password,
      attributes: {
        phone_number: tel,
        given_name: values.firstName,
        family_name: values.lastName,
      },
    })

    await API.post('contractors', '/contact/add-user', {
      body: {
        ...values,
        email: values.username,
        tel: tel,
        password: null,
        confirmPassword: null,
        cognitoSub: userSignup.userSub,
      },
    })

    this.setState({
      isLoading: false,
    })

    Notification.open({
      message: intl.formatMessage({
        id: 'account_employeeForm_notice_success_title',
      }),
      description: intl.formatHTMLMessage({
        id: 'account_employeeForm_notice_success_text',
      }),
      duration: 7,
    })

    refreshEmployees()
  }

  formAsyncValidation(values) {
    return cognitoUsernameExists(values.username)
  }

  render() {
    const {
      isAdmin,
      userIsOwner,
      companyOwner,
      employees,
      refreshContact,
      refreshEmployees,
      handleLogout,
    } = this.props

    return (
      <>
        {isAdmin && (
          <EmployeesForm
            isDisabled={this.state.isLoading}
            onSubmit={this.handleEmployeeSubmit}
            asyncValidation={this.formAsyncValidation}
          />
        )}
        <EmployeesDisplay
          isAdmin={isAdmin}
          userIsOwner={userIsOwner}
          companyOwner={companyOwner}
          employees={employees}
          refreshContact={refreshContact}
          refreshEmployees={refreshEmployees}
          handleLogout={handleLogout}
        />
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </>
    )
  }
}

EmployeesContainer.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  companyOwner: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
  refreshEmployees: PropTypes.func.isRequired,
  refreshContact: PropTypes.func.isRequired,
}

EmployeesContainer.defaultProps = {
  employees: [],
  companyOwner: '',
  isAdmin: false,
}

export default injectIntl(EmployeesContainer)

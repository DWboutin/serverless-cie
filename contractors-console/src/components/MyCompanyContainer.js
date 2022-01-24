import React from 'react'
import { API } from 'aws-amplify'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import { LoadingBar, Notification } from 'conecto-ui-components'

import MyCompanyForm from './MyCompanyContainer/MyCompanyForm'
import LegalInfos from './MyCompanyContainer/LegalInfos'
import PhoneNumberTransformer from '../_helpers/PhoneNumberTransformer'

class MyCompanyContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.handleInfosSubmit = this.handleInfosSubmit.bind(this)
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

  async handleInfosSubmit(values) {
    const { intl, refreshContact, locale } = this.props

    this.setState({
      isLoading: true,
    })

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

    this.setState({
      isLoading: false,
    })

    if (locale !== values.locale) {
      Notification.open({
        message: intl.formatMessage({
          id: `account_myCompanyForm_notice_success_title_${values.locale}`,
        }),
        description: intl.formatHTMLMessage({
          id: `account_myCompanyForm_notice_success_text_${values.locale}`,
        }),
        duration: 7,
      })
    } else {
      Notification.open({
        message: intl.formatMessage({
          id: 'account_myCompanyForm_notice_success_title',
        }),
        description: intl.formatHTMLMessage({
          id: 'account_myCompanyForm_notice_success_text',
        }),
        duration: 7,
      })
    }
  }

  render() {
    const {
      name,
      phone,
      email,
      activeForRoofing,
      locale,
      RBQ,
      NEQ,
      isAdmin,
    } = this.props

    return (
      <>
        <MyCompanyForm
          isAdmin={isAdmin}
          name={name}
          phone={phone}
          email={email}
          activeForRoofing={activeForRoofing}
          locale={locale}
          isDisabled={this.state.isLoading}
          onSubmit={this.handleInfosSubmit}
        />
        <LegalInfos RBQ={RBQ} NEQ={NEQ} />
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </>
    )
  }
}

MyCompanyContainer.propTypes = {
  refreshContact: PropTypes.func.isRequired,
}

MyCompanyContainer.defaultProps = {
  name: '',
  phone: '',
  email: '',
  RBQ: '',
  NEQ: '',
  activeForRoofing: false,
  locale: '',
}

export default injectIntl(MyCompanyContainer)

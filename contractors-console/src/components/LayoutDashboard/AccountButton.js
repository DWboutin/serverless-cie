import React from 'react'
import { FormattedMessage } from 'react-intl'
import { ButtonDropdown, Icon } from 'conecto-ui-components'

import { AuthContext } from '../../_helpers/WithAuthPage'
import { Link } from '../../i18n'

const AccountButton = () => (
  <AuthContext.Consumer>
    {context => {
      const { contact, handleLogout } = context || {}
      const { first_name } = contact || ''

      return (
        <ButtonDropdown
          id="account-menu"
          type="account"
          className="hidden-md hidden-sm hidden-xs"
          links={[
            <Link to="/my-company">
              <FormattedMessage id="layoutDashboard_accountButton_link_myCompany" />
            </Link>,
            <Link to="/my-company/my-account">
              <FormattedMessage id="layoutDashboard_accountButton_link_myAccount" />
            </Link>,
            <Link to="/my-company/payment-method">
              <FormattedMessage id="layoutDashboard_accountButton_link_payment_method" />
            </Link>,
            <Link to="/my-company/billing">
              <FormattedMessage id="layoutDashboard_accountButton_link_billing" />
            </Link>,
            <Link to="/my-company/addresses">
              <FormattedMessage id="layoutDashboard_accountButton_link_addresses" />
            </Link>,
            <Link to="/my-company/employees">
              <FormattedMessage id="layoutDashboard_accountButton_link_employees" />
            </Link>,
            <a href="#" onClick={handleLogout}>
              <FormattedMessage id="layoutDashboard_accountButton_link_logOut" />
            </a>,
          ]}
        >
          <Icon type="user" />
          {first_name}
        </ButtonDropdown>
      )
    }}
  </AuthContext.Consumer>
)

AccountButton.propTypes = {}

export default AccountButton

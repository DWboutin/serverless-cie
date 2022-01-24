import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage } from 'react-intl'

import { Link } from '../../i18n'

const AccountSideMenu = ({ children, pathname }) => (
  <nav className="account-side-menu">
    <ul>
      <li className={pathname === '/my-company' ? 'active' : ''}>
        <Link to="/my-company">
          <FormattedMessage id="account_sideMenu_myCompany" />
        </Link>
      </li>
      <li className={pathname === '/my-company/my-account' ? 'active' : ''}>
        <Link to="/my-company/my-account">
          <FormattedMessage id="account_sideMenu_myAccount" />
        </Link>
      </li>
      <li className={pathname === '/my-company/payment-method' ? 'active' : ''}>
        <Link to="/my-company/payment-method">
          <FormattedMessage id="account_sideMenu_paymentMethod" />
        </Link>
      </li>
      <li className={pathname === '/my-company/billing' ? 'active' : ''}>
        <Link to="/my-company/billing">
          <FormattedMessage id="account_sideMenu_billing" />
        </Link>
      </li>
      <li className={pathname === '/my-company/addresses' ? 'active' : ''}>
        <Link to="/my-company/addresses">
          <FormattedMessage id="account_sideMenu_addresses" />
        </Link>
      </li>
      <li className={pathname === '/my-company/employees' ? 'active' : ''}>
        <Link to="/my-company/employees">
          <FormattedMessage id="account_sideMenu_employees" />
        </Link>
      </li>
    </ul>
  </nav>
)

AccountSideMenu.defaultProps = {
  pathname: '',
}

export default AccountSideMenu

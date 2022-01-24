import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage } from 'react-intl'
import { Logo, Button } from 'conecto-ui-components'

import { Link } from '../i18n'
import AccountButton from './LayoutDashboard/AccountButton'

import { AuthContext } from '../_helpers/WithAuthPage'

const Layout404 = ({ children }) => (
  <div id="layoutDashboard-404">
    <div className="to-site-header">
      <div className="to-grid container container-full-height">
        <div className="row middle-xs">
          <div className="col col-xs logo-content">
            <Link to="/">
              <Logo suffix={<FormattedMessage id="contractor" />} />
            </Link>
          </div>
          <div className="col col-xs support-button">
            <Button type="bordered" comp="a" href="mailto:support@conecto.ca">
              support@conecto.ca
            </Button>
          </div>
        </div>
      </div>
    </div>
    <main>{children}</main>
    <footer>
      <div className="logo-wrap">
        <Link to="/dashboard">
          <Logo suffix={<FormattedMessage id="contractor" />} />
        </Link>
      </div>
      <Button comp="a" href="mailto:entrepreneurs@conecto.ca">
        <FormattedMessage id="layoutDashboard_footer_button_contact" />
      </Button>
    </footer>
  </div>
)

Layout404.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout404.defaultProps = {
  pathname: '',
}

export default Layout404

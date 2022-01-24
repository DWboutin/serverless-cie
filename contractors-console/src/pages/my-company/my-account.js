import React from 'react'
import { injectIntl } from 'react-intl'

import SEO from '../../components/seo'
import LayoutDashboard from '../../components/LayoutDashboard'
import LayoutAccount from '../../components/LayoutAccount'
import MyAccountContainer from '../../components/MyAccountContainer'

import { AuthContext } from '../../_helpers/WithAuthPage'

const MyAccountPage = ({ intl, location: { pathname }, pageContext }) => (
  <LayoutDashboard pathname={pathname}>
    <AuthContext.Consumer>
      {context => {
        const { contact, refreshContact } = context || {}

        return (
          <LayoutAccount pathname={pathname}>
            <SEO
              title={intl.formatMessage({
                id: 'layoutDashboard_accountButton_link_myAccount',
              })}
              locale={pageContext.locale}
            />
            <MyAccountContainer
              contact={contact}
              refreshContact={refreshContact}
            />
          </LayoutAccount>
        )
      }}
    </AuthContext.Consumer>
  </LayoutDashboard>
)

export default injectIntl(MyAccountPage)

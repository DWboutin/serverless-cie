import React from 'react'
import { injectIntl } from 'react-intl'

import SEO from '../components/seo'
import LayoutDashboard from '../components/LayoutDashboard'
import LayoutAccount from '../components/LayoutAccount'
import MyCompanyContainer from '../components/MyCompanyContainer'

import { AuthContext } from '../_helpers/WithAuthPage'

const MyCompanyPage = ({ intl, location: { pathname }, pageContext }) => (
  <LayoutDashboard pathname={pathname}>
    <AuthContext.Consumer>
      {context => {
        const { organization, attributes, refreshContact } = context || {}
        const { name, phone, email, custom_fields } = organization || {}
        const { RBQ, NEQ, activeForRoofing, locale } =
          custom_fields || {}
        const { isAdmin } = attributes || {}

        return (
          <LayoutAccount pathname={pathname}>
            <SEO
              title={intl.formatMessage({
                id: 'layoutDashboard_accountButton_link_myCompany',
              })}
              locale={pageContext.locale}
            />
            <MyCompanyContainer
              isAdmin={isAdmin === '1'}
              name={name}
              phone={phone}
              email={email}
              activeForRoofing={activeForRoofing}
              refreshContact={refreshContact}
              RBQ={RBQ}
              NEQ={NEQ}
              locale={locale}
            />
          </LayoutAccount>
        )
      }}
    </AuthContext.Consumer>
  </LayoutDashboard>
)

export default injectIntl(MyCompanyPage)

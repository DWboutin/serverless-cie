import React from 'react'
import { injectIntl } from 'react-intl'

import LayoutDashboard from '../../components/LayoutDashboard'
import LayoutAccount from '../../components/LayoutAccount'
import SEO from '../../components/seo'
import EmployeesContainer from '../../components/EmployeesContainer'

import { AuthContext } from '../../_helpers/WithAuthPage'

const EmployeesPage = ({ intl, location: { pathname }, pageContext }) => (
  <LayoutDashboard pathname={pathname}>
    <AuthContext.Consumer>
      {context => {
        const {
          employees,
          refreshEmployees,
          refreshContact,
          attributes,
          handleLogout,
          organization,
          username,
        } = context || {}
        const { custom_fields } = organization || {}
        const { cognitoSub } = custom_fields || {}
        const { isAdmin } = attributes || {}

        return (
          <LayoutAccount pathname={pathname}>
            <SEO
              title={intl.formatMessage({
                id: 'layoutDashboard_accountButton_link_employees',
              })}
              locale={pageContext.locale}
            />
            <EmployeesContainer
              isAdmin={isAdmin === '1'}
              companyOwner={cognitoSub}
              userIsOwner={cognitoSub === username}
              employees={employees}
              handleLogout={handleLogout}
              refreshEmployees={refreshEmployees}
              refreshContact={refreshContact}
            />
          </LayoutAccount>
        )
      }}
    </AuthContext.Consumer>
  </LayoutDashboard>
)

export default injectIntl(EmployeesPage)

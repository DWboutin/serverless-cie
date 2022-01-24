import React from 'react'
import { injectIntl } from 'react-intl'

import LayoutDashboard from '../../components/LayoutDashboard'
import LayoutAccount from '../../components/LayoutAccount'
import SEO from '../../components/seo'
import AddressesContainer from '../../components/AddressesContainer'
import AddressesDisplay from '../../components/AddressesDisplay'

import { AuthContext } from '../../_helpers/WithAuthPage'

const AddressesPage = ({ intl, location: { pathname }, pageContext }) => (
  <LayoutDashboard pathname={pathname}>
    <AuthContext.Consumer>
      {context => {
        const { addresses, refreshAddresses, employees } = context || {}
        const employeesToLoop = employees || []
        const employeesNameBySub = {}
        const addressesArray = addresses || []
        const addressesLimitReached =
          addressesArray.length ===
          parseInt(process.env.LIMIT_COMPANY_ADDRESSES)

        employeesToLoop.forEach(employee => {
          employeesNameBySub[employee.custom_fields.cognitoSub] = {
            first_name: employee.first_name,
            last_name: employee.last_name,
          }
        })

        return (
          <LayoutAccount pathname={pathname}>
            <SEO
              title={intl.formatMessage({
                id: 'layoutDashboard_accountButton_link_addresses',
              })}
              locale={pageContext.locale}
            />
            <AddressesContainer
              addressesLimitReached={addressesLimitReached}
              refreshAddresses={refreshAddresses}
            />
            <AddressesDisplay
              addresses={addresses}
              refreshAddresses={refreshAddresses}
              employeesNameBySub={employeesNameBySub}
            />
          </LayoutAccount>
        )
      }}
    </AuthContext.Consumer>
  </LayoutDashboard>
)

export default injectIntl(AddressesPage)

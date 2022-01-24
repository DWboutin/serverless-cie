import React from 'react'
import { injectIntl } from 'react-intl'

import SEO from '../../components/seo'
import LayoutDashboard from '../../components/LayoutDashboard'
import LayoutAccount from '../../components/LayoutAccount'

import { AuthContext } from '../../_helpers/WithAuthPage'

import BillingContainer from '../../components/BillingContainer'

const PaymentMethodPage = ({ intl, location: { pathname }, pageContext }) => (
  <LayoutDashboard pathname={pathname}>
    <AuthContext.Consumer>
      {context => {
        const { charges, refreshBilling } = context || {}
        const billingCharges = (charges !== null) ? charges : []

        return (
          <LayoutAccount pathname={pathname}>
            <SEO
              title={intl.formatMessage({
                id: 'layoutDashboard_accountButton_link_payment_method',
              })}
              locale={pageContext.locale}
            />
            <BillingContainer charges={billingCharges} refreshBilling={refreshBilling} />
          </LayoutAccount>
        )
      }}
    </AuthContext.Consumer>
  </LayoutDashboard>
)

export default injectIntl(PaymentMethodPage)

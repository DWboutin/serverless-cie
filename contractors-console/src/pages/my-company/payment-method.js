import React from 'react'
import { injectIntl } from 'react-intl'

import SEO from '../../components/seo'
import LayoutDashboard from '../../components/LayoutDashboard'
import LayoutAccount from '../../components/LayoutAccount'

import { AuthContext } from '../../_helpers/WithAuthPage'

import PaymentMethodContainer from '../../components/PaymentMethodContainer'
import PaymentSourcesDisplay from '../../components/PaymentSourcesDisplay'

const PaymentMethodPage = ({ intl, location: { pathname }, pageContext }) => (
  <LayoutDashboard pathname={pathname}>
    <AuthContext.Consumer>
      {context => {
        const { organization, refreshContact } = context || {}
        const { custom_fields, customer } = organization || {}
        const { sources } = customer || []
        const stripeSource =
          typeof custom_fields !== 'undefined'
            ? custom_fields.stripeSource
            : null

        return (
          <LayoutAccount pathname={pathname}>
            <SEO
              title={intl.formatMessage({
                id: 'layoutDashboard_accountButton_link_payment_method',
              })}
              locale={pageContext.locale}
            />
            <PaymentMethodContainer refreshContact={refreshContact} />
            <PaymentSourcesDisplay
              defaultSource={stripeSource}
              sources={sources}
              refreshContact={refreshContact}
            />
          </LayoutAccount>
        )
      }}
    </AuthContext.Consumer>
  </LayoutDashboard>
)

export default injectIntl(PaymentMethodPage)

import React from 'react'
import PropTypes from 'prop-types'
import { Elements, StripeProvider } from 'react-stripe-elements'
import { LanguageContext } from '../i18n/WithIntl'

import CreditCardForm from './PaymentMethodContainer/CreditCardForm'

const PaymentMethodContainer = ({ refreshContact }) => {
  let comp = null

  if (typeof window !== 'undefined') {
    comp = (
      <StripeProvider apiKey={process.env.STRIPE_PT_KEY}>
        <LanguageContext.Consumer>
          {context => {
            // @TODO: Écrire un issue sur Github Gatsby à propos de contect = undefined on `gatsby build`
            const { locale } = context || {}

            return (
              <Elements locale={locale}>
                <CreditCardForm refreshContact={refreshContact} />
              </Elements>
            )
          }}
        </LanguageContext.Consumer>
      </StripeProvider>
    )
  }

  return comp
}

PaymentMethodContainer.propTypes = {
  refreshContact: PropTypes.func.isRequired,
}

PaymentMethodContainer.defaultProps = {}

export default PaymentMethodContainer

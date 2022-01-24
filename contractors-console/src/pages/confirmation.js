import React from 'react'
import queryString from 'query-string'
import { injectIntl } from 'react-intl'

import SEO from '../components/seo'
import CodeConfirmation from '../components/CodeConfirmation'

const ConfirmationPage = ({ intl, location: { search }, pageContext }) => (
  <>
    <SEO
      title={intl.formatMessage({ id: 'signUp_confirmation_modal_button' })}
      locale={pageContext.locale}
    />
    <CodeConfirmation params={queryString.parse(search)} />
  </>
)

export default injectIntl(ConfirmationPage)

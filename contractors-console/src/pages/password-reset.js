import React from 'react'
import { injectIntl } from 'react-intl'

import SEO from '../components/seo'
import PasswordReset from '../components/PasswordReset'

const PasswordResetPage = ({ intl, pageContext }) => (
  <>
    <SEO
      title={intl.formatMessage({ id: 'passwordResetRequest_form_title' })}
      locale={pageContext.locale}
    />
    <PasswordReset />
  </>
)

export default injectIntl(PasswordResetPage)

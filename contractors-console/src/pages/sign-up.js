import React from 'react'
import { injectIntl } from 'react-intl'

import SEO from '../components/seo'
import SignUp from '../components/SignUp'

const SignUpPage = ({ intl, location, pageContext }) => (
  <>
    <SEO
      title={intl.formatMessage({ id: 'signUp_form_checkpoint1' })}
      locale={pageContext.locale}
    />
    <SignUp />
  </>
)

export default injectIntl(SignUpPage)

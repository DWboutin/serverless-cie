import React from 'react'
import { injectIntl } from 'react-intl'

import SEO from '../components/seo'
import SignIn from '../components/SignIn'

const IndexPage = ({ intl, location, pageContext }) => (
  <>
    <SEO
      title={intl.formatMessage({ id: 'signUp_form_checkpoint1' })}
      locale={pageContext.locale}
    />
    <SignIn
      searchPath={location.search}
      locale={pageContext.locale}
      baseLocale={pageContext.baseLocale}
    />
  </>
)

export default injectIntl(IndexPage)

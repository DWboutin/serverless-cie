import React from 'react'
import { Link } from 'gatsby'

import { LanguageContext } from './WithIntl'

export default props => (
  <LanguageContext.Consumer>
    {context => {
      const path =
        context.locale === context.baseLocale
          ? props.to
          : `${context.locale}${props.to}`
      return <Link {...props} to={path} />
    }}
  </LanguageContext.Consumer>
)

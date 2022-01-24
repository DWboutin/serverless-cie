import React from 'react'
import { injectIntl } from 'react-intl'

import { languages } from './locales'
import { LanguageContext } from './WithIntl'

const Language = ({ intl }) => (
  <LanguageContext.Consumer>
    {context => (
      <select value={context.locale} onChange={context.handleLanguageChange}>
        {languages.map(({ value, text }) => (
          <option key={value} value={value}>
            {intl.formatMessage({ id: `lang_${value}` })}
          </option>
        ))}
      </select>
    )}
  </LanguageContext.Consumer>
)

export default injectIntl(Language)

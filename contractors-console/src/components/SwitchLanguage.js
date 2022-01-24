import React from 'react'
import { injectIntl } from 'react-intl'
import { Link } from 'gatsby'
import { Button, ButtonGroup } from 'conecto-ui-components'

import { languages } from '../i18n/locales'
import { LanguageContext } from '../i18n/WithIntl'

const SwitchLanguage = ({ intl, className }) => (
  <LanguageContext.Consumer>
    {context => (
      <ButtonGroup className={className || ''}>
        {languages.map(({ value }) => (
          <Button
            comp={Link}
            to={context.getLocalePagePath(value)}
            type="switch"
            key={`lang_${value}`}
            active={context.locale === value}
          >
            {intl.formatMessage({ id: `lang_${value}` })}
          </Button>
        ))}
      </ButtonGroup>
    )}
  </LanguageContext.Consumer>
)

export default injectIntl(SwitchLanguage)

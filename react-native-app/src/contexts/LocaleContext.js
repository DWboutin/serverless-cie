import React from 'react'
import { IntlProvider } from 'react-intl'
import * as Localization from 'expo-localization'
import moment from 'moment'

export const LocaleContext = React.createContext()

import { messages } from '../i18n'

class WithLocaleContext extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      locale: Localization.locale.substring(0, 2),
    }
  }

  render() {
    const { children } = this.props

    moment.locale(this.state.locale)

    return (
      <IntlProvider
        locale={this.state.locale}
        messages={messages[this.state.locale]}
      >
        <LocaleContext.Provider
          value={{
            ...this.state,
          }}
        >
          {children}
        </LocaleContext.Provider>
      </IntlProvider>
    )
  }
}

export default WithLocaleContext

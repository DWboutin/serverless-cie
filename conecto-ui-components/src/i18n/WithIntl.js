import React from 'react'
import { navigate } from 'gatsby'
import { IntlProvider } from 'react-intl'

import { messages } from './locales'
import stripLanguageFromUrl from './stripLanguageFromUrl'

import { siteMetadata } from '../../gatsby-config'

export const LanguageContext = React.createContext()

class WithIntl extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      locale: this.props.pageContext.locale || siteMetadata.baseLanguage,
    }

    this.handleLanguageChange = this.handleLanguageChange.bind(this)
  }

  handleLanguageChange(event) {
    const { value } = event.target
    const { pathname } = this.props.location
    const strippedPathname = stripLanguageFromUrl(pathname)
    const redirectPath =
      siteMetadata.baseLanguage === value
        ? strippedPathname
        : `/${value}${strippedPathname}`

    this.setState(
      {
        locale: value,
      },
      () => {
        localStorage.setItem('language', value)
        navigate(redirectPath)
      }
    )
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{
          locale: this.state.locale,
          baseLocale: siteMetadata.baseLanguage,
          handleLanguageChange: this.handleLanguageChange,
        }}
      >
        <IntlProvider
          locale={this.state.locale}
          messages={messages[this.state.locale]}
        >
          {React.cloneElement(this.props.children, this.props)}
        </IntlProvider>
      </LanguageContext.Provider>
    )
  }
}

export default WithIntl

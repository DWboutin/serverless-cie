import React from 'react'
import moment from 'moment'
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

    this.getLocalePagePath = this.getLocalePagePath.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.pageContext.locale !== prevProps.pageContext.locale) {
      this.setState({
        locale: this.props.pageContext.locale,
      })
    }
  }

  getLocalePagePath(locale) {
    const { pathname } = this.props.location
    const strippedPathname = stripLanguageFromUrl(pathname)
    let pagePath = '/'

    if (siteMetadata.baseLanguage === locale) {
      pagePath = strippedPathname
    } else {
      if (strippedPathname.length > 1) {
        pagePath += `${locale}${strippedPathname}`
      } else {
        pagePath += locale
      }
    }

    return pagePath
  }

  render() {
    moment.locale(this.state.locale)

    return (
      <LanguageContext.Provider
        value={{
          locale: this.state.locale,
          baseLocale: siteMetadata.baseLanguage,
          getLocalePagePath: this.getLocalePagePath,
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

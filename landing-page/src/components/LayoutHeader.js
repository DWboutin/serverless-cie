/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Link } from 'gatsby'
import {
  SiteHeader,
  Logo,
  Button,
  ModalButton,
  Icon,
  Navigation,
  NavigationLink,
} from 'conecto-ui-components'

import SwitchLanguage from './SwitchLanguage'

class LayoutHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hash: null,
    }

    this.handleHashChange = this.handleHashChange.bind(this)
  }

  handleHashChange() {
    setTimeout(() => {
      console.log(window.location.hash)
      this.setState({
        hash: window.location.hash,
      })
    }, 0)
  }

  render() {
    return (
      <SiteHeader
        logo={
          <Link to="/">
            <Logo type="roofing" suffix={<FormattedMessage id="roofing" />} />
          </Link>
        }
        buttons={
          <>
            <Button
              type="bordered"
              comp="a"
              href={process.env.CONTRACTOR_URL}
              target="_blank"
              rel="noopener"
              className="contractor-btn hidden-md hidden-sm hidden-xs"
            >
              <div className="circle">
                <Icon type="colored-flag" />
              </div>
              <FormattedMessage id="contractors" />
            </Button>
            <SwitchLanguage className="hidden-md hidden-sm hidden-xs" />
            <ModalButton
              withBackground
              button={
                <Button type="menu" className="hidden-xl hidden-lg">
                  <FormattedMessage id="menu" />
                  <Icon type="menu" />
                </Button>
              }
            >
              <div className="to-mobile-menu">
                <div className="header" />
                <Navigation vertical className="navigation">
                  <NavigationLink href="#how-it-works" isActive={this.state.hash === '#how-it-works'} onClick={this.handleHashChange}>
                    <FormattedMessage id="howItWorks" />
                  </NavigationLink>
                  <NavigationLink
                    href="#materials"
                    isActive={this.state.hash === '#materials'}
                    className="hidden-lg hidden-md hidden-sm"
                    onClick={this.handleHashChange}
                  >
                    <FormattedMessage id="roofingTypes" />
                  </NavigationLink>
                  <NavigationLink
                    href="#made-with-conecto"
                    isActive={this.state.hash === '#made-with-conecto'}
                    className="hidden-lg hidden-md hidden-sm"
                    onClick={this.handleHashChange}
                  >
                    <FormattedMessage id="madeWithConecto" />
                  </NavigationLink>
                </Navigation>
                <div className="language">
                  <SwitchLanguage />
                </div>
                <div className="contractors">
                  <FormattedMessage tagName="p" id="weNeedContractors" />
                  <Button
                    type="bordered"
                    comp="a"
                    href="https://entrepreneur.conecto.ca"
                    className="contractor-btn hidden-md hidden-sm hidden-xs"
                  >
                    <div className="circle">
                      <Icon type="colored-flag" />
                    </div>
                    <FormattedMessage id="contractors" />
                  </Button>
                </div>
              </div>
            </ModalButton>
          </>
        }
      >
        <NavigationLink href="/#how-it-works" isActive={this.state.hash === '#how-it-works'} onClick={this.handleHashChange}>
          <FormattedMessage id="howItWorks" />
        </NavigationLink>
        <NavigationLink href="/#materials" isActive={this.state.hash === '#materials'} className="hidden-lg hidden-md hidden-sm" onClick={this.handleHashChange}>
          <FormattedMessage id="roofingTypes" />
        </NavigationLink>
        <NavigationLink
          href="/#made-with-conecto"
          isActive={this.state.hash === '#made-with-conecto'}
          className="hidden-lg hidden-md hidden-sm"
          onClick={this.handleHashChange}
        >
          <FormattedMessage id="madeWithConecto" />
        </NavigationLink>
      </SiteHeader>
    )
  }
}

LayoutHeader.propTypes = {}

export default LayoutHeader

import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import {
  Logo,
  Button,
  ModalButton,
  SiteHeader,
  Icon,
  Navigation,
  NavigationLink, Modal,
} from 'conecto-ui-components'

import { Link } from '../i18n'
import AccountButton from './LayoutDashboard/AccountButton'

import { AuthContext } from '../_helpers/WithAuthPage'


class LayoutDashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tosRead: false,
    }

    this.handleTOSScroll = this.handleTOSScroll.bind(this)
  }

  handleTOSScroll(e) {
    const { tosRead } = this.state

    if (
      e.target.offsetHeight + e.target.scrollTop > e.target.scrollHeight &&
      tosRead === false
    ) {
      this.setState({
        tosRead: true,
      })
    }
  }

  render() {
    const { children, pathname, intl } = this.props

    return (
      <div id="layoutDashboard-section">
        <SiteHeader
          logo={
            <Link to="/dashboard">
              <Logo suffix={<FormattedMessage id="contractor" />} />
            </Link>
          }
          buttons={
            <>
              <AccountButton />
              <ModalButton
                withBackground
                button={
                  <Button type="menu" className="hidden-xl hidden-lg">
                    <Icon type="menu" />
                    <FormattedMessage id="menu" />
                  </Button>
                }
              >
                <div className="to-mobile-menu">
                  <div className="header" />
                  <Navigation vertical className="navigation">
                    <NavigationLink
                      comp={Link}
                      to="/dashboard"
                      isActive={pathname.indexOf('dashboard') >= 0}
                    >
                      <FormattedMessage id="layoutDashboard_navigation_link_dashboard" />
                    </NavigationLink>
                    <NavigationLink
                      comp={Link}
                      to="/opportunities"
                      isActive={pathname.indexOf('opportunities') >= 0}
                    >
                      <FormattedMessage id="layoutDashboard_navigation_link_opportunities" />
                    </NavigationLink>
                    <NavigationLink
                      comp={Link}
                      to="/leads"
                      isActive={pathname.indexOf('leads') >= 0}
                    >
                      <FormattedMessage id="layoutDashboard_navigation_link_leads" />
                    </NavigationLink>
                  </Navigation>
                  <AuthContext.Consumer>
                    {context => {
                      const { contact, handleLogout } = context || {}
                      const { first_name, last_name } = contact || {}

                      return (
                        <div className="mobile-account-links">
                          <div className="mobile-account-link">
                            <Button comp={Link} type="account" to="/my-company">
                              <Icon type="user" />
                              {first_name} {last_name}
                            </Button>
                          </div>
                          <div className="mobile-account-link mobile-account-link-logout">
                            <Button
                              to="/my-company"
                              handleClick={handleLogout}
                              type="ghost"
                            >
                              <FormattedMessage id="layoutDashboard_accountButton_link_logOut" />
                            </Button>
                          </div>
                        </div>
                      )
                    }}
                  </AuthContext.Consumer>
                  <div className="footer">
                    <Button comp="a" href="mailto:support@conecto.ca">
                      <FormattedMessage id="layoutDashboard_footer_button_contact" />
                    </Button>
                  </div>
                </div>
              </ModalButton>
            </>
          }
        >
          <NavigationLink
            comp={Link}
            to="/dashboard"
            isActive={pathname.indexOf('dashboard') >= 0}
            className="hidden-md hidden-sm"
          >
            <FormattedMessage id="layoutDashboard_navigation_link_dashboard" />
          </NavigationLink>
          <NavigationLink
            comp={Link}
            to="/opportunities"
            isActive={pathname.indexOf('opportunities') >= 0}
            className="hidden-sm"
          >
            <FormattedMessage id="layoutDashboard_navigation_link_opportunities" />
          </NavigationLink>
          <NavigationLink
            comp={Link}
            to="/leads"
            isActive={pathname.indexOf('leads') >= 0}
            className="hidden-sm"
          >
            <FormattedMessage id="layoutDashboard_navigation_link_leads" />
          </NavigationLink>
        </SiteHeader>
        <main>{children}</main>
        <footer>
          <div className="logo-wrap">
            <Link to="/dashboard">
              <Logo suffix={<FormattedMessage id="contractor" />} />
            </Link>
          </div>
          <Button comp="a" href="mailto:entrepreneurs@conecto.ca">
            <FormattedMessage id="layoutDashboard_footer_button_contact" />
          </Button>
        </footer>
        <AuthContext.Consumer>
          {context => {
            const { organization, contact, acceptTOS } = context || {}
            const { address, name, custom_fields: orgCustom_fields } = organization || {}
            const { conditions: orgConditions } = orgCustom_fields || {}
            const { custom_fields: contactCustom_fields } = contact || {}
            const { conditions: contactConditions } = contactCustom_fields || {}
            const { line1, city, postal_code } = address || {}
            let comp = null

            if (orgConditions !== '1' || contactConditions !== '1') {
              comp = (
                <Modal
                  className="afterSignup-tos-confirmation-modal"
                  isOpen={true}
                  handleClose={() => {}}
                >
                  <div className="modal-content">
                    <FormattedMessage
                      id="signup_tos_confirmation_modal_title"
                      tagName="h2"
                    />
                    <div
                      id="scroll_tos"
                      className="tos_wrap"
                      onScroll={this.handleTOSScroll}
                    >
                      <FormattedHTMLMessage
                        id="signup_tos_confirmation_modal_text"
                        tagName="span"
                        values={{
                          day_date: moment().format('Do'),
                          month_date: moment().format('MMMM'),
                          month_date_uppercase: moment()
                            .format('MMMM')
                            .toUpperCase(),
                          year_date: moment().format('YYYY'),
                          companyName: name,
                          companyAddress: `${line1}, ${city}, ${postal_code}`,
                        }}
                      />
                    </div>
                    <FormattedMessage
                      id="signup_tos_confirmation_modal_scroll_info"
                      tagName="small"
                    />
                    <Button handleClick={acceptTOS} disabled={!this.state.tosRead}>
                      {intl.formatMessage({
                        id: 'signup_tos_confirmation_modal_submit_btn',
                      })}
                    </Button>
                  </div>
                </Modal>
              )
            }

            return comp
          }}
        </AuthContext.Consumer>
      </div>
    )
  }
}

LayoutDashboard.propTypes = {
  children: PropTypes.node.isRequired,
}

LayoutDashboard.defaultProps = {
  pathname: '',
}

export default injectIntl(LayoutDashboard)

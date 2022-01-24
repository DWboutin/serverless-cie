import React from 'react'
import { navigate } from 'gatsby'
import { API, Auth } from 'aws-amplify'

import { WithIntl } from '../i18n'

export const AuthContext = React.createContext()

class WithAuthPage extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isAuthenticated: false,
      attributes: null,
      username: null,
      contact: null,
      organization: null,
      notifications: null,
      employees: null,
      addresses: null,
      leads: null,
      charges: null,
      locale: props.pageContext.baseLocale,
    }

    this.handleLogout = this.handleLogout.bind(this)
    this.refreshContact = this.refreshContact.bind(this)
    this.refreshNotifications = this.refreshNotifications.bind(this)
    this.refreshLeads = this.refreshLeads.bind(this)
    this.refreshEmployees = this.refreshEmployees.bind(this)
    this.refreshAddresses = this.refreshAddresses.bind(this)
    this.refreshBilling = this.refreshBilling.bind(this)

    this.getNotifyToken = this.getNotifyToken.bind(this)
    this.bindNotifyToken = this.bindNotifyToken.bind(this)
    this.handleNotifyError = this.handleNotifyError.bind(this)
    this.requestNotifyPermission = this.requestNotifyPermission.bind(this)
    this.acceptTOS = this.acceptTOS.bind(this)

    if (typeof props.initializer === 'function') {
      props.initializer(messaging => {
        if (messaging === null) {
          this.setState({
            token: 'BLOCKED',
          })
        }

        this.messaging = messaging
      })
    }
  }

  async componentDidMount() {
    const { locale, baseLocale, location, redirectTo } = this.props

    try {
      if (this.state.isAuthenticated === false) {
        const currentUser = Auth.currentAuthenticatedUser({
          bypassCache: true,
        })
        const contactFetch = API.get('contractors', '/contact', {})
        const notificationsFetch = API.get(
          'contractors',
          '/notifications/emitted',
          {}
        )
        const leadsFetch = API.get(
          'contractors',
          '/notifications/leads',
          {}
        )
        const employees = API.get('contractors', '/company/employees', {})
        const addresses = API.get('contractors', '/company/addresses', {})
        const stats = API.get('contractors', '/stats/company', {})
        const token = this.getNotifyToken()

        const promises = await Promise.all([
          currentUser,
          contactFetch,
          notificationsFetch,
          employees,
          addresses,
          stats,
          token,
        ])

        if (this.messaging !== null) {
          this.messaging.onMessage(function(payload) {
            const notification = new Notification(payload.data.twi_title, {
              icon: 'https://entrepreneur.conecto.ca/icons/icon-96x96.png',
              body: payload.data.twi_body,
              vibrate: window.navigator.vibrate([
                200,
                100,
                200,
                100,
                200,
                100,
                200,
              ]),
            })

            notification.onclick = function(event) {
              event.preventDefault() // prevent the browser from focusing the Notification's tab

              if (payload.data.twi_action.indexOf(process.env.SITE_URL) >= 0) {
                navigate(payload.data.twi_action.replace(process.env.SITE_URL, ''))
              } else {
                window.open(payload.data.twi_action, '_blank')
              }

              notification.close()
            }
          })
        }

        this.setState({
          isAuthenticated: true,
          attributes: {
            isAdmin: promises[0].attributes['custom:isAdmin'],
          },
          username: promises[0].username,
          contact: promises[1].contact,
          organization: promises[1].organization,
          notifications: promises[2],
          employees: promises[3],
          addresses: promises[4],
          stats: promises[5],
          token: promises[6],
          locale: promises[1].organization.custom_fields.locale,
        })
      }
    } catch (e) {
      if (e !== 'No current user') {
        const isBaseLocale = locale === baseLocale
        const redirectPath = isBaseLocale
          ? redirectTo
          : `${locale}${redirectTo}`
        const pathname = isBaseLocale
          ? location.pathname
          : `${locale}${location.pathname}`

        navigate(
          redirectPath + `?r=${encodeURIComponent(pathname + location.search)}`
        )
      }
    }
  }

  async refreshContact(cb) {
    try {
      if (this.state.isAuthenticated !== false) {
        const contactFetch = await API.get('contractors', '/contact', {})

        this.setState(
          {
            contact: contactFetch.contact,
            organization: contactFetch.organization,
            locale: contactFetch.organization.custom_fields.locale,
          },
          () => {
            if (typeof cb === 'function') {
              cb(this.state)
            }
          }
        )
      } else {
        this.handleLogout({ preventDefault: () => {} })
      }
    } catch (e) {
      console.log('refreshContact', e)
    }
  }

  async refreshNotifications(cb) {
    try {
      if (this.state.isAuthenticated !== false) {
        const notificationsFetch = await API.get(
          'contractors',
          '/notifications/emitted',
          {}
        )

        this.setState(
          {
            notifications: notificationsFetch,
          },
          () => {
            if (typeof cb === 'function') {
              cb(this.state)
            }
          }
        )
      } else {
        this.handleLogout({ preventDefault: () => {} })
      }
    } catch (e) {
      console.log('refreshNotifications', e)
    }
  }

  async refreshLeads(cb) {
    try {
      if (this.state.isAuthenticated !== false) {
        const notificationsFetch = await API.get(
          'contractors',
          '/notifications/leads',
          {}
        )

        this.setState(
          {
            leads: notificationsFetch,
          },
          () => {
            if (typeof cb === 'function') {
              cb(this.state)
            }
          }
        )
      } else {
        this.handleLogout({ preventDefault: () => {} })
      }
    } catch (e) {
      console.trace('refreshLeads', e)
    }
  }

  async refreshEmployees(cb) {
    try {
      if (this.state.isAuthenticated !== false) {
        const employees = await API.get('contractors', '/company/employees', {})

        this.setState(
          {
            employees: employees,
          },
          () => {
            if (typeof cb === 'function') {
              cb(this.state)
            }
          }
        )
      } else {
        this.handleLogout({ preventDefault: () => {} })
      }
    } catch (e) {
      console.log('refreshEmployees', e)
    }
  }

  async refreshAddresses(cb) {
    try {
      if (this.state.isAuthenticated !== false) {
        const addresses = await API.get('contractors', '/company/addresses', {})

        this.setState(
          {
            addresses: addresses,
          },
          () => {
            if (typeof cb === 'function') {
              cb(this.state)
            }
          }
        )
      } else {
        this.handleLogout({ preventDefault: () => {} })
      }
    } catch (e) {
      console.log('refreshAddresses', e)
    }
  }

  async refreshBilling() {
    try {
      if (this.state.isAuthenticated !== false) {
        const billing = await API.get('contractors', '/company/charges', {})

        this.setState(
          {
            charges: billing.charges.data,
          },
          () => {
            if (typeof cb === 'function') {
              cb(this.state)
            }
          }
        )
      } else {
        this.handleLogout({ preventDefault: () => {} })
      }
    } catch (e) {
      console.log('refreshBilling', e)
    }
  }

  getNotifyToken() {
    return new Promise(resolve => {
      if (this.messaging !== null) {
        this.messaging
          .getToken()
          .then(currentToken => {
            if (currentToken) {
              this.bindNotifyToken(currentToken)

              resolve(currentToken)
            } else {
              resolve(null)
            }
          })
          .catch(err => {
            resolve(this.handleNotifyError(err))
          })
      } else {
        resolve('BLOCKED')
      }
    })
  }

  requestNotifyPermission() {
    return new Promise(resolve => {
      if (this.messaging !== null) {
        if (this.state.token !== 'BLOCKED') {
          this.messaging
            .requestPermission()
            .then(async () => {
              const token = await this.getNotifyToken()

              this.setState({
                token,
              })

              resolve(token)
            })
            .catch(err => {
              resolve(this.handleNotifyError(err))
            })
        } else {
          resolve('BLOCKED')
        }
      } else {
        resolve('BLOCKED')
      }
    })
  }

  handleNotifyError(err) {
    let tokenStatus = null

    if (
      err.message.indexOf('messaging/permission-blocked') >= 0 ||
      err.message.indexOf('messaging/notifications-blocked')
    ) {
      tokenStatus = 'BLOCKED'
    }

    if (err.message.indexOf('messaging/permission-default') >= 0) {
      tokenStatus = 'DISMISSED'
    }

    this.setState({
      token: tokenStatus,
    })

    return tokenStatus
  }

  async bindNotifyToken(token) {
    return await API.post('contractors', '/contact-register-notify', {
      body: {
        token: token,
      },
    })
  }

  async acceptTOS() {
    await API.post('contractors', '/contact/accept-tos', {})

    await this.refreshContact()
  }

  async handleLogout(e) {
    e.preventDefault()

    const { locale, baseLocale, redirectTo } = this.props

    await Auth.signOut()

    this.setState(
      {
        isAuthenticated: false,
        attributes: null,
        username: null,
      },
      () => {
        const redirectPath =
          locale === baseLocale ? redirectTo : `${locale}${redirectTo}`

        navigate(redirectPath)
      }
    )
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          handleLogout: this.handleLogout,
          refreshContact: this.refreshContact,
          refreshNotifications: this.refreshNotifications,
          refreshLeads: this.refreshLeads,
          refreshEmployees: this.refreshEmployees,
          refreshAddresses: this.refreshAddresses,
          refreshBilling: this.refreshBilling,
          requestNotifyPermission: this.requestNotifyPermission,
          acceptTOS: this.acceptTOS,
        }}
      >
        {this.state.isAuthenticated && (
          <WithIntl {...this.props} locale={this.state.locale}>
            {React.cloneElement(this.props.children, this.props)}
          </WithIntl>
        )}
      </AuthContext.Provider>
    )
  }
}

export default WithAuthPage

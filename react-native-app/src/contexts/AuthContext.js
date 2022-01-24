import React from 'react'
import { Text } from 'react-native'
import Auth from '@aws-amplify/auth'
import API from '@aws-amplify/api'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

export const AuthContext = React.createContext()

import LoadingScreen from '../components/LoadingScreen'

class AuthComponentContext extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isMounted: false,
      isAuthenticated: false,
      initialRouteName: props.noAuthRoute,
      attributes: null,
      username: null,
      contact: null,
      organization: null,
      opportunities: null,
      employees: null,
      addresses: null,
      leads: null,
      charges: null,
      token: null,
    }

    this.registerForPushNotificationAsync = this.registerForPushNotificationAsync.bind(
      this
    )
    this.fetchUserInfos = this.fetchUserInfos.bind(this)
    this.refreshContact = this.refreshContact.bind(this)
    this.refreshNotifications = this.refreshNotifications.bind(this)
    this.refreshLeads = this.refreshLeads.bind(this)
    this.refreshEmployees = this.refreshEmployees.bind(this)
    this.refreshAddresses = this.refreshAddresses.bind(this)
    this.bindNotifyToken = this.bindNotifyToken.bind(this)
    this.handleNotification = this.handleNotification.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  async componentDidMount() {
    if (this.props.isOnline && this.state.isAuthenticated === false) {
      await this.fetchUserInfos()
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.isAuthenticated === false &&
      this.state.isAuthenticated === true
    ) {
      this.registerForPushNotificationAsync()

      this.notificationSubscription = Notifications.addListener(
        this.handleNotification
      )
    }

    if (
      (prevProps.fontLoaded !== this.props.fontLoaded ||
        prevProps.isOnline !== this.props.isOnline) &&
      (this.props.isOnline && this.props.fontLoaded)
    ) {
      if (this.state.isAuthenticated === false) {
        await this.fetchUserInfos()
      }
    }
  }

  async registerForPushNotificationAsync() {
    try {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      )
      let finalStatus = existingStatus

      // only ask if permissions have not already been determined, because
      // iOS won't necessarily prompt the user a second time.
      if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)

        finalStatus = status
      }

      // Stop here if the user did not grant permissions
      if (finalStatus !== 'granted') {
        return
      }

      // Get the token that uniquely identifies this device
      let token = await Notifications.getExpoPushTokenAsync()

      this.setState({
        token,
      })

      await this.bindNotifyToken(token)
    } catch (e) {
      alert(e)
    }
  }

  async fetchUserInfos() {
    console.log('fetchUserInfos')
    return new Promise(async (resolve, reject) => {
      try {
        const currentUser = Auth.currentAuthenticatedUser({
          bypassCache: true,
        })
        const contactFetch = API.get('contractors', '/contact', {})
        const notificationsFetch = API.get(
          'contractors',
          '/notifications/emitted',
          {}
        )
        // const leadsFetch = API.get('contractors', '/notifications/leads', {})
        const employees = API.get('contractors', '/company/employees', {})
        const addresses = API.get('contractors', '/company/addresses', {})
        const stats = API.get('contractors', '/stats/company', {})

        const promises = await Promise.all([
          currentUser,
          contactFetch,
          notificationsFetch,
          employees,
          addresses,
          stats,
          // leadsFetch,
        ])

        this.setState(
          {
            isMounted: true,
            isAuthenticated: true,
            initialRouteName: this.props.authRoute,
            attributes: {
              email: promises[0].attributes['email'],
              firstName: promises[0].attributes['given_name'],
              lastName: promises[0].attributes['family_name'],
              isAdmin: promises[0].attributes['custom:isAdmin'],
            },
            fullName: `${promises[0].attributes['given_name']} ${
              promises[0].attributes['family_name']
            }`,
            username: promises[0].username,
            contact: promises[1].contact,
            organization: promises[1].organization,
            opportunities: promises[2].opportunities,
            employees: promises[3],
            addresses: promises[4],
            stats: promises[5],
          },
          resolve
        )
      } catch (e) {
        console.log('fetchUserInfos', e)
        this.setState({
          isMounted: true,
          isAuthenticated: false,
          initialRouteName: this.props.noAuthRoute,
        })
      }
    })
  }

  async refreshContact(cb) {
    try {
      if (this.state.isAuthenticated !== false) {
        const contactFetch = await API.get('contractors', '/contact', {})

        this.setState(
          {
            contact: contactFetch.contact,
            organization: contactFetch.organization,
          },
          () => {
            if (typeof cb === 'function') {
              cb(this.state)
            }
          }
        )
      } else {
        throw 'not logged in'
      }
    } catch (e) {
      throw e
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
        throw 'not logged in'
      }
    } catch (e) {
      throw e
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
            leads: notificationsFetch.opportunities,
          },
          () => {
            if (typeof cb === 'function') {
              cb(this.state)
            }
          }
        )
      } else {
        throw 'not logged in'
      }
    } catch (e) {
      throw e
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
        throw 'not logged in'
      }
    } catch (e) {
      throw e
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
        throw 'not logged in'
      }
    } catch (e) {
      throw e
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
        throw 'not logged in'
      }
    } catch (e) {
      throw e
    }
  }

  async bindNotifyToken(token) {
    return await API.post('contractors', '/contact-register-notify', {
      body: {
        token: token,
      },
    })
  }

  handleNotification(notification) {
    this.props.addNotification(notification.data)
  }

  async handleSignIn(username, password, cb, reject) {
    await Auth.signIn(username.toLowerCase().trim(), password)

    this.fetchUserInfos()
      .then(() => {
        if (typeof cb === 'function') {
          cb()
        }
      })
      .catch(e => {
        if (e !== 'No current user') {
          if (typeof reject === 'function') {
            reject()
          }
        }
      })
  }

  async handleLogout() {
    await Auth.signOut()

    this.setState({
      isAuthenticated: false,
      initialRouteName: this.props.noAuthRoute,
    })
  }

  render() {
    const { children, noAuthRoute, isOnline } = this.props
    const { isMounted, isAuthenticated } = this.state

    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          fullName: this.state.fullName,
          handleSignIn: this.handleSignIn,
          handleLogout: this.handleLogout,
          refreshContact: this.refreshContact,
          refreshNotifications: this.refreshNotifications,
          refreshLeads: this.refreshLeads,
          refreshEmployees: this.refreshEmployees,
          refreshAddresses: this.refreshAddresses,
          refreshBilling: this.refreshBilling,
        }}
      >
        {isMounted &&
          React.Children.map(children, child =>
            React.cloneElement(child, {
              initialRouteName: this.state.initialRouteName,
              authIsMounted: isMounted,
              authIsAuthenticated: isAuthenticated,
              noAuthRoute: noAuthRoute,
              fullName: this.state.fullName,
              token: this.state.token,
              notifications: this.state.notification,
              leads: this.state.leads,
            })
          )}
        {!isMounted && <LoadingScreen isOnline={isOnline} />}
      </AuthContext.Provider>
    )
  }
}

export const withAuthContext = WrappedComponent => {
  return class withAuthContext extends React.Component {
    static navigationOptions = WrappedComponent.navigationOptions

    constructor(props) {
      super(props)
    }

    render() {
      return (
        <AuthContext.Consumer>
          {context => {
            let comp = null

            if (context.isMounted) {
              comp = <WrappedComponent {...context} {...this.props} />
            }

            return comp
          }}
        </AuthContext.Consumer>
      )
    }
  }
}
export default AuthComponentContext

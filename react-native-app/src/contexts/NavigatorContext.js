import React from 'react'
import { injectIntl } from 'react-intl'
import 'react-native-gesture-handler'
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  StackActions,
  NavigationActions,
} from 'react-navigation'
import { AsyncStorage, Dimensions } from 'react-native'

import {
  mainStackNavigationOptions,
  offlineRoutes,
  signedInRoutes,
  profileRoutes,
  opportunitiesRoutes,
  leadsRoutes,
} from '../_routes'
import DrawerNavigator from '../components/DrawerNavigator'
import ProfileNavigatorItem from '../components/DrawerNavigator/ProfileNavigatorItem'

export const NavigatorContext = React.createContext()

class WithNavigatorContext extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentRoute: props.initialRouteName,
    }

    this._nav = React.createRef()
    this._persistenceKey = 'navigationRouterKey'

    const defaultStackNavigationOption = {
      // headerLeft: null,
      mode: 'modal',
      headerMode: 'float',
      headerForceInset: true,
      headerBackTitle: props.intl.formatMessage({ id: 'button_back' }),
      headerTintColor: '#fff',
      headerLeftContainerStyle: {
        justifyContent: 'center',
      },
      headerBackTitleStyle: {
        fontSize: 14,
        fontFamily: 'sailec-regular',
        paddingTop: 8,
        color: '#fff',
        justifyContent: 'center',
      },
      headerStyle: {
        backgroundColor: '#26B89F',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontFamily: 'styrene-a-medium',
        color: '#fff',
      },
      gestureResponseDistance: {
        horizontal: Dimensions.get('window').width * 0.25,
      },
    }

    this.leadsRoutes = createStackNavigator(leadsRoutes, {
      defaultNavigationOptions: defaultStackNavigationOption,
    })

    this.opportunitiesStackNavigator = createStackNavigator(
      opportunitiesRoutes,
      {
        defaultNavigationOptions: defaultStackNavigationOption,
        initialRouteName: 'Opportunities',
      }
    )

    this.profileTabsNavigator = createMaterialTopTabNavigator(profileRoutes, {
      lazy: true,
      swipeEnabled: false,
      tabBarOptions: {
        upperCaseLabel: false,
        scrollEnabled: true,
        activeTintColor: '#e91e63',
        tabStyle: {
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          margin: 0,
        },
        indicatorStyle: {
          height: 4,
          backgroundColor: '#057764',
        },
        labelStyle: {
          width: 'auto',
          color: '#ffffff',
          fontSize: 16,
          fontFamily: 'sailec-regular',
          paddingTop: 16,
          paddingBottom: 12,
          margin: 0,
        },
        style: {
          backgroundColor: '#26B89F',
        },
      },
    })

    this.appDrawerNavigator = createDrawerNavigator(
      {
        ...signedInRoutes,
        OpportunitiesStack: {
          screen: this.opportunitiesStackNavigator,
          navigationOptions: {
            title: props.intl.formatMessage({
              id: 'layoutDashboard_navigation_link_opportunities',
            }),
          },
        },
        LeadsStack: {
          screen: this.leadsRoutes,
          navigationOptions: {
            title: props.intl.formatMessage({
              id: 'layoutDashboard_navigation_link_leads',
            }),
          },
        },
        Profile: {
          screen: createStackNavigator({
            ProfileTabs: {
              screen: this.profileTabsNavigator,
              navigationOptions: {
                header: null,
              },
            },
          }),
          navigationOptions: {
            title: props.fullName,
            customComponent: ProfileNavigatorItem,
          },
        },
      },
      {
        initialRouteName:
          Object.keys(signedInRoutes).indexOf(props.initialRouteName) >= 0
            ? props.initialRouteName
            : null,
        drawerWidth: Dimensions.get('window').width * 0.8,
        drawerPosition: 'right',
        drawerType: 'slide',
        drawerBackgroundColor: '#ffffff',
        overlayColor: '#000000',
        edgeWidth: Dimensions.get('window').width * 0.15,
        contentComponent: DrawerNavigator,
      }
    )

    this.navigator = createStackNavigator(
      {
        ...offlineRoutes,
        SignedIn: {
          screen: this.appDrawerNavigator,
          navigationOptions: mainStackNavigationOptions,
        },
      },
      {
        initialRouteName:
          Object.keys(offlineRoutes).indexOf(props.initialRouteName) >= 0 ||
          props.initialRouteName === 'SignedIn'
            ? props.initialRouteName
            : null,
        defaultNavigationOptions: {
          headerLeft: null,
          swipeEnabled: false,
          gesturesEnabled: false,
        },
      }
    )
    this.container = createAppContainer(this.navigator)

    this.handleNavigationChange = this.handleNavigationChange.bind(this)
    this.getCurrentRoute = this.getCurrentRoute.bind(this)
    this.persistNavigationState = this.persistNavigationState.bind(this)
    this.loadNavigationState = this.loadNavigationState.bind(this)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.initialRouteName !== this.props.initialRouteName &&
      this.props.initialRouteName === this.props.noAuthRoute
    ) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: this.props.initialRouteName,
          }),
        ],
      })
      this._nav.current.dispatch(resetAction)
    }
  }

  handleNavigationChange(prevState, newState, action) {
    const newCurrentRoute = this.getCurrentRoute(newState)

    if (this.state.currentRoute !== newCurrentRoute) {
      this.setState({
        currentRoute: newCurrentRoute,
      })
    }
  }

  getCurrentRoute(obj) {
    let route = !obj ? this._nav.current.state.nav : obj

    while (route.routes) {
      route = route.routes[route.index]
    }

    return route.routeName
  }

  async persistNavigationState(navState) {
    try {
      await AsyncStorage.setItem(this._persistenceKey, JSON.stringify(navState))
    } catch (err) {
      alert('error')
      alert(JSON.stringify(err))
    }
  }

  async loadNavigationState() {
    const { authIsMounted, authIsAuthenticated } = this.props

    if (authIsMounted && authIsAuthenticated) {
      const jsonString = await AsyncStorage.getItem(this._persistenceKey)

      return JSON.parse(jsonString)
    }

    return {
      index: 0,
      isTransitioning: false,
      key: 'StackRouterRoot',
      routes: [
        {
          key: 'id-1564433335535-1',
          routeName: 'SignIn',
        },
      ],
    }
  }

  render() {
    const { intl } = this.props
    const Navigator = this.container

    return (
      <NavigatorContext.Provider
        value={{
          ...this.state,
        }}
      >
        <Navigator
          ref={this._nav}
          screenProps={{
            currentRoute: this.state.currentRoute,
            intlFormatMessage: intl.formatMessage,
            leads: this.props.leads,
          }}
          onNavigationStateChange={this.handleNavigationChange}
          persistNavigationState={this.persistNavigationState}
          loadNavigationState={this.loadNavigationState}
        />
      </NavigatorContext.Provider>
    )
  }
}

WithNavigatorContext.defaultProps = {
  fullName: '',
}

export default injectIntl(WithNavigatorContext)

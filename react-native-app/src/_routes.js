import React from 'react'

import SignIn from './SignIn'

import Dashboard from './Dashboard'
import Leads from './Leads'
import Lead from './Lead'
import Opportunities from './Opportunities'
import Opportunity from './Opportunity'

import MyCompany from './MyCompany'
import MyAccount from './MyAccount'
import PaymentMethod from './PaymentMethod'
import Billing from './Billing'
import Addresses from './Addresses'
import Employees from './Employees'

import SignedInLogo from './_components/SignedInLogo'
import HeaderDotsButton from './_components/HeaderDotsButton'

export const mainStackNavigationOptions = {
  headerTitle: <SignedInLogo suffixId="contractor" />,
  headerBackTitle: null,
  headerRight: <HeaderDotsButton />,
  swipeEnabled: false,
}

export const offlineRoutes = {
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
      headerBackImage: null,
      headerBackTitle: null,
      headerLeft: null,
      swipeEnabled: false,
    },
  },
}

export const leadsRoutes = {
  Leads: {
    screen: Leads,
  },
  Lead: {
    screen: Lead,
  },
}

export const opportunitiesRoutes = {
  Opportunities: {
    screen: Opportunities,
  },
  Opportunity: {
    screen: Opportunity,
  },
}

export const signedInRoutes = {
  Dashboard: {
    screen: Dashboard,
    navigationOptions: mainStackNavigationOptions,
  },
}

export const profileRoutes = {
  MyCompany: {
    screen: MyCompany,
  },
  MyAccount: {
    screen: MyAccount,
  },
  PaymentMethod: {
    screen: PaymentMethod,
  },
  Billing: {
    screen: Billing,
  },
  Addresses: {
    screen: Addresses,
  },
  Employees: {
    screen: Employees,
  },
}

export default {
  offlineRoutes,
  signedInRoutes,
  profileRoutes,
}

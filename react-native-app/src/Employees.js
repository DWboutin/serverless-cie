import React from 'react'

import { withNotificationContext } from './contexts/NotificationContext'

import ProfileScreenLayout from './components/ProfileScreenLayout'

import EmployeesForm from './components/EmployeesForm'

class Employees extends React.Component {
  static navigationOptions = ({ screenProps: { intlFormatMessage } }) => ({
    title: intlFormatMessage({
      id: 'layoutDashboard_accountButton_link_employees',
    }),
  })

  constructor(props) {
    super(props)
  }

  render() {
    const {
      screenProps: { intlFormatMessage },
    } = this.props

    return (
      <ProfileScreenLayout
        title={intlFormatMessage({
          id: 'layoutDashboard_accountButton_link_employees',
        })}
      >
        <EmployeesForm />
      </ProfileScreenLayout>
    )
  }
}

export default withNotificationContext(Employees)

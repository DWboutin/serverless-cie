import React from 'react'
import { StyleSheet, ScrollView, View, RefreshControl } from 'react-native'

import { withNotificationContext } from './contexts/NotificationContext'
import { withAuthContext } from './contexts/AuthContext'

import CardLeads from './components/CardLeads'

class Leads extends React.Component {
  static navigationOptions = ({ screenProps: { intlFormatMessage } }) => ({
    title: intlFormatMessage({ id: 'layoutDashboard_navigation_link_leads' }),
  })

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.handleRefresh = this.handleRefresh.bind(this)
  }

  async componentDidMount() {
    const { leads, refreshLeads } = this.props

    if (leads === null) {
      await refreshLeads()
    }
  }

  handleRefresh() {
    const { refreshLeads } = this.props

    this.setState(
      {
        isLoading: true,
      },
      () => {
        refreshLeads(() => {
          this.setState({
            isLoading: false,
          })
        })
      }
    )
  }

  render() {
    const {
      leads,
      screenProps: { intlFormatMessage },
    } = this.props

    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isLoading}
            onRefresh={this.handleRefresh}
            colors={['#572D2D']}
            tintColor="#572D2D"
            titleColor="#572D2D"
            title={intlFormatMessage({
              id: 'loading',
            })}
          />
        }
      >
        <View style={styles.container}>
          {leads &&
            leads.map(lead => (
              <CardLeads
                opportunityId={lead.dealInfosId}
                opportunityDate={lead.createdAt}
                valueJobType={lead.deal.jobType}
                valueJobTypeSpecific={lead.deal.jobTypeSpecific}
                valueCity={`${lead.deal.city}, ${lead.deal.state}`}
                fullName={`${lead.deal.firstName} ${lead.deal.lastName}`}
                preferredContactTime={lead.deal.preferredContactTime}
                key={lead.dealInfosId}
              />
            ))}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
})

export default withNotificationContext(withAuthContext(Leads))

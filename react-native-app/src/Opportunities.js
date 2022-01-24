import React from 'react'
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native'

import { withNotificationContext } from './contexts/NotificationContext'
import { withAuthContext } from './contexts/AuthContext'

import CardOpportunity from './components/CardOpportunity'

class Opportunities extends React.Component {
  static navigationOptions = ({ screenProps: { intlFormatMessage } }) => ({
    title: intlFormatMessage({
      id: 'layoutDashboard_navigation_link_opportunities',
    }),
  })

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.handleRefresh = this.handleRefresh.bind(this)
  }

  handleRefresh() {
    const { refreshNotifications } = this.props

    this.setState(
      {
        isLoading: true,
      },
      () => {
        refreshNotifications(() => {
          this.setState({
            isLoading: false,
          })
        })
      }
    )
  }

  render() {
    const {
      opportunities,
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
          {opportunities.map(opportunity => (
            <CardOpportunity
              status={opportunity.answer}
              opportunityId={opportunity.dealInfosId}
              opportunityDate={opportunity.createdAt}
              valueJobType={opportunity.deal.jobType}
              valueJobTypeSpecific={opportunity.deal.jobTypeSpecific}
              valueCity={`${opportunity.deal.city}, ${opportunity.deal.state}`}
              remainingSeats={opportunity.deal.remainingSeats}
              key={opportunity.dealInfosId}
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

export default withNotificationContext(withAuthContext(Opportunities))

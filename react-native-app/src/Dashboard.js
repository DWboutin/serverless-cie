import React from 'react'
import { injectIntl } from 'react-intl'
import moment from 'moment'
import { StyleSheet, ScrollView, View, Text } from 'react-native'

import { AuthContext } from './contexts/AuthContext'
import { withNotificationContext } from './contexts/NotificationContext'

import Button from './_components/Button'
import ChartProgress from './_components/ChartProgress'
import ChartCount from './_components/ChartCount'
import ChartCountBox from './_components/ChartCountBox'
import ChartSonar from './_components/ChartSonar'

class Dashboard extends React.Component {
  static navigationOptions = ({ screenProps: { intlFormatMessage } }) => ({
    title: intlFormatMessage({
      id: 'layoutDashboard_navigation_link_dashboard',
    }),
  })

  constructor(props) {
    super(props)
  }

  defineDurationDisplay(timestamp) {
    const timeObj = {
      time: 0,
      suffix: 'm',
    }
    const minutes = moment.duration(timestamp).asMinutes()

    if (minutes >= 60) {
      const hours = moment.duration(timestamp).asHours()
      timeObj.time = hours
      timeObj.suffix = 'h'
    }

    return timeObj
  }

  render() {
    const { intl, addNotification } = this.props

    return (
      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.containerSpacing}>
          <View
            style={{
              marginBottom: 30,
            }}
          >
            <Button
              onPress={() =>
                addNotification({
                  title: 'Hello',
                  message: 'Message here',
                  timeout: 6000,
                  action: 'to:Opportunity:R-4N009HAJO5',
                })
              }
            >
              Add Notification
            </Button>
            <AuthContext.Consumer>
              {context => <Text>TOKEN: {context.token}</Text>}
            </AuthContext.Consumer>
          </View>
          <AuthContext.Consumer>
            {context => (
              <ChartProgress
                title={intl.formatMessage({
                  id: 'dashboardPage_stats_title_acceptanceRate',
                })}
                percent={context.stats.percentAcceptation}
                noticeSign="%"
                noticePercent={7.5}
              />
            )}
          </AuthContext.Consumer>
          <AuthContext.Consumer>
            {context => {
              const firstContactTime = this.defineDurationDisplay(
                context.stats.firstContactAverage
              )
              const acceptationDelayTime = this.defineDurationDisplay(
                context.stats.acceptationDelayAverage
              )

              return (
                <ChartCount
                  title={intl.formatMessage({
                    id: 'dashboardPage_stats_title_reactivity',
                  })}
                >
                  <ChartCountBox
                    percent={firstContactTime.time}
                    suffix={firstContactTime.suffix}
                    label={intl.formatMessage({
                      id: 'dashboardPage_stats_notice_firstContact',
                    })}
                  />
                  <ChartCountBox
                    percent={acceptationDelayTime.time}
                    suffix={acceptationDelayTime.suffix}
                    label={intl.formatMessage({
                      id: 'dashboardPage_stats_notice_acceptation',
                    })}
                  />
                </ChartCount>
              )
            }}
          </AuthContext.Consumer>
          <AuthContext.Consumer>
            {context => (
              <ChartCount
                title={intl.formatMessage({
                  id: 'dashboardPage_stats_title_opportunities',
                })}
              >
                <ChartCountBox
                  percent={context.stats.opportunitiesCount}
                  label={intl.formatMessage({
                    id: 'dashboardPage_stats_notice_thisMonth',
                  })}
                />
                <ChartCountBox
                  percent={context.opportunities.length}
                  label={intl.formatMessage({
                    id: 'dashboardPage_stats_notice_waiting',
                  })}
                />
              </ChartCount>
            )}
          </AuthContext.Consumer>
          <AuthContext.Consumer>
            {context => (
              <ChartSonar
                title={intl.formatMessage({
                  id: 'dashboardPage_stats_title_competitors',
                })}
                number={context.stats.competitorCount}
              />
            )}
          </AuthContext.Consumer>
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
  containerSpacing: {
    paddingBottom: 30,
  },
})

export default injectIntl(withNotificationContext(Dashboard))

import React from 'react'
import moment from 'moment'
import { injectIntl } from 'react-intl'
import {
  Grid,
  Row,
  Col,
  StatCircle,
  StatTwoNumbers,
  StatSonar,
  Icon,
} from 'conecto-ui-components'

import { AuthContext } from '../../_helpers/WithAuthPage'

class StatsSection extends React.Component {
  constructor(props) {
    super(props)

    this.defineDurationDisplay = this.defineDurationDisplay.bind(this)
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
    const { intl } = this.props

    return (
      <AuthContext.Consumer>
        {context => {
          const { stats, notifications } = context || {}
          const {
            firstContactAverage,
            acceptationDelayAverage,
            percentAcceptation,
            opportunitiesCount,
            competitorCount,
          } = stats || {}
          const { opportunities } = notifications || []
          const firstContactTime = this.defineDurationDisplay(
            firstContactAverage
          )
          const acceptationDelayTime = this.defineDurationDisplay(
            acceptationDelayAverage
          )
          const opportunitiesLength =
            typeof opportunities !== 'undefined' ? opportunities.length : 0

          return (
            <Grid id="stats-section">
              <Row>
                <Col
                  xs={{
                    span: 12,
                  }}
                  sm={{
                    span: 12,
                  }}
                  md={{
                    span: 6,
                  }}
                  lg={{
                    span: 6,
                  }}
                  xl={{
                    span: 3,
                  }}
                >
                  <StatCircle
                    icon={<Icon type="bookmark" />}
                    title={intl.formatMessage({
                      id: 'dashboardPage_stats_title_acceptanceRate',
                    })}
                    notice=""
                    number={percentAcceptation}
                  />
                </Col>
                <Col
                  xs={{
                    span: 12,
                  }}
                  sm={{
                    span: 12,
                  }}
                  md={{
                    span: 6,
                  }}
                  lg={{
                    span: 6,
                  }}
                  xl={{
                    span: 3,
                  }}
                >
                  <StatTwoNumbers
                    icon={<Icon type="notification" />}
                    title={intl.formatMessage({
                      id: 'dashboardPage_stats_title_reactivity',
                    })}
                    number1={firstContactTime.time}
                    suffix1={firstContactTime.suffix}
                    notice1={intl.formatMessage({
                      id: 'dashboardPage_stats_notice_firstContact',
                    })}
                    number2={acceptationDelayTime.time}
                    suffix2={acceptationDelayTime.suffix}
                    notice2={intl.formatMessage({
                      id: 'dashboardPage_stats_notice_acceptation',
                    })}
                  />
                </Col>
                <Col
                  xs={{
                    span: 12,
                  }}
                  sm={{
                    span: 12,
                  }}
                  md={{
                    span: 6,
                  }}
                  lg={{
                    span: 6,
                  }}
                  xl={{
                    span: 3,
                  }}
                >
                  <StatTwoNumbers
                    icon={<Icon type="search" />}
                    title={intl.formatMessage({
                      id: 'dashboardPage_stats_title_opportunities',
                    })}
                    number1={opportunitiesCount}
                    notice1={intl.formatMessage({
                      id: 'dashboardPage_stats_notice_thisMonth',
                    })}
                    number2={opportunitiesLength}
                    notice2={intl.formatMessage({
                      id: 'dashboardPage_stats_notice_waiting',
                    })}
                    disabled2={opportunitiesLength === 0}
                  />
                </Col>
                <Col
                  xs={{
                    span: 12,
                  }}
                  sm={{
                    span: 12,
                  }}
                  md={{
                    span: 6,
                  }}
                  lg={{
                    span: 6,
                  }}
                  xl={{
                    span: 3,
                  }}
                >
                  <StatSonar
                    icon={<Icon type="concurrents" />}
                    title={intl.formatMessage({
                      id: 'dashboardPage_stats_title_competitors',
                    })}
                    notice=""
                    number={competitorCount}
                    suffix=""
                  />
                </Col>
              </Row>
            </Grid>
          )
        }}
      </AuthContext.Consumer>
    )
  }
}

StatsSection.propTypes = {}

StatsSection.defaultProps = {
  name: '',
  phone: '',
  email: '',
  RBQ: '',
  NEQ: '',
  TPS: '',
  TVQ: '',
  activeForRoofing: false,
}

export default injectIntl(StatsSection)

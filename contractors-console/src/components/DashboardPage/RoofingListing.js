import React from 'react'
import { API } from 'aws-amplify'
import moment from 'moment'
import { injectIntl } from 'react-intl'
import {
  Grid,
  Row,
  Col,
  Card,
  Icon,
  Button,
  Switch,
  Notification,
  LoadingBar,
} from 'conecto-ui-components'

import { AuthContext } from '../../_helpers/WithAuthPage'

import RoofingOpportunity from './RoofingOpportunity'

class RoofingListing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.handleActiveForRoofingChange = this.handleActiveForRoofingChange.bind(
      this
    )
  }

  componentDidCatch(error, info) {
    const { intl } = this.props

    this.setState({
      isLoading: false,
    })

    Notification.open({
      message: intl.formatMessage({
        id: 'generic_component_error_title',
      }),
      description: intl.formatMessage(
        { id: 'generic_component_error_description' },
        {
          error: error,
          info: info,
        }
      ),
      duration: 7,
    })
  }

  async handleActiveForRoofingChange(e, callback) {
    const { intl } = this.props
    const value = e.target.checked

    this.setState({
      isLoading: true,
    })

    await API.put('contractors', '/company/update-infos', {
      body: {
        activeForRoofing: value,
      },
    })

    await callback()

    this.setState({
      isLoading: false,
    })

    if (value === true) {
      Notification.open({
        message: intl.formatMessage({
          id: 'account_activeForRoofingOn_notice_success_title',
        }),
        description: intl.formatHTMLMessage({
          id: 'account_activeForRoofingOn_notice_success_text',
        }),
        duration: 7,
      })
    } else {
      Notification.open({
        message: intl.formatMessage({
          id: 'account_activeForRoofingOff_notice_success_title',
        }),
        description: intl.formatHTMLMessage({
          id: 'account_activeForRoofingOff_notice_success_text',
        }),
        duration: 7,
      })
    }
  }

  render() {
    const { intl } = this.props

    return (
      <>
        <AuthContext.Consumer>
          {context => {
            const { notifications, attributes, organization, refreshContact } =
              context || {}
            const { opportunities } = notifications || []
            const { custom_fields } = organization || {}
            const { activeForRoofing } = custom_fields || {}
            const { isAdmin } = attributes || {}
            const listingOpportunities =
              typeof opportunities !== 'undefined'
                ? [...opportunities]
                    .sort((a, b) => a.deal.createdAt - b.deal.createdAt)
                    .splice(0, 3)
                : []

            const switchLabel = activeForRoofing
              ? 'account_myCompanyForm_labelActiveForRoofing'
              : 'account_myCompanyForm_labelInactiveForRoofing'

            return (
              <Grid>
                <Row>
                  <Col>
                    <Card type="shadowed" id="roofing-listing">
                      <Row>
                        <Col
                          xl={{
                            span: 6,
                          }}
                          lg={{
                            span: 7,
                          }}
                          md={{
                            span: 6,
                          }}
                          sm={{
                            span: 12,
                          }}
                          xs={{
                            span: 12,
                          }}
                        >
                          <h3>
                            {intl.formatMessage({
                              id: 'dashboardPage_listing_opportunity_title',
                            })}
                          </h3>
                        </Col>
                        <Col
                          xl={{
                            span: 6,
                          }}
                          lg={{
                            span: 5,
                          }}
                          md={{
                            span: 6,
                          }}
                          sm={{
                            span: 12,
                          }}
                          xs={{
                            span: 12,
                          }}
                          className="activeForRoofing-switch"
                        >
                          <Switch
                            id="activeForRoofing"
                            name="activeForRoofing"
                            label={intl.formatMessage({ id: switchLabel })}
                            checked={activeForRoofing}
                            disabled={isAdmin !== '1'}
                            onChange={e =>
                              this.handleActiveForRoofingChange(
                                e,
                                refreshContact
                              )
                            }
                          />
                        </Col>
                      </Row>
                      <div className="listing">
                        {listingOpportunities.length > 0 &&
                          listingOpportunities.map(opportunity => (
                            <RoofingOpportunity
                              key={opportunity.dealInfosId}
                              dealInfosId={opportunity.dealInfosId}
                              jobType={opportunity.deal.jobType}
                              jobTypeSpecific={opportunity.deal.jobTypeSpecific}
                              location={`${opportunity.deal.city}, ${
                                opportunity.deal.state
                              }`}
                              remainingSeats={opportunity.deal.remainingSeats}
                              createdAt={opportunity.deal.createdAt}
                            />
                          ))}
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Grid>
            )
          }}
        </AuthContext.Consumer>
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </>
    )
  }
}

RoofingListing.propTypes = {}

export default injectIntl(RoofingListing)

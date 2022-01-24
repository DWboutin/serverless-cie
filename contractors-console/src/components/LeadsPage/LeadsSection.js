import React from 'react'
import moment from 'moment'
import { FormattedMessage, injectIntl } from 'react-intl'
import {
  Row,
  Col,
  Modal,
  Icon,
  LoadingBar,
  Button,
} from 'conecto-ui-components'

import CardLeadContainer from './CardLeadContainer'
import EmptyLeadsSection from './EmptyLeadsSection'

class LeadsSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      modalCallOngoing: false,
    }

    this.getDayPart = this.getDayPart.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleModalCallOngoingOpen = this.handleModalCallOngoingOpen.bind(this)
  }

  componentDidMount() {
    const { refreshLeads } = this.props

    if (refreshLeads) {
      refreshLeads()
    }
  }

  getDayPart() {
    const timeOfTheDay = moment().format('HH')
    let dayPart = 'disabled'

    if (timeOfTheDay >= 9 && timeOfTheDay < 12) {
      dayPart = 'am'
    } else if (timeOfTheDay >= 12 && timeOfTheDay < 18) {
      dayPart = 'pm'
    } else if (timeOfTheDay >= 18 && timeOfTheDay < 22) {
      dayPart = 'evening'
    }

    return dayPart
  }

  handleModalCallOngoingOpen() {
    this.setState({
      modalCallOngoing: true,
    })
  }

  handleModalClose() {
    this.setState({
      modalCallOngoing: false,
    })
  }

  render() {
    const { intl, leads, locale, phoneNumber, address } = this.props
    const dayPart = this.getDayPart()

    return (
      <>
        {leads.length === 0 && <EmptyLeadsSection />}
        {leads.length > 0 && (
          <Row>
            {leads.map(lead => {
              return (
                <Col
                  xl={{
                    span: 6,
                  }}
                  lg={{
                    span: 6,
                  }}
                  md={{
                    span: 12,
                  }}
                  sm={{
                    span: 12,
                  }}
                  xs={{
                    span: 12,
                  }}
                  className="opportunity-card"
                  key={lead.dealInfosId}
                >
                  <CardLeadContainer
                    service="roofing"
                    opportunityId={lead.dealInfosId}
                    opportunityDate={lead.deal.createdAt}
                    valueCity={`${lead.deal.city}, ${lead.deal.state}`}
                    valueJobType={lead.deal.jobType}
                    valueJobTypeSpecific={lead.deal.jobTypeSpecific}
                    valueJobInfo={lead.deal.jobInfo}
                    preferredContactTime={lead.deal.preferredContactTime}
                    preferredContactMethod={lead.deal.preferredContactMethod}
                    latitude={lead.deal.latitude}
                    longitude={lead.deal.longitude}
                    emailAddress={lead.deal.email}
                    phoneNumber={lead.deal.phone}
                    dayPart={dayPart}
                    firstContact={lead.firstContact}
                    contractorPhoneNumber={phoneNumber}
                    handleModalCallOngoingOpen={this.handleModalCallOngoingOpen}
                    firstName={lead.deal.firstName}
                    lastName={lead.deal.lastName}
                    address={address}
                    locale={locale}
                  />
                </Col>
              )
            })}
          </Row>
        )}
        <Modal
          className="call-ingoing-modal"
          isOpen={this.state.modalCallOngoing}
          handleClose={this.handleModalClose}
        >
          <div className="modal-content">
            <div className="round-check">
              <Icon type="user" />
            </div>
            <FormattedMessage id="lead_call_ongoing_modal_title" tagName="h2" />
            <FormattedMessage
              id="lead_call_ongoing_modal_text"
              tagName="p"
              values={{
                number: process.env.TWILIO_NUMBER,
              }}
            />
          </div>
        </Modal>
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </>
    )
  }
}

LeadsSection.defaultProps = {
  leads: [],
}

export default injectIntl(LeadsSection)

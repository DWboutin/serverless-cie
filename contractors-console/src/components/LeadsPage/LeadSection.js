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

import SEO from '../../components/seo'
import CardLeadContainer from './CardLeadContainer'
import EmptyLeadsSection from './LeadsSection'

class LeadSection extends React.Component {
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

    this.setState({
      isLoading: true,
    }, async () => {
      if (refreshLeads) {
        await refreshLeads()

        this.setState({
          isLoading: false,
        })
      }
    })
  }

  getDayPart() {
    const timeOfTheDay = moment().format('HH')
    let dayPart = 'disabled'

    if (timeOfTheDay >= 8 && timeOfTheDay < 12) {
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
    const { intl, leads, dealInfosId, locale, phoneNumber, address } = this.props
    const dayPart = this.getDayPart()
    const lead =
      typeof leads !== 'undefined'
        ? leads.find(
        lead => lead.dealInfosId === dealInfosId
        )
        : null

    return (
      <>
        {!lead && <EmptyLeadsSection />}
        {lead && (
          <Row
            xl={{
              alignement: 'center',
            }}
            lg={{
              alignement: 'center',
            }}
            md={{
              alignement: 'center',
            }}
            sm={{
              alignement: 'center',
            }}
            xs={{
              alignement: 'center',
            }}
          >
            {lead !== null && (
              <Col
                xl={{
                  span: 6,
                }}
                lg={{
                  span: 8,
                }}
                md={{
                  span: 10,
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
                <SEO
                  title={`${intl.formatMessage({
                    id: 'lead_single_page_title',
                  })}${lead.dealInfosId}, ${lead.deal.city}, ${
                    lead.deal.state
                    }, ${intl.formatMessage({
                    id: 'leads_card_roofing_labelJobType',
                  })}, ${intl.formatMessage({
                    id: 'leads_card_roofing_labelJobTypeSpecific',
                  })}`}
                />
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
            )}
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

LeadSection.defaultProps = {
  lead: null,
}

export default injectIntl(LeadSection)

import React from 'react'
import moment from 'moment'
import { API } from 'aws-amplify'
import { FormattedMessage, injectIntl } from 'react-intl'
import {
  Row,
  Col,
  CardOpportunity,
  Logo,
  LoadingBar,
  Modal,
  Icon,
  Button,
} from 'conecto-ui-components'

import { Link } from '../../i18n'

import EmptyOpportunitiesSection from './EmptyOpportunitiesSection'
import CardOpportunityContainer from './CardOpportunityContainer'

class OpportunitiesSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      dealId: null,
      modalNoPaymentIsOpen: false,
      modalAcceptedIsOpen: false,
    }

    this.handleNoPaymentModalOpen = this.handleNoPaymentModalOpen.bind(this)
    this.handleAcceptedModalOpen = this.handleAcceptedModalOpen.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }

  componentDidMount() {
    const { refreshNotifications } = this.props

    refreshNotifications()
  }

  handleNoPaymentModalOpen() {
    this.setState({
      modalNoPaymentIsOpen: true,
    })
  }

  handleAcceptedModalOpen(dealId) {
    this.setState({
      modalAcceptedIsOpen: true,
      dealId,
    })
  }

  handleModalClose() {
    this.setState({
      modalNoPaymentIsOpen: false,
      modalAcceptedIsOpen: false,
      dealId: null,
    })
  }

  render() {
    const {
      intl,
      opportunities,
      username,
      stripeSource,
      refreshNotifications,
    } = this.props

    return (
      <>
        {opportunities.length === 0 && <EmptyOpportunitiesSection />}
        {opportunities.length > 0 && (
          <Row>
            {opportunities.map(opportunity => {
              return (
                <Col
                  xl={{
                    span: 4,
                  }}
                  lg={{
                    span: 4,
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
                  className="opportunity-card"
                  key={opportunity.dealInfosId}
                >
                  <CardOpportunityContainer
                    service="roofing"
                    username={username}
                    accepted={opportunity.deal.accepted}
                    status={opportunity.answer}
                    opportunityId={opportunity.dealInfosId}
                    opportunityDate={opportunity.createdAt}
                    remainingSeats={parseInt(opportunity.deal.remainingSeats)}
                    valueCity={`${opportunity.deal.city}, ${
                      opportunity.deal.state
                    }`}
                    valueJobType={opportunity.deal.jobType}
                    valueJobTypeSpecific={opportunity.deal.jobTypeSpecific}
                    valueJobInfo={opportunity.deal.jobInfo}
                    dealId={opportunity.dealId}
                    companyId={opportunity.companyId}
                    stripeSource={stripeSource}
                    noPaymentModalOpen={this.handleNoPaymentModalOpen}
                    acceptedModalOpen={this.handleAcceptedModalOpen}
                    refreshNotifications={refreshNotifications}
                    referrer="listing"
                  />
                </Col>
              )
            })}
          </Row>
        )}
        <Modal
          className="opportunity-paymentMethod-modal"
          isOpen={this.state.modalNoPaymentIsOpen}
          handleClose={this.handleModalClose}
        >
          <div className="modal-content">
            <div className="round-check">
              <Icon type="flag" />
            </div>
            <FormattedMessage
              id="opportunity_paymentMethod_modal_title"
              tagName="h2"
            />
            <FormattedMessage
              id="opportunity_paymentMethod_modal_text"
              tagName="p"
            />
            <Button comp={Link} to="/my-company/payment-method">
              {intl.formatMessage({
                id: 'opportunity_paymentMethod_modal_button',
              })}
            </Button>
          </div>
        </Modal>
        <Modal
          className="opportunity-accepted-modal"
          isOpen={this.state.modalAcceptedIsOpen}
          handleClose={this.handleModalClose}
        >
          <div className="modal-content">
            <div className="round-check">
              <Icon type="check" />
            </div>
            <FormattedMessage
              id="opportunity_acceptedDeal_modal_title"
              tagName="h2"
            />
            <FormattedMessage
              id="opportunity_acceptedDeal_modal_text"
              tagName="p"
            />
            <Button comp={Link} to={`/leads`}>
              {intl.formatMessage({
                id: 'opportunity_acceptedDeal_modal_button',
              })}
            </Button>
          </div>
        </Modal>
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </>
    )
  }
}

OpportunitiesSection.defaultProps = {
  opportunities: [],
}

export default injectIntl(OpportunitiesSection)

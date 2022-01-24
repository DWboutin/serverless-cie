import React from 'react'
import { API } from 'aws-amplify'
import { navigate } from 'gatsby'
import qs from 'query-string'
import { FormattedMessage, injectIntl } from 'react-intl'
import {
  Row,
  Col,
  Modal,
  Icon,
  Button,
  LoadingBar,
} from 'conecto-ui-components'

import CardOpportunityContainer from './CardOpportunityContainer'

import { Link } from '../../i18n'

class OpportunitySingle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opportunity: null,
      answerType: null,
    }

    this.handleNoPaymentModalOpen = this.handleNoPaymentModalOpen.bind(this)
    this.handleAcceptedModalOpen = this.handleAcceptedModalOpen.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.fetchNotificationInfos = this.fetchNotificationInfos.bind(this)
  }

  async componentDidMount() {
    this.fetchNotificationInfos()
  }

  handleNoPaymentModalOpen() {
    this.setState({
      modalNoPaymentIsOpen: true,
    })
  }

  handleAcceptedModalOpen() {
    this.setState({
      modalAcceptedIsOpen: true,
    })
  }

  handleModalClose() {
    this.setState({
      modalNoPaymentIsOpen: false,
      modalAcceptedIsOpen: false,
    })
  }

  async fetchNotificationInfos() {
    const { queryString } = this.props
    const {
      c: encryptedContactId,
      d: encryptedDealId,
      t: answerType,
    } = qs.parse(queryString)

    const opportunity = await API.get(
      'contractors',
      `/opportunity/${encryptedDealId}/${encryptedContactId}`,
      {}
    )

    this.setState({
      opportunity,
      answerType,
    })
  }

  render() {
    const { username, stripeSource, intl } = this.props
    const { opportunity, answerType } = this.state
    let comp = null

    if (opportunity !== null) {
      comp = (
        <>
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
                refreshNotifications={this.fetchNotificationInfos}
                referrer={answerType}
              />
            </Col>
          </Row>
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
              <Button comp={Link} to={`/lead/${opportunity.dealInfosId}`}>
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

    return comp
  }
}

export default injectIntl(OpportunitySingle)

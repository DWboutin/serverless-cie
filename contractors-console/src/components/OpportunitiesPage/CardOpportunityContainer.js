import React from 'react'
import moment from 'moment'
import { API } from 'aws-amplify'
import { injectIntl } from 'react-intl'
import {
  Accordion,
  AccordionPanel,
  CardOpportunity,
  Logo,
  Button,
  Notification,
  LoadingBar,
} from 'conecto-ui-components'

import { Link } from '../../i18n'

class CardOpportunityContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.onAcceptation = this.onAcceptation.bind(this)
    this.onRejection = this.onRejection.bind(this)
  }

  async onAcceptation() {
    const {
      dealId,
      companyId,
      stripeSource,
      noPaymentModalOpen,
      acceptedModalOpen,
      refreshNotifications,
      referrer,
    } = this.props

    this.setState({
      isLoading: true,
    })

    if (typeof stripeSource !== 'undefined') {
      await API.post(
        'contractors',
        `/deal/accept/${dealId}/${companyId}/${referrer}`,
        {}
      )

      this.setState(
        {
          isLoading: false,
        },
        () => {
          acceptedModalOpen()
          refreshNotifications()
        }
      )
    } else {
      this.setState(
        {
          isLoading: false,
        },
        () => {
          noPaymentModalOpen()
        }
      )
    }
  }

  async onRejection() {
    const {
      intl,
      dealId,
      companyId,
      opportunityId,
      stripeSource,
      noPaymentModalOpen,
      refreshNotifications,
      referrer,
    } = this.props

    this.setState({
      isLoading: true,
    })

    if (typeof stripeSource !== 'undefined') {
      await API.post(
        'contractors',
        `/deal/reject/${dealId}/${companyId}/${referrer}`,
        {}
      )

      this.setState(
        {
          isLoading: false,
        },
        () => {
          Notification.open({
            message: intl.formatMessage({
              id: 'cardOpportunity_onRejection_notice_title',
            }),
            description: intl.formatMessage(
              {
                id: 'cardOpportunity_onRejection_notice_text',
              },
              {
                dealInfosId: opportunityId,
              }
            ),
            duration: 7,
          })

          refreshNotifications()
        }
      )
    } else {
      this.setState(
        {
          isLoading: false,
        },
        () => {
          noPaymentModalOpen()
        }
      )
    }
  }

  render() {
    const {
      intl,
      service,
      status,
      accepted,
      opportunityId,
      opportunityDate,
      remainingSeats,
      valueCity,
      valueJobType,
      valueJobTypeSpecific,
      valueJobInfo,
    } = this.props

    let buttons = (
      <>
        {status !== 'Rejected' && status !== 'Rejected but already owned' && (
          <Button handleClick={this.onRejection} type="bordered">
            {intl.formatMessage({ id: 'opportunities_card_btn_reject' })}
          </Button>
        )}
        {remainingSeats > 0 && (
          <Button handleClick={this.onAcceptation}>
            {intl.formatMessage({ id: 'opportunities_card_btn_accept' })} -
            63.24$
          </Button>
        )}
        {remainingSeats === 0 && (
          <div className="is_full_text">
            {intl.formatMessage({ id: 'opportunities_card_noMoreSeats' })}
          </div>
        )}
      </>
    )

    if (accepted) {
      buttons = (
        <>
          <Button comp={Link} to={`/lead/${opportunityId}`}>
            {intl.formatMessage({ id: 'opportunities_card_btn_show' })}
          </Button>
        </>
      )
    }

    let remainingPlaceMessage = intl.formatMessage(
      { id: 'opportunities_card_remainingPlaces' },
      { remainingSeats: remainingSeats }
    )

    if (status === 'Rejected') {
      remainingPlaceMessage = intl.formatMessage({
        id: 'opportunities_card_rejected',
      })
    }

    return (
      <>
        <CardOpportunity
          img={
            <img
              src={`https://s3.amazonaws.com/${process.env.S3_NAME}/${opportunityId}.png`}
              alt="test"
            />
          }
          logo={
            <Logo type={service} suffix={intl.formatMessage({ id: service })} />
          }
          buttons={buttons}
          accepted={accepted === true}
          opportunityId={opportunityId}
          opportunityDate={moment(opportunityDate).fromNow()}
          opportunityRemainingPlace={remainingPlaceMessage}
          labelCity={intl.formatMessage({
            id: 'opportunities_card_roofing_labelCity',
          })}
          labelJobType={intl.formatMessage({
            id: 'opportunities_card_roofing_labelJobType',
          })}
          labelJobTypeSpecific={intl.formatMessage({
            id: 'opportunities_card_roofing_labelJobTypeSpecific',
          })}
          valueCity={valueCity}
          valueJobType={intl.formatMessage({
            id: `labelJobType_${valueJobType}`,
          })}
          valueJobTypeSpecific={intl.formatMessage({
            id: `labelJobTypeSpecific_${valueJobTypeSpecific}`,
          })}
          valueMoreInfosAccordion={
            (valueJobInfo ? (
              <Accordion closed>
                <AccordionPanel title={intl.formatMessage({
                  id: 'labelJobInfoAccordionTitle',
                })}>{valueJobInfo}</AccordionPanel>
              </Accordion>
            ) : null)
          }
        />
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </>
    )
  }
}

CardOpportunityContainer.defaultProps = {
  opportunities: [],
}

export default injectIntl(CardOpportunityContainer)

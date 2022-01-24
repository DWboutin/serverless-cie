import React from 'react'
import moment from 'moment'
import { API } from 'aws-amplify'
import { injectIntl, FormattedMessage } from 'react-intl'
import {
  CardLead,
  Logo,
  ButtonGroup,
  Button,
  Icon,
  Checkbox,
  LoadingBar, Accordion, AccordionPanel,
} from 'conecto-ui-components'

class CardLeadContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.handleFirstCallClick = this.handleFirstCallClick.bind(this)
    this.handleFirstContactSMS = this.handleFirstContactSMS.bind(this)
    this.handleFirstContactEmail = this.handleFirstContactEmail.bind(this)
  }

  async handleFirstCallClick() {
    const {
      intl,
      opportunityId,
      contractorPhoneNumber,
      locale,
      handleModalCallOngoingOpen,
    } = this.props
    const callLanguage = locale === 'fr' ? 'fr-CA' : 'en-US'

    this.setState(
      {
        isLoading: true,
      },
      () => {
        handleModalCallOngoingOpen()
      }
    )

    await API.post('contractors', '/call-requester', {
      body: {
        dealInfosId: opportunityId,
        phoneNumber: contractorPhoneNumber,
        message: intl.formatMessage({
          id: 'twilio_redirection_call_message',
        }),
        language: callLanguage,
      },
    })

    this.setState({
      isLoading: false,
    })
  }

  async handleFirstContactSMS() {
    const { opportunityId } = this.props

    this.setState({
      isLoading: true,
    })

    await API.post('contractors', '/requester-contact', {
      body: {
        dealInfosId: opportunityId,
        contactMethod: 'sms',
      },
    })

    this.setState({
      isLoading: false,
    })
  }

  async handleFirstContactEmail() {
    const { opportunityId } = this.props

    this.setState({
      isLoading: true,
    })

    await API.post('contractors', '/requester-contact', {
      body: {
        dealInfosId: opportunityId,
        contactMethod: 'email',
      },
    })

    this.setState({
      isLoading: false,
    })
  }

  renderButtons() {
    const {
      intl,
      dayPart,
      preferredContactMethod,
      preferredContactTime,
      emailAddress,
      phoneNumber,
      firstContact,
    } = this.props
    const contactMethod = preferredContactMethod.split(', ')
    const contactTime = preferredContactTime.split(', ')

    const hasEmail = contactMethod.indexOf('email') !== -1
    const hasSMS = contactMethod.indexOf('sms') !== -1
    const hasPhone = contactMethod.indexOf('phone') !== -1
    const dayPartIsMet = contactTime.indexOf(dayPart) >= 0

    return (
      <>
        {hasEmail && (
          <div>
            <Button
              comp="a"
              href={`mailto:${emailAddress}`}
              handleClick={this.handleFirstContactEmail}
            >
              {intl.formatMessage({
                id: 'leads_card_contactRequesterButton_byEmail',
              })}
            </Button>
          </div>
        )}
        {hasSMS && (
          <div>
            <Button
              type={!dayPartIsMet ? 'bordered' : 'primary'}
              comp="a"
              href={`sms:${phoneNumber}`}
              handleClick={this.handleFirstContactSMS}
              disabled={!dayPartIsMet}
            >
              {intl.formatMessage({
                id: 'leads_card_contactRequesterButton_bySMS',
              })}
            </Button>
          </div>
        )}
        {hasPhone && (
          <div>
            <Button
              type={!dayPartIsMet ? 'bordered' : 'primary'}
              handleClick={this.handleFirstCallClick}
              disabled={!dayPartIsMet}
            >
              {intl.formatMessage(
                {
                  id: 'leads_card_contactRequesterButton_byPhone',
                },
                {
                  phoneNumber:
                    firstContact !== 0 ? phoneNumber : 'XXX-XXX-XXXX',
                }
              )}
            </Button>
          </div>
        )}
        {!dayPartIsMet && (
          <FormattedMessage
            id="leads_card_contactRequesterContactWhenAvailable"
            tagName="p"
          />
        )}
      </>
    )
  }

  renderContactInfos() {
    const {
      intl,
      address,
      emailAddress,
      phoneNumber,
      preferredContactTime,
      dayPart,
    } = this.props
    const contactTime = preferredContactTime.split(', ')
    const dayPartIsMet = contactTime.indexOf(dayPart) >= 0

    return (
      <div className="contact-actions-address">
        <strong>
          {intl.formatMessage({ id: 'leads_card_contactInfos_title' })}
        </strong>
        <address>
          {address.line1}, {address.city}
          <br />
          {address.postal_code}, {address.state}, CA
        </address>
        <div>
          <ButtonGroup>
            <Button comp="a" href={`sms:${phoneNumber}`} type="filter">
              <Icon type="sms" />
            </Button>
            <Button comp="a" href={`mailto:${emailAddress}`} type="filter">
              <Icon type="email" />
            </Button>
            <Button comp="a" href={`tel:${phoneNumber}`} type="filter">
              <Icon type="phone" />
            </Button>
          </ButtonGroup>
        </div>
        {!dayPartIsMet && (
          <FormattedMessage
            id="leads_card_contactRequesterContactWhenAvailable"
            tagName="p"
          />
        )}
      </div>
    )
  }

  render() {
    const {
      intl,
      service,
      opportunityId,
      opportunityDate,
      preferredContactTime,
      latitude,
      longitude,
      firstContact,
      firstName,
      lastName,
      valueCity,
      valueJobType,
      valueJobTypeSpecific,
      valueJobInfo,
    } = this.props
    const contactTime = preferredContactTime.split(', ')
    const buttonSection =
      firstContact === 0 ? this.renderButtons() : this.renderContactInfos()
    const requester = !firstContact ? firstName : `${firstName} ${lastName}`

    return (
      <>
        <CardLead
          logo={
            <Logo type={service} suffix={intl.formatMessage({ id: service })} />
          }
          buttons={buttonSection}
          checkboxes={
            <>
              <Checkbox
                id="contactTime-am"
                name="contactTime-am"
                label={intl.formatMessage({
                  id: 'leads_card_contactTime_am',
                })}
                value={contactTime.indexOf('am') >= 0}
                disabled
              />
              <Checkbox
                id="contactTime-pm"
                name="contactTime-pm"
                label={intl.formatMessage({
                  id: 'leads_card_contactTime_pm',
                })}
                value={contactTime.indexOf('pm') >= 0}
                disabled
              />
              <Checkbox
                id="contactTime-evening"
                name="contactTime-evening"
                label={intl.formatMessage({
                  id: 'leads_card_contactTime_evening',
                })}
                value={contactTime.indexOf('evening') >= 0}
                disabled
              />
            </>
          }
          img={
            <img
              src={`https://s3.amazonaws.com/${process.env.S3_NAME}/${opportunityId}.png`}
              alt="test"
            />
          }
          requester={requester}
          opportunityId={opportunityId}
          opportunityDate={moment(opportunityDate).fromNow()}
          labelCity={intl.formatMessage({
            id: 'leads_card_roofing_labelCity',
          })}
          labelJobType={intl.formatMessage({
            id: 'leads_card_roofing_labelJobType',
          })}
          labelJobTypeSpecific={intl.formatMessage({
            id: 'leads_card_roofing_labelJobTypeSpecific',
          })}
          labelRequester={intl.formatMessage({
            id: 'leads_card_roofing_labelRequester',
          })}
          labelContactPreference={intl.formatMessage({
            id: 'leads_card_roofing_labelContactPreference',
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
          latitude={latitude}
          longitude={longitude}
        />
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </>
    )
  }
}

CardLeadContainer.defaultProps = {
  opportunities: [],
}

export default injectIntl(CardLeadContainer)

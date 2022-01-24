import React from 'react'
import API from '@aws-amplify/api'
import { injectIntl, FormattedMessage } from 'react-intl'
import {
  Card,
  Grid,
  Row,
  Col,
  Tabs,
  TabPanel,
  LoadingBar,
  Modal,
  Icon,
  Notification,
} from 'conecto-ui-components'

import Step1 from './QuoteRequestForm/Step1'
import Step2 from './QuoteRequestForm/Step2'

import AmplifyConfigs from '../_helpers/AmplifyConfigs'

class QuoteRequestForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      focusedIndex: 0,
      formValues: {},
      modalIsOpen: false,
      tosRead: false,
    }

    AmplifyConfigs()

    this.handleStep1Submit = this.handleStep1Submit.bind(this)
    this.handleStep2Submit = this.handleStep2Submit.bind(this)
    this.handleTabsChange = this.handleTabsChange.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }

  async handleStep1Submit(values, resetForm) {
    const { locale } = this.props

    this.setState(
      {
        isLoading: true,
        formValues: {
          ...values,
          ...this.state.formValues,
        },
      },
      async () => {
        const lead = await API.post('roofing', '/lead', {
          body: {
            firstname: this.state.formValues.firstName,
            lastname: this.state.formValues.lastName,
            tel: this.state.formValues.tel,
            email: this.state.formValues.email,
            number: this.state.formValues.contactNumber,
            address: (this.state.formValues.contactAddress.indexOf(this.state.formValues.contactNumber) !== -1) ? this.state.formValues.contactAddress.replace(this.state.formValues.contactNumber, '') : this.state.formValues.contactAddress,
            city: this.state.formValues.contactCity,
            zipcode: this.state.formValues.contactPostalCode,
            latitude: this.state.formValues.contactLatitude,
            longitude: this.state.formValues.contactLongitude,
            jobType: this.state.formValues.jobType,
            jobTypeSpecific: this.state.formValues.jobTypeSpecific,
            jobInfo: this.state.formValues.jobInfo,
            preferredContactMethod: 'email, sms, phone',
            preferredContactTime: 'am, pm, evening',
            mailing: this.state.formValues.mailing,
            conditions: this.state.formValues.conditions,
            locale: locale,
          },
        })

        this.setState({
          isLoading: false,
          modalIsOpen: true,
          focusedIndex: 1,
          leadId: lead.id,
          formValues: {},
        })

        const topPos = document.getElementById('quote-request-form').getBoundingClientRect().top
        window.scrollTo(0, topPos)

        resetForm()
      }
    )
  }

  async handleStep2Submit(values, resetForm) {
    const { intl } = this.props

    this.setState(
      {
        isLoading: true,
        resetForm1: resetForm,
      },
      async () => {
        const contactMethod = []
        const contactMethodFields = [
          'contact-method-email',
          'contact-method-sms',
          'contact-method-phone',
        ]

        contactMethodFields.forEach(method => {
          if (values[method] === true) {
            contactMethod.push(method.replace('contact-method-', ''))
          }
        })

        const contactTime = []
        const contactTimeFields = [
          'contact-am',
          'contact-pm',
          'contact-evening',
        ]

        contactTimeFields.forEach(time => {
          if (values[time] === true) {
            contactTime.push(time.replace('contact-', ''))
          }
        })

        await API.put('roofing', `/lead/${this.state.leadId}`, {
          body: {
            preferredContactMethod: contactMethod.join(', '),
            preferredContactTime: contactTime.join(', '),
          },
        })

        this.setState({
          isLoading: false,
          modalIsOpen: false,
          focusedIndex: 0,
          leadId: null,
          formValues: {},
        })

        Notification.open({
          message: intl.formatMessage({ id: 'contactPreferenceUpdatedTitle' }),
          description: intl.formatMessage({ id: 'contactPreferenceUpdatedMessage' }),
          duration: 7,
        })

        resetForm()
      }
    )
  }

  handleTabsChange(selectedIndex) {
    this.setState({
      focusedIndex: selectedIndex,
    })
  }

  handleModalClose() {
    this.setState({
      modalIsOpen: false,
    })
  }

  render() {
    const { intl } = this.props
    const { modalIsOpen } = this.state

    return (
      <Card type="shadowed" id="quote-request-form">
        <Grid>
          <Row>
            <Col>
              <h2>{intl.formatMessage({ id: 'submitYourProject' })}</h2>
            </Col>
          </Row>
        </Grid>
        <Tabs
          titlePosition="bottom"
          focusedIndex={this.state.focusedIndex}
          onChangeCallBack={this.handleTabsChange}
        >
          <TabPanel
            title={intl.formatMessage({ id: 'step1' })}
            clickDisabled={this.state.focusedIndex === 0}
          >
            <Step1
              isLoading={this.state.isLoading}
              handleAddressChange={this.handleAddressChange}
              handleLatLngChange={this.handleLatLngChange}
              onSubmit={this.handleStep1Submit}
            />
          </TabPanel>
          <TabPanel
            title={intl.formatMessage({ id: 'step2' })}
            clickDisabled={this.state.focusedIndex === 0}
          >
            <Step2 isLoading={this.state.isLoading} onSubmit={this.handleStep2Submit} />
          </TabPanel>
        </Tabs>
        <Modal
          className="request-confirmation-modal"
          id="confirmation-modal"
          isOpen={modalIsOpen}
          handleClose={this.handleModalClose}
        >
          <div className="modal-content">
            <div className="round-check">
              <Icon type="check" />
            </div>
            <FormattedMessage
              id="request_confirmation_modal_title"
              tagName="h2"
            />
            <FormattedMessage
              id="request_confirmation_modal_text"
              tagName="p"
            />
          </div>
        </Modal>
        <LoadingBar isLoading={this.state.isLoading} type="roofing" fixed />
      </Card>
    )
  }
}

QuoteRequestForm.propTypes = {}

export default injectIntl(QuoteRequestForm)

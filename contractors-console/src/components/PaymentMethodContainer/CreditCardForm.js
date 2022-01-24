import React, { Component } from 'react'
import { API } from 'aws-amplify'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { FormattedMessage, injectIntl } from 'react-intl'
import { LoadingBar, Button, Notification } from 'conecto-ui-components'

class CreditCardForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      error: null,
    }

    this.cardElement = React.createRef()

    this.submit = this.submit.bind(this)
  }

  async submit(ev) {
    ev.preventDefault()

    const { intl, refreshContact } = this.props

    this.setState({
      isLoading: true,
    })

    try {
      let source = await this.props.stripe.createSource({
        type: 'card',
      })

      if ('error' in source) {
        this.setState({
          isLoading: false,
        })

        Notification.open({
          message: source.error,
          duration: 7,
        })
      } else {
        await API.post('contractors', '/contact/payment', {
          body: {
            source: source.source.id,
          },
        })
        this.cardElement.clear()

        this.setState(
          {
            isLoading: false,
            error: null,
          },
          () => {
            refreshContact()
            Notification.open({
              message: intl.formatMessage({
                id: 'account_paymentMethod_form_notice_cardAdded_title',
              }),
              description: intl.formatMessage(
                { id: 'account_paymentMethod_form_notice_cardAdded_text' },
                {
                  brand: source.source.card.brand,
                  last4: source.source.card.dynamic_last4,
                  exp: `${source.source.card.exp_month}/${
                    source.source.card.exp_year
                  }`,
                }
              ),
              duration: 7,
            })
          }
        )
      }
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="creditCard-form">
        <div className="credit-card-wrapper">
          <FormattedMessage id="account_paymentMethod_title" tagName="h1" />
          <div className="to-input card-input">
            <CardElement
              className="to-input-field"
              onReady={c => (this.cardElement = c)}
            />
          </div>
          <div className="btn-container">
            <Button handleClick={this.submit} disabled={this.state.isLoading}>
              <FormattedMessage id="account_paymentMethod_form_submitButton" />
            </Button>
          </div>
        </div>
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </div>
    )
  }
}

export default injectIntl(injectStripe(CreditCardForm))

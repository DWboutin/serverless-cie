import React from 'react'
import moment from 'moment'
import { API } from 'aws-amplify'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FormattedMessage, injectIntl } from 'react-intl'
import {
  Card,
  Icon,
  Button,
  LoadingBar,
  Notification,
} from 'conecto-ui-components'

class PaymentSourceCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.handleSourceDetach = this.handleSourceDetach.bind(this)
    this.handleSourceMakeDefault = this.handleSourceMakeDefault.bind(this)
    this.defineIconFromBrand = this.defineIconFromBrand.bind(this)
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

  async handleSourceDetach() {
    const { intl, id, refreshContact } = this.props

    this.setState({
      isLoading: true,
    })

    await API.del('contractors', `/contact/payment/${id}`, {})
    refreshContact()

    Notification.open({
      message: intl.formatMessage({
        id: 'account_paymentMethod_source_detach_notice_title',
      }),
      description: intl.formatMessage({
        id: 'account_paymentMethod_source_detach_notice_text',
      }),
      duration: 7,
    })

    this.setState({
      isLoading: false,
    })
  }

  async handleSourceMakeDefault() {
    const { intl, id, refreshContact } = this.props

    this.setState({
      isLoading: true,
    })

    await API.put('contractors', `/contact/payment/${id}`, {})
    await refreshContact()

    Notification.open({
      message: intl.formatMessage({
        id: 'account_paymentMethod_source_make_default_notice_title',
      }),
      description: intl.formatMessage({
        id: 'account_paymentMethod_source_make_default_notice_text',
      }),
      duration: 7,
    })

    this.setState({
      isLoading: false,
    })
  }

  defineIconFromBrand() {
    const { brand } = this.props

    switch (brand) {
      case 'American Express':
        return <Icon type="cc-amex" />
      case 'MasterCard':
        return <Icon type="cc-mastercard" />
      case 'Visa':
        return <Icon type="cc-visa" />
      default:
        return <Icon type="cc-default" />
    }
  }

  render() {
    const { brand, created, last4, exp, isDefault, id } = this.props
    const classes = classNames({
      'payment-source-card': true,
      'default-source': isDefault,
    })
    const icon = this.defineIconFromBrand()

    return (
      <Card type={isDefault ? 'shadowed' : 'bordered'} className={classes}>
        <header>
          <div className="title">
            {icon}
            {brand}
          </div>
          <div className="date">{moment(created).fromNow()}</div>
        </header>
        <div className="infos">
          <div className="number">**** **** **** {last4}</div>
          <div className="exp">
            <small>exp.: </small>
            {exp}
          </div>
        </div>
        <footer>
          {!isDefault && (
            <>
              <Button
                type="ghost"
                handleClick={this.handleSourceMakeDefault}
                data-source={id}
              >
                <FormattedMessage id="account_paymentMethod_source_make_default_card" />
              </Button>
              <Button
                type="bordered"
                handleClick={this.handleSourceDetach}
                data-source={id}
              >
                <FormattedMessage id="account_paymentMethod_source_delete_card" />
              </Button>
            </>
          )}
          {isDefault && (
            <FormattedMessage id="account_paymentMethod_source_card_default" />
          )}
        </footer>
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </Card>
    )
  }
}

PaymentSourceCard.defaultProps = {
  id: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  last4: PropTypes.string.isRequired,
  exp: PropTypes.string.isRequired,
  refreshContact: PropTypes.func.isRequired,
}

export default injectIntl(PaymentSourceCard)

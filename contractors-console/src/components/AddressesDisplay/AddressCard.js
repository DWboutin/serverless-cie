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

class AddressCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.handleAddressDelete = this.handleAddressDelete.bind(this)
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

  async handleAddressDelete() {
    const {
      intl,
      id,
      number,
      address,
      postalCode,
      city,
      state,
      refreshAddresses,
    } = this.props

    this.setState({
      isLoading: true,
    })

    await API.del('contractors', `/company/address/${id}`, {})

    this.setState(
      {
        isLoading: false,
      },
      () => {
        Notification.open({
          message: intl.formatMessage({
            id: 'account_addresses_card_notice_delete_title',
          }),
          description: intl.formatMessage(
            { id: 'account_addresses_card_notice_delete_text' },
            {
              number,
              address,
              postalCode,
              city,
              state,
            }
          ),
          duration: 7,
        })

        refreshAddresses()
      }
    )
  }

  render() {
    const {
      intl,
      number,
      address,
      postalCode,
      city,
      state,
      radius,
      createdAt,
      userId,
      assigned,
      employeesNameBySub,
    } = this.props
    const classes = classNames({
      'address-card': true,
    })

    return (
      <Card type={'bordered'} className={classes}>
        <header>
          <address>
            {number} {address}
            <br />
            {postalCode}, {city}, {state}, CA
            <br />
            <div className="range">
              <Icon type="marker" />
              {intl.formatMessage(
                { id: 'account_addresses_card_addressRange_label' },
                { radius }
              )}
            </div>
          </address>
          <div className="date">{moment(createdAt).fromNow()}</div>
        </header>
        {true === false && employeesNameBySub[userId] && (
          <div className="assignedTo">
            <FormattedMessage id="account_addresses_card_assignedTo" />{' '}
            <span className="name">
              {employeesNameBySub[userId].first_name}{' '}
              {employeesNameBySub[userId].last_name}
            </span>
          </div>
        )}
        <footer>
          <Button type="bordered" handleClick={this.handleAddressDelete}>
            <FormattedMessage id="account_addresses_card_deleteButton" />
          </Button>
        </footer>
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </Card>
    )
  }
}

AddressCard.defaultProps = {
  employeesNameBySub: {},
}

export default injectIntl(AddressCard)

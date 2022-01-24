import React from 'react'
import { API } from 'aws-amplify'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import { LoadingBar, Notification } from 'conecto-ui-components'

import AddressesForm from './AddressesContainer/AddressesForm'

class AddressesContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.handleAddressSubmit = this.handleAddressSubmit.bind(this)
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

  async handleAddressSubmit(values) {
    const { intl, refreshAddresses } = this.props

    this.setState({
      isLoading: true,
    })

    const address = {
      number: values.addressNumber,
      address: values.addressAddress,
      city: values.addressCity,
      postalCode: values.addressPostalCode,
      state: values.addressState,
      country: 'CA',
      latitude: values.addressLatitude,
      longitude: values.addressLongitude,
      radius: values.addressRange,
    }

    await API.post('contractors', '/company/address', {
      body: address,
    })

    await refreshAddresses()

    this.setState(
      {
        isLoading: false,
      },
      () => {
        Notification.open({
          message: intl.formatMessage({
            id: 'account_addressesForm_notice_success_title',
          }),
          description: intl.formatHTMLMessage(
            { id: 'account_addressesForm_notice_success_text' },
            {
              ...address,
            }
          ),
          duration: 7,
        })
      }
    )
  }

  render() {
    return (
      <>
        <AddressesForm
          isDisabled={this.state.isLoading}
          onSubmit={this.handleAddressSubmit}
          addressesLimitReached={this.props.addressesLimitReached}
        />
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </>
    )
  }
}

AddressesContainer.propTypes = {
  refreshAddresses: PropTypes.func.isRequired,
  addressesLimitReached: PropTypes.bool.isRequired,
}

AddressesContainer.defaultProps = {}

export default injectIntl(AddressesContainer)

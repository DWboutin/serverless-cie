import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Row, Col, Card, DropdownChoice, Button } from 'conecto-ui-components'

import AddressAutocompleteField from '../_formik/AddressAutocompleteField'
import DropdownField from '../_formik/DropdownField'

import GoogleMap from './GoogleMap'

import addressFormValidation from './addressFormValidation'

class AddressesForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      address: null,
      geo: null,
    }

    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleLatLngChange = this.handleLatLngChange.bind(this)
  }

  handleAddressChange(address) {
    const { setValues, values } = this.props

    setValues({
      ...values,
      addressNumber: address.number,
      addressAddress: address.address,
      addressCity: address.city,
      addressPostalCode: address.postalCode,
      addressState: address.state,
    })

    this.setState({
      address,
    })
  }

  handleLatLngChange(geo) {
    const { setValues, values } = this.props

    setValues({
      ...values,
      addressLatitude: geo.lat,
      addressLongitude: geo.lng,
    })
  }

  render() {
    const {
      values,
      touched,
      errors,
      intl,
      handleSubmit,
      addressesLimitReached,
      isDisabled,
    } = this.props
    const center =
      values.addressLatitude && values.addressLongitude
        ? {
            lat: values.addressLatitude,
            lng: values.addressLongitude,
          }
        : null

    return (
      <Card className="address-autocomplete-card">
        <form onSubmit={handleSubmit} id="address-form">
          <Row>
            <Col>
              <FormattedMessage id="account_addressesForm_title" tagName="h1" />
            </Col>
          </Row>
          <Row>
            <Col>
              <AddressAutocompleteField
                id="address-addressAuto"
                type="text"
                name="addressAuto"
                label={intl.formatMessage({
                  id: 'signUp_form_labelCompanyAddress',
                })}
                onAddressChange={this.handleAddressChange}
                onLatLngChange={this.handleLatLngChange}
                error={
                  errors.addressAuto && touched.addressAuto
                    ? intl.formatMessage({ id: errors.addressAuto })
                    : null
                }
              />
            </Col>
          </Row>
          <Row>
            <Col
              xl={{
                span: 4,
              }}
              lg={{
                span: 4,
              }}
              md={{
                span: 12,
              }}
              sm={{
                span: 12,
              }}
              xs={{
                span: 12,
              }}
            >
              <FormattedMessage
                id="account_addressesForm_addressRange_title"
                tagName="h2"
              />
              <DropdownField
                id="address-range"
                name="addressRange"
                label={intl.formatMessage({
                  id: 'account_addressesForm_addressRange_label',
                })}
                error={
                  errors.addressRange && touched.addressRange
                    ? intl.formatMessage({ id: errors.addressRange })
                    : null
                }
              >
                <DropdownChoice value="5">5 km</DropdownChoice>
                <DropdownChoice value="10">10 km</DropdownChoice>
                <DropdownChoice value="15">15 km</DropdownChoice>
                <DropdownChoice value="20" selected>
                  20 km
                </DropdownChoice>
                <DropdownChoice value="25">25 km</DropdownChoice>
                <DropdownChoice value="30">30 km</DropdownChoice>
                <DropdownChoice value="35">35 km</DropdownChoice>
                <DropdownChoice value="40">40 km</DropdownChoice>
                <DropdownChoice value="45">45 km</DropdownChoice>
                <DropdownChoice value="50">50 km</DropdownChoice>
              </DropdownField>
              {values.addressNumber &&
                values.addressAddress &&
                values.addressPostalCode && (
                  <>
                    <FormattedMessage
                      id="account_addressesForm_addressFound"
                      tagName="h2"
                    />
                    <address>
                      {values.addressNumber} {values.addressAddress}
                      <br />
                      {values.addressPostalCode} {values.addressCity}{' '}
                      {values.addressState}, CA
                    </address>
                  </>
                )}
            </Col>
            <Col
              xl={{
                span: 8,
              }}
              lg={{
                span: 8,
              }}
              md={{
                span: 12,
              }}
              sm={{
                span: 12,
              }}
              xs={{
                span: 12,
              }}
            >
              <GoogleMap center={center} radius={values.addressRange} />
            </Col>
          </Row>
          <Row>
            <Col className="address-submitButton">
              {addressesLimitReached && (
                <FormattedMessage
                  id="account_addressesForm_addressesLimitReached"
                  tagName="p"
                />
              )}
              <Button
                htmlType="submit"
                disabled={isDisabled || addressesLimitReached}
              >
                {intl.formatMessage({
                  id: 'account_addressesForm_submitButton',
                })}
              </Button>
            </Col>
          </Row>
        </form>
      </Card>
    )
  }
}

AddressesForm.propTypes = {
  addressesLimitReached: PropTypes.bool.isRequired,
}

const AddressesFormik = withFormik({
  mapPropsToValues: () => ({
    addressAuto: '',
    addressRange: '20',
    addressNumber: '',
    addressAddress: '',
    addressCity: '',
    addressPostalCode: '',
    addressState: '',
  }),

  validationSchema: addressFormValidation,

  handleSubmit: async (values, { props, setFieldError, resetForm }) => {
    if (
      values.addressNumber.length === 0 ||
      values.addressAddress.length === 0 ||
      values.addressCity.length === 0 ||
      values.addressPostalCode.length === 0
    ) {
      setFieldError('addressAuto', 'validationAddressInfos')
    } else {
      await props.onSubmit(values)
      resetForm()
    }
  },

  displayName: 'AddressesForm',
})(AddressesForm)

export default injectIntl(AddressesFormik)

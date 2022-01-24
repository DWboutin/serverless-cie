import React from 'react'
import { withFormik } from 'formik'
import { injectIntl } from 'react-intl'
import { Grid, Row, Col, CheckboxGroup, Button, DropdownChoice } from 'conecto-ui-components'

import TextField from '../_formik/TextField'
import AddressAutocompleteField from '../_formik/AddressAutocompleteField'
import TextAreaField from '../_formik/TextAreaField'
import DropdownField from '../_formik/DropdownField'
import SwitchField from '../_formik/SwitchField'

import step1Validation from './Step1Validation'
import { Link } from '../../i18n'

class Step1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      addressEntered: false,
      showFieldContactNumber: false,
      showFieldContactAddress: false,
      showFieldContactCity: false,
      showFieldContactPostalCode: false,
    }

    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleLatLngChange = this.handleLatLngChange.bind(this)
  }

  handleAddressChange(address) {
    const { setValues, values } = this.props

    setValues({
      ...values,
      contactNumber: address.number,
      contactAddress: address.address,
      contactCity: address.city,
      contactPostalCode: address.postalCode,
    })

    this.setState({
      addressEntered: true,
      showFieldContactNumber: (typeof address.number === 'undefined'),
      showFieldContactAddress: (typeof address.address === 'undefined'),
      showFieldContactCity: (typeof address.city === 'undefined'),
      showFieldContactPostalCode: (typeof address.postalCode === 'undefined' || address.postalCode.length < 6),
    })
  }

  handleLatLngChange(geo) {
    const { setValues, values } = this.props

    setValues({
      ...values,
      contactLatitude: geo.lat,
      contactLongitude: geo.lng,
    })
  }

  render() {
    const { handleSubmit, intl, errors, touched, isLoading } = this.props
    const { showFieldContactNumber, showFieldContactAddress, showFieldContactCity, showFieldContactPostalCode, addressEntered } = this.state
    const addressIsMissing = (errors.contactNumber && errors.contactAddress && errors.contactCity && errors.contactPostalCode && !addressEntered)

    if (addressIsMissing) {
      errors.contactAddressAuto = 'mustChooseAddress'
    }

    return (
      <form onSubmit={handleSubmit}>
        <Grid>
          <Row>
            <Col>
              <TextField
                id="visitor-firstname"
                type="text"
                name="firstName"
                label={intl.formatMessage({ id: 'labelFirstName' })}
                autoComplete="given-name"
                error={
                  errors.firstName && touched.firstName
                    ? intl.formatMessage({ id: errors.firstName })
                    : null
                }
              />
            </Col>
            <Col>
              <TextField
                id="visitor-lastname"
                type="text"
                name="lastName"
                label={intl.formatMessage({ id: 'labelLastName' })}
                autoComplete="family-name"
                error={
                  errors.lastName && touched.lastName
                    ? intl.formatMessage({ id: errors.lastName })
                    : null
                }
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField
                id="client-email"
                type="email"
                name="email"
                label={intl.formatMessage({ id: 'labelEmail' })}
                autoComplete="email"
                error={
                  errors.email && touched.email
                    ? intl.formatMessage({ id: errors.email })
                    : null
                }
              />
            </Col>
            <Col>
              <TextField
                id="client-tel"
                type="tel"
                name="tel"
                label={intl.formatMessage({ id: 'labelPhone' })}
                autoComplete="tel"
                error={
                  errors.tel && touched.tel
                    ? intl.formatMessage({ id: errors.tel })
                    : null
                }
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <AddressAutocompleteField
                id="client-addressAuto"
                name="contactAddressAuto"
                label={intl.formatMessage({ id: 'labelStreetAddress' })}
                onAddressChange={this.handleAddressChange}
                onLatLngChange={this.handleLatLngChange}
                error={
                  errors.contactAddressAuto && touched.contactAddressAuto
                    ? intl.formatMessage({ id: errors.contactAddressAuto })
                    : null
                }
              />
            </Col>
          </Row>
          <Row className="hidden-fields-row">
            {(addressEntered && (showFieldContactNumber || errors.contactNumber)) && (
              <Col
                xl={{
                  span: 6,
                }}
                lg={{
                  span: 6,
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
                <TextField
                  id="client-number"
                  type="text"
                  name="contactNumber"
                  label={intl.formatMessage({ id: 'labelNumber' })}
                  error={
                    errors.contactNumber && touched.contactNumber
                      ? intl.formatMessage({ id: errors.contactNumber })
                      : null
                  }
                />
              </Col>
            )}
            {(addressEntered && (showFieldContactAddress || errors.contactAddress)) && (
              <Col
                xl={{
                  span: 6,
                }}
                lg={{
                  span: 6,
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
                <TextField
                  id="client-address"
                  type="text"
                  name="contactAddress"
                  label={intl.formatMessage({ id: 'labelStreetAddress' })}
                  error={
                    errors.contactAddress && touched.contactAddress
                      ? intl.formatMessage({ id: errors.contactAddress })
                      : null
                  }
                />
              </Col>
            )}
            {(addressEntered && (showFieldContactCity || errors.contactCity)) && (
              <Col
                xl={{
                  span: 6,
                }}
                lg={{
                  span: 6,
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
                <TextField
                  id="client-city"
                  type="text"
                  name="contactCity"
                  label={intl.formatMessage({ id: 'labelCity' })}
                  error={
                    errors.contactCity && touched.contactCity
                      ? intl.formatMessage({ id: errors.contactCity })
                      : null
                  }
                />
              </Col>
            )}
            {(addressEntered && (showFieldContactPostalCode || errors.contactPostalCode)) && (
              <Col
                xl={{
                  span: 6,
                }}
                lg={{
                  span: 6,
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
                <TextField
                  id="client-postalCode"
                  type="text"
                  name="contactPostalCode"
                  label={intl.formatMessage({ id: 'labelPostalCode' })}
                  error={
                    errors.contactPostalCode && touched.contactPostalCode
                      ? intl.formatMessage({ id: errors.contactPostalCode })
                      : null
                  }
                />
              </Col>
            )}
          </Row>
          <Row>
            <Col>
              <DropdownField
                id="visitor-jobType"
                name="jobType"
                label={intl.formatMessage({ id: 'labelJobType' })}
                error={
                  errors.jobType && touched.jobType
                    ? intl.formatMessage({ id: errors.jobType })
                    : null
                }
              >
                <DropdownChoice value="asphalt_shingle">{intl.formatMessage({ id: 'labelJobType_asphalt_shingle' })}</DropdownChoice>
                <DropdownChoice value="asphalt_and_gravel">{intl.formatMessage({ id: 'labelJobType_asphalt_and_gravel' })}</DropdownChoice>
                <DropdownChoice value="elastomeric">{intl.formatMessage({ id: 'labelJobType_elastomeric' })}</DropdownChoice>
                <DropdownChoice value="epdm">{intl.formatMessage({ id: 'labelJobType_epdm' })}</DropdownChoice>
                <DropdownChoice value="sheet_metal">{intl.formatMessage({ id: 'labelJobType_sheet_metal' })}</DropdownChoice>
                <DropdownChoice value="tpo">{intl.formatMessage({ id: 'labelJobType_tpo' })}</DropdownChoice>
                <DropdownChoice value="other">{intl.formatMessage({ id: 'labelJobType_other' })}</DropdownChoice>
              </DropdownField>
            </Col>
            <Col>
              <DropdownField
                id="visitor-jobTypeSpecific"
                name="jobTypeSpecific"
                label={intl.formatMessage({ id: 'labelJobTypeSpecific' })}
                error={
                  errors.jobTypeSpecific && touched.jobTypeSpecific
                    ? intl.formatMessage({ id: errors.jobTypeSpecific })
                    : null
                }
              >
                <DropdownChoice value="flat">{intl.formatMessage({ id: 'labelJobTypeSpecific_flat' })}</DropdownChoice>
                <DropdownChoice value="low_slope">{intl.formatMessage({ id: 'labelJobTypeSpecific_low_slope' })}</DropdownChoice>
                <DropdownChoice value="high_slope">{intl.formatMessage({ id: 'labelJobTypeSpecific_high_slope' })}</DropdownChoice>
                <DropdownChoice value="mansard">{intl.formatMessage({ id: 'labelJobTypeSpecific_mansard' })}</DropdownChoice>
                <DropdownChoice value="other">{intl.formatMessage({ id: 'labelJobTypeSpecific_other' })}</DropdownChoice>
              </DropdownField>
            </Col>
          </Row>
          <Row>
            <Col>
              <TextAreaField
                id="visitor-jobInfo"
                name="jobInfo"
                label={intl.formatMessage({ id: 'labelJobInfo' })}
                error={
                  errors.jobInfo && touched.jobInfo
                    ? intl.formatMessage({ id: errors.jobInfo })
                    : null
                }
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <SwitchField
                id="visitor-conditions"
                name="conditions"
                label={intl.formatMessage({ id: 'labelConditions' })}
                error={
                  errors.conditions && touched.conditions
                    ? intl.formatMessage({ id: errors.conditions })
                    : null
                }
              />
              <div><Link to="/terms-of-service" className="tos-link">{intl.formatMessage({ id: 'textConditions' })}</Link></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <SwitchField
                id="visitor-mailing"
                name="mailing"
                label={intl.formatMessage({ id: 'labelMailing' })}
                error={
                  errors.mailing && touched.mailing
                    ? intl.formatMessage({ id: errors.mailing })
                    : null
                }
              />
            </Col>
          </Row>
          <Row>
            <Col className="next-step-button">
              <Button htmlType="submit" type="roofing" disabled={isLoading}>
                {intl.formatMessage({ id: 'buttonObtainQuotes' })}
              </Button>
            </Col>
          </Row>
        </Grid>
      </form>
    )
  }
}

Step1.propTypes = {}

const Step1Formik = withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    jobType: '',
    jobTypeSpecific: '',
    jobInfo: '',
    contactAddressAuto: '',
    contactNumber: '',
    contactAddress: '',
    contactCity: '',
    contactPostalCode: '',
    contactLatitude: '',
    contactLongitude: '',
    mailing: false,
    conditions: false,
  }),

  validationSchema: step1Validation,

  handleSubmit: (values, { props, setFieldError, resetForm }) => {
    if (
      !values.contactPostalCode ||
      values.contactPostalCode.length === 0 ||
      (!values.contactCity || values.contactCity.length === 0) ||
      (!values.contactAddress || values.contactAddress.length === 0) ||
      (!values.contactNumber || values.contactNumber.length === 0)
    ) {
      setFieldError('contactAddressAuto', 'validationAddressInfos')
    } else {
      props.onSubmit(values, resetForm)
    }
  },

  displayName: 'quoteRequestStep1',
})(Step1)

export default injectIntl(Step1Formik)

import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import {
  Grid,
  Row,
  Col,
  Logo,
  Card,
  Button,
  Modal,
  Icon,
  LoadingBar,
} from 'conecto-ui-components'

import ContractorMan from '../svg/ContractorMan'

import TextField from '../_formik/TextField'
import SwitchField from '../_formik/SwitchField'
import AddressAutocompleteField from '../_formik/AddressAutocompleteField'

import { Link } from '../../i18n'

import signUpStep2Validation from './signUpStep2Validation'

class SignUpStep2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      address: null,
      geo: null,
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
      companyNumber: address.number,
      companyAddress: address.address,
      companyCity: address.city,
      companyPostalCode: address.postalCode,
    })

    this.setState({
      address,
      showFieldContactNumber: typeof address.number === 'undefined',
      showFieldContactAddress: typeof address.address === 'undefined',
      showFieldContactCity: typeof address.city === 'undefined',
      showFieldContactPostalCode:
        typeof address.postalCode === 'undefined' ||
        address.postalCode.length < 6,
    })
  }

  handleLatLngChange(geo) {
    const { setValues, values } = this.props

    setValues({
      ...values,
      companyLatitude: geo.lat,
      companyLongitude: geo.lng,
    })

    this.setState({
      geo,
    })
  }

  render() {
    const {
      id,
      intl,
      errors,
      touched,
      values,
      handleSubmit,
      handleModalClose,
      handleTOSClose,
      modalTOSIsOpen,
      modalIsOpen,
      isLoading,
      handleTOSOpen,
    } = this.props
    const {
      showFieldContactNumber,
      showFieldContactAddress,
      showFieldContactCity,
      showFieldContactPostalCode,
    } = this.state

    return (
      <form onSubmit={handleSubmit} id={id} autoComplete="disabled">
        <Grid fluid>
          <Row>
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
              <div className="logo-wrap">
                <Link to="/">
                  <Logo suffix={intl.formatMessage({ id: 'contractor' })} />
                </Link>
              </div>
              <FormattedHTMLMessage id="signUp_step2_form_title" tagName="h1" />
            </Col>
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
              <div className="contractor-man">
                <ContractorMan />
              </div>
            </Col>
          </Row>
          <Row
            md={{
              alignement: 'center',
            }}
            className="form"
          >
            <Col
              xl={{
                span: 4,
              }}
              lg={{
                span: 4,
              }}
              md={{
                span: 8,
              }}
              sm={{
                span: 12,
              }}
              xs={{
                span: 12,
              }}
            >
              <Card>
                <FormattedMessage
                  id="signUp_step2_form_accountTitle"
                  tagName="h2"
                />
                <TextField
                  id="signup-username"
                  type="text"
                  name="username"
                  label={intl.formatMessage({
                    id: 'signUp_form_labelUsername',
                  })}
                  autoComplete="email"
                  error={
                    errors.username && touched.username
                      ? intl.formatMessage({ id: errors.username })
                      : null
                  }
                />
                <TextField
                  id="signup-password"
                  type="password"
                  name="password"
                  label={intl.formatMessage({
                    id: 'signUp_form_labelPassword',
                  })}
                  error={
                    errors.password && touched.password
                      ? intl.formatMessage({ id: errors.password })
                      : null
                  }
                />
                <TextField
                  id="signup-confirmPassword"
                  type="password"
                  name="confirmPassword"
                  label={intl.formatMessage({
                    id: 'signUp_form_labelConfirmPassword',
                  })}
                  error={
                    errors.confirmPassword && touched.confirmPassword
                      ? intl.formatMessage({ id: errors.confirmPassword })
                      : null
                  }
                />
              </Card>
            </Col>
            <Col
              xl={{
                span: 4,
              }}
              lg={{
                span: 4,
              }}
              md={{
                span: 8,
              }}
              sm={{
                span: 12,
              }}
              xs={{
                span: 12,
              }}
            >
              <Card>
                <FormattedMessage
                  id="signUp_step2_form_companyTitle"
                  tagName="h2"
                />
                <TextField
                  id="signup-companyName"
                  type="text"
                  name="companyName"
                  label={intl.formatMessage({
                    id: 'signUp_form_labelCompanyName',
                  })}
                  error={
                    errors.companyName && touched.companyName
                      ? intl.formatMessage({ id: errors.companyName })
                      : null
                  }
                />
                <AddressAutocompleteField
                  id="signup-companyAddressAuto"
                  type="text"
                  name="companyAddressAuto"
                  label={intl.formatMessage({
                    id: 'signUp_form_labelCompanyAddress',
                  })}
                  onAddressChange={this.handleAddressChange}
                  onLatLngChange={this.handleLatLngChange}
                  error={
                    errors.companyAddressAuto && touched.companyAddressAuto
                      ? intl.formatMessage({ id: errors.companyAddressAuto })
                      : null
                  }
                />
                {showFieldContactNumber && (
                  <TextField
                    id="signup-companyNumber"
                    type="text"
                    name="companyNumber"
                    label={intl.formatMessage({
                      id: 'signUp_form_labelCompanyNumber',
                    })}
                    error={
                      errors.companyNumber && touched.companyNumber
                        ? intl.formatMessage({ id: errors.companyNumber })
                        : null
                    }
                  />
                )}
                {showFieldContactAddress && (
                  <TextField
                    id="signup-companyAddress"
                    type="text"
                    name="companyAddress"
                    label={intl.formatMessage({
                      id: 'signUp_form_labelCompanyNumber',
                    })}
                    error={
                      errors.companyAddress && touched.companyAddress
                        ? intl.formatMessage({ id: errors.companyAddress })
                        : null
                    }
                  />
                )}
                {showFieldContactCity && (
                  <TextField
                    id="signup-companyCity"
                    type="text"
                    name="companyCity"
                    label={intl.formatMessage({
                      id: 'signUp_form_labelCompanyCity',
                    })}
                    error={
                      errors.companyCity && touched.companyCity
                        ? intl.formatMessage({ id: errors.companyCity })
                        : null
                    }
                  />
                )}
                {showFieldContactPostalCode && (
                  <TextField
                    id="signup-companyPostalCode"
                    type="text"
                    name="companyPostalCode"
                    label={intl.formatMessage({
                      id: 'signUp_form_labelCompanyPostalCode',
                    })}
                    error={
                      errors.companyPostalCode && touched.companyPostalCode
                        ? intl.formatMessage({ id: errors.companyPostalCode })
                        : null
                    }
                  />
                )}
                {this.state.address !== null &&
                  (!showFieldContactNumber &&
                    !showFieldContactAddress &&
                    !showFieldContactCity &&
                    !showFieldContactPostalCode) && (
                    <>
                      <FormattedMessage
                        id="signUp_step2_form_companyAddressTitle"
                        tagName="h3"
                      />
                      <address>
                        {`${values.companyNumber} ${values.companyAddress}`}
                        <br />
                        {`${values.companyAddress}, ${values.companyCity}, ${
                          this.state.address.state
                        }, ${this.state.address.country}`}
                        <br />
                      </address>
                    </>
                  )}
              </Card>
              <Card>
                <FormattedMessage
                  id="signUp_step2_form_contactTitle"
                  tagName="h2"
                />
                <TextField
                  id="signup-contractorFirstName"
                  type="text"
                  name="firstName"
                  label={intl.formatMessage({
                    id: 'signUp_form_labelFirstName',
                  })}
                  autoComplete="given-name"
                  error={
                    errors.firstName && touched.firstName
                      ? intl.formatMessage({ id: errors.firstName })
                      : null
                  }
                />
                <TextField
                  id="signup-contractorLastName"
                  type="text"
                  name="lastName"
                  label={intl.formatMessage({
                    id: 'signUp_form_labelLastName',
                  })}
                  autoComplete="family-name"
                  error={
                    errors.lastName && touched.lastName
                      ? intl.formatMessage({ id: errors.lastName })
                      : null
                  }
                />
                <TextField
                  id="signup-contractorPhone"
                  type="tel"
                  name="tel"
                  label={intl.formatMessage({ id: 'signUp_form_labelPhone' })}
                  autoComplete="tel"
                  error={
                    errors.tel && touched.tel
                      ? intl.formatMessage({ id: errors.tel })
                      : null
                  }
                />
              </Card>
            </Col>
            <Col
              xl={{
                span: 4,
              }}
              lg={{
                span: 4,
              }}
              md={{
                span: 8,
              }}
              sm={{
                span: 12,
              }}
              xs={{
                span: 12,
              }}
            >
              <Card>
                <FormattedMessage
                  id="signUp_step2_form_legalTitle"
                  tagName="h2"
                />
                <TextField
                  id="signup-contractorRBQ"
                  type="text"
                  name="rbq"
                  label={intl.formatMessage({ id: 'signUp_form_labelRBQ' })}
                  error={
                    errors.rbq && touched.rbq
                      ? intl.formatMessage({ id: errors.rbq })
                      : null
                  }
                />
                <TextField
                  id="signup-contractorNEQ"
                  type="text"
                  name="neq"
                  label={intl.formatMessage({ id: 'signUp_form_labelNEQ' })}
                  error={
                    errors.neq && touched.neq
                      ? intl.formatMessage({ id: errors.neq })
                      : null
                  }
                />
              </Card>
              <Card className="acceptation-section">
                <FormattedMessage
                  id="signUp_step2_form_acceptationTitle"
                  tagName="h2"
                />
                <FormattedMessage
                  id="signUp_step2_form_acceptationText"
                  tagName="p"
                />
                <SwitchField
                  id="signup-conditions"
                  name="conditions"
                  label={intl.formatMessage({
                    id: 'signUp_form_labelCondition',
                  })}
                  error={
                    errors.conditions && touched.conditions
                      ? intl.formatMessage({ id: errors.conditions })
                      : null
                  }
                />
                <p className="conditionText" onClick={handleTOSOpen}>{intl.formatMessage({ id: 'signUp_step2_form_acceptationConditionText' })}</p>
                <SwitchField
                  id="signup-mailing"
                  name="mailing"
                  label={intl.formatMessage({
                    id: 'signUp_form_labelMailing',
                  })}
                  error={
                    errors.mailing && touched.mailing
                      ? intl.formatMessage({ id: errors.mailing })
                      : null
                  }
                />
              </Card>
              <Card className="submit-section">
                <Button htmlType="submit">
                  {intl.formatMessage({ id: 'signUp_step2_submit_button' })}
                </Button>
                <Button comp={Link} to="/" type="underlined">
                  {intl.formatMessage({ id: 'signUp_form_iHaveAnAccount' })}
                </Button>
              </Card>
            </Col>
          </Row>
        </Grid>
        <Modal
          className="signup-tos-confirmation-modal"
          isOpen={modalTOSIsOpen}
          handleClose={handleTOSClose}
        >
          <div className="modal-content">
            <FormattedMessage
              id="signup_tos_confirmation_modal_title"
              tagName="h2"
            />
            <div
              id="scroll_tos"
              className="tos_wrap"
            >
              <FormattedHTMLMessage
                id="signup_tos_confirmation_modal_text"
                tagName="span"
                values={{
                  day_date: moment().format('Do'),
                  month_date: moment().format('MMMM'),
                  month_date_uppercase: moment()
                    .format('MMMM')
                    .toUpperCase(),
                  year_date: moment().format('YYYY'),
                  companyName: values.companyName,
                  companyAddress: `${values.companyNumber} ${
                    values.companyAddress.indexOf(values.companyNumber) >= 0
                      ? values.companyAddress.replace(values.companyNumber, '')
                      : values.companyAddress
                  } ${values.companyCity}, ${values.companyPostalCode}`,
                }}
              />
            </div>
          </div>
        </Modal>
        <Modal
          className="signUp-confirmation-modal"
          withBackground
          isOpen={modalIsOpen}
          handleClose={handleModalClose}
        >
          <div className="modal-content">
            <div className="round-check">
              <Icon type="check" />
            </div>
            <FormattedMessage
              id="signUp_confirmation_modal_title"
              tagName="h2"
            />
            <FormattedMessage id="signUp_confirmation_modal_text" tagName="p" />
            <Button comp={Link} to="/confirmation">
              {intl.formatMessage({ id: 'signUp_confirmation_modal_button' })}
            </Button>
          </div>
        </Modal>
        <LoadingBar isLoading={isLoading} fixed />
      </form>
    )
  }
}

SignUpStep2.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  asyncValidation: PropTypes.func.isRequired,
}

const SignUpStep2Formik = withFormik({
  mapPropsToValues: props => ({
    companyName: props.values.companyName,
    companyAddressAuto: '',
    companyNumber: '',
    companyAddress: '',
    companyCity: '',
    companyPostalCode: '',
    companyLatitude: '',
    companyLongitude: '',
    firstName: '',
    lastName: '',
    tel: '',
    username: props.values.username,
    password: props.values.password,
    confirmPassword: props.values.confirmPassword,
    rbq: '',
    neq: '',
    conditions: false,
    mailing: false,
  }),

  validationSchema: signUpStep2Validation,

  handleSubmit: (values, { props, setFieldError, resetForm }) => {
    props.asyncValidation(values).then(usernameExists => {
      if (usernameExists) {
        setFieldError('username', 'validationEmailIsAlreadyUsed')
      } else {
        if (
          values.companyPostalCode.length === 0 ||
          values.companyCity.length === 0 ||
          values.companyAddress.length === 0 ||
          values.companyNumber.length === 0
        ) {
          setFieldError('companyAddressAuto', 'validationAddressInfos')
        } else {
          props.onSubmit(values, resetForm)
        }
      }
    })
  },

  displayName: 'SignUpStep2',
})(SignUpStep2)

export default injectIntl(SignUpStep2Formik)

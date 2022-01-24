import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Row, Col, Card, DropdownChoice, Button } from 'conecto-ui-components'

import TextField from '../_formik/TextField'

import personalInfosFormValidation from './personalInfosFormValidation'

const PersonalInfosForm = ({
  intl,
  handleSubmit,
  errors,
  touched,
  isDisabled,
}) => (
  <Card className="myAccount-form-card">
    <form onSubmit={handleSubmit} id="personalInfos-form">
      <Row>
        <Col>
          <FormattedMessage
            id="account_myAccountForm_personalInfosTitle"
            tagName="h1"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextField
            id="personalInfos-firstName"
            type="text"
            name="firstName"
            label={intl.formatMessage({
              id: 'account_myAccountForm_labelFirstName',
            })}
            error={
              errors.firstName && touched.firstName
                ? intl.formatMessage({ id: errors.firstName })
                : null
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextField
            id="personalInfos-lastName"
            type="text"
            name="lastName"
            label={intl.formatMessage({
              id: 'account_myAccountForm_labelLastName',
            })}
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
            id="personalInfos-phone"
            type="text"
            name="phone"
            label={intl.formatMessage({
              id: 'account_myAccountForm_labelPhone',
            })}
            error={
              errors.phone && touched.phone
                ? intl.formatMessage({ id: errors.phone })
                : null
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="personalInfos-submitButton">
            <Button htmlType="submit" disabled={isDisabled}>
              {intl.formatMessage({
                id: 'account_myAccountForm_changePersonalInfos_submitButton',
              })}
            </Button>
          </div>
        </Col>
      </Row>
    </form>
  </Card>
)

PersonalInfosForm.propTypes = {}

const PersonalInfosFormik = withFormik({
  mapPropsToValues: props => ({
    firstName: props.firstName,
    lastName: props.lastName,
    phone: props.phone,
  }),

  validationSchema: personalInfosFormValidation,

  handleSubmit: (values, { props, resetForm }) => {
    props.onSubmit(values, resetForm)
  },

  displayName: 'PersonalInfosForm',
})(PersonalInfosForm)

export default injectIntl(PersonalInfosFormik)

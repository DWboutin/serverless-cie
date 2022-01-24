import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Row, Col, Card, DropdownChoice, Button } from 'conecto-ui-components'

import TextField from '../_formik/TextField'

import signInInfosFormValidation from './signInInfosFormValidation'

const SignInInfosForm = ({
  intl,
  handleSubmit,
  errors,
  touched,
  isDisabled,
}) => (
  <Card className="myAccount-form-card">
    <form onSubmit={handleSubmit} id="signInInfos-form">
      <Row>
        <Col>
          <FormattedMessage
            id="account_myAccountForm_signInInfosTitle"
            tagName="h1"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextField
            id="signInInfos-username"
            type="email"
            name="username"
            label={intl.formatMessage({
              id: 'account_myAccountForm_labelEmail',
            })}
            disabled
            error={
              errors.username && touched.username
                ? intl.formatMessage({ id: errors.username })
                : null
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormattedMessage
            id="account_myAccountForm_changePasswordTitle"
            tagName="h2"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextField
            id="signInInfos-oldPassword"
            type="password"
            name="oldPassword"
            label={intl.formatMessage({
              id: 'account_myAccountForm_labelOldPassword',
            })}
            error={
              errors.oldPassword && touched.oldPassword
                ? intl.formatMessage({ id: errors.oldPassword })
                : null
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextField
            id="signInInfos-newPassword"
            type="password"
            name="newPassword"
            label={intl.formatMessage({
              id: 'account_myAccountForm_labelNewPassword',
            })}
            error={
              errors.newPassword && touched.newPassword
                ? intl.formatMessage({ id: errors.newPassword })
                : null
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextField
            id="signInInfos-newPasswordConfirmation"
            type="password"
            name="newPasswordConfirmation"
            label={intl.formatMessage({
              id: 'account_myAccountForm_labelNewPasswordConfirmation',
            })}
            error={
              errors.newPasswordConfirmation && touched.newPasswordConfirmation
                ? intl.formatMessage({ id: errors.newPasswordConfirmation })
                : null
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="signInInfos-submitButton">
            <Button htmlType="submit" disabled={isDisabled}>
              {intl.formatMessage({
                id: 'account_myAccountForm_changePassword_submitButton',
              })}
            </Button>
          </div>
        </Col>
      </Row>
    </form>
  </Card>
)

SignInInfosForm.propTypes = {}

const SignInInfosFormik = withFormik({
  mapPropsToValues: props => ({
    username: props.email,
    oldPassword: '',
    newPassword: '',
    newPasswordConfirmation: '',
  }),

  validationSchema: signInInfosFormValidation,

  handleSubmit: (values, { props, setFieldError }) => {
    props.onSubmit(values, setFieldError)
  },

  displayName: 'SignInInfosForm',
})(SignInInfosForm)

export default injectIntl(SignInInfosFormik)

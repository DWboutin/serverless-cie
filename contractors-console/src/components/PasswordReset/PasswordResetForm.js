import React from 'react'
import { withFormik } from 'formik'
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { Grid, Row, Col, Button } from 'conecto-ui-components'

import TextField from '../_formik/TextField'

import passwordResetFormValidation from './passwordResetFormValidation'

const PasswordResetForm = ({ values, touched, errors, intl, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Grid>
      <Row>
        <Col
          xs={{
            span: 10,
          }}
          sm={{
            span: 10,
          }}
          md={{
            span: 10,
          }}
          lg={{
            span: 10,
          }}
          xl={{
            span: 10,
          }}
        >
          <FormattedHTMLMessage tagName="h1" id="passwordReset_form_title" />
          <FormattedHTMLMessage tagName="p" id="passwordReset_form_text" />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{
            span: 10,
          }}
          sm={{
            span: 10,
          }}
          md={{
            span: 10,
          }}
          lg={{
            span: 10,
          }}
          xl={{
            span: 10,
          }}
        >
          <TextField
            id="passwordReset-username"
            type="text"
            name="username"
            label={intl.formatMessage({
              id: 'passwordResetRequest_form_labelUsername',
            })}
            autoComplete="email"
            error={
              errors.username && touched.username
                ? intl.formatMessage({ id: errors.username })
                : null
            }
          />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{
            span: 10,
          }}
          sm={{
            span: 10,
          }}
          md={{
            span: 10,
          }}
          lg={{
            span: 10,
          }}
          xl={{
            span: 10,
          }}
        >
          <TextField
            id="passwordReset-password"
            type="password"
            name="password"
            label={intl.formatMessage({
              id: 'passwordReset_form_labelNewPassword',
            })}
            error={
              errors.password && touched.password
                ? intl.formatMessage({ id: errors.password })
                : null
            }
          />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{
            span: 10,
          }}
          sm={{
            span: 10,
          }}
          md={{
            span: 10,
          }}
          lg={{
            span: 10,
          }}
          xl={{
            span: 10,
          }}
        >
          <TextField
            id="passwordReset-passwordConfirmation"
            type="password"
            name="confirmPassword"
            label={intl.formatMessage({
              id: 'passwordReset_form_labelNewPasswordConfirmation',
            })}
            error={
              errors.confirmPassword && touched.confirmPassword
                ? intl.formatMessage({ id: errors.confirmPassword })
                : null
            }
          />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{
            span: 10,
          }}
          sm={{
            span: 10,
          }}
          md={{
            span: 10,
          }}
          lg={{
            span: 10,
          }}
          xl={{
            span: 10,
          }}
        >
          <TextField
            id="passwordReset-code"
            type="text"
            name="code"
            label={intl.formatMessage({ id: 'passwordReset_form_labelCode' })}
            error={
              errors.code && touched.code
                ? intl.formatMessage({ id: errors.code })
                : null
            }
          />
        </Col>
      </Row>
      <Row>
        <Col className="buttons-section">
          <Button htmlType="submit" className="access-button">
            {intl.formatMessage({ id: 'passwordReset_form_button' })}
          </Button>
        </Col>
      </Row>
    </Grid>
  </form>
)

PasswordResetForm.propTypes = {}

const PasswordResetFormik = withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
    confirmPassword: '',
    code: '',
  }),

  validationSchema: passwordResetFormValidation,

  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },

  displayName: 'passwordResetForm',
})(PasswordResetForm)

export default injectIntl(PasswordResetFormik)

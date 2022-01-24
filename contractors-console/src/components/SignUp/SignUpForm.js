import React from 'react'
import { withFormik } from 'formik'
import { injectIntl, FormattedMessage } from 'react-intl'
import { Grid, Row, Col, Button, CheckPoint } from 'conecto-ui-components'

import TextField from '../_formik/TextField'

import signUpFormValidation from './signUpFormValidation'

const SignUpForm = ({ children, values, touched, errors, intl, handleSubmit, id }) => (
  <form onSubmit={handleSubmit} id={id}>
    <Grid>
      {children}
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
            id="signup-company"
            type="text"
            name="companyName"
            label={intl.formatMessage({ id: 'signUp_form_labelCompany' })}
            error={
              errors.companyName && touched.companyName
                ? intl.formatMessage({ id: errors.companyName })
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
            id="signup-username"
            type="text"
            name="username"
            label={intl.formatMessage({ id: 'signUp_form_labelUsername' })}
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
            id="signup-password"
            type="password"
            name="password"
            label={intl.formatMessage({ id: 'signUp_form_labelPassword' })}
            autoComplete="password"
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
        </Col>
      </Row>
      <Row>
        <Col className="buttons-section">
          <Button htmlType="submit" className="access-button">
            {intl.formatMessage({ id: 'signUp_form_button' })}
          </Button>
        </Col>
      </Row>
    </Grid>
  </form>
)

SignUpForm.propTypes = {}

const SignUpFormik = withFormik({
  mapPropsToValues: () => ({
    companyName: '',
    username: '',
    password: '',
    confirmPassword: '',
  }),

  validationSchema: signUpFormValidation,

  handleSubmit: (values, { props, setFieldError }) => {
    props.asyncValidation(values).then(usernameExists => {
      if (usernameExists) {
        setFieldError('username', 'validationEmailIsAlreadyUsed')
      } else {
        props.onSubmit(values)
      }
    })
  },

  displayName: 'SignUpForm',
})(SignUpForm)

export default injectIntl(SignUpFormik)

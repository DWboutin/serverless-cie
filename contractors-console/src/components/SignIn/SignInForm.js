import React from 'react'
import { withFormik } from 'formik'
import { injectIntl, FormattedMessage } from 'react-intl'
import { Grid, Row, Col, Button } from 'conecto-ui-components'

import TextField from '../_formik/TextField'

import { Link } from '../../i18n'

import signInFormValidation from './signInFormValidation'

const SignInForm = ({ values, touched, errors, intl, handleSubmit }) => (
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
          <FormattedMessage tagName="h1" id="signIn_form_title" />
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
            id="signin-username"
            type="text"
            name="username"
            label={intl.formatMessage({ id: 'signIn_form_labelUsername' })}
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
            id="signin-password"
            type="password"
            name="password"
            label={intl.formatMessage({ id: 'signIn_form_labelPassword' })}
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
        <Col className="buttons-section">
          <Button htmlType="submit" className="access-button">
            {intl.formatMessage({ id: 'signIn_form_button_accessMyAccount' })}
          </Button>
          <Button comp={Link} to="/password-reset" type="underlined">
            {intl.formatMessage({
              id: 'signIn_form_button_forgotYourPassword',
            })}
          </Button>
        </Col>
      </Row>
    </Grid>
  </form>
)

SignInForm.propTypes = {}

const SignInFormik = withFormik({
  mapPropsToValues: props => ({
    username: props.params.user ? props.params.user : '',
    password: props.params.pass ? props.params.pass : '',
  }),

  validationSchema: signInFormValidation,

  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },

  displayName: 'signInForm',
})(SignInForm)

export default injectIntl(SignInFormik)

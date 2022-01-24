import React from 'react'
import { withFormik } from 'formik'
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { Grid, Row, Col, Button } from 'conecto-ui-components'

import TextField from '../_formik/TextField'

import codeConfirmationFormValidation from './codeConfirmationFormValidation'

const CodeConfirmationForm = ({
  values,
  touched,
  errors,
  intl,
  handleSubmit,
}) => (
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
          <FormattedHTMLMessage tagName="h1" id="codeConfirmation_form_title" />
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
            id="codeConfirmation-username"
            type="text"
            name="username"
            label={intl.formatMessage({
              id: 'codeConfirmation_form_labelUsername',
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
            id="codeConfirmation-code"
            type="text"
            name="code"
            label={intl.formatMessage({
              id: 'codeConfirmation_form_labelCode',
            })}
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
          <Button htmlType="submit" className="access-button confirmation-button">
            {intl.formatMessage({
              id: 'codeConfirmation_form_button_confirmMyAccount',
            })}
          </Button>
          <Button comp="a" type="underlined">
            {intl.formatMessage({
              id: 'signIn_form_button_forgotYourPassword',
            })}
          </Button>
        </Col>
      </Row>
    </Grid>
  </form>
)

CodeConfirmationForm.propTypes = {}

const CodeConfirmationFormik = withFormik({
  mapPropsToValues: props => ({
    username: props.params.email ? props.params.email : '',
    code: props.params.code ? props.params.code : '',
  }),

  validationSchema: codeConfirmationFormValidation,

  handleSubmit: (values, { props, setFieldError }) => {
    props.onSubmit(values, setFieldError)
  },

  displayName: 'codeConfirmationForm',
})(CodeConfirmationForm)

export default injectIntl(CodeConfirmationFormik)

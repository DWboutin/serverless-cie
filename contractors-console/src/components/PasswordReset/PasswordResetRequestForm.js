import React from 'react'
import { withFormik } from 'formik'
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { Grid, Row, Col, Button } from 'conecto-ui-components'

import TextField from '../_formik/TextField'

import passwordResetRequestFormValidation from './passwordResetRequestFormValidation'

const PasswordResetRequestForm = ({
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
          <FormattedHTMLMessage
            tagName="h1"
            id="passwordResetRequest_form_title"
          />
          <FormattedHTMLMessage
            tagName="p"
            id="passwordResetRequest_form_text"
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
            id="passwordResetRequest-username"
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
        <Col className="buttons-section">
          <Button htmlType="submit" className="access-button">
            {intl.formatMessage({ id: 'passwordResetRequest_form_button' })}
          </Button>
        </Col>
      </Row>
    </Grid>
  </form>
)

PasswordResetRequestForm.propTypes = {}

const PasswordResetRequestFormik = withFormik({
  mapPropsToValues: () => ({
    username: '',
  }),

  validationSchema: passwordResetRequestFormValidation,

  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },

  displayName: 'passwordResetRequestForm',
})(PasswordResetRequestForm)

export default injectIntl(PasswordResetRequestFormik)

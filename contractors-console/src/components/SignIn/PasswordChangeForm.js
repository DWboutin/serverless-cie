import React from 'react'
import { withFormik } from 'formik'
import { injectIntl, FormattedMessage } from 'react-intl'
import { Grid, Row, Col, Button } from 'conecto-ui-components'

import TextField from '../_formik/TextField'

import { Link } from '../../i18n'

import passwordChangeFormValidation from './passwordChangeFormValidation'

const PasswordChangeForm = ({ values, touched, errors, intl, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Grid>
      <Row>
        <Col>
          <FormattedMessage tagName="h2" id="signIn_passwordReset_form_title" />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormattedMessage tagName="p" id="signIn_passwordReset_form_text" />
        </Col>
      </Row>
      <Row
        xs={{
          alignement: 'center',
        }}
        sm={{
          alignement: 'center',
        }}
        md={{
          alignement: 'center',
        }}
        lg={{
          alignement: 'center',
        }}
        xl={{
          alignement: 'center',
        }}
      >
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
            id="signin-passwordChange-password"
            type="password"
            name="password"
            label={intl.formatMessage({ id: 'signUp_form_labelPassword'})}
            error={
              errors.password && touched.password
                ? intl.formatMessage({ id: errors.password })
                : null
            }
          />
        </Col>
      </Row>
      <Row
        xs={{
          alignement: 'center',
        }}
        sm={{
          alignement: 'center',
        }}
        md={{
          alignement: 'center',
        }}
        lg={{
          alignement: 'center',
        }}
        xl={{
          alignement: 'center',
        }}
      >
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
            id="signin-passwordChange-confirmPassword"
            type="password"
            name="confirmPassword"
            label={intl.formatMessage({ id: 'signUp_form_labelConfirmPassword' })}
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
            {intl.formatMessage({ id: 'signIn_form_button_accessMyAccount' })}
          </Button>
        </Col>
      </Row>
    </Grid>
  </form>
)

PasswordChangeForm.propTypes = {}

const PasswordChangeFormik = withFormik({
  mapPropsToValues: () => ({
    password: '',
    confirmPassword: '',
  }),

  validationSchema: passwordChangeFormValidation,

  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },

  displayName: 'passwordChangeForm',
})(PasswordChangeForm)

export default injectIntl(PasswordChangeFormik)

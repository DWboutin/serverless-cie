import React from 'react'
import { withFormik } from 'formik'
import { injectIntl } from 'react-intl'
import { Grid, Row, Col, Button, DropdownChoice, CheckboxGroup } from 'conecto-ui-components'

import CheckboxField from '../_formik/CheckboxField'

import step2Validation from './Step2Validation'

const Step2 = ({ values, touched, errors, intl, handleSubmit, isLoading }) => (
  <form onSubmit={handleSubmit}>
    <Grid>
      <Row>
        <Col>
          <CheckboxGroup
            label={intl.formatMessage({ id: 'labelContactMethod' })}
            error={
              errors.contactMethod
                ? intl.formatMessage({ id: errors.contactMethod })
                : null
            }
          >
            <CheckboxField
              id="visitor-contact-confirm-email"
              name="contact-method-email"
              label={intl.formatMessage({ id: 'labelContactMethodEmail' })}
              value={values['contact-method-email']}
            />
            <CheckboxField
              id="visitor-contact-confirm-sms"
              name="contact-method-sms"
              label={intl.formatMessage({ id: 'labelContactMethodSMS' })}
              value={values['contact-method-sms']}
            />
            <CheckboxField
              id="visitor-contact-confirm-phone"
              name="contact-method-phone"
              label={intl.formatMessage({ id: 'labelContactMethodPhone' })}
              value={values['contact-method-phone']}
            />
          </CheckboxGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <CheckboxGroup
            label={intl.formatMessage({ id: 'labelContactPreference' })}
            error={
              errors.contactPref
                ? intl.formatMessage({ id: errors.contactPref })
                : null
            }
          >
            <CheckboxField
              id="visitor-contact-pref-am"
              name="contact-am"
              label={intl.formatMessage({ id: 'labelContactPreferenceAM' })}
              value={values['contact-am']}
            />
            <CheckboxField
              id="visitor-contact-pref-pm"
              name="contact-pm"
              label={intl.formatMessage({ id: 'labelContactPreferencePM' })}
              value={values['contact-pm']}
            />
            <CheckboxField
              id="visitor-contact-pref-evening"
              name="contact-evening"
              label={intl.formatMessage({
                id: 'labelContactPreferenceEvening',
              })}
              value={values['contact-evening']}
            />
          </CheckboxGroup>
        </Col>
      </Row>
      <Row>
        <Col className="next-step-button">
          <Button htmlType="submit" type="roofing" disabled={isLoading}>
            {intl.formatMessage({ id: 'buttonSavePreferences' })}
          </Button>
        </Col>
      </Row>
    </Grid>
  </form>
)

Step2.propTypes = {}

const Step2Formik = withFormik({
  mapPropsToValues: () => ({
    'contact-am': true,
    'contact-pm': true,
    'contact-evening': true,
    'contact-method-email': true,
    'contact-method-sms': true,
    'contact-method-phone': true,
  }),

  validationSchema: step2Validation,

  handleSubmit: (values, { props, resetForm }) => {
    props.onSubmit(values, resetForm)
  },

  displayName: 'quoteRequestStep2',
})(Step2)

export default injectIntl(Step2Formik)

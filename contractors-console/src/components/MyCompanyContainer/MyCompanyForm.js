import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Row, Col, Card, DropdownChoice, Button } from 'conecto-ui-components'

import TextField from '../_formik/TextField'
import SwitchField from '../_formik/SwitchField'
import DropdownField from '../_formik/DropdownField'

import myCompanyFormValidation from './myCompanyFormValidation'

import { languages } from '../../i18n/locales'

const MyCompanyForm = ({
  intl,
  isAdmin,
  values,
  handleSubmit,
  errors,
  touched,
  locale,
  isDisabled,
}) => (
  <Card className="myCompany-form-card">
    <form onSubmit={handleSubmit} id="myCompany-form">
      <Row>
        <Col>
          <FormattedMessage id="account_myCompanyForm_title" tagName="h1" />
        </Col>
      </Row>
      <Row>
        <Col className="title-with-switch">
          <FormattedMessage
            id="account_myAccountForm_settingsTitle"
            tagName="h2"
          />
          <SwitchField
            id="myCompany-activeForRoofing"
            name="activeForRoofing"
            label={intl.formatMessage({
              id: values.activeForRoofing
                ? 'account_myCompanyForm_labelActiveForRoofing'
                : 'account_myCompanyForm_labelInactiveForRoofing',
            })}
            disabled={!isAdmin}
            error={
              errors.activeForRoofing && touched.activeForRoofing
                ? intl.formatMessage({ id: errors.activeForRoofing })
                : null
            }
          />
        </Col>
      </Row>
      <Row className="form-section-bottom">
        <Col
          xl={{
            span: 3,
          }}
          lg={{
            span: 3,
          }}
          md={{
            span: 5,
          }}
          sm={{
            span: 8,
          }}
          xs={{
            span: 8,
          }}
        >
          <DropdownField
            id="myCompany-locale"
            name="locale"
            label={intl.formatMessage({
              id: 'account_myAccountForm_labelLocale',
            })}
            disabled={!isAdmin}
            error={
              errors.activeForRoofing && touched.activeForRoofing
                ? intl.formatMessage({ id: errors.activeForRoofing })
                : null
            }
          >
            {languages.map(({ value }) => (
              <DropdownChoice
                value={value}
                key={value}
                selected={value === locale}
              >
                {intl.formatMessage({ id: `lang_${value}_complete` })}
              </DropdownChoice>
            ))}
          </DropdownField>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormattedMessage
            id="account_myCompanyForm_infosTitle"
            tagName="h2"
          />
        </Col>
      </Row>
      <Row>
        <Col
          xl={{
            span: 6,
          }}
          lg={{
            span: 6,
          }}
          md={{
            span: 6,
          }}
          sm={{
            span: 9,
          }}
          xs={{
            span: 12,
          }}
        >
          <TextField
            id="myCompany-name"
            type="text"
            name="name"
            label={intl.formatMessage({
              id: 'account_myCompanyForm_labelName',
            })}
            disabled={!isAdmin}
            error={
              errors.name && touched.name
                ? intl.formatMessage({ id: errors.name })
                : null
            }
          />
        </Col>
      </Row>
      <Row>
        <Col
          xl={{
            span: 4,
          }}
          lg={{
            span: 4,
          }}
          md={{
            span: 6,
          }}
          sm={{
            span: 9,
          }}
          xs={{
            span: 12,
          }}
        >
          <TextField
            id="myCompany-companyEmail"
            type="email"
            name="companyEmail"
            label={intl.formatMessage({
              id: 'account_myCompanyForm_labelCompanyEmail',
            })}
            disabled={!isAdmin}
            error={
              errors.companyEmail && touched.companyEmail
                ? intl.formatMessage({ id: errors.companyEmail })
                : null
            }
          />
        </Col>
        <Col
          xl={{
            span: 4,
          }}
          lg={{
            span: 4,
          }}
          md={{
            span: 6,
          }}
          sm={{
            span: 9,
          }}
          xs={{
            span: 12,
          }}
        >
          <TextField
            id="myCompany-companyPhone"
            type="tel"
            name="companyPhone"
            label={intl.formatMessage({
              id: 'account_myCompanyForm_labelCompanyPhone',
            })}
            disabled={!isAdmin}
            error={
              errors.companyPhone && touched.companyPhone
                ? intl.formatMessage({ id: errors.companyPhone })
                : null
            }
          />
        </Col>
      </Row>
      <Row>
        <Col className="myCompany-submitButton">
          <Button htmlType="submit" disabled={isDisabled || !isAdmin}>
            {intl.formatMessage({
              id: 'account_myCompanyForm_submitButton',
            })}
          </Button>
        </Col>
      </Row>
    </form>
  </Card>
)

MyCompanyForm.propTypes = {}

const MyCompanyFormik = withFormik({
  mapPropsToValues: props => ({
    name: props.name,
    companyEmail: props.email,
    companyPhone: props.phone,
    activeForRoofing: props.activeForRoofing,
    locale: props.locale,
  }),

  validationSchema: myCompanyFormValidation,

  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },

  displayName: 'MyCompanyForm',
})(MyCompanyForm)

export default injectIntl(MyCompanyFormik)

import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Row, Col, Card, DropdownChoice, Button } from 'conecto-ui-components'

import TextField from '../_formik/TextField'

import employeesFormValidation from './employeesFormValidation'

const EmployeesForm = ({
  values,
  touched,
  errors,
  intl,
  handleSubmit,
  isDisabled,
}) => (
  <Card className="employee-form-card">
    <form onSubmit={handleSubmit} id="employee-form">
      <Row>
        <Col>
          <FormattedMessage id="account_employeesForm_title" tagName="h1" />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormattedMessage
            id="account_employeesForm_contactInfos_title"
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
            span: 12,
          }}
          xs={{
            span: 12,
          }}
        >
          <TextField
            id="employee-firstName"
            type="text"
            name="firstName"
            label={intl.formatMessage({
              id: 'account_employeesForm_label_firstName',
            })}
            error={
              errors.firstName && touched.firstName
                ? intl.formatMessage({ id: errors.firstName })
                : null
            }
          />
        </Col>
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
            span: 12,
          }}
          xs={{
            span: 12,
          }}
        >
          <TextField
            id="employee-lastName"
            type="text"
            name="lastName"
            label={intl.formatMessage({
              id: 'account_employeesForm_label_lastName',
            })}
            error={
              errors.lastName && touched.lastName
                ? intl.formatMessage({ id: errors.lastName })
                : null
            }
          />
        </Col>
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
            span: 12,
          }}
          xs={{
            span: 12,
          }}
        >
          <TextField
            id="employee-tel"
            type="tel"
            name="tel"
            label={intl.formatMessage({
              id: 'account_employeesForm_label_tel',
            })}
            error={
              errors.tel && touched.tel
                ? intl.formatMessage({ id: errors.tel })
                : null
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormattedMessage
            id="account_employeesForm_accountInfos_title"
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
            span: 12,
          }}
          xs={{
            span: 12,
          }}
        >
          <TextField
            id="employee-username"
            type="text"
            name="username"
            label={intl.formatMessage({
              id: 'account_employeesForm_label_email',
            })}
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
            span: 12,
          }}
          xs={{
            span: 12,
          }}
        >
          <TextField
            id="employee-password"
            type="password"
            name="password"
            label={intl.formatMessage({
              id: 'account_employeesForm_label_password',
            })}
            error={
              errors.password && touched.password
                ? intl.formatMessage({ id: errors.password })
                : null
            }
          />
        </Col>
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
            span: 12,
          }}
          xs={{
            span: 12,
          }}
        >
          <TextField
            id="employee-confirmPassword"
            type="password"
            name="confirmPassword"
            label={intl.formatMessage({
              id: 'account_employeesForm_label_passwordConfirmation',
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
        <Col className="employee-submitButton">
          <Button htmlType="submit" disabled={isDisabled}>
            {intl.formatMessage({
              id: 'account_employeesForm_submitButton',
            })}
          </Button>
        </Col>
      </Row>
    </form>
  </Card>
)

EmployeesForm.propTypes = {}

const EmployeesFormik = withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    tel: '',
    username: '',
    password: '',
    confirmPassword: '',
  }),

  validationSchema: employeesFormValidation,

  handleSubmit: (values, { props, setFieldError }) => {
    props.asyncValidation(values).then(usernameExists => {
      if (usernameExists) {
        setFieldError('username', 'validationEmailIsAlreadyUsed')
      } else {
        props.onSubmit(values)
      }
    })
  },

  displayName: 'EmployeesForm',
})(EmployeesForm)

export default injectIntl(EmployeesFormik)

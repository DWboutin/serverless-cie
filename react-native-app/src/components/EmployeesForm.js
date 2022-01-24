import React from 'react'
import { withFormik } from 'formik'
import { injectIntl } from 'react-intl'
import { StyleSheet, ScrollView, View, Text } from 'react-native'

import Button from '../_components/Button'
import Input from '../_components/Input'

import employeesFormValidation from './EmployeesForm/employeesFormValidation'

const EmployeesForm = ({
  intl,
  values,
  errors,
  setFieldValue,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <ScrollView
    style={styles.container}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
  >
    <View style={styles.section}>
      <Text style={styles.subTitle}>
        {intl.formatMessage({
          id: 'account_employeesForm_contactInfos_title',
        })}
      </Text>
      <Input
        label={intl.formatMessage({
          id: 'account_employeesForm_label_firstName',
        })}
        onChangeText={handleChange('firstName')}
        onBlur={handleBlur('firstName')}
        value={values.firstName}
        error={errors.firstName}
      />
      <Input
        label={intl.formatMessage({
          id: 'account_employeesForm_label_lastName',
        })}
        onChangeText={handleChange('lastName')}
        onBlur={handleBlur('lastName')}
        value={values.lastName}
        error={errors.lastName}
      />
      <Input
        label={intl.formatMessage({
          id: 'account_myCompanyForm_labelCompanyPhone',
        })}
        onChangeText={handleChange('tel')}
        onBlur={handleBlur('tel')}
        value={values.tel}
        error={errors.tel}
        type="phone-pad"
      />
    </View>
    <View style={styles.section}>
      <Text style={styles.subTitle}>
        {intl.formatMessage({
          id: 'account_employeesForm_accountInfos_title',
        })}
      </Text>
      <Input
        label={intl.formatMessage({ id: 'account_employeesForm_label_email' })}
        onChangeText={handleChange('username')}
        onBlur={handleBlur('username')}
        value={values.username}
        error={errors.username}
      />
      <Input
        label={intl.formatMessage({
          id: 'account_employeesForm_label_password',
        })}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        error={errors.password}
      />
      <Input
        label={intl.formatMessage({
          id: 'account_employeesForm_label_passwordConfirmation',
        })}
        onChangeText={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        value={values.confirmPassword}
        error={errors.confirmPassword}
        type="phone-pad"
      />
    </View>
    <View style={styles.buttonsContainer}>
      <Button onPress={handleSubmit}>
        {intl.formatMessage({ id: 'account_employeesForm_submitButton' })}
      </Button>
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  buttonsContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  subTitle: {
    fontFamily: 'styrene-a-medium',
    fontSize: 18,
    color: '#572d2d',
    marginTop: 21,
    marginBottom: 21,
  },
  input: {
    marginTop: 21,
  },
})

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
  validateOnBlur: false,
  validateOnChange: false,

  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },

  displayName: 'employeesForm',
})(EmployeesForm)

export default injectIntl(EmployeesFormik)

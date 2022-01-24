import React from 'react'
import { withFormik } from 'formik'
import { injectIntl } from 'react-intl'
import { StyleSheet, View, Text } from 'react-native'

import Button from '../_components/Button'
import Input from '../_components/Input'

import myAccountPersonalFormValidation from './MyAccountPersonalForm/myAccountPersonalFormValidation'

const MyAccountPersonalForm = ({
  intl,
  values,
  errors,
  setFieldValue,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <View style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.subTitle}>
        {intl.formatMessage({
          id: 'account_myAccountForm_personalInfosTitle',
        })}
      </Text>
      <View style={styles.section}>
        <Input
          label={intl.formatMessage({
            id: 'account_myAccountForm_labelFirstName',
          })}
          onChangeText={handleChange('firstName')}
          onBlur={handleBlur('firstName')}
          value={values.firstName}
          error={errors.firstName}
        />
        <Input
          label={intl.formatMessage({
            id: 'account_myAccountForm_labelLastName',
          })}
          onChangeText={handleChange('lastName')}
          onBlur={handleBlur('lastName')}
          value={values.lastName}
          error={errors.lastName}
        />
        <Input
          label={intl.formatMessage({ id: 'account_myAccountForm_labelPhone' })}
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          value={values.phone}
          error={errors.phone}
          type="phone-pad"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={handleSubmit}>
          {intl.formatMessage({
            id: 'account_myAccountForm_changePersonalInfos_submitButton',
          })}
        </Button>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  subTitle: {
    fontFamily: 'styrene-a-medium',
    fontSize: 18,
    color: '#572d2d',
    marginTop: 21,
    marginBottom: 21,
  },
  subTitle2: {
    fontFamily: 'styrene-a-medium',
    fontSize: 16,
    color: '#572d2d',
    marginBottom: 21,
  },
  dropdownContainer: {
    width: '100%',
  },
  localeText: {
    fontFamily: 'sailec-regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#572d2d',
  },
  buttonsContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    marginTop: 21,
  },
})

const MyAccountPersonalFormik = withFormik({
  mapPropsToValues: props => ({
    firstName: props.firstName,
    lastName: props.lastName,
    phone: props.phone,
  }),

  validationSchema: myAccountPersonalFormValidation,
  validateOnBlur: false,
  validateOnChange: false,

  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },

  displayName: 'myAccountPersonalForm',
})(MyAccountPersonalForm)

export default injectIntl(MyAccountPersonalFormik)

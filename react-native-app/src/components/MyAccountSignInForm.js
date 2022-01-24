import React from 'react'
import { withFormik } from 'formik'
import { injectIntl } from 'react-intl'
import { StyleSheet, View, Text } from 'react-native'

import Button from '../_components/Button'
import Input from '../_components/Input'

import myAccountSignInFormValidation from './MyAccountSignInForm/myAccountSignInFormValidation'

const MyAccountSignInForm = ({
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
          id: 'account_myAccountForm_signInInfosTitle',
        })}
      </Text>
      <View style={styles.section}>
        <Input
          label={intl.formatMessage({ id: 'account_myAccountForm_labelEmail' })}
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          value={values.username}
          error={errors.username}
          editable={false}
        />
        <Text style={styles.subTitle2}>
          {intl.formatMessage({
            id: 'account_myAccountForm_changePasswordTitle',
          })}
        </Text>
        <Input
          label={intl.formatMessage({
            id: 'account_myAccountForm_labelOldPassword',
          })}
          onChangeText={handleChange('oldPassword')}
          onBlur={handleBlur('oldPassword')}
          value={values.oldPassword}
          error={errors.oldPassword}
        />
        <Input
          label={intl.formatMessage({
            id: 'account_myAccountForm_labelNewPassword',
          })}
          onChangeText={handleChange('newPassword')}
          onBlur={handleBlur('newPassword')}
          value={values.newPassword}
          error={errors.newPassword}
        />
        <Input
          label={intl.formatMessage({
            id: 'account_myAccountForm_labelNewPasswordConfirmation',
          })}
          onChangeText={handleChange('newPasswordConfirmation')}
          onBlur={handleBlur('newPasswordConfirmation')}
          value={values.newPasswordConfirmation}
          error={errors.newPasswordConfirmation}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={handleSubmit}>
          {intl.formatMessage({
            id: 'account_myAccountForm_changePassword_submitButton',
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

const MyAccountSignInFormik = withFormik({
  mapPropsToValues: props => ({
    username: props.username,
    oldPassword: '',
    newPassword: '',
    newPasswordConfirmation: '',
  }),

  validationSchema: myAccountSignInFormValidation,
  validateOnBlur: false,
  validateOnChange: false,

  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },

  displayName: 'myAccountSignInForm',
})(MyAccountSignInForm)

export default injectIntl(MyAccountSignInFormik)

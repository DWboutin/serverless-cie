import React from 'react'
import { withFormik } from 'formik'
import { injectIntl } from 'react-intl'
import { StyleSheet, View } from 'react-native'

import Input from '../_components/Input'
import Button from '../_components/Button'

import signInFormValidation from './SignInForm/signInFormValidation'

const SignInForm = ({
  intl,
  values,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <View style={styles.container}>
    <Input
      label={intl.formatMessage({ id: 'signIn_form_labelUsername' })}
      onChangeText={handleChange('username')}
      onBlur={handleBlur('username')}
      value={values.username}
      error={errors.username}
      type="email-address"
    />
    <Input
      label={intl.formatMessage({ id: 'signIn_form_labelPassword' })}
      secureTextEntry
      onChangeText={handleChange('password')}
      onBlur={handleBlur('password')}
      value={values.password}
      error={errors.password}
    />
    <View style={styles.buttonsContainer}>
      <Button onPress={handleSubmit}>
        {intl.formatMessage({ id: 'signIn_form_button_accessMyAccount' })}
      </Button>
      <Button type="underlined">
        {intl.formatMessage({ id: 'signIn_form_button_forgotYourPassword' })}
      </Button>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  buttonsContainer: {
    marginTop: 10,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
})

const SignInFormik = withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),

  validationSchema: signInFormValidation,
  validateOnBlur: false,
  validateOnChange: false,

  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },

  displayName: 'signInForm',
})(SignInForm)

export default injectIntl(SignInFormik)

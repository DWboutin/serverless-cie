import React from 'react'
import { withFormik } from 'formik'
import { injectIntl } from 'react-intl'
import { StyleSheet, ScrollView, View, Text } from 'react-native'

import SwitchInput from '../_components/SwitchInput'
import DropdownInput, { DropdownInputItem } from '../_components/DropdownInput'
import Button from '../_components/Button'
import Input from '../_components/Input'

import myCompanyFormValidation from './MyCompanyForm/myCompanyFormValidation'

import { languages } from '../i18n'

const MyCompanyForm = ({
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
      <Text style={styles.activeSwitchTitle}>
        {intl.formatMessage({
          id: 'account_myAccountForm_settingsTitle',
        })}
      </Text>
      <View style={styles.activeSwitchContainer}>
        <SwitchInput
          value={values.activeForRoofing}
          label={intl.formatMessage({
            id: values.activeForRoofing
              ? 'account_myCompanyForm_labelActiveForRoofing'
              : 'account_myCompanyForm_labelInactiveForRoofing',
          })}
          onValueChange={value => setFieldValue('activeForRoofing', value)}
          style={{
            marginTop: 14,
            marginBottom: 14,
          }}
        />
      </View>
      <View style={styles.dropdownContainer}>
        <DropdownInput
          value={values.locale}
          label={intl.formatMessage({
            id: 'account_myAccountForm_labelLocale',
          })}
          onValueChange={value => setFieldValue('locale', value)}
          style={{
            marginTop: 14,
            marginBottom: 14,
          }}
        >
          {languages.map(({ value }) => (
            <DropdownInputItem
              value={value}
              label={intl.formatMessage({ id: `lang_${value}_complete` })}
              key={value}
            />
          ))}
        </DropdownInput>
        <Text style={styles.localeText}>
          (Non traduit) Les paramètres de langues servent à spécifier la langue
          des communications. La langue dans l'application correspond à la
          langue de votre téléhpne.
        </Text>
      </View>
    </View>
    <View style={styles.section}>
      <Text style={styles.activeSwitchTitle}>
        {intl.formatMessage({
          id: 'account_myCompanyForm_infosTitle',
        })}
      </Text>
      <Input
        label={intl.formatMessage({ id: 'account_myCompanyForm_labelName' })}
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
        error={errors.name}
      />
      <Input
        label={intl.formatMessage({
          id: 'account_myCompanyForm_labelCompanyEmail',
        })}
        onChangeText={handleChange('companyEmail')}
        onBlur={handleBlur('companyEmail')}
        value={values.companyEmail}
        error={errors.companyEmail}
      />
      <Input
        label={intl.formatMessage({
          id: 'account_myCompanyForm_labelCompanyPhone',
        })}
        onChangeText={handleChange('companyPhone')}
        onBlur={handleBlur('companyPhone')}
        value={values.companyPhone}
        error={errors.companyPhone}
        type="phone-pad"
      />
    </View>
    <View style={styles.buttonsContainer}>
      <Button onPress={handleSubmit}>
        {intl.formatMessage({ id: 'account_myCompanyForm_submitButton' })}
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
  activeSwitchContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeSwitchTitle: {
    fontFamily: 'styrene-a-medium',
    fontSize: 18,
    color: '#572d2d',
    marginTop: 21,
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

const MyCompanyFormik = withFormik({
  mapPropsToValues: props => ({
    name: props.name,
    companyEmail: props.email,
    companyPhone: props.phone,
    activeForRoofing: props.activeForRoofing,
    locale: props.intl.locale,
  }),

  validationSchema: myCompanyFormValidation,
  validateOnBlur: false,
  validateOnChange: false,

  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },

  displayName: 'myCompanyForm',
})(MyCompanyForm)

export default injectIntl(MyCompanyFormik)

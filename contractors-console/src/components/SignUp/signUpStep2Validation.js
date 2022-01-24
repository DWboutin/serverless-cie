import * as Yup from 'yup'

import regexp from '../../_helpers/regexp'

export default Yup.object().shape({
  companyName: Yup.string()
    .min(2, 'validationFieldMinLength2')
    .max(50, 'validationFieldMaxLength50')
    .required('validationFieldIsRequired'),
  companyAddressAuto: Yup.string().required('validationFieldIsRequired'),
  companyNumber: Yup.string().required('validationFieldIsRequired'),
  companyAddress: Yup.string()
    .min(2)
    .max(50)
    .required('validationFieldIsRequired'),
  companyCity: Yup.string()
    .min(2)
    .max(50)
    .required('validationFieldIsRequired'),
  companyPostalCode: Yup.string()
    .matches(regexp.postalCode, 'validationFieldPostalCode')
    .required('validationFieldIsRequired'),
  firstName: Yup.string()
    .min(2, 'validationFieldMinLength2')
    .max(50, 'validationFieldMaxLength50')
    .required('validationFieldIsRequired'),
  lastName: Yup.string()
    .min(2, 'validationFieldMinLength2')
    .max(50, 'validationFieldMaxLength50')
    .required('validationFieldIsRequired'),
  tel: Yup.string()
    .matches(regexp.phone, 'validationValidPhoneNumber')
    .required('validationFieldIsRequired'),
  username: Yup.string()
    .email('validationValidEmail')
    .required('validationFieldIsRequired'),
  password: Yup.string()
    .min(8, 'validationFieldMinLength8')
    .max(50, 'validationFieldMaxLength50')
    .matches(regexp.password, 'validationPassword')
    .required('validationFieldIsRequired'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'validationPasswordMustMatch')
    .required('validationFieldIsRequired'),
  rbq: Yup.string()
    .matches(regexp.rbq, 'validationRbq')
    .required('validationFieldIsRequired'),
  neq: Yup.string()
    .matches(regexp.neq, 'validationNeq')
    .required('validationFieldIsRequired'),
  conditions:  Yup.boolean().oneOf([true], 'validationFieldIsRequired'),
})

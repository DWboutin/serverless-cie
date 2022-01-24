import * as Yup from 'yup'

import regexp from '../../_helpers/regexp'

export default Yup.object().shape({
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
})

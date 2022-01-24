import * as Yup from 'yup'

import regexp from '../../_helpers/regexp'

export default Yup.object().shape({
  // username: Yup.string()
  //   .email('validationValidEmail')
  //   .required('validationFieldIsRequired'),
  oldPassword: Yup.string()
    .matches(regexp.password, 'validationPassword')
    .required('validationFieldIsRequired'),
  newPassword: Yup.string()
    .min(8, 'validationFieldMinLength8')
    .max(50, 'validationFieldMaxLength50')
    .matches(regexp.password, 'validationPassword')
    .required('validationFieldIsRequired'),
  newPasswordConfirmation: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'validationPasswordMustMatch')
    .required('validationFieldIsRequired'),
})

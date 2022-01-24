import * as Yup from 'yup'

import regexp from '../../_helpers/regexp'

export default Yup.object().shape({
  password: Yup.string()
    .min(8, 'validationFieldMinLength8')
    .max(50, 'validationFieldMaxLength50')
    .matches(regexp.password, 'validationPassword')
    .required('validationFieldIsRequired'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'validationPasswordMustMatch')
    .required('validationFieldIsRequired'),
})

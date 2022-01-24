import * as Yup from 'yup'

import regexp from '../../helpers/regexp'

export default Yup.object().shape({
  username: Yup.string()
    .email('validationValidEmail')
    .required('validationFieldIsRequired'),
  password: Yup.string()
    .min(8, 'validationFieldMinLength8')
    .max(50, 'validationFieldMaxLength50')
    .matches(regexp.password, 'validationPassword')
    .required('validationFieldIsRequired'),
})

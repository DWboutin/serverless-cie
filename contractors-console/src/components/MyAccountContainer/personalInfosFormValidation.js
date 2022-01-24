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
  phone: Yup.string()
    .matches(regexp.phone, 'validationValidPhoneNumber')
    .required('validationFieldIsRequired'),
})

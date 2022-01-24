import * as Yup from 'yup'

import regexp from '../../helpers/regexp'

export default Yup.object().shape({
  name: Yup.string().required('validationFieldIsRequired'),
  companyEmail: Yup.string()
    .email('validationValidEmail')
    .required('validationFieldIsRequired'),
  companyPhone: Yup.string()
    .matches(regexp.phone, 'validationValidPhoneNumber')
    .required('validationFieldIsRequired'),
})

import * as Yup from 'yup'

import regexp from '../../_helpers/regexp'

export default Yup.object().shape({
  username: Yup.string()
    .email('validationValidEmail')
    .required('validationFieldIsRequired'),
  code: Yup.string().required('validationFieldIsRequired'),
})

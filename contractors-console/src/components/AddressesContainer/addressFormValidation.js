import * as Yup from 'yup'

import regexp from '../../_helpers/regexp'

export default Yup.object().shape({
  addressAuto: Yup.string().required('validationFieldIsRequired'),
  addressRange: Yup.number().required('validationFieldIsRequired'),
})

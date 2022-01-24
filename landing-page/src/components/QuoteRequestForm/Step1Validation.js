import * as Yup from 'yup'

import regexp from '../../_helpers/regexp'

export default Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'minLength2')
    .max(50, 'maxLength50')
    .required('isRequired'),
  lastName: Yup.string()
    .min(2, 'minLength2')
    .max(50, 'maxLength50')
    .required('isRequired'),
  email: Yup.string()
    .email('mustBeValid')
    .required('isRequired'),
  tel: Yup.string()
    .matches(regexp.phone, 'mustBeValid')
    .required('isRequired'),
  jobType: Yup.string().required('isRequired'),
  jobTypeSpecific: Yup.string().required('isRequired'),
  jobInfo: Yup.string()
    .min(2, 'minLength2')
    .max(200, 'maxLength200'),
  contactAddressAuto: Yup.string().required('isRequired'),
  contactNumber: Yup.string().required('isRequired'),
  contactAddress: Yup.string()
    .min(2)
    .max(50)
    .required('isRequired'),
  contactCity: Yup.string()
    .min(2)
    .max(50)
    .required('isRequired'),
  contactPostalCode: Yup.string()
    .matches(regexp.postalCode, 'mustBeValid')
    .required('isRequired'),
  conditions:  Yup.boolean().oneOf([true], 'isRequired'),
})

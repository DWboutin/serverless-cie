import * as Yup from 'yup'

export default Yup.object().shape({
  'contact-method-email': Yup.boolean(),
  'contact-method-sms': Yup.boolean(),
  'contact-method-phone': Yup.boolean(),
  contactMethod: Yup.mixed().test('hasOneValue', 'mustChooseOne', function() {
    return (
      this.parent['contact-method-email'] === true ||
      this.parent['contact-method-sms'] === true ||
      this.parent['contact-method-phone'] === true
    )
  }),
  'contact-am': Yup.boolean(),
  'contact-pm': Yup.boolean(),
  'contact-evening': Yup.boolean(),
  contactPref: Yup.mixed().test('hasOneValue', 'mustChooseOne', function() {
    return (
      this.parent['contact-am'] === true ||
      this.parent['contact-pm'] === true ||
      this.parent['contact-evening'] === true
    )
  }),
})

export default {
  phone: /^([+][0-9]{1})?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  postalCode: /^([A-Z]\d[A-Z]\s?\d[A-Z]\d)$/i,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&[\]{}\-_|:;~"'`<>]).{8,}$/,
}

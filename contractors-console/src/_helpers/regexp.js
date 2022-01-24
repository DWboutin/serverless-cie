export default {
  phone: /^([+][0-9]{1})?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  postalCode: /^([A-Z]\d[A-Z]\s?\d[A-Z]\d)$/i,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&[\]{}\-_|:;~"'`<>])?.{8,}$/,
  rbq: /^([0-9]{4})-?([0-9]{4})-?([0-9]{2})?$/,
  neq: /^[0-9]{4}-?[0-9]{4}-?[0-9]{2}$/,
  tps: /^[0-9]{9}RT[0-9]{4}$/i,
  tvq: /^[0-9]{10}TQ[0-9]{4}$/i,
}

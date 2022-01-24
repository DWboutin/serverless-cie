import regexp from './regexp'

export default class PhoneNumberTransformer {
  static normalize(number) {
    return number.replace(regexp.rbq, '$1-$2-$3')
  }
}

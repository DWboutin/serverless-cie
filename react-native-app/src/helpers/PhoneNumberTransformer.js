import regexp from './regexp'

export default class PhoneNumberTransformer {
  static forAwsCognito(number) {
    const numberMatches = number.match(regexp.phone)
    return numberMatches[1] !== undefined
      ? number.replace(regexp.phone, '$1$2$3$4')
      : number.replace(regexp.phone, '+1$2$3$4')
  }
}

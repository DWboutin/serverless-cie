import { languages } from './locales'

export default url => {
  const langArray = languages.map(language => language.value)
  const langRegex = new RegExp(langArray.join('|'))
  let urlStripped = url.replace(langRegex, '')

  if (urlStripped.indexOf('//') === 0) {
    urlStripped = urlStripped.substr(1)
  }

  if (urlStripped.length > 1) {
    urlStripped = urlStripped.replace(/\/$/, '')
  }

  return urlStripped
}

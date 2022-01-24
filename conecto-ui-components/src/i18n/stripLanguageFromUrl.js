import { languages } from './locales'

export default url => {
  const langArray = languages.map(language => language.value)
  const langRegex = new RegExp('/' + langArray.join('/|/') + '/')

  return url.replace(langRegex, '')
}
